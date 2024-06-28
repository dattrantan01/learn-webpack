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

