import React from 'react';
import Head from 'next/head';
import { insertRule, style } from 'next/css';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

export default Content => {
  class App extends React.Component {
    constructor(props) {
      super(props);
    }
    
    render() {
      return (
        <div>
          <Head>
            <meta charSet="utf-8" />
            <title>Nextjs-Rebass</title>
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta id="theme-color" name="theme-color" content="#4527A0" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <link rel="manifest" href="static/manifest.json" />
            <link rel="icon" href="static/chrome-touch-icon-192x192.png" sizes="192x192" type="image/png" />
          </Head>
          <Header />
          <main className={style(styles.page)}>
            <Content
              {...this.props}
              {...this.state}

            />
          </main>
          <Footer />
        </div>
      );
    }
  }

  return App;
};

// Global styles

insertRule("html, body { margin: 0; padding: 0; }")
const styles = {
  page: {
    padding: '10px'
  }
}


