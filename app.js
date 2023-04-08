
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

init()

