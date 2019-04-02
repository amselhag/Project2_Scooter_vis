// data.sort(function(a,b){
//     return parseFloat(b.start_time_str) - parseFloat(a.start_time_str);
// });

// data = data.slice();

// data = data.reverse();
// var trace1 = {
//     x: data.map(row => row.start_time_str),
//     y: data.map(row => row["Device ID"]),
//     text: data.map(row => row["Device ID"]),
//     name: "scooter",
//     type: "liner",
//     orientation: "h"
//   };
// var data = [trace1];
// var layout = {
//     title: "scooter per day",
//     margin: {
//       l: 100,
//       r: 100,
//       t: 100,
//       b: 100
//     }
//   };
//   Plotly.newPlot("plot", data, layout);

// scatters
  var trace1 = {
    x: data.map(row => row.start_time_str),
    y: data.map(row => row["Device ID"]),
    mode: "markers",
    type: "scatter",
    name: "start_time_str",
    marker: {
      color: "#2077b4",
      symbol: "hexagram"
    }
  };
var data2 = [trace1];
var layout = {
    title: "scooters Usage per day",
    xaxis:{ title:"Date per day"},
    yaxis: {title:"Total scooters"}
};
Plotly.newPlot("plot1", data2, layout);
// var url = "/test.js";

// function buildPlot(){
//     d3.json(url).then(function(response){
//         console.log(response);
//         var trace = {
//             type: "scatter",
//             mode: "lines",
//             name: "Dockless Usage",
//             x:response.map(data => data_example.start_time_str),
//             y:response.map(data => data_example.DeviceID),
//             line: {
//                 color: "#17BECF"
//             }
//         };
//         var data_example = [trace];
//         var layout = {
//             title : "Number of scooter per day",
//             xaxis: {
//                 type: "start_time_str"
//             },
//             yaxis: {
//                 autorange :true,
//                 type: "linear"
//             }
//         };
//         Plotly.newPlot("plot", data_example, layout);
//     });
// }
// buildPlot();

// var graphData = [{data_example}]

// var svgArea = d3.select("chart").select("svg");

// // define svg area dimension
// var svgWidth = 600;
// var svgHeight = 500;
// // define the chart margins
// var margin = {top: 30, right: 50, bottom: 30, left: 50};
// // define dimensions of the chart area
// var graphWidth = svgWidth - margin.left - margin.right;
// var graphHeight = svgHeight - margin.top - margin.bottom;

// // test 1
// var axisScale = d3.scale.linear().domain([0, 500]).range([0, width]);
// var yaxisScale = d3.scale.linear()
// .domain([0, 5])
// .range([ height,0]);

// var xAxis = d3.svg.axis()
// .scale(axisScale)
// .orient("bottom");

// var yAxis = d3.svg.axis()
// .scale(yaxisScale)
// .orient("left");

// var svgContainer = d3.select("body").
// append("svg")
// .attr("width", width + margin.left + margin.right)
// .attr("height", height + margin.top + margin.bottom)
// .append("g")
// .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
// svgContainer.append("g")
// .attr("class", "x axis")
// .attr("transform", "translate(0," + height + ")")
// .call(xAxis);

// svgContainer.append("g")
// .attr("class", "y axis")
// .call(yAxis);

// // create a line
// var line = d3.svg.line()
// .x(function(d,i) {
//   console.log(d.x);
//   return axisScale(d.x);
// })
// .y(function(d,i) {
//   console.log(d.y);
//   return yaxisScale(d.y);
// })
// var data = [{ data|safe }}
// svgContainer.append("svg:path").attr("class", "line").attr("d", line(data));
// select body append svg area to it
// var svg = d3.select("body")
//   .append("svg")
//   .attr("width", svgWidth)
//   .attr("height", svgHeight);
// //   / Append a group area, then set its margins
// var chartGroup = svg.append("g")
//   .attr("transform", `translate(${margin.left}, ${margin.top})`);


// var parseDate = d3.time.format("%Y-%m-%d").parse;

// var x = d3.time.scale().range([0, graphWidth]);
// var y = d3.scale.linear().range([graphHeight, 0]);

// var xAxis = d3.svg.axis().scale(x)
//     .orient("bottom").ticks(5);
// var yAxis = d3.svg.axis().scale(y)
//     .orient("left").ticks(5);

// var Line = d3.svg.line()
//     .x(function(d) { return x(d.DeviceID); })
//     .y(function(d) { return y(d.start_time_str); });  
    
// var svg = d3.select("#graphDiv")
//     .append("svg")
//         .attr("width", svgWidth)
//         .attr("height", svgHeight)
//     .append("g")
//         .attr("transform", 
//         "translate(" + margin.left + "," + margin.top + ")")  
        
//     function drawGraph(data) {
//         data.forEach(function(d) {
//             d.DeviceID = parseDate(d.DeviceID); 
//             d.start_time_str = parseStart_time_str(d.start_time_str);
//         });
        
//     x.domain(d3.extent(data, function(d) {return d.start_time_str}));
//     y.domain(d3.domain(data, function(d) {return d.DeviceID}));        

//      // Add the area path
//   svg.append("path")
//   .datum(data)
//   .attr("class", "area")
//   .attr("d", area)
// // Add the highLine as a green line
// svg.append("path")
//   .style("stroke", "green")
//   .style("fill", "none")
//   .attr("class", "line")
//   .attr("d", Line(data));

//    // Add the X Axis
//    svg.append("g")
//    .attr("class", "x axis")
//    .attr("transform", "translate(0," + graphHeight + ")")
//      .call(xAxis);
//  // Add the Y Axis
//  svg.append("g")
//    .attr("class", "y axis")
//    .call(yAxis);

//     };
//     drawGraph(graphData);