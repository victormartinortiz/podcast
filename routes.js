const routes = require('next-routes');

module.exports = routes()
  .add('index') // index
  .add('channel', '/:slug.:id', 'channel')
  .add('podcast', '/:slugChannel.:idChannel/:slug.:id', 'podcast')
