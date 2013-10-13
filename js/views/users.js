define(['marionette','text!templates/user.html','Handlebars'], function (Marionette,tmpl,Handlebars){

	var Users = {};

	Users.Single = Marionette.ItemView.extend({
		template: Handlebars.compile( $(tmpl).html() ),
		tagName:'li'
	});
	Users.NoUserView = Marionette.ItemView.extend({
		template: '#noUsersView'
	});
	
	Users.View = Marionette.CollectionView.extend({
		tagName:'ul',
		itemView: Users.Single,
		emptyView: Users.NoUserView
	})

	return Users;
});