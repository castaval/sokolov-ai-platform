import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        const pageProps = this.props?.__NEXT_DATA__?.props?.pageProps;
        return (
            <Html>
                <Head />
                <body className={'nk-body bg-white npc-subscription has-aside'}>
                    <div className="nk-app-root">
                        <div className="nk-main">
                            <div className="nk-wrap">
                                <Main />
                                <NextScript />
                            </div>
                        </div>
                    </div>
                    <script src="/assets/js/bundle.js"></script>
                </body>
            </Html>
        );
    }
}