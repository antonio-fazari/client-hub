ClientHub.UserController = Ember.ObjectController.extend({
  deleteMode: false,
  actions: {
    edit: function(){
      this.transitionToRoute('user.edit');
    },
    delete: function(){
      this.toggleProperty('deleteMode');
    },
    cancelDelete: function(){
      // set deleteMode back to false
      this.set('deleteMode', false);
    },
    confirmDelete: function(){
      // this tells Ember-Data to delete the current user
      this.get('model').deleteRecord();
      this.get('model').save();
      // then transition to the users route
      this.transitionToRoute('users');
      // set deleteMode back to false
      this.set('deleteMode', false);
    },

  }
});
