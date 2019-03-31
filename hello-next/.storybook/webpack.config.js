const path = require("path");

module.exports = ({ config, mode }) => {

    config.node = {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
    };
    
    config.module.rules.push({
        test: /\.tsx?$/,
        include: path.resolve(__dirname, '../'),
        use: [
            require.resolve('@storybook/addon-storysource/loader'),
            {
                loader: require.resolve('babel-loader'),
                options: {
                    presets: [require.resolve('babel-preset-react-app')],
                },
            },
            require.resolve('react-docgen-typescript-loader'),
        ],
    });

    // Add Typescript Files
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
};
