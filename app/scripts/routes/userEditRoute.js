ClientHub.UserEditRoute = Ember.Route.extend({
  model: function(){
    return this.modelFor('user');
  }
});
