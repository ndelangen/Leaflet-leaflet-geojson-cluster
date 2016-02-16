if (typeof window !== 'undefined') {
	module.exports = require('./src/GeoJSONCluster');
} else {
	module.exports = {};
}
