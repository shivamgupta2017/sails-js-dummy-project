/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },
  'POST /api/v1/note': { action: 'note/save-note' },
  // 'POST /api/v1/account/contributor': { action: 'contribution/contributors' },
  // 'POST /api/v1/account/settlement/:contributorId': { action: 'contribution/contribution-settlement' },
  'DELETE /api/v1/note/:id': { action: 'note/delete' },
  // 'delete /api/v1/account/contributor/:id': { action: 'contribution/delete-contributor' },
  // 'get /api/v1/account/': { action: 'contribution/contribution-list' },
  // 'get /api/v1/account/:contributionId': { action: 'contribution/contribution-calculation-detail' },
  // 'get /api/v1/account/contribution/:id': { action: 'contribution/contribution-detail' },
  'put /api/v1/note': { action: 'note/update-note' },
  'get /api/v1/note': {action: 'note/render-note' },
  'get /api/v1/category': { action: 'category/list' },


};

