mapboxgl.accessToken =
      "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
map = new mapboxgl.Map({
  container: "map2",
  style: "mapbox://styles/mapbox/light-v10",
  center: [113.810, 22.6729],
  zoom: 9.2,
  pitch: 35,
});
function begin_mapbox()
{


$.getJSON("../my-analyse/data/sz_accessid.json", function (data, status) {
  console.log("是是不是成功读到数据" + status);
  if (status == "success") {
    jsondata = data;
    for (let k = 0; k < jsondata.features.length; k++) {
          
      jsondata.features[k].properties.access333 = jsondata.features[k].properties.access;
     
    }

    for (let k = 0; k < jsondata.features.length; k++) {
          
      jsondata.features[k].properties.access2 = jsondata.features[k].properties.access;
     
    }
    /*let maxValue = data.features.reduce((prev, cur) => {
        return prev.access < cur.access ? prev : cur
      }).properties.access

    let minValue = data.features.reduce((prev, cur) => {
        return prev.access > cur.access ? prev : cur
      }).properties.access;
    */

    maxValue = Math.max.apply(
      null,
      data.features.map(function (o) {
        return o.properties.access;
      })
    );
    minValue = Math.min.apply(
      null,
      data.features.map(function (o) {
        return o.properties.access;
      })
    );
    /*
      list = [ sec,third , forth,fifth,sixth,seventh,eigth,ninth ];
      list.sort(function(a, b) {
        return a - b;
    });
    */

    //在这里可以调用函数
    mapboxgl.accessToken =
      "pk.eyJ1Ijoia2luZ3NsZXktZ2lzIiwiYSI6ImNrd25maWpoODAwNzcydnBhYmt4YWQzamoifQ.aeqP3iKHqZAQrQdakDJYDQ";
    map = new mapboxgl.Map({
      container: "map2",
      style: "mapbox://styles/mapbox/light-v10",
      center: [113.810, 22.6729],
      zoom: 9.2,
      pitch: 35,
    });
    let hoveredStateId = null;

    map.on("load", () => {
      map.addSource("states", {
        type: "geojson",
        data: "../my-analyse/data/sz_accessid.json",
        //'data': 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson'
      });

      map.addSource("route", {
        type: "geojson",
        data: "../my-analyse/data/subwayid.json",
      });

      map.addSource("station", {
        type: "geojson",
        data: "../my-analyse/data/stationid_subway.json",
      });

      // The feature-state dependent fill-opacity expression will render the hover effect
      // when a feature's hover state is set to true.
      map.addLayer({
        id: "state-fills",
        type: "fill",
        source: "states",
        layout: {},
        paint: {
          "fill-color": [
            "interpolate",

            ["linear"],

            ["get", "access"],

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

      //road
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

      map.addLayer({
        id: "station_",
        type: "circle",
        source: "station",
        paint: {
          "circle-radius": 3.0,
          "circle-color": "#800040",
        },
      });
      //road inter

      //
      // When the user moves their mouse over the state-fill layer, we'll update the
      // feature state for the feature under the mouse.

      //road //
      const draw = new MapboxDraw({
        displayControlsDefault: false,
        // Select which mapbox-gl-draw control buttons to add to the map.
        controls: {
          line_string: true,
          trash: true,
        },
        // Set mapbox-gl-draw to draw by default.
        // The user does not have to click the polygon control button first.
        defaultMode: "simple_select",
      });
      map.addControl(draw);

      map.on("draw.create", updateArea);
      map.on("draw.delete", updateArea);
      map.on("draw.update", updateArea);

      //function add_line = document.getElementsByClassName("mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_line")[0].click
      c = document.getElementsByClassName(
        "mapbox-gl-draw_ctrl-draw-btn mapbox-gl-draw_line"
      )[0];

      function updateArea(e) {

        


        const data = draw.getAll();
        //add to my list
        all_obj.push(data);

        const answer = document.getElementById("test_area");
        if (data.features.length > 0) {
          const len = turf.length(data, { units: "kilometers" });
          // Restrict the area to 2 decimal points.
          const rounded_len = Math.round(len * 100) / 100;
          // sum_len = sum_len + rounded_len;
          answer.innerHTML = `<p><strong>${rounded_len} kilometers</strong></p>`;
        } else {
          answer.innerHTML = "";
          if (e.type !== "draw.delete")
            alert("Click the map to draw a polygon.");
        }

        data_l = data.features.length;
        point_list.push(data.features[data_l - 1].geometry.coordinates);

        var len = 0;
        for (var i = 0; i < point_list.length; i++) {
          len = len + point_list[i].length;
          // console.log(len);
        }
        // console.log(len)
        // document.getElementById("custom-point").innerHTML = document.getElementById("custom-point").innerHTML+len;
        document.getElementById("custom-point").innerHTML = len;
        document.getElementById("custom-edge").innerHTML =
          len - point_list.length;

        mulp = turf.multiPoint(data.features[counter].geometry.coordinates);
        counter = counter + 1;
        buf = turf.buffer(mulp, 5000, { units: "meters" });

        buffer_list.push(buf);

        grid_feature = jsondata.features;
        grid_feature_len = jsondata.features.length;
        buffer_list_len = buffer_list[0].geometry.coordinates.length;

        grid_feature_occu = jsondata.features;

        

        //////////////////////////

        for (let m = 0; m < buffer_list_len; m++) {
          let thisone = turf.polygon(buffer_list[0].geometry.coordinates[m]);
          console.log(thisone);

          for (let j = 0; j < grid_feature_len; j++) {
            if (
              turf.booleanContains(
                thisone,
                turf.point(grid_feature[j].geometry.coordinates[0][0][0])
              )
            ) {
              // console.log(grid_feature[j].properties.access);
              jsondata.features[j].properties.access2 =
                jsondata.features[j].properties.access - 5;
              // console.log("yes" + grid_feature[j].properties.groupname);
              // console.log("minus" + grid_feature[j].properties.access2);
              // console.log(grid_feature[j].properties.access);
            } else {
              // 若不在，则access2等于access1
              if (!jsondata.features[j].properties.access2) {
                jsondata.features[j].properties.access2 =
                  jsondata.features[j].properties.access;
              }
            }
          }

          for (let k = 0; k < grid_feature_len; k++) {
            grid_feature[k].properties.access =
              jsondata.features[k].properties.access2;
          }
        }
        buffer_list = [];

        // outputdata = jsondata
      }

      // When the user moves their mouse over the state-fill layer, we'll update the
      // feature state for the feature under the mouse.
      map.on("mousemove", "state-fills", (e) => {
        if (e.features.length > 0) {
          if (hoveredStateId !== null) {
            map.setFeatureState(
              { source: "states", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: true }
          );
        }
      });

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.on("mouseleave", "state-fills", () => {
        if (hoveredStateId !== null) {
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
      });

      //here
      popup2 = new mapboxgl.Popup({
        className: "apple-popup",
        offset: { bottom: [0, -5] },
        closeButton: false,
        closeOnClick: false,
      });
      popup3 = new mapboxgl.Popup({
        className: "apple-popup",
        offset: { bottom: [0, -5] },
        closeButton: false,
        closeOnClick: false,
      });

      f1 = function (e) {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              { source: "states", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: true },
            { color: "#fff" }
          );
        }
        pos = e.lngLat;

        
          popup2
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "社区名称:" +
              e.features[0].properties.groupname +
              "<br>" +
              "平均出行时间:" +
              e.features[0].properties.access
          )
          .setMaxWidth("300px")
          .addTo(map);
        

      };

      f2 = function (e) {
        if (e.features.length > 0) {
          if (hoveredStateId) {
            map.setFeatureState(
              { source: "states", id: hoveredStateId },
              { hover: false }
            );
          }
          hoveredStateId = e.features[0].id;
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: true },
            { color: "#fff" }
          );
        }
        pos = e.lngLat;
        popup2
          .setLngLat([pos.lng, pos.lat])
          .setHTML(
            "社区名称:" +
              e.features[0].properties.groupname +
              "<br>" +
              "平均出行时间:" +
              e.features[0].properties.access2
          )
          .setMaxWidth("300px")
          .addTo(map);
      };

      map.on("mousemove", "interfaceoverview", f1);
      //off

      // When the mouse leaves the state-fill layer, update the feature state of the
      // previously hovered feature.
      map.on("mouseleave", "interfaceoverview", function () {
        if (hoveredStateId) {
          map.setFeatureState(
            { source: "states", id: hoveredStateId },
            { hover: false }
          );
        }
        hoveredStateId = null;
        popup2.remove();
      });
      //end


    });

    //这里结束
    return jsondata;
  } else {
    return false;
  }
});
}