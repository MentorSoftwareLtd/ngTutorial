/**
 * Created by mdylag on 08/05/15.
 */
'use strict';

describe('Test home page', function() {

  //var ptor = protractor.getInstance();
  //console.log('protractor', browser);
  beforeEach(function () {
    browser.get('http://localhost:3001/#/');
  });

  it('should click Load people', function (done) {
    element(by.id('id2')).click().then(function() {
      expect(browser.getCurrentUrl()).toBe('http://localhost:3001/#/people');
      done();
    });

  });


});
