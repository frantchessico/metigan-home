import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-950 via-slate-900 to-slate-950 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-violet-500/20 mb-6">
          <Loader2 className="w-10 h-10 text-violet-400 animate-spin" />
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">
          Loading...
        </h1>
        <p className="text-slate-400">
          Please wait
        </p>
      </div>
    </div>
  );
}

