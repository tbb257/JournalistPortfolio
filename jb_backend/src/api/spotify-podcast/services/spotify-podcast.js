'use strict';

/**
 * spotify-podcast service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::spotify-podcast.spotify-podcast');
