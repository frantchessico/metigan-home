"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Gift, Loader2, CheckCircle, Sparkles, XCircle } from "lucide-react";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://savanapoint-metigan.kwbhel.easypanel.host/api";
const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || "https://app.metigan.com/sign-up";

export default function ReferralPage() {
  const params = useParams();
  const router = useRouter();
  const code = params.code as string;
  const [status, setStatus] = useState<"validating" | "valid" | "invalid">("validating");
  const [bonusCredits, setBonusCredits] = useState(250);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    async function validateAndRedirect() {
      try {
        // Validate the referral code
        const response = await fetch(`${API_URL}/referrals/validate/${code}`);
        const data = await response.json();

        if (data.valid) {
          setStatus("valid");
          setBonusCredits(data.bonusCredits || 250);

          // Store the referral code in localStorage and cookie
          if (typeof window !== "undefined") {
            localStorage.setItem("referralCode", code);
            document.cookie = `referralCode=${code}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`; // 30 days
          }

          // Redirect to signup after 2 seconds
          setTimeout(() => {
            window.location.href = `${SIGNUP_URL}?ref=${code}`;
          }, 2500);
        } else {
          setStatus("invalid");
          setErrorMessage(data.message || "Invalid referral code");
          // Redirect to home after showing error
          setTimeout(() => {
            router.push("/");
          }, 3500);
        }
      } catch (error) {
        console.error("Error validating referral:", error);
        // Still store the code and redirect (validation will happen on signup)
        if (typeof window !== "undefined") {
          localStorage.setItem("referralCode", code);
          document.cookie = `referralCode=${code}; path=/; max-age=${60 * 60 * 24 * 30}; SameSite=Lax`;
        }
        
        setStatus("valid");
        setTimeout(() => {
          window.location.href = `${SIGNUP_URL}?ref=${code}`;
        }, 2500);
      }
    }

    if (code) {
      validateAndRedirect();
    }
  }, [code, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {status === "validating" && (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/20 mb-6">
              <Loader2 className="w-10 h-10 text-violet-400 animate-spin" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Validating your invite...
            </h1>
            <p className="text-slate-400">
              Please wait while we verify your referral code
            </p>
          </div>
        )}

        {status === "valid" && (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 mb-6 relative">
              <CheckCircle className="w-10 h-10 text-green-400" />
              <Sparkles className="w-6 h-6 text-yellow-400 absolute -top-1 -right-1 animate-pulse" />
            </div>
            <h1 className="text-3xl font-bold text-white mb-3">
              Welcome! 🎉
            </h1>
            <p className="text-slate-300 text-lg mb-4">
              You have been invited to join Metigan!
            </p>
            <div className="bg-gradient-to-r from-violet-500/20 to-pink-500/20 border border-violet-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Gift className="w-6 h-6 text-violet-400" />
                <span className="text-violet-300 font-medium">Referral Bonus</span>
              </div>
              <p className="text-4xl font-bold text-white mb-1">
                +{bonusCredits}
              </p>
              <p className="text-slate-400 text-sm">
                Free credits waiting for you!
              </p>
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-400">
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Redirecting to sign up...</span>
            </div>
          </div>
        )}

        {status === "invalid" && (
          <div className="text-center animate-in fade-in zoom-in duration-500">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-red-500/20 mb-6">
              <XCircle className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-2xl font-bold text-white mb-3">
              Invalid Referral Code
            </h1>
            <p className="text-slate-400 mb-4">
              {errorMessage || "This referral code is invalid or has expired."}
            </p>
            <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" />
              Redirecting to homepage...
            </p>
          </div>
        )}

        {/* Referral Code Display */}
        <div className="mt-8 text-center">
          <p className="text-slate-500 text-sm mb-1">Referral Code</p>
          <p className="text-slate-300 font-mono text-lg tracking-wider">
            {code}
          </p>
        </div>
      </div>
    </div>
  );
}

