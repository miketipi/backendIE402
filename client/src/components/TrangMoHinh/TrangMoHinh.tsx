import React from react;
import MapView from "@arcgis/core/views/MapView";
import Map from "@arcgis/core/Map";

const TrangMoHinh = () => {

  const mapDiv = useRef(null);

  useEffect(() => {
    if (mapDiv.current) {
      /**
       * Initialize application
       */
      const webmap = new Map({
        basemap: "dark-gray-vector"
      });

      const view = new MapView({
        container: mapDiv.current,
        map: webmap, 
        center: [105.83454927674805, 21.036947054908556, 500],
        scale: 10000000 
      });

      return () => view && view.destroy()

    }
  }, []);

  return <div className="mapDiv" ref={mapDiv} style={{height: '100vh', width: "100%"}}></div>;
}

export default TrangMoHinh;