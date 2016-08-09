Package.describe({
  name: 'chmanie:bulma-scss',
  version: '0.1.2',
  // Brief, one-line summary of the package.
  summary: 'This is an packaged scss version of the popular bulma css framework',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/chmanie/bulma-scss',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.3');
  api.use([
    'meteor',
    'fourseven:scss@3.8.0_1'
  ]);
  api.addFiles([
    'dist/_bulma.scss',
    'dist/sass/base/_base.scss',
    'dist/sass/base/_classes.scss',
    'dist/sass/base/_generic.scss',
    'dist/sass/base/_helpers.scss',
    'dist/sass/components/_card.scss',
    'dist/sass/components/_components.scss',
    'dist/sass/components/_grid.scss',
    'dist/sass/components/_highlight.scss',
    'dist/sass/components/_level.scss',
    'dist/sass/components/_media.scss',
    'dist/sass/components/_menu.scss',
    'dist/sass/components/_message.scss',
    'dist/sass/components/_modal.scss',
    'dist/sass/components/_nav.scss',
    'dist/sass/components/_pagination.scss',
    'dist/sass/components/_panel.scss',
    'dist/sass/components/_tabs.scss',
    'dist/sass/elements/_box.scss',
    'dist/sass/elements/_button.scss',
    'dist/sass/elements/_content.scss',
    'dist/sass/elements/_elements.scss',
    'dist/sass/elements/_form.scss',
    'dist/sass/elements/_image.scss',
    'dist/sass/elements/_notification.scss',
    'dist/sass/elements/_other.scss',
    'dist/sass/elements/_progress.scss',
    'dist/sass/elements/_table.scss',
    'dist/sass/elements/_title.scss',
    'dist/sass/layout/_footer.scss',
    'dist/sass/layout/_hero.scss',
    'dist/sass/layout/_layout.scss',
    'dist/sass/layout/_section.scss',
    'dist/sass/utilities/_animations.scss',
    'dist/sass/utilities/_controls.scss',
    'dist/sass/utilities/_functions.scss',
    'dist/sass/utilities/_mixins.scss',
    'dist/sass/utilities/_reset.scss',
    'dist/sass/utilities/_utilities.scss',
    'dist/sass/utilities/_variables.scss'
  ], 'client');
});
