import Layout from "../components/Layout"
import "../styles/globals.css"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  if (
    router.asPath == "/login" ||
    router.asPath == "/signup" ||
    router.asPath == "/"
  ) {
    return <Component {...pageProps} />
  }
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default dynamic(() => Promise.resolve(MyApp), { ssr: false })
