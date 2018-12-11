const path = require("path");
const HtmlPlugin = require("html-webpack-plugin");


function resolve(dir) {
    return path.resolve(__dirname,dir)
}
module.exports={
    entry:"./src/main.js",
    output:{
        path:resolve("dist"),
        filename:"bundle.js"
    },
    module:{
         rules:[
             {
                 test:/\.js$/,
                 loader:"babel-loader",
                 include:[resolve("src")]
             },
             {
                 test:/\.css$/,
                 use:["style-loader","css-loader","less-loader"]
             },
             {
                 test:/\.(jpg|png|svg|gif)/,
                 use:"file-loader"
             }
         ]
    },
    plugins:[
        new HtmlPlugin({
               template:"index.html",
               filename:"index.html",
         })
    ]
}