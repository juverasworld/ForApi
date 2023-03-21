import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
 
     render() {
       return (
         <Html>
           <Head />
           <body>
             <Main />
             <NextScript />
             
    
           </body>
         </Html>
       )
     }
   }

// // import '../styles/global.css'


// // import document, { $ } from 'jquery'
// import { AppProps } from 'next/app'
// // import "bootstrap/dist/css/bootstrap.min.css"
// import Script from 'next/script'
// export default function Document({ Component, pageProps }: AppProps) {
//   return (
//     <>


//       <Script src='/js/vendor/jquery-3.6.0.min.js' />
//       <Script src='/js/vendor/jquery-migrate-3.3.2.min.js' />
//       <Script src='/js/popper.min.js' />
//       <Script src='/js/bootstrap.min.js' />
//       <Script src="/js/owl-carousel.min.js" />
//       <Script src="/js/scrollup.min.js" />
//       <Script src="/js/meanmenu.min.js" />
//       <Script src="/js/counterup.min.js" />
//       <Script

//         src='/js/ajax.mail.js' />
//       <Script src="/js/niceselect.min.js" />
//       <Script src='/js/images-loaded.min.js' />
//       <Script src="/js/venobox.min.js" />
//       <Script src='/js/matchheight.min.js' />
//       <Script src="/js/slick.min.js" />
//       <Script src='/js/main.js' />
//       <Script src='/js/plugins.js' />

//       <Script src='/js/vendor/modernizr-3.6.0.min.js' />
      
//       <Component {...pageProps} />
//     </>
//   )

// }