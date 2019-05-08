import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet, createGlobalStyle } from 'styled-components';
import flush from 'styled-jsx/server';

const scripts = (
  <>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
  </>
)

export default class MyCustomDocument extends Document {
  
  static getInitialProps ({ renderPage }) {
    const sheet = new ServerStyleSheet()
    let pageContext;
    const page = renderPage(App => props => {
      pageContext = props.pageContext;
      return sheet.collectStyles(<App {...props} />)
    });

    let css;
    if(pageContext){
      css = pageContext.sheetsRegistry.toString()
    }
    const styleTags = sheet.getStyleElement()
    return { ...page, 
      pageContext, 
      styleTags,
      styles: (
        <React.Fragment>
          <style
            id="jss-server-side"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: css }}
          />
          {flush() || null}
        </React.Fragment>
      )
    } // return styles collected
  }


  render () {
    const { pageContext } = this.props;

    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          <meta
            name="theme-color"
            content={pageContext ? pageContext.theme.palette.primary.main : null}
          />
          <link rel="icon" href="/static/images/logo.png" type="image/x-icon"/>
          {this.props.styleTags}
          {scripts}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}