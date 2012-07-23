Package.describe({
  summary: "No-image spinners"
});

Package.on_use(function (api)
{
  api.use('jquery', 'client');
  api.add_files('spin.js', 'client');
});
