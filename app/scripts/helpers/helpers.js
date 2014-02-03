Ember.Handlebars.registerBoundHelper('formatDate', function(date){
  return moment(date).fromNow();
});
