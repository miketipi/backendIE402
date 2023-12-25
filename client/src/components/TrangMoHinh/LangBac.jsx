import { useState, useEffect } from "react";
import { loadModules } from "esri-loader";
import Graphic from "@arcgis/core/Graphic";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer";
import axios from "axios";
const LangBac = (props) => {
    const [graphic, setGraphic] = useState(null);
    let bodypolygonlist = [];
    async function fetchpolygon() {
        let a;
      const fetchbp = axios.get('https://localhost4000/bodypolygon/all')
      .then ((respond) => {
        a = respond.json();
      })
      bodypolygonlist = await a.json();
    }
    fetchpolygon();
    for (let bodyPolygon of bodypolygonlist) {
      const geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              name: bodyPolygon.name,
              height: bodyPolygon.height,
              width: bodyPolygon.width,
              color: bodyPolygon.color
            },
            geometry: {
              type: 'polygon',
              coordinates: [bodyPolygon.face.coordinates],
            },
            id: bodyPolygon._id,
          },
        ],
      };
  
      // create a new blob from geojson featurecollection
      const blob = new Blob([JSON.stringify(geojson)], {
        type: 'application/json',
      });
  
      // URL reference to the blob
      const url = URL.createObjectURL(blob);
      const layer = new GeoJSONLayer(blob);
      const { name, width, height, color} = bodyPolygon;
      layer.renderer = {
        type: 'simple',
        symbol: {
          type: 'polygon-3d',
          symbolLayers: [
            {
              type: bodyPolygon.type,
              ...(size && { size }),
              ...(width && { width }),
              ...(height && { height }),
              material: {
                color: bodyPolygon.color,
              },
            },
          ],
        },
      };
      const layers = [];
      layers.push(layer);
    var createGraphic = function (data) {
      return new Graphic({
        geometry: data,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate,
      });
    };
    useEffect(() => {
        loadModules(['esri/Graphic']).then(([Graphic]) => {

        })
    })
}
}