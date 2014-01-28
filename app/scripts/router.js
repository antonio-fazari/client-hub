/**
 * Router Map
 * @return {object} router map object.
 */
ClientHub.Router.map(function(){
  this.resource('users', function(){
    this.resource('user', { path:'/:user_id' }, function(){
      this.route('edit');
    });
    this.route('create');
  });
});
