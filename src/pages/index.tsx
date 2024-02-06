import Home_container from "@/components/home";
import Image from "next/image";
import { useEffect , useState } from "react";
import "@/i18next";
import { useTranslation } from "react-i18next";
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion';
import PreLoader from "@/components/PreLoader/PreLoader";
import Cookies from "js-cookie";
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect( () => {
    (
      async () => {
          // const LocomotiveScroll = (await import('locomotive-scroll')).default
          // const locomotiveScroll = new LocomotiveScroll();
          // if(Cookies.get('visit')  === 'yes'){
          //   setVisited(true)
          // } else{
          //   Cookies.set('visit', 'yes', { expires: 1 })
          // }
          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 3000)
      }
    )()
  }, [])
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.dir = i18n.dir();
  });
  return (
    <>
      <Head>
        <title>Etok / ایتوک</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.svg" className="w-10 h-10" />
        <link
  rel="stylesheet"
  type="text/css"
  charSet="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
      </Head>
      <main>
      <AnimatePresence mode='wait'>
        {isLoading && <PreLoader />}
      </AnimatePresence>
        <Home_container />
      </main>
    </>
  );
}
