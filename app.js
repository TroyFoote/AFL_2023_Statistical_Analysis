const DISPOSALS_URL = 'http://127.0.0.1:5000/api/v1.0/Disposals';
const AVG_DISPOSALS_URL = 'http://127.0.0.1:5000/api/v1.0/avg_disposals';
const AVG_GOALS_URL = 'http://127.0.0.1:5000/api/v1.0/avg_goals';

function init() {
  
 // Create dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  d3.json(DISPOSALS_URL).then(function(data) {  

    // Sort data
    let subject_ids = data.map(x=>x.Season).sort((f,s)=>f-s);
     
    function addOption(subject_id) { 
      dropdownMenu.append("option")
        .attr("value", subject_id)
        .text(subject_id);
    }
    
    subject_ids.forEach(addOption);
    
  })
}

function optionChanged(subject_id){
    barchart(subject_id);
    linechart(subject_id);}
function barchart(){

}
function linechart(){
  
}  


// Disposals Chart
var disposalChartOptions = {
 
  series: [],
  
  chart: {
    type: "line",
    background: "transparent",
    height: 350,
    stacked: false,
    toolbar: {
      show: false,
    },
  },

  noData: {
    text: 'Loading...',
    style: {
      color: 'white', 
      fontSize: '22px'}
  },
  
  colors: ["ab0003"],
  labels: ["Seasons"],
  dataLabels: {
    enabled: false,
  },
  fill: {
    gradient: {
      opacityFrom: 0.4,
      opacityTo: 0.1,
      shadeIntensity: 1,
      stops: [0, 100],
      type: "vertical",
    },
    type: "gradient",
  },
  grid: {
    borderColor: "#55596e",
    yaxis: {
      lines: {
        show: true,
      },
    },
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  // legend: {
  //   labels: {
  //     colors: "#ff0000",
  //   },
  //   show: true,
  //   position: "top",
  // },
  markers: {
    size: 6,
    strokeColors: "#1b2635",
    strokeWidth: 3,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    axisBorder: {
      color: "#55596e",
      show: true,
    },
    axisTicks: {
      color: "#55596e",
      show: true,
    },
    labels: {
      offsetY: 2,
      style: {
        colors: "#000000",
      },
    },
  },
  yaxis: 
  [
    {
      title: {
        text: "Disposals",
        style: {
          fontSize:  '20px',
          color: "#000000",
  },
      },
      labels: {
        style: {
          fontSize:  '14px',
          colors: ["#000000"],
        },
      },
    },
  ],
  // tooltip: {
  //   shared: true,
  //   intersect: false,
  //   theme: "light",
  // }
};

function avg_disposal(row) {
  return {x: row.Season, y: row.Ave_disposals };
}



var disposalChart = new ApexCharts(document.querySelector("#disposal-chart"), disposalChartOptions);
disposalChart.render();
console.log ('initial rendering complete')
d3.json(AVG_DISPOSALS_URL).then(function(data) {
  // console.log('chart data loaded');
  let seriesData = data.map(avg_disposal);

  // console.log(seriesData);
  disposalChart.updateSeries([{
    name: 'Avg Disposals',
    data: seriesData
  }]);
});  



// // Goals Chart
// var goalChartOptions = {
 
//   series: [],
  
//   chart: {
//     type: "line",
//     background: "transparent",
//     height: 350,
//     stacked: false,
//     toolbar: {
//       show: false,
//     },
//   },

//   noData: {
//     text: 'Loading...',
//     style: {
//       color: 'white', 
//       fontSize: '22px'}
//   },
  
//   colors: ["ab0003"],
//   labels: ["Seasons"],
//   dataLabels: {
//     enabled: false,
//   },
//   fill: {
//     gradient: {
//       opacityFrom: 0.4,
//       opacityTo: 0.1,
//       shadeIntensity: 1,
//       stops: [0, 100],
//       type: "vertical",
//     },
//     type: "gradient",
//   },
//   grid: {
//     borderColor: "#55596e",
//     yaxis: {
//       lines: {
//         show: true,
//       },
//     },
//     xaxis: {
//       lines: {
//         show: true,
//       },
//     },
//   },
 
//   markers: {
//     size: 6,
//     strokeColors: "#1b2635",
//     strokeWidth: 3,
//   },
//   stroke: {
//     curve: "smooth",
//   },
//   xaxis: {
//     axisBorder: {
//       color: "#55596e",
//       show: true,
//     },
//     axisTicks: {
//       color: "#55596e",
//       show: true,
//     },
//     labels: {
//       offsetY: 2,
//       style: {
//         colors: "#000000",
//       },
//     },
//   },
//   yaxis: 
//   [
//     {
//       title: {
//         text: "Goals",
//         style: {
//           fontSize:  '20px',
//           color: "#000000",
//   },
//       },
//       labels: {
//         style: {
//           fontSize:  '14px',
//           colors: ["#000000"],
//         },
//       },
//     },
//   ],

// };

// function avg_goals(row) {
//   return {x: row.Season, y: row.Ave_goals };
// }

// var goalChart = new ApexCharts(document.querySelector("#goal-chart"), goalChartOptions);
// goalChart.render();
// console.log ('initial rendering complete')
// d3.json(AVG_GOALS_URL).then(function(data) {
//   console.log('chart data loaded');
//   let seriesData = data.map(avg_goals);
//   console.log(seriesData);
//   disposalChart.updateSeries([{
//     name: 'Avg Goals',
//     data: seriesData
//   }]);
// });  





init()