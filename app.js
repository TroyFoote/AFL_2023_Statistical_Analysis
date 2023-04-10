
const DISPOSALS_URL = 'http://127.0.0.1:5000/api/v1.0/Disposals';
const AVG_DISPOSALS_URL = 'http://127.0.0.1:5000/api/v1.0/avg_disposals';
const AVG_GOALS_URL = 'http://127.0.0.1:5000/api/v1.0/avg_goals';
const GOAL_KICKERS_URL = 'http://127.0.0.1:5000/api/v1.0/goal_kickers'


Promise.all([
    d3.json(DISPOSALS_URL),
    d3.json(AVG_DISPOSALS_URL),
    d3.json(AVG_GOALS_URL),
    d3.json(GOAL_KICKERS_URL)
    ]).then(function([disposalsData, avg_disposalsData, avg_goalsData, goal_kickersData]){

let sortedData = avg_disposalsData.sort((a, b) => a.Season - b.Season);
  console.log(sortedData);
let seasons = sortedData.map(x=>x.Season);
let avg_disposals = sortedData.map(x=>x.ave_disposals);

let dropdownMenu = d3.select("#selDataset");
// Sort data
let subject_ids = seasons;
     
function addOption(subject_id) { 
  dropdownMenu.append("option")
    .attr("value", subject_id)
    .text(subject_id);
}
subject_ids.forEach(addOption);  
    
});

// Disposals Chart
// Load the JSON data from a Flask endpoint
fetch(AVG_DISPOSALS_URL)
  .then(response => response.json())
  .then(avg_disposals => {

    // Sort the data arry by the Season value
    avg_disposals.sort((a, b) => a.Season - b.Season);
   
    // Extract the data points from the JSON data
    const xValues = avg_disposals.map(d => d.Season);
    const yValues = avg_disposals.map(d => d.Ave_disposals);

    // Configure the chart options
    const options = {
      chart: {
        type: 'line',
        background: "transparent",
        height: 350,
      },
      series: [{
        name: 'Average Disposals',
        data: yValues,
      }],
      xaxis: {
        categories: xValues,
      },
      markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
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
      }},
      stroke: {
        curve: "smooth",
      },
      labels: {
        offsetY: 2,
        style: {
        colors: "#000000",
        },
      },
      yaxis: [
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
    };
      
    // Create the chart
    const chart = new ApexCharts(document.querySelector('#avg_disposal-chart'), options);
    chart.render();
  });

// Goals Chart
// Load the JSON data from a Flask endpoint
fetch(AVG_GOALS_URL)
  .then(response => response.json())
  .then(avg_goals => {

    // Sort the data arry by the Season value
    avg_goals.sort((a, b) => a.Season - b.Season);
   
    // Extract the data points from the JSON data
    const xValues = avg_goals.map(d => d.Season);
    const yValues = avg_goals.map(d => d.Ave_goals);

    // Configure the chart options
    const options = {
      chart: {
        type: 'line',
        background: "transparent",
        height: 350,
      },
      series: [{
        name: 'Average Goals',
        data: yValues,
        color: '#FF5733', // Set the line color to orange
      }],
      xaxis: {
        categories: xValues,
      },
      markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
        }, 
      grid: {
        borderColor: "#1b2635",
        yaxis: {
        lines: {
        show: true,
        },
        },
      xaxis: {
        lines: {
        show: true,
        },
      }},
      stroke: {
        curve: "smooth",
      },
      labels: {
        offsetY: 2,
        style: {
        colors: "#1b2635",
        },
      },
      yaxis: [
      {
        title: {
          text: "Goals",
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
             
    };
      
    // Create the chart
    const chart = new ApexCharts(document.querySelector('#avg_goals-chart'), options);
    chart.render();
  });

// Goals Chart
// Load the JSON data from a Flask endpoint
fetch(GOAL_KICKERS_URL)
  .then(response => response.json())
  .then(goal_kickers => {

    // Sort the data arry by the Season value
    goal_kickers.sort((a, b) => a.Season - b.Season);
   
    // Extract the data points from the JSON data
    const xValues = goal_kickers.map(d => d.Season);
    const yValues = goal_kickers.map(d => d.Goals_Kicked);

    // Configure the chart options
    const options = {
      chart: {
        type: 'bar',
        background: "transparent",
        height: 350,
      },
      series: [{
        name: 'Leading Goal Kicker Per Season',
        data: yValues,
        color: '#008000', // Set the line color to green
      }],
      xaxis: {
        categories: xValues,
      },
      markers: {
        size: 6,
        strokeColors: "#1b2635",
        strokeWidth: 3,
        }, 
      grid: {
        borderColor: "#1b2635",
        yaxis: {
        lines: {
        show: true,
        },
        },
      xaxis: {
        lines: {
        show: true,
        },
      }},
      stroke: {
        curve: "smooth",
      },
      labels: {
        offsetY: 2,
        style: {
        colors: "#1b2635",
        },
      },
      yaxis: [
      {
        title: {
          text: "Goals",
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
             
    };
      
    // Create the chart
    const chart = new ApexCharts(document.querySelector('#goal_kickers-chart'), options);
    chart.render();
  });

// var disposalChartOptions = {
 
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
//         text: "Disposals",
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

// function avg_disposal(sortedData) {
//   return {x: sortedData.Season, y: sortedData.Ave_disposals }; 
// }
// var disposalChart = new ApexCharts(document.querySelector("#avg_disposal-chart"), disposalChartOptions);
// disposalChart.render();
// console.log ('initial rendering complete')
// d3.json(AVG_DISPOSALS_URL).then(function(data) {
  
//   // console.log('chart data loaded');
//   let seriesData = data.map(avg_disposal);

//   // console.log(seriesData);
//    disposalChart.updateSeries([{
//     name: 'Avg Disposals',
//     data: seriesData
//   }]);
// });  







// Goals chart

// let sortData = avg_goalsData.sort((a, b) => a.Season - b.Season);
//   console.log(sortData);
// let seasons = sortData.map(x=>x.Season);
// let avg_disposals = sortData.map(x=>x.ave_goals);



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
//         text: "Disposals",
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

// function avg_goals(sortData) {
//   return {x: sortData.Season, y: sortData.Ave_goals }; 
// }
// var goalChart = new ApexCharts(document.querySelector("#avg_goals-chart"), goalChartOptions);
// goalChart.render();
// console.log ('initial rendering complete')
// d3.json(AVG_GOALS_URL).then(function(data) {
  
//   // console.log('chart data loaded');
//   let seriesData = data.map(avg_goals);

//   // console.log(seriesData);
//    goalChart.updateSeries([{
//     name: 'Avg Goals',
//     data: seriesData
//   }]);
// });  
