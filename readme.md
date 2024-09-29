# Learning Webpack  

- Download npm
- npm install --save-dev webpack webpack-cli (download webpack)

## Loaders
- By default webpack only understands JSON files and JS files. Loaders allow webpack to process other types of files and convert them into valid modules that can be consumed by your application and added to the dependency.


At a high level, loaders have two properties in your webpack configuration:

- The `test` property identifies which file or files should be transformed.
- The `use` property indicates which loader should be used to do the transforming.

```
  module: {
    rules: [
        { 
            test: /\.css$/, 
            use: 'css-loader' 
        }
    ],
  },
```

# css-loader and style-loader
- This help webpack to understand how we style. css loader take css code turn into js. style loader help webpack to add style tag and use that css.

```
npm install --save-dev css-loader
npm install --save-dev style-loader
```

```
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
```

# Cache Busting and Plugins
- By default, our browser will cache our file like css if the js file doesn't change. So if we keep in dist just main.js then our css will not load. So we need to bust it. By add hash code to file main like main.[hash].js or main-[hash].js
- Webpack give a Plugins that update js file and also update script file in html.

- There are a lot of Plugins. But for now we use HtmlWebpackPlugin for our needs.

```
npm install --save-dev html-webpack-plugin
```

- HtmlWebpackPlugin create a new index.html in dist with new main.[hash].js in config file.

# Product and Dev server split
- We can split build into dev and prod. Which when we develop and save the code auto restart without manual and we don't need the dist folder, and also change the main to hash code like in product.

- We split config file into 3 files, common, prod, and dev. Then merge each file by use 

```
npm install --save-dev webpack-merge
```
- Config in package.json for production build and development build.
- When we npm run build then the webpack.prod will run and because of production mode, the main.[hash] js and html file will be minified
- For the development build, we don't have to build manually by install webpack-dev-server.

```
npm install --save-dev webpack-dev-server
```
- Then we can config in package.json. Using webpack-dev-server instead of webpack, and also use flag --open to automatically open in out web browser. And Also we will not have to build dist folder.

# HTML Loader and File Loader
- HTML loader Processes HTML files to resolve asset references (like images, stylesheets, scripts) and imports them into your JavaScript bundle. Useful for managing dynamic HTML templates.

- When we use images or somethings that contain import like "src/assets/image.png", file loader helps bundling of static files such as images, fonts. By using the file loader, Webpack ensures that all the static assets of your web project are included in the build process, linked correctly, and optimized for performance.It moves static assets (e.g., images like logo.png) to your build folder. Renames files for cache-busting (by adding hash values) and returns the proper URL for use in your app.

```
npm install --save-dev html-loader
```
```
npm install --save-dev file-loader
```

# clean-webpack-plugin
```
npm install --save-dev clean-webpack-plugin
```
- For webpack v4 and below, but for v5 we can config in webpack file 
```
output: {
  clean: true
}
```