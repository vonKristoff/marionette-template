define(['marionette','vent','mcs/userCollection','views/users','views/form'], function (Marionette,Vent,UserCollection,Users,Form) {

	var App = new Marionette.Application();

	App.addRegions({
		form:'#form',
		list:'#list'
	})

	App.addInitializer(function(){

		App.users = new UserCollection(); // Basic BB Model & Collection
		// regions
		App.form.show( new Form.View({ collection: App.users }) );
		App.list.show( new Users.View({ collection: App.users }) );
	})


	return App
})