let title = `Scoring Summary`

// assign 'x' and 'y' values for the plotly trace object
let trace1 = {
    x: season,
    y: goals,
    type: 'bar'
};

let data = [trace1];

let layout = {
    title: title
};

Plotly.newPlot("plot", data, layout);

