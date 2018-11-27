var mymap = L.map('asia-map').setView([25.055931, 102.666016], 2);

L.tileLayer('https://api.mapbox.com/styles/v1/jamesmin94/cjouc30x499mn2sn9fz67xg5k/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFtZXNtaW45NCIsImEiOiJjam91YzFoYWUwdWg1M3BvNHF6bWw0Mnp5In0.IsZSl9-Eo7F0akLuD9SLnA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 6
}).addTo(mymap);

// South Korea
L.marker([35, 128]).addTo(mymap).bindPopup("The total amount of imports to USA from South Korea was 69,195 millions of dollars.");

// China
L.marker([35.532226, 102.041016]).addTo(mymap).bindPopup("The total amount of imports to USA from China was 7,020 millions of dollars.");

// Hong Kong
L.marker([22.167058, 114.191895]).addTo(mymap).bindPopup("The total amount of imports to USA from Hong Kong was 10,345 millions of dollars.");

// India
L.marker([21.657428, 78.530273]).addTo(mymap).bindPopup("The total amount of imports to USA from India was 2,910 millions of dollars.");

// Japane
L.marker([35.85344, 138.999023]).addTo(mymap).bindPopup("The total amount of imports to USA from Japan was 189,794 millions of dollars.");

// Singapore
L.marker([0.483393, 103.930664]).addTo(mymap).bindPopup("The total amount of imports to USA from Singapore was 1,142 millions of dollars.");

// Taiwan
L.marker([22.836946, 120.849609]).addTo(mymap).bindPopup("The total amount of imports to USA from Taiwan was 4,226 millions of dollars.");
