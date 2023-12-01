// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Construction Excavation YB',
  icon: './src/assets/logo.png',
  plugins: [
    {
      use: 'gridsome-plugin-sass-resources-loader',
      options: {
        // provide path to the file with resources
        resources: './src/assets/css/style.scss',

        // or array of paths
       // resources: ['@/path/to/first-resources.sass', '@/path/to/second-resources.scss'],

        // or from the npm package
        //resources: ['my-package/sass/resources.scss']
      }
    },
    {
      use: "gridsome-plugin-tailwindcss2",
      options: {
        tailwindConfigFile: './tailwind.config.js',
        mainCssFile: './src/assets/css/style.scss',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/services/**/*.md',
        typeName: 'Services'
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: './content/realisations/**/*.md',
        typeName: 'Realisations'
      }
    }
  ]
}
