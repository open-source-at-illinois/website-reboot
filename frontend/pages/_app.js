import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (<>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Comfortaa&family=Karma&family=Saira&family=Saira+Condensed&display=swap" rel="stylesheet"/>
    <Component {...pageProps} />
  </>)
}

export default MyApp
