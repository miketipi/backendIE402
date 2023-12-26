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
import { loadCss } from 'esri-loader';
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
import { loadModules } from 'esri-loader';
// import   './MoHinh.module.css';
let bodypolygonlist = [];
const layerss = [];
loadCss('https://js.arcgis.com/4.24/esri/themes/light/main.css');
export const MoHinh = () => {
  // async function fetchpolygon() {
  //     let a;
  //   const fetchbp = axios.get('http://localhost:4000/bodypolygon/all')
  //   .then ((respond) => {
  //     a = await respond.json();
  //   })
  //   bodypolygonlist = await a.json();
  // }
//   async function fetchBodyPolygon() {
//     const response = await fetch('http://localhost:4000/bodypolygon/all');
//     const data = await response.json();
//     return data;
// }
// let bodyPolygonList;
  //   const fetchArray = [
  //     fetch('http://localhost:4000/bodypolygon/all'),
  //   ];
  //   const [responseBodyPolygon] = await Promise.all(
  //     fetchArray
  //   );
  //   bodyPolygonList = await responseBodyPolygon.json();

  // async function fetchpolygon() {
  //   var createGraphic = function (data) {
  //     return new Graphic({
  //       geometry: data,
  //       symbol: data.symbol,
  //       attributes: data,
  //       popupTemplate: data.popupTemplate,
  //     });
  //   };
  //   let bodyPolygonList;
  //   const fetchArray = [
  //     fetch('http://localhost:4000/bodypolygon/all'),
  //   ];
  //   const [responseBodyPolygon] = await Promise.all(
  //     fetchArray
  //   );
  //   bodyPolygonList = await responseBodyPolygon.json();
  //   console.log(bodypolygonlist);
  //   for (let bodyPolygon of bodyPolygonList) {
  //     const geojson = {
  //       type: 'FeatureCollection',
  //       features: [
  //         {
  //           type: 'Feature',
  //           properties: {
  //             name: bodyPolygon.name,
  //             height: bodyPolygon.height,
  //           },
  //           geometry: {
  //             type: 'Polygon',
  //             coordinates: [bodyPolygon.face.coordinates],
  //           },
  //           id: bodyPolygon._id,
  //         },
  //       ],
  //     };
  //     console.log(geojson);
  //     // create a new blob from geojson featurecollection
  //     const blob = new Blob([JSON.stringify(geojson)], {
  //       type: 'application/json',
  //     });

  //     // URL reference to the blob
  //     const url = URL.createObjectURL(blob);
  //     const layer = new GeoJSONLayer({ url, });
  //     layer.renderer = {
  //       type: 'simple',
  //       symbol: {
  //         type: 'polygon-3d',
  //         symbolLayers: [
  //           {
  //             type: "extrude",
  //             size: bodyPolygon.height,
  //             material: {
  //               color: bodyPolygon.color,
  //             },
  //           },
  //         ],
  //       },
  //     };
  //     layerss.push(layer);
  //     console.log(layerss);
  //   }}
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
    async function Gis() {
      let bodyLineList;
      let bodyPolygonList;
      const fetchArray = [
          fetch('http://localhost:4000/bodypolygon/all'),
      ];
      const [responseBodyPolygon] = await Promise.all(
          fetchArray
      );
      bodyPolygonList = await responseBodyPolygon.json();

      loadModules([
          'esri/Map',
          'esri/views/SceneView',
          'esri/layers/GeoJSONLayer',
          'esri/layers/SceneLayer',
          'esri/layers/GraphicsLayer',
          'esri/Graphic',
          'esri/request',
          'esri/geometry/Circle',
      ]).then (([
          Map,
          SceneView,
          GeoJSONLayer,
          SceneLayer,
          GraphicsLayer,
          Graphic,
          esriRequest,
          Circle
      ]) => {
          var createGraphic = function (data) {
              return new Graphic({
                  geometry: data,
                  symbol: data.symbol,
                  attributes: data,
                  popupTemplate: data.popupTemplate,
              });
          };

          const layers = [

          ];

          for (let bodyPolygon of bodyPolygonList) {
            let geojson;
            if (!bodyPolygon.face_2) {
                geojson = {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
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
                // console.log(geojson);
            } else {
                geojson = {
                    type: 'FeatureCollection',
                    features: [
                        {
                            type: 'Feature',
                            properties: {
                                name: bodyPolygon.name,
                                height: bodyPolygon.height,
                            },
                            geometry: {
                                type: 'Polygon',
                                coordinates: [bodyPolygon.face.coordinates , bodyPolygon.face_2.coordinates],
                            },
                            id: bodyPolygon._id,
                        },
                    ],
                };
                 console.log(geojson);
            }

              // create a new blob from geojson featurecollection
              const blob = new Blob([JSON.stringify(geojson)], {
                  type: 'application/json',
              });

              // URL reference to the blob
              const url = URL.createObjectURL(blob);
              // create new geojson layer using the blob url
              const layer = new GeoJSONLayer({
                  url,
              });
              layer.renderer = {
                  type: 'simple',
                  symbol: {
                      type: 'polygon-3d',
                      symbolLayers: [
                          {
                              type: "extrude",
                              size: bodyPolygon.height,
                              material: {
                                  color: bodyPolygon.color,
                              },
                          },
                      ],
                  },
              };
              layers.push(layer);
          }
          const map = new Map({
              basemap: 'topo-vector',
              // ground: "world-elevation",
              //  center :

              layers,
          });

          const view = new SceneView({
              container: 'viewDiv',
              map: map,
              camera: {
                  position: [105.83454927674805, 21.036947054908556, 500],
                  heading: 0,
                  tilt: 0,
              },
          });

          view.popup.defaultPopupTemplateEnabled = true;
      });
  }
  Gis();
}, [])
    // useEffect(() => {
    //   const map = new Map({
    //     basemap: 'topo-vector',
    //     layerss
    //   });
    //   const view = new SceneView({
    //     container: 'viewDiv',
    //     map: map,
    //     //center: [105.83454927674805, 21.036947054908556],
    //     camera: {
    //       position: { x: 105.83454927674805, y: 21.036947054908556, z: 500 },
    //       heading: 0,
    //       tilt: 0,
    //     }
    //   });
    //   view.popup.defaultPopupTemplateEnabled = true;
    // }, [layerss]);
    // fetchpolygon();
    return (
        <div id='viewDiv' style={{  height: "100vh", width: "100%" }}></div>
    );
  };
