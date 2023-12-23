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



export const TrangMoHinh = () => {
    /*const foundationArr = foundation(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const bacthemgiua = BacThemGiuaRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const middleArr = middle(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const cauthangtrai = CauThangTraiRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const cauthangphai = CauThangPhaiRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const leftBuildingArr = leftBuilding(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const rightBuildingArr = rightBuilding(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const cauthanggiualang = CauThangRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const cotTruLangBac = CotTruLangRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const cauthanggiua = CauThangRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const MaiLangBac = MaiLangBacRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );
      const wallNextToStep = wallNextToStepRender(
        Map,
        SceneView,
        GeoJSONLayer,
        SceneLayer,
        GraphicsLayer,
        Graphic,
        request
      );*/
    const mapRef = useRef<HTMLDivElement>(null);
    const [view, setView] = useState<MapView | null>(null);
    const glResult1 = new GraphicsLayer({
      id: "glResult1",
    });
    const glResult2 = new GraphicsLayer({
      id: "glResult2",
    });
    useEffect(() => {
      const map = new Map({
        basemap :'topo-vector',
      })
      const view = new SceneView({
        container: "viewDiv",
        map : map,
        center: [105.83454927674805, 21.036947054908556, 500],
        /*camera:{
            center: [105.83454927674805, 21.036947054908556, 500],
            heading: 0,
            tilt: 0,
        }*/
      })
    }, []);
  
    return (
      <div ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>
    );
  };
  