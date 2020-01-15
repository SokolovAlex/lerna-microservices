export default {
    mode: "development",
    devtool: "eval-source-map",
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,
            loader: "ts-loader",
            options: {
                //context: __dirname,
                configFile: require.resolve("../../tsconfig.json")
            }
        },
        {
            test: /\.svg$/,
            exclude: /node_modules/,
            loader: "svg-react-loader"
        }]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".jsx", ".js"]
    },
};
