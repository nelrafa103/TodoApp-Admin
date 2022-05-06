'use strict';

/**
 *  sign-in controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::sign-in.sign-in');
