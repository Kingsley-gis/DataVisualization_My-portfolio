my_sangji = echarts.init(document.getElementById('container6'));
var option;

my_sangji.showLoading();
$.get('/my-analyse/data2/sangji_data.json', function (data){
$.get('/my-analyse/data2/green_copy.json', function (green) {
    my_sangji.hideLoading();
    my_sangji.setOption(
    (option = {
      title: {
        text: 'Sankey Diagram'
      },
      grid: [
        {
          left: "8%",
          top: "8%",
          width: "42%",
          height: "38%",
        },
        {
          left: "8%",
          top: "50%",
          width: "45%",
          height: "35%",
        },
      ],    
      tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove'
      },
      xAxis: [
        {
          gridIndex: 0,
        },
        {
        gridIndex: 1,
          },
      ],
      yAxis: [
        {
            inverse: true,
            type: "category",
            gridIndex: 0,
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
    //   legend: { left: "18%", top: "50%" },
      series: [
        {
            name: "地铁站周边600米绿地面积",
            type: "bar",
            data: green[2],
            tooltip: {},
            xAxisIndex: 0,
            yAxisIndex: 0,
            label: { show: true, position: "right" },
            itemStyle: { color: "green" },
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
      ]
    })
  );
});
})

option && my_sangji.setOption(option);
