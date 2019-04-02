// data.sort(function(a,b){
//         return parseFloat(b.weather_description) - parseFloat(a.weather_description);
//     });
    
//     data = data.slice();
    
//     data = data.reverse();
//     var trace1 = {
//         x: data.map(row => row.weather_description),
//         // x: data.map(row => row.rides_hr),
//         y: data.map(row => row.total_rides),
//         text: data.map(row => row.total_rides),
//         name: "scooter",
//         type: "liner",
//         orientation: "h"
//       };
//     var data = [trace1];
//     var layout = {
//         title: "Rides VS weather description",
//         xaxis:{ title:"weather_description"},
//         yaxis: {title: "Total Rides per hour"},
//         margin: {
//           l: 100,
//           r: 100,
//           t: 100,
//           b: 100
//         }
//       };
//       Plotly.newPlot("plot", data, layout);

// ...............................................................
      data_desc.sort(function(a,b){
        return parseFloat(b.weather_description) - parseFloat(a.weather_description);
    });
    
    data_desc = data_desc.slice();
    
    data_desc = data_desc.reverse();
    var trace1 = {
        x: data_desc.map(row => row.weather_description),
        
        y: data_desc.map(row => row.total_rides),
        text: data_desc.map(row => row.hour),
        name: "weather description",
        type: "line",
        orientation: "h"
      };
    var data_desc = [trace1];
    var layout = {
        title: "Rides VS weather description",
        xaxis:{ title:"Weather_Description"},
        
        yaxis: {title: "Total rides"},
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
      Plotly.newPlot("plot3", data_desc, layout);      