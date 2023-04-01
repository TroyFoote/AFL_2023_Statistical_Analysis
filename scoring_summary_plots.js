// Initialised arrays
let Season = [];
let Ave_goals = [];
let Goals_Kicked = [];
let Percentage_of_goals = [];

// For loop to populate arrays
for (let i = 0; i < searchResults.length; i++) {
  row = searchResults[i];
  names.push(row.pair);
  greekNames.push(row.greekName);
  romanNames.push(row.romanName);
  greekSearchResults.push(row.greekSearchResults);
  romanSearchResults.push(row.romanSearchResults);
}

// Trace1 for the Greek Data
let trace1 = {
  x: Season,
  y: Percentage_of_goals,
  text: greekNames,
  name: "Greek",
  type: "bar"
};

// Create data array
let data = [trace1];

// Apply a title to the layout
let layout = {
  title: "search results",
  barmode: "group",
  // Include margins in the layout so the x-tick labels display correctly
  margin: {
    l: 50,
    r: 50,
    b: 200,
    t: 50,
    pad: 4
  }
};

// Render the plot to the div tag with id "plot"
Plotly.newPlot("plot", data, layout);


