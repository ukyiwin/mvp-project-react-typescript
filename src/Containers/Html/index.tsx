//tslint:disable
import { IStore } from 'redux/IStore';
import * as React from 'react';
import { Helmet } from 'react-helmet';
import * as serialize from 'serialize-javascript';

interface IHtmlProps {
  manifest?: any;
  markup?: string;
  store?: Redux.Store<IStore>;
}

class Html extends React.Component<IHtmlProps, {}> {
  // tslint:disable-next-line:typedef
  private resolve(files) {
    return files.map((src) => {
      if (!this.props.manifest[src]) { return null; }
      return '/public/' + this.props.manifest[src];
    }).filter((file) => file !== undefined);
  }

  public render() {
    const head = Helmet.rewind();
    const { markup, store } = this.props;

    const styles = this.resolve(['vendor.css', 'app.css']);
    const renderStyles = styles.map((src, i) =>
      <link key={i} rel="stylesheet" type="text/css" href={src} />,
    );

    const scripts = this.resolve(['vendor.js', 'app.js']);
    const renderScripts = scripts.map((src, i) =>
      <script src={src} key={i} />,
    );

    // tslint:disable-next-line:max-line-length
    const initialState = (
      // tslint:disable-next-line:max-line-length
      <script dangerouslySetInnerHTML={{ __html: `window.__INITIAL_STATE__=${serialize(store ? store.getState() : null, { isJSON: true })};` }}
              charSet="UTF-8" />
    );

    return (
      <html>
        <head>
          {head.base.toComponent()}
          {head.title.toComponent()}
          {head.meta.toComponent()}
          {head.link.toComponent()}
          {head.script.toComponent()}

          {renderStyles}
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
          <link rel="manifest" href="/site.webmanifest"/>
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
          <meta name="msapplication-TileColor" content="#da532c"/>
          <meta name="theme-color" content="teal"/>

          <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'/>
          <link href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700" rel="stylesheet"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css" rel="stylesheet"/>
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg" />

          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit.min.js" />
          <script src="https://cdnjs.cloudflare.com/ajax/libs/uikit/3.0.0-beta.40/js/uikit-icons.min.js" />
        </head>
        <body>
          <main id="app" dangerouslySetInnerHTML={{ __html: markup ? markup : '' }} />
          {initialState}
          {renderScripts}
        </body>
      </html>
    );
  }
}

export { Html };
