Package.describe({
  name: 'ian:bootstrap-3-theme',
  summary: 'The Bootstrap Theme from Bootstrap 3.x',
  version: '3.3.1',
  git: "https://github.com/ianmartorell/meteor-bootstrap-3-theme"
});

Package.on_use(function (api) {
  api.use([
    'jquery@1.0.0',
    'ian:bootstrap-3@3.3.1',
    ], 'client');

  api.add_files('css/bootstrap-theme.css', 'client');
});
