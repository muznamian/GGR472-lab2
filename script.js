mapboxgl.accessToken= "pk.eyJ1IjoibXV6bmFtaWFuIiwiYSI6ImNtNXBsc2xjcDAyaWkybm9wZXFuMjNzMTQifQ.0ATJsQJDSlSrpNrQpdMq0Q";
const map= new mapboxgl.Map ({
    container: "my-map",
    // the same code that was used in the html file 
    style: "mapbox://styles/muznamian/cm6zwja9f00cj01qq433y5umu"
    // the style code from the map box site 
center:[-79.39, 43.66],
// the lng and lat map objects 
zoom: 12 
// the starting zoom value that we want for our map 
});

map.on('load', ()=> {
    map.addSource('map(4),{
       type:'geojson' ,
       data: ['c:\Users\mian1\Downloads\map (4).geojson'
        { "type": "Point"
       "name": "map(4)"
        },
        "geometry":{
            "coordinates":[
                -79.3986523701687
                43.662343395037766
                // the central mercator values 
            ],
            "type" : "Point"
        }
    }
                         ]
                }
}]:

map.addLayer({
    'id': 1
    'type': 'point'
    'source' : 'map(4)'
    'paint' : {
'circle-radius': 6
'circle-color' : 842727
// the color code 


    }
}];

});
// the dataset from the mapbox tile set 
map.addSource('points_2-acj9mf')
'type': 'vector'
'url': 'muznamian.c4f728f9'
});
            
        
  map.addLayer ({
    'id': 'downtown points'
    'type' : 'fill'
    'source': 'map(4)'
    'paint': {

'fill-color': '#927e7e'
'fill-opacity': 0.4,
'fill-outline-color': 'black'

    },

//testing some colors and properties out 

'source-layer': 'points_2-847toi'










