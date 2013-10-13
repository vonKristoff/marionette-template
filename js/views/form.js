define(['marionette','text!templates/form.html'], function (Marionette,$form){

	var Form = {};

	Form.View = Marionette.ItemView.extend({
		template: $form,
		tagName:'li',
		events:{
			'click button':'createNewUser'
		},
		ui:{
			name:'#name',
			age:'#age'
		},
		createNewUser:function(){
			this.collection.add({
				name:this.ui.name.val(),
				age:this.ui.age.val()
			})
			this.ui.name.val("");
			this.ui.age.val("");
		}
	})

	return Form
});