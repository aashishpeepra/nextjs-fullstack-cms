import '../styles/globals.css'
import Navigation from "../components/navigation/navigation"

function MyApp({ Component, pageProps }) {
  return(
    <>
    <Navigation/>
    <Component {...pageProps}/>

    </>
  )
}

export default MyApp
