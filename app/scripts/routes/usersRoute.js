/**
 * Users Route
 */
ClientHub.UsersRoute = Ember.Route.extend({
  model: function(){
    return this.store.find('user');
  }
});
