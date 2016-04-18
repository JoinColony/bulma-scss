Package.describe({
  name: 'colony:bulma-scss',
  version: '0.0.21',
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
    'dist/_bulma.scss',
    'dist/bulma/base/_base.scss',
    'dist/bulma/base/_content.scss',
    'dist/bulma/base/_generic.scss',
    'dist/bulma/base/_helpers.scss',
    'dist/bulma/base/_highlight.scss',
    'dist/bulma/components/_card.scss',
    'dist/bulma/components/_components.scss',
    'dist/bulma/components/_grid.scss',
    'dist/bulma/components/_media.scss',
    'dist/bulma/components/_menu.scss',
    'dist/bulma/components/_modal.scss',
    'dist/bulma/components/_navbar.scss',
    'dist/bulma/components/_pagination.scss',
    'dist/bulma/components/_panel.scss',
    'dist/bulma/components/_table.scss',
    'dist/bulma/components/_tabs.scss',
    'dist/bulma/config/_generated-variables.scss',
    'dist/bulma/config/_variables.scss',
    'dist/bulma/elements/_buttons.scss',
    'dist/bulma/elements/_controls.scss',
    'dist/bulma/elements/_elements.scss',
    'dist/bulma/elements/_images.scss',
    'dist/bulma/elements/_messages.scss',
    'dist/bulma/elements/_notifications.scss',
    'dist/bulma/elements/_progress.scss',
    'dist/bulma/elements/_titles.scss',
    'dist/bulma/layout/_footer.scss',
    'dist/bulma/layout/_header.scss',
    'dist/bulma/layout/_hero.scss',
    'dist/bulma/layout/_layout.scss',
    'dist/bulma/layout/_section.scss',
    'dist/bulma/utilities/_animations.scss',
    'dist/bulma/utilities/_functions.scss',
    'dist/bulma/utilities/_mixins.scss',
    'dist/bulma/utilities/_reset.scss',
    'dist/bulma/utilities/_utilities.scss'
  ], 'client');
});
