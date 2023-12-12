import type { Schema, Attribute } from '@strapi/strapi';

export interface TestingTestComponent extends Schema.Component {
  collectionName: 'components_testing_test_components';
  info: {
    displayName: 'Work Experience';
    description: '';
  };
  attributes: {
    CompanyName: Attribute.String;
    Location: Attribute.String;
    Start: Attribute.Date;
    End: Attribute.Date;
    Accomplishments: Attribute.Blocks;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testing.test-component': TestingTestComponent;
    }
  }
}
