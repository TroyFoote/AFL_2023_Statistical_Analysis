
function init() {
  
 // Create dropdown menu
  let dropdownMenu = d3.select("#selDataset");
  d3.json('http://127.0.0.1:5000/api/v1.0/Disposals').then(function(data) {  

    // Sort data
    let subject_ids = data.map(x=>x.Season).sort((f,s)=>f-s);
    console.log(subject_ids)
   
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

// // Sort the data by Greek search results descending
//let sortedByGreekSearch = data.sort((a, b) => b.greekSearchResults - a.greekSearchResults);

// Slice the first 10 objects for plotting
//slicedData = sortedByGreekSearch.slice(0, 10);

//Reverse the array to accommodate Plotly's defaults
// reversedData = subject_ids();

// // Trace1 for the Greek Data
// let trace1 = {
//   x: reversedData.map(object => object.Season),
//   y: reversedData.map(object => object.Total_Disposals),
//   text: reversedData.map(object => object.greekName),
//   name: "Disposals",
//   type: "line",
//   orientation: "h"
// };

// // Data array
// // `data` has already been defined, so we must choose a new name here:
// let traceData = [trace1];

// // Apply a title to the layout
// let layout = {
//   title: "Total Disposals 1990-2022",
//   margin: {
//     l: 100,
//     r: 100,
//     t: 100,
//     b: 100
//   }
// };

// // Render the plot to the div tag with id "plot"
// // Note that we use `traceData` here, not `data`
// Plotly.newPlot("plot", traceData, layout);



init()

