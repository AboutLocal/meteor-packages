Package.describe({
  summary: "A jQuery plugin from GSGD to give advanced easing options."
});

Package.on_use(function (api)
{
  api.use('jquery', 'client');
  api.add_files('jquery-easing/jquery.easing.1.3.js', 'client');
});
