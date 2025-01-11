import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import Script from "next/Script";


const gabriella = localFont({
	src: './fonts/gabriela-regular-webfont.wolf',
	variable: '--font-gabriella',
	weight: "400",
})

export default function RootLayout({
	children,
  }: Readonly<{
	children: React.ReactNode;
  }>) {
	return (
	  <html lang="en" className={`${gabriella.variable}`}>
		<Script
		  async
		  src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}`}
		></Script>
		<Script id="google-analytics">
		  {`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
  
			gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID}');
		  `}
		</Script>
		<head>
		  <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
		  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
		  <link rel="shortcut icon" href="/favicon.ico" />
		  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
		  <meta name="apple-mobile-web-app-title" content="MyWebSite" />
		  <link rel="manifest" href="/site.webmanifest" />
		</head>
		<body
		  className={`antialiased max-w-[1440px] mx-auto px-[24px] md:px-[72px] lg:px-[144px] py-[36px] overflow-x-hidden`}
		>
		  <Nav />
		  {children}
		  <Footer />
		</body>
	  </html>
	);
  }