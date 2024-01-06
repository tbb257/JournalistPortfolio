import type { Schema, Attribute } from '@strapi/strapi';

export interface ArticleArticleSource extends Schema.Component {
  collectionName: 'components_article_article_sources';
  info: {
    displayName: 'ArticleSource';
    icon: 'archive';
    description: '';
  };
  attributes: {
    ArticleHeadline: Attribute.String & Attribute.Required;
    ArticleURL: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'article.article-source': ArticleArticleSource;
    }
  }
}
