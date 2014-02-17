var should = require('chai').should(),
    App = require('../../shared/app');

describe('BaseApp', function() {
  describe('initialization', function() {
    it('does not throw errors', function() {
      var MyApp = App.extend({});

      new MyApp();
    });

    it('can access `this.templateAdapter` in `initialize`', function() {
      var MyApp = App.extend({
        initialize: function() {
          if (this.templateAdapter == null) {
            throw new Error('Cannot access `templateAdapter` in initialize');
          }
        }
      });

      new MyApp();
    });
  });
});
