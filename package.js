Package.describe({
  name: 'ian:bootstrap-3-theme',
  summary: 'The Bootstrap Theme from Bootstrap 3.2',
  version: '1.0.1',
  git: "https://github.com/ianmartorell/meteor-bootstrap-3-theme"
});

Package.on_use(function (api) {
  api.use([
    'jquery@1.0.0',
    'ian:bootstrap-3@1.0.2',
    ], 'client');

  api.add_files('css/bootstrap-theme.min.css', 'client');
});
