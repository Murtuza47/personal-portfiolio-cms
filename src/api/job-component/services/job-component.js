'use strict';

/**
 * job-component service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::job-component.job-component');
