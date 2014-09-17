import Ember from 'ember';

export default Ember.Controller.extend({
  list: [],

  actions: {
    add: function() {
      this.get('list').pushObject('a');
    }
  }
});
