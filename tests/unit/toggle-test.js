import Ember from 'ember';
import { test } from 'ember-qunit';
import startApp from '../helpers/start-app';
var App;

module('failing tests', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

// this tests purpose is to set the state, i.e. putting an 'a' into the controllers list property,
// which does not get cleaned up, so that test 2 fails afterwards.
test('test 1', function() {
  expect(1);

  visit('/');
  click('#btn');

  andThen(function() {
    ok(true);
  });
});

// This tests fails every second time you run the test suite.
// The first time it fails because the state on the index controller (i.e. the list property) does not get cleaned up after test 1
// The second time you run the test suite this tests passes because it gets executed first (so no state from test 1)
test('test 2', function() {
  expect(1);

  visit('/');
  click('#btn');

  andThen(function() {
    equal(find('#list').text().trim(), 'a');
  });
});

