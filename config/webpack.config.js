module.exports = {
    entry: '../public/js/main.js',
    output: {
        filename: '../../public/js/bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        alias: {
            vue$: 'vue/dist/vue.common.js'
        }
    },
};
