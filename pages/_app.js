// pages/_app.js
import React from "react";
import {Provider} from "react-redux";
import App, {Container} from "next/app";
import withRedux from "next-redux-wrapper";

import store from '../redux/store';

import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import getPageContext from '../helper/getPageContext';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import { jssPreset } from '@material-ui/core/styles';

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
const makeStore = (options) => {
    return store;
};

class MyApp extends App {
    constructor() {
        super();
        this.pageContext = getPageContext();
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles);
        }
    }
    
    static async getInitialProps({Component, ctx}) {
        return {
            pageProps: {
                // Call page-level getInitialProps
                ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
            }
        };
    }

    render() {
        const {Component, pageProps, store} = this.props;
        return (
            <Container>
                <JssProvider
                    registry={this.pageContext.sheetsRegistry}
                    generateClassName={this.pageContext.generateClassName}
                >   
                    {/*make theme available to tree*/}
                    <MuiThemeProvider theme={this.pageContext.theme} sheetsManager={this.pageContext.sheetsManager}>
                        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                        <CssBaseline />
                        <Provider store={store}>
                            {/* Pass pageContext to the _document though the renderPage enhancer
                            to render collected styles on server-side. */}
                            <Component pageContext={this.pageContext} {...pageProps} />
                        </Provider>
                    </MuiThemeProvider>
                </JssProvider>
            </Container>
        );
    }

}

export default withRedux(makeStore)(MyApp);