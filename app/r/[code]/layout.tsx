import { Metadata } from "next";

export const metadata: Metadata = {
  title: "You've been invited to Metigan! - Get Free Credits",
  description:
    "Join Metigan with this special referral link and get bonus credits to start sending beautiful emails!",
  openGraph: {
    title: "You've been invited to Metigan!",
    description: "Join with this referral link and get bonus credits!",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "You've been invited to Metigan!",
    description: "Join with this referral link and get bonus credits!",
  },
};

export default function ReferralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

