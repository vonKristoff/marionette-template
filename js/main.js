require(['config'], function (){

    require(['app','backbone','router','controller'], function (App, Backbone, Router, Controller) {

        App.start();

        new Router({
            controller : Controller
        });

        Backbone.history.start();
    }) 
})