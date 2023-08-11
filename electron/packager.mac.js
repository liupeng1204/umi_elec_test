const packager = require('electron-packager');

const options = {
  dir: './',
  name: 'UmiElectronTestApp',
  platform: 'darwin',
  arch: 'x64',
  version: '2.0.1',
  out: './out-mac',
  // icon: './icon.ico',
  overwrite: true,
};

packager(options);
