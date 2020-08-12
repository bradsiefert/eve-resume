module.exports = {
  siteName: 'Eve E. Gardner - Resume',
  siteDescription: 'Resume website for Eve E. Gardner.',
  siteUrl: 'https://eve-gardner-resume.netlify.app',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    }
  ],
  css: {
    loaderOptions: {
      scss: {}
    }
  }
}