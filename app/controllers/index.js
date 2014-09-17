import Ember from 'ember';

export default Ember.Controller.extend({
  list: [],
  toggle: 'on',
  actions: {
    toggle: function() {
      this.get('list').pushObject('a');
      if(this.get('toggle') === 'on') {
        this.set('toggle', 'off');
      } else {
        this.set('toggle', 'on');
      }
    }
  }
});
