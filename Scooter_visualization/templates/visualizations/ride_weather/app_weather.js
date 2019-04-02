// Define SVG area dimensions
var svgWidth = 960*0.8;
var svgHeight = 500;

// Define the chart's margins as an object
var margin = {
  top: 60,
  right: 60,
  bottom: 120,
  left: 120
};

// Define dimensions of the chart area
var chartWidth = svgWidth - margin.left - margin.right;
var chartHeight = svgHeight - margin.top - margin.bottom;

// Select body, append SVG area to it, and set its dimensions
var svg = d3.select("#plot2")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

// Append a group area, then set its margins
var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// // Initial Params
// var chosenYAxis = "ID";

// // function used for updating x-scale var upon click on axis label
// function yScale(data, chosenYAxis) {
//   // create scales
//   var yLinearScale = d3.scaleLinear()
//   .domain([0, d3.max(data, data => data[chosenYAxis])])
//   .range([chartHeight, 0]);

//   return yLinearScale;
// }

// // function used for updating xAxis var upon click on axis label
// function renderAxes(newYScale, yAxis) {
//   var bottomAxis = d3.axisBottom(newYScale);

//   yAxis.transition()
//     .duration(1000)
//     .call(bottomAxis);

//   return yAxis;
// }

// function renderLines(lineGroup, newYScale, chosenYaxis) {

//   lineGroup.transition()
//     .duration(1000)
//     .attr("cx", d => newXScale(d[chosenXAxis]));

//   return circlesGroup;
// }


// Load data from forcepoints.csv



  // Configure a time scale
  // d3.extent returns the an array containing the min and max values for the property specified
  var xLinearScale = d3.scaleLinear()
    .domain(d3.extent(temp_data, data => data.temperature))
    .range([0, chartWidth]);

  // Configure a linear scale with a range between the chartHeight and 0
  var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(temp_data, data => data.ID)])
    .range([chartHeight, 0]);

  // Create two new functions passing the scales in as arguments
  // These will be used to create the chart's axes
  var bottomAxis = d3.axisBottom(xLinearScale);
  var leftAxis = d3.axisLeft(yLinearScale);

  // Configure a line function which will plot the x and y coordinates using our scales
  var drawLine = d3.line()
    .x(temp_data => xLinearScale(temp_data.temperature))
    .y(temp_data => yLinearScale(temp_data.ID));

  // Append an SVG path and plot its points using the line function
  var path = chartGroup.append("path")
    // The drawLine function returns the instructions for creating the line for forceData
    .attr("d", drawLine(temp_data))
    .classed("line", true);

  // Variable to Hold Total Length
var totalLength = path.node().getTotalLength();

// Set Properties of Dash Array and Dash Offset and initiate Transition
path
	.attr("stroke-dasharray", totalLength + " " + totalLength)
	.attr("stroke-dashoffset", totalLength)
  .transition() // Call Transition Method
	.duration(4000) // Set Duration timing (ms)
	.ease(d3.easeLinear) // Set Easing option
	.attr("stroke-dashoffset", 0); // Set final value of dash-offset for transition

  // Append an SVG group element to the chartGroup, create the left axis inside of it
  chartGroup.append("g")
    .classed("axis", true)
    .call(leftAxis);

  // Append an SVG group element to the chartGroup, create the bottom axis inside of it
  // Translate the bottom axis to the bottom of the page
  chartGroup.append("g")
    .classed("axis", true)
    .attr("transform", `translate(0, ${chartHeight})`)
    .call(bottomAxis);

  var labelsGroup = chartGroup.append('g')
  .attr("transform", "rotate(-90)")

  labelsGroup.append("text")
  .attr("y", 0 - margin.left + 40)
  .attr("x", 0 - (chartHeight*0.6))
  .attr("dy", "1em")
  .attr("class", "axisText")
  .text("Total Rides")

  // labelsGroup.append("text")
  // .attr("y", 0 - margin.left + 10)
  // .attr("x", 0 - (chartHeight*0.6))
  // .attr("dy", "1em")
  // .attr("class", "axisText")
  // .text("Rides/hour")

  chartGroup.append("text")
  // .attr("transform", `translate(${chartWidth}, ${chartHeight + margin.top + 30})`)
  .attr("transform", `translate(${chartWidth*0.4}, ${chartHeight+40})`)
  .attr("class", "axisText")
  .text("Temperature (F)")


    


