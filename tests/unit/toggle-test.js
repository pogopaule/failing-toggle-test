import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('Acceptance - askname', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('toggle test 1', function() {
  expect(1);

  visit('/');
  click('.toggleBtn');

  andThen(function() {
    equal(find('#toggleState').text(), 'off');
  });
});

test('toggle test 2', function() {
  expect(1);

  visit('/');
  click('.toggleBtn');

  andThen(function() {
    equal(find('#toggleState').text(), 'off');
  });
});

