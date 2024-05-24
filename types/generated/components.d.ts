import type { Schema, Attribute } from '@strapi/strapi';

export interface MainAboutMyself extends Schema.Component {
  collectionName: 'components_main_about_myselves';
  info: {
    displayName: 'About Myself';
    description: '';
  };
  attributes: {
    background: Attribute.Enumeration<
      [
        'white',
        'ghostWhite',
        'lightGrey',
        'vividRed',
        'periwinkleBlue',
        'salmonPink',
        'mauveTaupe'
      ]
    >;
    show_about_myself: Attribute.Boolean & Attribute.Required;
  };
}

export interface MainJobHistory extends Schema.Component {
  collectionName: 'components_main_job_histories';
  info: {
    displayName: 'Job History';
    description: '';
  };
  attributes: {
    background: Attribute.Enumeration<
      [
        'white',
        'ghostWhite',
        'lightGrey',
        'vividRed',
        'periwinkleBlue',
        'salmonPink',
        'mauveTaupe'
      ]
    > &
      Attribute.Required;
    card_background: Attribute.Enumeration<
      [
        'white',
        'ghostWhite',
        'lightGrey',
        'vividRed',
        'periwinkleBlue',
        'salmonPink',
        'mauveTaupe'
      ]
    > &
      Attribute.Required;
    card_hover_background: Attribute.Enumeration<
      [
        'white',
        'ghostWhite',
        'lightGrey',
        'vividRed',
        'periwinkleBlue',
        'salmonPink',
        'mauveTaupe'
      ]
    > &
      Attribute.Required;
    show_job_history: Attribute.Boolean & Attribute.Required;
  };
}

export interface MainServices extends Schema.Component {
  collectionName: 'components_main_services';
  info: {
    displayName: 'Services';
    description: '';
  };
  attributes: {
    background: Attribute.Enumeration<
      [
        'white',
        'ghostWhite',
        'lightGrey',
        'vividRed',
        'periwinkleBlue',
        'salmonPink',
        'mauveTaupe'
      ]
    >;
    show_service: Attribute.Boolean & Attribute.Required;
  };
}

export interface MainSocalLinks extends Schema.Component {
  collectionName: 'components_main_socal_links';
  info: {
    displayName: 'Socal Links';
    description: '';
  };
  attributes: {
    social_icon: Attribute.Enumeration<
      [
        'LinkedinIcon',
        'TwitterIcon',
        'FacebookIcon',
        'InstagramIcon',
        'YoutubeIcon'
      ]
    > &
      Attribute.Required;
    hover_color: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'main.about-myself': MainAboutMyself;
      'main.job-history': MainJobHistory;
      'main.services': MainServices;
      'main.socal-links': MainSocalLinks;
    }
  }
}
