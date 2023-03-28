//plugins
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //css
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

//root
const path = require("path")
//configurations
module.exports ={
    mode : "development" ,//dev mode
    entry: { //multiple entry points
        index :"./src/index.js",
        universal: "./src/js/universal.js"
    } ,
    output:{ //multiple outputs
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].bundle.js',
    },
    //css plugin for css bundle and HTML BUNDLE
    plugins:[
      ...['aceptar', 'clinica', 'cocina', 'continuar', 'enfrentar', 'esposa', 
      'habitacion', 'huir', 'leer', 'llamar', 'llantas', 'mihistoria', 'no', 'noaceptar', 
      'noleer', 'notrafico', 'que', 'si', 'sno', 'sol', 'sotano', 'ssi', 'todocorrecto'].map((event) => 
        new HtmlWebpackPlugin({
            template: `./src/Historia/${event}.html`,
            filename: `Historia/${event}.html`,
            chunks: 'universal'
          })
        )
       ,
       ...['popular','lanzamientos'].map((event) => 
        new HtmlWebpackPlugin({
            template: `./src/Biblioteca/${event}.html`,
            filename: `Biblioteca/${event}.html`,
            chunks: 'universal'
          })
        ),
        ...['epc','lci','lpdal','valmnalg'].map((event) => 
        new HtmlWebpackPlugin({
            template: `./src/Books/${event}.html`,
            filename: `Books/${event}.html`,
            chunks: 'universal'
          })
        )
       ,new HtmlWebpackPlugin({ 
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index']
    }
  ) , 
      new MiniCssExtractPlugin({
        filename: "[name].css"
      }) ,
      new CleanWebpackPlugin({cleanAfterEveryBuildPatterns: ['dist']})
    ],
    //module rules, creating bundle for a scss
    module: {
      rules: [
        {
          test: /\.s[ac]ss$/i,
          use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
          ],
        }
      ],
    }
    
};
    
