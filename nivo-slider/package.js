Package.describe({
  summary: "The world's most awesome jQuery & WordPress Image Slider"
});

Package.on_use(function (api)
{
  api.use('jquery', 'client');
  api.add_files('nivo-slider/nivo-slider.css', 'client');
  api.add_files('nivo-slider/themes/about-local/default.css', 'client');
  api.add_files('nivo-slider/themes/about-local/arrows.png', 'client');
  api.add_files('nivo-slider/themes/about-local/bullets.png', 'client');
  api.add_files('nivo-slider/themes/about-local/loading.gif', 'client');
  api.add_files('nivo-slider/jquery.nivo.slider.pack.js', 'client');
});
