module.exports = {
  devServer: {
    disableHostCheck: true
  },
  publicPath: './',
  pwa: {
    // workboxPluginMode: 'InjectManifest',
    name: 'ACARB',
    themeColor: '#ffffff',
    msTileColor: '#00aba9',
    assetsVersion: '1.0',
    appleMobileWebAppCapable: 'yes',
    iconsPath: {
      favicon32: 'img/icons/favicon-32x32.png',
      favicon16: 'img/icons/favicon-16x16.png',
      appleTouchIcon: 'img/icons/apple-touch-icon-152x152.png',
      maskIcon: 'img/icons/safari-pinned-tab.svg',
      msTileImage: 'img/icons/mstile-144x144.png'
    },
    manifestOptions: {
      start_url: '/',
      orientation: 'portrait',
      background_color: '#ffffff',
      icons: [
        {
          src: 'img/icons/android-chrome-36x36.png',
          sizes: '36x36',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-48x48.png',
          sizes: '48x48',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-72x72.png',
          sizes: '72x72',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-96x96.png',
          sizes: '96x96',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-144x144.png',
          sizes: '144x144',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-256x256.png',
          sizes: '256x256',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-384x384.png',
          sizes: '384x384',
          type: 'image/png'
        },
        {
          src: 'img/icons/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
    },
  },
}
