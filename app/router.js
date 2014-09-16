import Ember from 'ember';

var Router = Ember.Router.extend({
  location: FailingToggleTestENV.locationType
});

Router.map(function() {
});

export default Router;
