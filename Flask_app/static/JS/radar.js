// Plot the default route once the page loads
var defaultURL = "/hour_of_day";
d3.json(defaultURL).then(function(data_hour){

    var data_hour = [data_hour];
    var layout = {
    polar: {
        radialaxis: {
        visible: true,
        autorange: true
        }
    },
    showlegend: false
    }
    Plotly.plot('plot', data_hour, layout);
});

// Update the plot with new data
function updatePlotly(newdata) {
  Plotly.restyle("radarChart", "r", [newdata.r]);
  Plotly.restyle("radarChart", "theta", [newdata.theta]);
}

// Get new data whenever the dropdown selection changes
function getData(route) {
  console.log(route);
  d3.json(`/${route}`).then(function(data_hour) {
    console.log("newdata", data_hour);
    updatePlotly(data_hour);
  });
}