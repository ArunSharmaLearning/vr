const path = require('path');
const withImages = require('next-images');

module.exports = withImages({
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  esModule: true,
  fileExtensions: ['glb'] // Add 'glb' extension to handle GLB files
});
