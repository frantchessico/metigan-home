interface Window {
    gtag: (
      command: "event" | "config" | "consent" | "set",
      targetId: string,
      config?: Record<string, any> | undefined,
    ) => void
    dataLayer: any[]
  }
  