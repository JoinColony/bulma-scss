Package.describe({
  name: 'colony:bulma-scss',
  version: '0.0.18',
  // Brief, one-line summary of the package.
  summary: 'This is an packaged scss version of the popular bulma css framework',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');
  api.use([
    'meteor',
    'fourseven:scss@3.4.1'
  ]);
  api.addFiles([
    '_bulma.scss',
    'bulma/base/_base.scss',
    'bulma/base/_content.scss',
    'bulma/base/_generic.scss',
    'bulma/base/_helpers.scss',
    'bulma/base/_highlight.scss',
    'bulma/components/_card.scss',
    'bulma/components/_components.scss',
    'bulma/components/_grid.scss',
    'bulma/components/_media.scss',
    'bulma/components/_menu.scss',
    'bulma/components/_modal.scss',
    'bulma/components/_navbar.scss',
    'bulma/components/_pagination.scss',
    'bulma/components/_panel.scss',
    'bulma/components/_table.scss',
    'bulma/components/_tabs.scss',
    'bulma/config/_generated-variables.scss',
    'bulma/config/_variables.scss',
    'bulma/elements/_buttons.scss',
    'bulma/elements/_controls.scss',
    'bulma/elements/_elements.scss',
    'bulma/elements/_images.scss',
    'bulma/elements/_messages.scss',
    'bulma/elements/_notifications.scss',
    'bulma/elements/_progress.scss',
    'bulma/elements/_titles.scss',
    'bulma/layout/_footer.scss',
    'bulma/layout/_header.scss',
    'bulma/layout/_hero.scss',
    'bulma/layout/_layout.scss',
    'bulma/layout/_section.scss',
    'bulma/utilities/_animations.scss',
    'bulma/utilities/_functions.scss',
    'bulma/utilities/_mixins.scss',
    'bulma/utilities/_reset.scss',
    'bulma/utilities/_utilities.scss',
  ], 'client');
});

Package.onTest(function(api) {
});
