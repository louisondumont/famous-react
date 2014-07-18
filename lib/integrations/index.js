module.exports = {
	StaticScrollview: require('./views/StaticScrollview.js')
};
module.exports.getNewClass = function(name, props) {
	return new module.exports[name](props);
};
