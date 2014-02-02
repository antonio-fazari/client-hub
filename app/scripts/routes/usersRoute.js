/**
 * Users Route
 */
App.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});
