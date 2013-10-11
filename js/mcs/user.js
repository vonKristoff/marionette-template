define(['backbone'], function (Backbone){

	var Model = Backbone.Model.extend({
		defaults:{
			created: Date.now()
		}
	})
	return Model

});