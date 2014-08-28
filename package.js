Package.describe({
  name: 'ian:bootstrap-3-theme',
  summary: 'The Bootstrap Theme from Bootstrap 3.2',
  version: '1.0.0'
});

Package.on_use(function (api) {
  api.use('jquery@1.0.0');

  api.add_files('css/bootstrap.min.css', 'client');
  api.add_files('js/bootstrap.min.js', 'client');

  // Fonts
  api.add_files('fonts/glyphicons-halflings-regular.eot', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.ttf', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.svg', 'client');
  api.add_files('fonts/glyphicons-halflings-regular.woff', 'client');
});
