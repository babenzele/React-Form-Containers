Package.describe({
  name: "utilities:react-form-containers",
  summary: "Form containers for React",
  version: "0.1.0",
  git: "https://github.com/meteor-utilities/react-form-containers.git"
});

Package.onUse(function(api) {

  api.versionsFrom("METEOR@1.3-beta.11");
  
  api.use([
    'react',
    'modules',
    'ecmascript',
    'jsx',
    'utilities:smart-methods'
  ]);

  api.mainModule("lib/export.js", ["client", "server"]);

});