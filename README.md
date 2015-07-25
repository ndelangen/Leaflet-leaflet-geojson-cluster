leaflet-geojson-cluster
=====================
[![NPM](https://nodei.co/npm/leaflet-geojson-cluster.png)](https://nodei.co/npm/leaflet-geojson-cluster/)

[leaflet marker cluster](https://github.com/Leaflet/Leaflet.markercluster) + [leaflet geojson](http://leafletjs.com/reference.html#geojson)

### Usage

```javascript
var GeoJSONCluster = require('leaftlet-geojson-cluster');

var markers = new GeoJSONCluster();
markers.addLayer(new L.Marker(getRandomLatLng(map)));
... Add more layers ...
map.addLayer(markers);
```


### License
MIT
