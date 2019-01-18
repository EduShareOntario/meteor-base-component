Package.describe({
  name: 'edushareontario:base-component',
  summary: "Base component for reusable Meteor components, with Coffeescript2 compatible dependencies!",
  version: '0.16.1',
  git: 'https://github.com/edushareontario/meteor-base-component.git',
  documentation: null
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.4.4.5');

  // Core dependencies.
  api.use([
    'coffeescript@2.2.1_1',
    'reactive-var',
    'tracker',
    'underscore'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:assert@0.2.5',
    'peerlibrary:reactive-field@0.5.0',
    'peerlibrary:computed-field@0.9.0'
  ]);

  api.export('BaseComponent');
  // TODO: Move to a separate package. Possibly one with debugOnly set to true.
  api.export('BaseComponentDebug');

  api.addFiles([
    'lib.coffee',
    'debug.coffee'
  ]);
});

Package.onTest(function (api) {
  // Core dependencies.
  api.use([
    'coffeescript',
    'templating',
    'jquery',
    'reactive-var',
    'tracker'
  ]);

  // Internal dependencies.
  api.use([
    'edushareontario:base-component'
  ]);

  // 3rd party dependencies.
  api.use([
    'peerlibrary:classy-test@0.2.19'
  ]);

  api.addFiles([
    'tests.coffee'
   ], 'client');
});
