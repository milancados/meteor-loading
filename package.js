Package.describe({
  name: 'pcel:loading',
  summary: 'SpinKit + please-wait = beautiful loading page',
  version: '1.0.0',
  git: 'https://github.com/pcel/meteor-loading',

  // Source repositories
  sources: [{
    source_git: "https://github.com/Pathgather/please-wait",
    source_ver: "v0.0.2"
  }, {
    source_git: "https://github.com/tobiasahlin/SpinKit",
    source_ver: "1.0.0"
  }]
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  // api.use('jquery', 'client');
  var path = Npm.require('path');
  var files = []
  files.push(path.join('lib', 'please-wait.js'));
  files.push(path.join('lib', 'please-wait.css'));
  files.push(path.join('lib', 'spinkit.css'));
  api.addFiles(files, 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('pcel:loading');
  api.addFiles('loading-tests.js');
});