import Ember from 'ember';

export default Ember.Controller.extend({
  list: [], // <-- this survives the tests teardown and setup! Why??

  actions: {
    add: function() {
      this.get('list').pushObject('a'); // <-- is this the wrong way to use arrays in ember?
    }
  }
});
