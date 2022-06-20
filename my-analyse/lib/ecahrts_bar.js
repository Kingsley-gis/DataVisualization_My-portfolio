
var chartDom = document.getElementById('main-charts');
var myChart = echarts.init(chartDom);


option = {
    title: {
        text: '栅格可达性-图例'
      },
left:0,
  

    xAxis: {
      type: 'value',

      show:false
    },
    yAxis: {
      type: 'category',
      data: [46],
      show : true,
    },
    series: [
      {
        name: '2011',
        type: 'bar',
        data: [135],
        label:{
            show:true,
            position:"right"
        },
        itemStyle : {
                  normal: {
                      color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                          offset: 0,
                          color: '#980043'
                      }, {
                          offset: 1,
                          color: '#f1eef6'
                      }]),
                  },
              },
  
      }
    ]
  };
option && myChart.setOption(option);
