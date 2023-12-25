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
import axios from "axios";
let bodypolygonlist = [];
const layerss = [];
export const MoHinh = () => {
    // async function fetchpolygon() {
    //     let a;
    //   const fetchbp = axios.get('http://localhost:4000/bodypolygon/all')
    //   .then ((respond) => {
    //     a = await respond.json();
    //   })
    //   bodypolygonlist = await a.json();
    // }
    async function fetchpolygon() {
        let a;
        try {
          // Sử dụng await để chờ cho đến khi axios hoàn thành
          const response = await axios.get('http://localhost:4000/bodypolygon/all');
          // Sử dụng phương thức json() để phân tích cú pháp dữ liệu JSON từ phản hồi
          a = await response.json();
          // Trả về giá trị của a
          return a;
        } catch (error) {
          // Xử lý lỗi nếu có
          console.error(error);
        }
      }
    bodypolygonlist = fetchpolygon();
    console.log(bodypolygonlist);
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
      console.log(geojson);
      // create a new blob from geojson featurecollection
      const blob = new Blob([JSON.stringify(geojson)], {
        type: 'application/json',
      });
  
      // URL reference to the blob
      const url = URL.createObjectURL(blob);
      const layer = new GeoJSONLayer(url);
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
      layerss.push(layer);
      console.log(layerss);
    }
    // useEffect(() => {
    // const layerss = [];
    // fetchpolygon();
    // for (let bodyPolygon of bodypolygonlist) {
    //   const geojson = {
    //     type: 'FeatureCollection',
    //     features: [
    //       {
    //         type: 'Feature',
    //         properties: {
    //           name: bodyPolygon.name,
    //           height: bodyPolygon.height,
    //           width: bodyPolygon.width,
    //           color: bodyPolygon.color
    //         },
    //         geometry: {
    //           type: 'polygon',
    //           coordinates: [bodyPolygon.face.coordinates],
    //         },
    //         id: bodyPolygon._id,
    //       },
    //     ],
    //   };
    //   // create a new blob from geojson featurecollection
    //   const blob = new Blob([JSON.stringify(geojson)], {
    //     type: 'application/json',
    //   });
  
    //   // URL reference to the blob
    //   const url = URL.createObjectURL(blob);
    //   const layer = new GeoJSONLayer(url);
    //   const { name, width, height, color} = bodyPolygon;
    //   layer.renderer = {
    //     type: 'simple',
    //     symbol: {
    //       type: 'polygon-3d',
    //       symbolLayers: [
    //         {
    //           type: bodyPolygon.type,
    //           ...(size && { size }),
    //           ...(width && { width }),
    //           ...(height && { height }),
    //           material: {
    //             color: bodyPolygon.color,
    //           },
    //         },
    //       ],
    //     },
    //   };
    //   layerss.push(layer);
    //   console.log(layerss);
    // }}, ([]));
    // useEffect(() => {
    //     loadModules(['esri/Graphic']).then(([Graphic]) => {

    //     })
    // })

    // const mapRef = useRef()
    // const glResult1 = new GraphicsLayer({
    //   id: "glResult1",
    // });
    // const glResult2 = new GraphicsLayer({
    //   id: "glResult2",
    // });
    useEffect(() => {
      const map = new Map({
        basemap :'topo-vector',
        layerss
      });
      const view = new SceneView({
        container: 'viewDiv',
        map : map,
        //center: [105.83454927674805, 21.036947054908556],
        camera:{
            position: {x: 105.83454927674805, y: 21.036947054908556, z: 500},
            heading: 0,
            tilt: 0,
        }
      });
      view.popup.defaultPopupTemplateEnabled = true;
    }, [layerss]);
  
    return (
      <div id='viewDiv' style={{ height: "100vh", width: "100%" }}></div>
    );
};
