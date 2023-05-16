import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body data-layout="wide" data-color="blue" data-background="light" data-font="opensans" data-header="fixed" data-textdirection="ltr">
            <Main />
            <NextScript />
            </body>
        </Html>
    )
}