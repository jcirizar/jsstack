var controller = require('../controllers/site.controller');

module.exports = function(app) {
  app.route('/api').get(controller.api);
};
