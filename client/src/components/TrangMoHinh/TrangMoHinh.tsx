import React, { useEffect, useRef } from 'react';
import EsriMap from "@arcgis/core/Map";
import SceneView from "@arcgis/core/views/SceneView";
const TrangMoHinh : React.FC = () => {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mapRef.current) {
      const map = new EsriMap({
        basemap: "satellite",
        ground: "world-elevation"
      });

      new SceneView({
        container: mapRef.current,
        map: map,
        camera: {
          position: {
            x: -118.80800,
            y: 33.96100,
            z: 2000
          },
          tilt: 75
        }
      });
    }
  }, []);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
};

export default TrangMoHinh;