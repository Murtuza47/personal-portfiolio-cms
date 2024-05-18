'use strict';

/**
 * about-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::about-component.about-component');
