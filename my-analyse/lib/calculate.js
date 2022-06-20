function calculate2() {

  map.removeLayer("state-fills");

  map.removeLayer("interfaceoverview");

  map.removeSource("states");

  map.removeLayer("route");

  map.addSource("states", {
    type: "geojson",
    data: jsondata,
    //'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
  });

  map.addLayer({
    id: "state-fills",
    type: "fill",
    source: "states",
    layout: {},
    paint: {
      "fill-color": [
        "interpolate",

        ["linear"],

        ["get", "access2"],

        minValue,
        "#f1eef6",

        minValue * 0.8 + maxValue * 0.2,
        "#d7b5d8",

        minValue * 0.7 + maxValue * 0.3,
        "#df65b0",

        minValue * 0.5 + maxValue * 0.5,
        "#dd1c77",

        maxValue,
        "#980043",
      ],
      "fill-opacity": 0.8,
    },
  });

  map.addLayer({
    id: "interfaceoverview",
    type: "fill",
    source: "states",
    layout: {},
    paint: {
      "fill-color": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        "#FFDD64",
        "#123",
      ],
      "fill-opacity": [
        "case",
        ["boolean", ["feature-state", "hover"], false],
        1,
        0,
      ],
    },
  });

  map.addLayer({
    id: "route",
    type: "line",
    source: "route",
    layout: {
      "line-join": "round",
      "line-cap": "round",
    },
    paint: {
      "line-color": "#0868ac",
      "line-width": 3,
    },
  });

  map.off("mousemove", "interfaceoverview", f1);
  
  map.on("mousemove", "interfaceoverview", f2);

origin()
}
