/*import { foundation } from "./data/foundation/foundation.js";
import { centerBuilding } from "./data/centerBuilding/index.js";
import { rightBuilding } from "./data/rightBuilding/rightBuilding.js";
import { leftBuilding } from "./data/leftBuilding/leftBuilding.js";
import { CauThangRender } from "./data/CauthangGiuaLang/CauThangRender.js";
import { middle } from "./data/middle/middle.js";
import { CauThangTraiRender } from "./data/CauthangTrai/CauThangTraiRender.js";
import { CotTruLangRender } from "./data/CotLangBac/CotTruLangRender.js";
import { CauThangPhaiRender } from "./data/CauthangPhai/CauThangPhaiRender.js";
import { MaiLangBacRender } from "./data/MaiLangBac/roof.js";
import { wallNextToStepRender } from "./data/WallNextToStep/wallNextToStepRender.js"*/
import React, { useRef, useEffect, useState } from 'react';
//import "https://js.arcgis.com/4.24/esri/themes/light/main.css"
import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import WebMap from "@arcgis/core/WebMap.js";
import SceneView from "@arcgis/core/views/SceneView.js";
import GeoJSONLayer from "@arcgis/core/layers/GeoJSONLayer.js"
import SceneLayer from "@arcgis/core/layers/SceneLayer.js"
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer.js";
import Graphic from "@arcgis/core/Graphic.js";
import esriRequest from "@arcgis/core/request.js";
import Mesh from "@arcgis/core/geometry/Mesh.js";
import Point from "@arcgis/core/geometry/Point.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import Symbol from "@arcgis/core/symbols/Symbol.js";


const layerss = [];
export const TrangMoHinhTest = () => {
  //const mapRef = useRef<HTMLDivElement>(null);
  // const [view, setView] = useState<MapView | null>(null);
  /*const glResult1 = new GraphicsLayer({
    id: "glResult1",
  });
  const glResult2 = new GraphicsLayer({
    id: "glResult2",
  });*/
  
  const Gis = async () => {
    let bodyPolygonList;
    const fetchArray = [
      fetch('http://localhost:4000/bodypolygon/all')
    ];

    const [responseBodyPolygon] = await Promise.all(
      fetchArray
    );
    bodyPolygonList = await responseBodyPolygon.json();
    console.log (bodyPolygonList);

    var createGraphic = function (data) {
      return new Graphic({
        geometry: data,
        symbol: data.symbol,
        attributes: data,
        popupTemplate: data.popupTemplate,
      });
    };

    for (let bodyPolygon of bodyPolygonList) {
      const geojson = {
        type: 'FeatureCollection',
        feature: [
          {
            type: 'feature',
            properties: {
              name: bodyPolygon.name,
              height: bodyPolygon.height,
            },
            geometry: {
              type: 'Polygon',
              coordinates: [bodyPolygon.face.coordinates],
            },
            id: bodyPolygon._id,
          },
        ],
      };

      const blob = new Blob([JSON.stringify(geojson)], {
        type: 'application/json',
      });
      const url = URL.createObjectURL(blob);
      const layer = new GeoJSONLayer({
        url,
      });
      //const { height } = bodyPolygon;
      layer.renderer = {
        type: 'simple',
        symbol: {
          type: 'polygon-3d',
          symbolLayers: [
            {
              type: 'extrude',
              size: bodyPolygon.height,
              material: {
                color: bodyPolygon.color,
              },
            },
          ],
        },
      };
      layerss.push(layer);
    }
    //useEffect(() => {
      console.log (layerss);
      const map = new Map({
        basemap :'topo-vector',
        layerss,
      });

      const view = new SceneView({
        container: "viewDiv",
        //mapRef.current as HTMLDivElement,
        map : map, 
        camera:{
            position: {x: 105.83454927674805, y: 21.036947054908556, z: 500},
            heading: 0,
            tilt: 0,
        },
      });

      view.popup.defaultPopupTemplateEnabled = true;
    //}, []);
  }
  Gis();
  // useEffect(() => {
  //   console.log(layerss);
  //   const map = new Map({
  //     basemap: 'topo-vector',
  //     layerss,
  //   })
  //   const view = new SceneView({
  //     container: "viewDiv",
  //     //mapRef.current as HTMLDivElement,
  //     map: map,
  //     camera: {
  //       position: { x: 105.83454927674805, y: 21.036947054908556, z: 500 },
  //       heading: 0,
  //       tilt: 0,
  //     }
  //   })
  //view.popup.defaultPopupTemplateEnabled = true;
  // }, []);
  // useEffect (() => {
  //   const script = document.createElement('script');
  //   script.scr = "https://js.arcgis.com/4.24/";
  //   script.async = true;
  //   document.body.appendChild(script);
  // })
  useEffect(() => {
    const script = document.createElement('script');
  
    script.src = "https://js.arcgis.com/4.24/";
    script.async = true;
  
    document.body.appendChild(script);
  
    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <div id="viewDiv" style={{ height: "100vh", width: "100%" }}>
    </div>
  );
};
