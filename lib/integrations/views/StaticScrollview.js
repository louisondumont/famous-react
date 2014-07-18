/*** scrollview ***/

define(function(require, exports, module) {
    var View = require('../../../famous/core/View');
    var Surface = require('../../../famous/core/Surface');
    var Scrollview = require('../../../famous/views/Scrollview');    
    
    /** StaticScrollview that handles react props and children
     *
     * @param {Object} props
     */

    function StaticScrollview(props) {
        View.apply(this, arguments);

        // Create the Scrollview with specified options
        this.scrollview = new Scrollview(props);

        // Create the surfaces
        _createSurfaces.call(this, props.children);

        this.add(this.scrollview);
    }

    StaticScrollview.prototype = Object.create(View.prototype);
    StaticScrollview.prototype.constructor = StaticScrollview;

    StaticScrollview.DEFAULT_OPTIONS = {};

    /**
     * create surfaces specified in react
     * 
     * @param {Object} surfaces
     */
     
    function _createSurfaces(surfaces) {
        this._surfaces = [];
        for(var surface in surfaces) {
            var temp = new Surface(surfaces[surface].props);
            temp.setContent(surfaces[surface].props.children);
            this._surfaces.push(temp);
        }  
        this.scrollview.sequenceFrom(this._surfaces);
    }

    
    module.exports = StaticScrollview;
});
