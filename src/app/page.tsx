import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen bg-[#111] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-900 to-black text-neutral-200 flex items-center justify-center p-4 sm:p-8">
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-6 sm:gap-8">
        {/* Name */}
        <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter">
          Isaac Dyor
        </h1>

        {/* Bio */}
        <div className="flex flex-col items-center gap-1 text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md">
          <p>
            20 year old engineer building agents at{" "}
            <Link
              href="https://wordware.ai"
              className="text-blue-500 hover:underline transition-colors"
            >
              Wordware.
            </Link>{" "}
            I like surfing, muay thai, steak, saunas, reading, writing, and tea.
          </p>
          <p></p>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href="https://isaacdyor.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Writing
          </a>
          <span className="text-neutral-700 select-none">·</span>
          <a
            href="https://github.com/isaacdyor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Code
          </a>
          <span className="text-neutral-700 select-none">·</span>
          <a
            href="https://x.com/isaacdyor"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-300 hover:text-white transition-colors"
          >
            Thoughts
          </a>
        </div>
      </div>
    </div>
  );
}
