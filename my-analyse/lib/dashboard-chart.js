myChart_main = echarts.init(document.getElementById("map2"));
myChart2 = echarts.init(document.getElementById("container2"));

myChart3 = echarts.init(document.getElementById("container3"));
myChart4 = echarts.init(document.getElementById("container4"));
myChart5 = echarts.init(document.getElementById("container5"));

myChart_main.showLoading();
ROOT_PATH = "D:/Kingsley/前端/copy2/final/client/my-analyse/data2/"
$.getJSON("./lib/metro.json", function (metrostop) {
  $.getJSON("./lib/metroline_copy.json", function (metroline) {
    $.getJSON("./lib/styleJson_light.json", function (styleJson) {
      var option = {
        bmap: {
          center: [113.93977798039879, 22.54321476228969],
          zoom: 14,
          roam: true,
          mapStyle: {
            styleJson: styleJson,
          },
        },
        title: {
          text: "深圳市市轨道1号线站点综合评价系统",
          top: "1%",
          left: "1%",
          textStyle: {
            color: "#000",
            fontSize: 30,
          },
        },
        grid: [
          {
            right: 150,
            height: "44%",
            width: "300px",
          },
        ],
        tooltip: {},
        legend: { bottom: "2%", left: "20%", itemHeight: 30 },
        series: [
          {
            name:"地铁线路",
            type: "lines",
            coordinateSystem: "bmap",
            polyline: true,
            data: metroline,
            silent: false,
            lineStyle: {
              // color: '#c23531',
              // color: 'rgb(200, 35, 45)',
              width: 5,
            },
            progressiveThreshold: 500,
            progressive: 200,
          },
          {
            name: "已录入数据",
            type: "scatter",
            coordinateSystem: "bmap",
            data: metrostop[0],
            label: {
              show: true,
              position: "right",
              fontSize: 18,
              formatter: function (para) {
                return para.name;
              },
            },
            symbolSize: 30,
          },
          {
            name: "未录入数据",
            type: "scatter",
            coordinateSystem: "bmap",
            data: metrostop[1],
            label: {
              show: true,
              position: "right",
              fontSize: 12,
              formatter: function (para) {
                return para.name;
              },
            },
            symbolSize: 25,
          },
          {
            name: "未通车",
            type: "scatter",
            coordinateSystem: "bmap",
            label: {
              show: true,
              position: "right",
              fontSize: 15,
              formatter: function (para) {
                return para.name;
              },
            },
            data: metrostop[2],
            symbolSize: 30,
          },
        ],
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart_main.setOption(option, true);

      myChart_main.hideLoading();

      function click1(para) {
        console.log(para)
        if ((para["seriesIndex"] <= 4) & (para["seriesIndex"] >= 1)) {
          var station = para["name"];
          for (var j = 0; j < 2; j++) {
            for (var i = 0; i < metrostop[j].length; i++) {
              if (metrostop[j][i]["name"] == station) {
                var stationscatter = metrostop[j][i];
              }
            }
          }
          var option1 = {
            series: [
              {},
              {},
              {},
              {},
              {
                type: "effectScatter",
                coordinateSystem: "bmap",
                data: [stationscatter],
                symbolSize: 30,
                label: {
                  show: true,
                  position: "right",
                  color: "red",
                  fontSize: 20,
                  formatter: function (para) {
                    return para.name;
                  },
                },
              },
            ],
          };
          myChart_main.setOption(option1);
          setstationdata(station);
        }
      }
      click1({ seriesIndex: 1, seriesType: "scatter", name: "深大站" });
      myChart_main.on("click", click1);
      myChart_main.on('click', function (params) {
        console.log(params)
      })
    });
  });
});

function setstationdata(station) {
  the_graph = {
    "深大站":link1,
    "華強北站":link2,
    "高新园站":link3,
    "購物公園站":link4,
    "香蜜站":link5,
    "蛇口港站":link6,
    "世界之窗站":link7,
    "寶安中心站":link8
  }
  if (the_graph[station]){
    option = {series:[{links:the_graph[station]}]}
    my_sangji.setOption(option);
  }

  //人口热力
  $.getJSON("./lib/pop.json", function (population) {
    for (var i = 0; i < population[5].length; i++) {
      if (population[5][i]["name"] == station) {
        population[5][i]["itemStyle"] = {
          borderColor: "black",
          borderWidth: 2,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        };
        population[6][i]["itemStyle"] = {
          borderColor: "black",
          borderWidth: 2,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        };
      }
    }
    var option2 = {
      title: [
        {
          text: station,
          left: "5%",
          textStyle: { fontSize: 30 },
          top: "2%",
        },
        {
          text: "周边人口（内：居住，外：就业）",
          left: "75%",
          textAlign: "center",
          top: "2%",
        },
        {
          text: "职住人口比例",
          left: "25%",
          textAlign: "center",
          top: "9%",
        },
        {
          text: "人流量时变",
          left: "25%",
          textAlign: "center",
          top: "43%",
        },
        {
          text: "高峰小时人流量",
          left: "75%",
          textAlign: "center",
          top: "45%",
        },
      ],
      tooltip: {},
      grid: [
        {

          left: "8%",
          top: "48%",
          width: "42%",
          height: "38%",
        },
        {

          left: "60%",
          top: "48%",
          width: "38%",
          height: "38%",
        },
      ],
      xAxis: [
        {
          name: "小时",
          type: "category",
          gridIndex: 0,
          data: [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
            19, 20, 21, 22, 23,
          ],
        },
        {
          name: "人",
          min: 0,
          max: 11000,
          gridIndex: 1,
        },
      ],
      yAxis: [
        {
          name: "人",
          min: 0,
          max: 11000,
          gridIndex: 0,
        },
        {
          inverse: true,
          type: "category",
          gridIndex: 1,
          data: [
            "世界之窗",
            "深大",
            "香蜜湖",
            "蛇口港",
            "購物公園",
            "寶安中心",
            "高新园",
            "香蜜站",
            "華強北",
          ],
        },
      ],
      legend: [
        {
          top: "49%",
          left: "30%",
          data: ["工作日", "非工作日"],
        },
        {
          top: "49%",
          left: "80%",
          data: ["早高峰", "晚高峰"],
        },
      ],
      series: [
        {
          type: "pie",
          left: "50%",
          top: "0%",
          height: "50%",
          radius: ["45%", "55%"],
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 1,
          },
          label: {
            formatter: "{b|{b}：} \n{hr|}\n {per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                align: "center",
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: population[0][station],
          name: "地铁不同范围圈内居住人口",
        },
        {
          type: "pie",
          left: "50%",
          top: "0%",
          height: "50%",
          radius: "40%",
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 1,
          },
          label: {
            position: "inner",
            formatter: " {per|{d}%}  ",
            rich: {
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: population[1][station],
          name: "地铁不同范围圈内就业人口",
        },
        {
          type: "pie",
          right: "50%",
          top: "0%",
          height: "50%",
          radius: "35%",
          itemStyle: {
            borderRadius: 10,
            borderColor: "#fff",
            borderWidth: 1,
          },
          label: {
            formatter: "{b|{b}：} \n{hr|}\n {c}人{per|{d}%}  ",
            backgroundColor: "#F6F8FC",
            borderColor: "#8C8D8E",
            borderWidth: 1,
            borderRadius: 4,
            rich: {
              hr: {
                borderColor: "#8C8D8E",
                width: "100%",
                borderWidth: 1,
                height: 0,
              },
              b: {
                align: "center",
                color: "#4C5058",
                fontSize: 14,
                fontWeight: "bold",
                lineHeight: 33,
              },
              per: {
                color: "#fff",
                backgroundColor: "#4C5058",
                padding: [3, 4],
                borderRadius: 4,
              },
            },
          },
          data: population[2][station],
          name: "居住工作人口比例",
        },
        {
          name: "工作日",
          type: "line",
          data: population[3][station],
        },
        {
          name: "非工作日",
          type: "line",
          data: population[4][station],
        },
        {
          name: "早高峰",
          type: "bar",
          data: population[5],
          barGap: "0%",
          barCategoryGap: "10%",
          xAxisIndex: 1,
          yAxisIndex: 1,
        },
        {
          name: "晚高峰",
          type: "bar",
          data: population[6],
          xAxisIndex: 1,
          yAxisIndex: 1,
        },
      ],
    };
    myChart2.setOption(option2);

  });
  //土地开发利用
  $.getJSON("./lib/wordcloud_copy.json", function (wordcloud) {
    for (var i = 0; i < wordcloud[5].length; i++) {
      if (wordcloud[5][i]["name"] == station) {
        wordcloud[3][i]["itemStyle"] = {
          borderColor: "black",
          borderWidth: 2,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        };
        wordcloud[4][i]["itemStyle"] = {
          borderColor: "black",
          borderWidth: 2,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        };
        wordcloud[5][i]["itemStyle"] = {
          borderColor: "black",
          borderWidth: 2,
          shadowColor: "rgba(0, 0, 0, 0.5)",
          shadowBlur: 10,
        };
      }
    }
    var option3 = {
      tooltip: {},
      title: [
        {
          text: "周边用地词云图",
          left: "75%",
          textAlign: "center",
          top: "2%",
        },
        {
          text: "生活圈罗盘图",
          left: "25%",
          textAlign: "center",
          top: "2%",
        },
        {
          text: "周边POI分布",
          left: "25%",
          textAlign: "center",
          top: "47%",
        },
        {
          text: "房价分布区位",
          left: "75%",
          textAlign: "center",
          top: "48%",
        },
      ],
      radar: {
        center: ["25%", "25%"],
        radius: "37.5%",
        indicator: [
          { text: "衣", max: 5 },
          { text: "食", max: 5 },
          { text: "住", max: 5 },
          { text: "行", max: 5 },
          { text: "娱", max: 5 },
          { text: "教", max: 5 },
          { text: "医", max: 5 },
          { text: "养", max: 5 },
        ],
        name: {
          textStyle: {
            fontSize: 15,
            color: "#000",
          },
        },
        shape: "circle",
        //splitArea: { areaStyle: { color: 'red' } }//底面的面
        //axisLine: { lineStyle: { color: 'red' } }//底面的轴
        //splitLine: { lineStyle: { color: 'red' } }//底面的分隔线
      },
      grid: [
        {
          left: "65%",
          top: "53%",
          width: "38%",
          height: "33%",
        },
      ],
      xAxis: [
        {
          name: "元/平方米",
          min: 0,
          max: 50000,
          gridIndex: 0,
        },
      ],
      yAxis: [
        {
          inverse: true,
          type: "category",
          gridIndex: 0,
          data: [
            "世界之窗站",
            "深大站",
            "香蜜湖站",
            "蛇口港站",
            "購物公園站",
            "寶安中心站",
            "高新园站",
            "香蜜站",
            "華強北站",
            
          ],
        },
      ],
      legend: [
        {
          top: "75%",
          left: "85%",
          data: ["3km平均房价", "5km平均房价", "10km平均房价"],
        },
      ],
      series: [
        {
          type: "wordCloud",
          shape: "circle",
          rotationRange: [20, 20],
          rotationStep: 45,
          left: "40%",
          top: "0%",
          height: "50%",
          data: wordcloud[0][station],
          sizeRange: [20, 60],
          textStyle: {},
        },
        {
          name: "生活圈罗盘",
          type: "radar",
          label: { show: true },
          data: [{ value: wordcloud[1][station] }],
          areaStyle: {},
        },
        {
          name: "周边POI",
          type: "pie",
          center: ["30%", "65%"],
          radius: "25.5%",
          label: {
            show: true,
            alignTo: "labelLine",
            formatter: "{name|{b}}\n{value|{c}}",
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 15,
            rich: {
              value: {
                fontSize: 10,
                color: "#999",
              },
            },
          },
          data: wordcloud[2][station],
          areaStyle: {},
        },
        {
          name: "3km平均房价",
          type: "bar",
          data: wordcloud[3],
          barGap: "0%",
          barCategoryGap: "10%",
        },
        {
          name: "5km平均房价",
          type: "bar",
          data: wordcloud[4],
        },
        {
          name: "10km平均房价",
          type: "bar",
          data: wordcloud[5],
        },
      ],
    };
    myChart3.setOption(option3);
    //人口热力
    try {
      if (
        (myChart.getOption().series[5]["data"].length > 0) &
        (myChart.getOption().series[5]["type"] == "lines")
      ) {
        iso();
      }
    } catch {}
    //等时圈面积

    $.getJSON("./lib/isoarea_copy.json", function (isoarea) {
      var s = [];
      for (x in isoarea) {
        s1 = {
          name: x,
          type: "bar",
          data: isoarea[x],
          barGap: "0%",
          barCategoryGap: "10%",
        };
        if (x == station) {
          s1["itemStyle"] = {
            borderColor: "black",
            borderWidth: 1,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowBlur: 10,
          };
        } else {
          s1["itemStyle"] = { borderWidth: 0, shadowBlur: 0 };
        }
        s.push(s1);
      }

      xs = [];
      for (var r = 0; r < isoarea[x].length; r++) {
        xs.push(isoarea[x][r].name);
      }

      var option4 = {
        title: [
          {
            text: "等时圈面积（平方千米）",
            left: "45%",
            top: "12%",
          },
        ],
        grid: [
          {
            left: "20%",
            top: "15%",
            width: "60%",
            height: "38%",
          },
        ],
        tooltip: {},
        xAxis: [
          {
            name: "平方千米",
            min: 0,
            max: 300,
            gridIndex: 0,
          },
        ],
        legend: { top: "55%" },
        yAxis: [
          {
            inverse: true,
            type: "category",
            gridIndex: 0,
            data: xs,
          },
        ],
        series: s,
      };
      myChart4.setOption(option4);
    });
    //等时圈面积
    $.getJSON("./lib/green_copy.json", function (green) {
      for (var i = 0; i < green[2].length; i++) {
        if (green[2][i]["name"] == station) {
          green[2][i]["itemStyle"] = {
            borderColor: "black",
            borderWidth: 2,
            shadowColor: "rgba(0, 0, 0, 0.5)",
            shadowBlur: 10,
          };
        }
      }

      var option5 = {
        title: [
          {
            text: "地铁站周边绿地",
            textAlign: "center",
            left: "50%",
            top: "2%",
          },
        ],
        grid: [
          {
            left: "28%",
            top: "8%",
            width: "42%",
            height: "38%",
          },
          {
            left: "28%",
            top: "55%",
            width: "45%",
            height: "35%",
          },
        ],
        xAxis: [
          {
            name: "米",
            min: -1000,
            max: 1000,
            gridIndex: 0,
          },
          {
            name: "平方千米",
            nameLocation: "middle",
            min: 0,
            max: 0.7,
            gridIndex: 1,
          },
        ],
        yAxis: [
          {
            name: "米",
            min: -1000,
            max: 1000,
            gridIndex: 0,
          },
          {
            inverse: true,
            type: "category",
            gridIndex: 1,
            data: [
              // "世界之窗站",
              "高新园站",
              "深大站",
              "香蜜湖站",
              // "蛇口港站",
              "蛇口港站",
              // "購物公園站",
              "世界之窗站",
              "購物公園站",
              // "高新园站",
              "華強北站",
              "寶安中心站",
              "香蜜站",
            ],
          },
        ],
        legend: { left: "18%", top: "50%" },
        series: [
          {
            type: "scatter",
            name: "周边绿地",
            symbol: "rect",
            symbolSize: 5,
            data: green[0][station].value,
            itemStyle: { color: "green" },
          },
          {
            type: "scatter",
            name: "地铁站",
            symbolSize: 10,
            label: { show: true },
            data: [{ name: station + "站", value: [0, 0] }],
            itemStyle: { color: "red" },
          },
          {
            type: "line",
            name: "地铁站周边600米",
            symbolSize: 10,
            smooth: 0.6,
            symbol: "none",
            data: green[1],
            lineStyle: { color: "red", width: 5 },
            itemStyle: { color: "red" },
          },
          {
            name: "地铁站周边600米绿地面积",
            type: "bar",
            data: green[2],
            tooltip: {},
            xAxisIndex: 1,
            yAxisIndex: 1,
            label: { show: true, position: "right" },
            itemStyle: { color: "green" },
          },
        ],
      };
      myChart5.setOption(option5);
    });
  });

}
//等时圈加载
function iso() {
  var station =myChart_main.getOption().series[4]["data"][0]["name"];
  $.getJSON("./lib/gis/" + station + ".json", function (iso) {
    var option_iso = {
      bmap: { zoom: 14 },
      visualMap: {
        max: 60,
        min: 15,
        seriesIndex: 5,
        inRange: {
          color: ["green", "#eac736", "#d94e5d"],
        },
      },
      series: [
        {},
        { label: { fontSize: 10 }, symbolSize: 15 },
        { label: { fontSize: 10 }, symbolSize: 15 },
        { label: { fontSize: 10 }, symbolSize: 15 },
        {},
        {
          type: "lines",
          coordinateSystem: "bmap",
          polyline: true,
          data: iso,
          label: { show: true },
          lineStyle: {
            width: 5,
          },
          zlevel: 1,
        },
      ],
    };
    myChart_main.setOption(option_iso);
  });
}
//衔接需求加载
function heatmap(id, sname) {
  $.getJSON("./lib/heatmap.json", function (heatmapdata) {
    var sers = 5;
    series = [
      {},
      { label: { fontSize: 20 }, symbolSize: 30 },
      { label: { fontSize: 20 }, symbolSize: 30 },
      { label: { fontSize: 20 }, symbolSize: 30 },
      { label: { fontSize: 20 }, symbolSize: 30 },
    ];
    if (id == 4) {
      series.push({ data: [] });
    } else {
      series.push({
        name: sname,
        type: "scatter",
        coordinateSystem: "bmap",
        data: heatmapdata[id],
        symbol: "rect",
        symbolSize: 14,
      });
    }
    var option_heatmap = {
      bmap: {
        // center: [113.93273450000001, 22.537462],
        zoom: 14,
      },
      visualMap: {
        max: 20,
        seriesIndex: sers,
        inRange: {
          color: ["lightskyblue", "yellow", "orangered"],
        },
      },
      series: series,
    };
    console.log(option_heatmap);
    myChart_main.setOption(option_heatmap);
  });
}
