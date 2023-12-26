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
import Point from "@arcgis/core/geometry/Point.js";
import LayerList from "@arcgis/core/widgets/LayerList.js";
import axios from "axios";
import { loadModules } from 'esri-loader';
import Mesh from '@arcgis/core/geometry/Mesh';
// import   './MoHinh.module.css';
let bodypolygonlist = [];
const layerss = [];
loadCss('https://js.arcgis.com/4.24/esri/themes/light/main.css');
export const MoHinh = () => {
    useEffect(() => {
        async function Gis() {
            let bodyPolygonList;
            const fetchArray = [
                fetch('http://localhost:4000/bodypolygon/all'),
            ];
            const [responseBodyPolygon] = await Promise.all(
                fetchArray
            );
            bodyPolygonList = await responseBodyPolygon.json();

            loadModules([
                "esri/Map",
                "esri/views/SceneView",
                "esri/layers/GeoJSONLayer",
                "esri/layers/SceneLayer",
                "esri/layers/GraphicsLayer",
                "esri/Graphic",
                "esri/request",
                "esri/geometry/Mesh",
                "esri/geometry/Point"
            ]).then(([
                Map,
                SceneView,
                GeoJSONLayer,
                SceneLayer,
                GraphicsLayer,
                Graphic,
                esriRequest,
                Mesh,
                Point
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
                                        coordinates: [bodyPolygon.face.coordinates, bodyPolygon.face_2.coordinates],
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
                const cotco1 = new Point({
                    x: 105.835036769,
                    y: 21.036665335,
                    z: 0
                });
                Mesh.createFromGLTF(cotco1, "./model/FlagVN.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(1, { origin: cotco1 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 115);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 1000
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
                const cay1 = new Point({
                    x: 105.834828,
                    y: 21.036635,
                    z: 0.4
                });
    
                Mesh.createFromGLTF(cay1, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay1 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 1000
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay2 = new Point({
                    x: 105.834856,
                    y: 21.036758,
                    z: 0.4
                });
    
                Mesh.createFromGLTF(cay2, "/model/short_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay2 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
                const cay3 = new Point({
                    x: 105.834835,
                    y: 21.036658,
                    z: 0.4
                });
    
                Mesh.createFromGLTF(cay3, "./model/short_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay3 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
                const cay5 = new Point({
                    x: 105.834864,
                    y: 21.036561,
                    z: 0
                });
    
                Mesh.createFromGLTF(cay5, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay5 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay6 = new Point({
                    x: 105.834856,
                    y: 21.036523,
                    z: 0
                });
    
                Mesh.createFromGLTF(cay6, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay6 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay7 = new Point({
                    x: 105.834848,
                    y: 21.036482,
                    z: 0
                });
    
                Mesh.createFromGLTF(cay7, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay7 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay8 = new Point({
                    x: 105.834922,
                    y: 21.036834,
                    z: 0
                });
    
                Mesh.createFromGLTF(cay8, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay8 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay9 = new Point({
                    x: 105.834931,
                    y: 21.036872,
                    z: 0
                });
    
                Mesh.createFromGLTF(cay9, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay9 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay10 = new Point({
                    x: 105.834938,
                    y: 21.036910,
                    z: 0
                });
    
                Mesh.createFromGLTF(cay10, "./model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay10 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
    
                const cay4 = new Point({
                    x: 105.834859,
                    y: 21.036782,
                    z: 0.4
                });
    
                Mesh.createFromGLTF(cay4, "/model/small_tree.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(0.2, { origin: cay4 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 80);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 0.05
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
                const banner1 = new Point({
                    x: 105.834682899,
                    y: 21.036271485,
                    z: 4
                });
    
                Mesh.createFromGLTF(banner1, "/model/banner.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(2.42, { origin: banner1 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 79);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 9
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
                const banner2 = new Point({
                    x: 105.83485870674134,
                    y: 21.037136118091787,
                    z: 4
                });
    
                Mesh.createFromGLTF(banner2, "/model/banner3.glb")
                    .then(function (geometry) {
                        // increase it a factor of 3
                        geometry.scale(2.25, { origin: banner2 });
                        // rotate it by 90 degrees around the z axis
    
                        geometry.rotate(0, 0, 79);
                        // add it to a graphic
                        const graphic = new Graphic({
                            geometry,
                            symbol: {
                                type: "mesh-3d", // autocasts as new MeshSymbol3D()
                                symbolLayers: [{
                                    type: "fill", // autocasts as new FillSymbol3DLayer()
                                    material: {
    
                                    },
                                    size: 9
                                }]
                            }
                        });
    
                        view.graphics.add(graphic);
                    })
                    .catch(console.error);
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
        <div id='viewDiv' style={{ height: "100vh", width: "100%" }}></div>
    );
};
