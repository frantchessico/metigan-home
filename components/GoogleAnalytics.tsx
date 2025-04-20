"use client"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function GoogleAnalytics({ googleAdsId = "AW-17020158384" }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    // Track page views when the route changes
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
      })
    }
  }, [pathname, searchParams])

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=AW-17020158384`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-17020158384');
        `}
      </Script>
    </>
  )
}
