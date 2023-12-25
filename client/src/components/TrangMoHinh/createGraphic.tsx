// Import các module cần thiết
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

// Tạo một component React
const CreateGraphic: React.FC<{ data: any }> = ({ data }) => {
  // Tạo một graphic mới
  const graphic = new Graphic({
    geometry: data,
    symbol: data.symbol,
    attributes: data,
    popupTemplate: data.popupTemplate,
  });

  // Trả về component
  return (
    <div>
      {/* Render graphic ở đây */}
    </div>
  );
};
