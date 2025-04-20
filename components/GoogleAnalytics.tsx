"use client"

import Script from "next/script"
import { useEffect } from "react"
import { usePathname, useSearchParams } from "next/navigation"

export default function GoogleAnalytics({ googleAdsId = "AW-17020158384", twitterEventId = "tw-pkfiv-pkfix" }) {
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
      {/* Google Analytics */}
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${googleAdsId}`} strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${googleAdsId}');
        `}
      </Script>

      {/* Twitter Pixel */}
      <Script id="twitter-pixel" strategy="afterInteractive">
        {`
          !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):s.queue.push(arguments);
          },s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,u.src='https://static.ads-twitter.com/uwt.js',
          a=t.getElementsByTagName(n)[0],a.parentNode.insertBefore(u,a))}(window,document,'script');
          twq('config','${twitterEventId}');
        `}
      </Script>

      {/* Twitter Conversion Tracking */}
      <Script id="twitter-conversion" strategy="afterInteractive">
        {`
          function setupTwitterConversion() {
            if (typeof twq !== 'undefined') {
              twq('event', '${twitterEventId}', {
                value: null,
                currency: null,
                contents: [
                  {
                    content_type: null,
                    content_id: null,
                    content_name: null,
                    content_price: null,
                    num_items: null,
                    content_group_id: null
                  },
                  {
                    content_type: null,
                    content_id: null,
                    content_name: null,
                    content_price: null,
                    num_items: null,
                    content_group_id: null
                  }
                ],
                status: null,
                conversion_id: null,
                email_address: null,
                phone_number: null
              });
            }
          }
          
          // Run after Twitter pixel is loaded
          if (typeof twq !== 'undefined') {
            setupTwitterConversion();
          } else {
            window.addEventListener('load', function() {
              setTimeout(setupTwitterConversion, 1000);
            });
          }
        `}
      </Script>
    </>
  )
}
