"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Gift, Loader2, ArrowRight } from "lucide-react";

// Go API (public route, no account needed). NEXT_PUBLIC_API_URL pointed at
// the retired Node host, so it is not used here.
const API_URL = process.env.NEXT_PUBLIC_METIGAN_API_URL || "https://api.metigan.io/api/v2";
const SIGNUP_URL = process.env.NEXT_PUBLIC_SIGNUP_URL || "https://app.metigan.io/sign-up";

type State = { status: "checking" } | { status: "valid"; bonus: number } | { status: "invalid" };

export default function ReferralPage() {
  const params = useParams();
  const code = String(params?.code || "").trim();
  const [state, setState] = useState<State>({ status: "checking" });
  const signup = `${SIGNUP_URL}?ref=${encodeURIComponent(code)}`;

  useEffect(() => {
    if (!code) {
      setState({ status: "invalid" });
      return;
    }
    let alive = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const go = (delay: number) => {
      timer = setTimeout(() => window.location.assign(signup), delay);
    };
    fetch(`${API_URL}/referrals/validate/${encodeURIComponent(code)}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error(String(r.status)))))
      .then((d) => {
        if (!alive) return;
        if (d?.valid) {
          setState({ status: "valid", bonus: Number(d.bonusCredits) || 0 });
          go(1600);
        } else {
          setState({ status: "invalid" });
        }
      })
      .catch(() => {
        // Could not check the code: never lose it, the sign-up validates again.
        if (alive) go(0);
      });
    return () => {
      alive = false;
      if (timer) clearTimeout(timer);
    };
  }, [code, signup]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-neutral-950 p-4 text-white">
      <div className="w-full max-w-md text-center">
        {state.status === "checking" && (
          <>
            <Loader2 className="mx-auto mb-6 h-8 w-8 animate-spin text-neutral-400" />
            <h1 className="text-xl font-semibold">Checking your invite…</h1>
          </>
        )}

        {state.status === "valid" && (
          <>
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-neutral-950">
              <Gift className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">You&apos;ve been invited to Metigan</h1>
            {state.bonus > 0 && (
              <p className="mt-3 text-lg text-neutral-300">
                Sign up and get <span className="font-semibold text-white">{new Intl.NumberFormat("en-US").format(state.bonus)} free credits</span>.
              </p>
            )}
            <a
              href={signup}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
            >
              Create your account
              <ArrowRight className="h-4 w-4" />
            </a>
            <p className="mt-4 flex items-center justify-center gap-2 text-sm text-neutral-500">
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
              Taking you there…
            </p>
          </>
        )}

        {state.status === "invalid" && (
          <>
            <h1 className="text-2xl font-semibold tracking-tight">This invite is no longer active</h1>
            <p className="mt-3 text-neutral-400">You can still create a free account — it only takes a minute.</p>
            <a
              href={SIGNUP_URL}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-neutral-950 transition-opacity hover:opacity-90"
            >
              Create your account
              <ArrowRight className="h-4 w-4" />
            </a>
          </>
        )}

        {code && (
          <p className="mt-10 font-mono text-xs tracking-widest text-neutral-600">
            {code.toUpperCase()}
          </p>
        )}
      </div>
    </div>
  );
}
