define(['marionette'], function (Marionette){

	var Users = {};

	Users.Single = Marionette.ItemView.extend({
		template: '#userView'
	});
	Users.NoUserView = Marionette.ItemView.extend({
		template: '#noUsersView'
	});
	
	Users.View = Marionette.CollectionView.extend({
		itemView: Users.Single,
		emptyView: Users.NoUserView
	})

	return Users;
});