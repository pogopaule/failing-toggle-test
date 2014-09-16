import Ember from 'ember';

var ToggleMixin = Ember.Mixin.create({
  toggle: 'on'
});

export default Ember.Controller.extend(ToggleMixin, {
  actions: {
    toggle: function() {
      if(this.get('toggle') === 'on') {
        this.set('toggle', 'off');
      } else {
        this.set('toggle', 'on');
      }
    }
  }
});
