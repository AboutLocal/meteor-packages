Package.describe({
  summary: "a slideshow plugin that supports many different types of transition effects"
});

Package.on_use(function (api)
{
  api.use('jquery', 'client');
  api.add_files('jquery-cycle/jquery.cycle.all.js', 'client');
});
