'use strict';

module.exports = function(karma) {
  karma.set({

    files: [
      'public/components/angular/angular.js',
      'public/components/angular-mocks/angular-mocks.js',
      'public/js/app.js',
      'test/unit/**/*Spec.js'
    ],
    basePath: '',
    frameworks: [ 'jasmine'],


    reporters: [ 'dots' ],

    preprocessors: {
    },

    browsers: [ 'Chrome' ],

    //logLevel: 'LOG_DEBUG',
    logLevel : 'LOG_INFO',
    singleRun: true,
    autoWatch: false,


  });
};
