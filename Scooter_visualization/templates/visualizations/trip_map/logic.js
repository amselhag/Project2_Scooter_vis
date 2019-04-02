var myMap1 = L.map("map1", {
    center: [30.28,-97.74 ],
    zoom: 13
  });

  // var myMap2 = L.map("map2", {
  //   center: [30.28,-97.74 ],
  //   zoom: 13
  // });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "mapbox.streets",
    accessToken: API_KEY
  }).addTo(myMap1);


  var start_json_file = "start_lat_lng.json"


  d3.json(start_json_file, function(response) {
    console.log(response)
    var heatArray1 = [];

  for (var i = 0; i < response.length; i++) {
    var location = response[i]
    
  if (location.start_latitude && location.start_longitude) {
      heatArray1.push([location.start_latitude, location.start_longitude]);
      }
    }
  console.log(heatArray1)
    var heat = L.heatLayer(heatArray1, {
      radius: 6,
      blur: 15
    }).addTo(myMap1);

  });


  // var end_json_file = "end_lat_lng.json"

  // d3.json(end_json_file, function(response) {
  //   console.log(response)
  //   var heatArray2 = [];

  //   for (var i = 0; i < response.length; i++) {
  //     var location = response[i]
    
  //     if (location.end_latitude && location.end_longitude) {
  //       heatArray2.push([location.end_latitude, location.end_longitude]);
  //     }
  //   }
  // console.log(heatArray2)
  //   var heat = L.heatLayer(heatArray2, {
  //     radius: 6,
  //     blur: 15
  //   }).addTo(myMap2);
  
  // });