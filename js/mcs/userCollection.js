define(['backbone','mcs/user'], function (Backbone,Model){

	var Collection = Backbone.Collection.extend({
		model:Model
	})

	return Collection;

});