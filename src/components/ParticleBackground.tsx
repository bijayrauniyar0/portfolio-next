"use client";

import { useTheme } from "../contexts/ThemeContext";
import Image from "next/image";

// Simple CSS-only particle background with coding elements
export default function ParticleBackground() {
  const { theme } = useTheme();

  // Tech logos from public/logos folder
  const logos = [
    "/logos/JavaScript-logo.png",
    "/logos/Linux.png",
    "/logos/Nextjs.png",
    "/logos/Postman.png",
    "/logos/Python.png",
    "/logos/github.png",
    "/logos/git.png",
    "/logos/react.png",
    "/logos/ts-logo-128.png",
    "/logos/vscode.png",
  ];

  // Coding symbols and syntax elements
  const codeSymbols = [
    "{ }",
    "< >",
    "[ ]",
    "( )",
    "=>",
    "&&",
    "||",
    "!==",
    "===",
    ";",
    ":",
    "?",
    "#",
    "$",
    "if",
    "for",
    "let",
    "const",
    "return",
    "import",
  ];

  return (
    <div className="opacity-80 fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Code Symbols */}
      <div className="absolute inset-0">
        {codeSymbols.map((symbol) => (
          <div
            key={symbol}
            className={`absolute font-mono text-sm ${
              theme === "dark" ? "text-white/10" : "text-black/10"
            } animate-float select-none`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${Math.random() * 20 + 15}s`,
              fontSize: `${Math.random() * 8 + 12}px`,
            }}
          >
            {symbol}
          </div>
        ))}
      </div>

      {/* Tech Logo Images */}
      <div className="absolute inset-0">
        {logos.map((logoPath, i) => (
          <div
            key={`logo-${i}`}
            className={`absolute animate-float w-fit select-none ${
              theme === "dark" ? "opacity-15" : "opacity-10"
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 25}s`,
              animationDuration: `${Math.random() * 15 + 20}s`,
              width: `${Math.random() * 20 + 30}px`,
              height: `${Math.random() * 20 + 30}px`,
            }}
          >
            <Image
              src={logoPath}
              alt="Tech logo"
              width={50}
              height={50}
              className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
              style={{
                filter:
                  theme === "dark"
                    ? "brightness(0.7) contrast(0.8)"
                    : "brightness(1.2) contrast(0.6)",
              }}
            />
          </div>
        ))}
      </div>


      {/* Binary Code Rain */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`binary-${i}`}
            className={`absolute font-mono text-xs ${
              theme === "dark" ? "text-green-400/10" : "text-green-600/8"
            } animate-float select-none`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 25 + 20}s`,
            }}
          >
            {Array.from({ length: 3 }, () => Math.round(Math.random())).join(
              ""
            )}
          </div>
        ))}
      </div>

      {/* Code Brackets with Glow */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <div
            key={`bracket-${i}`}
            className={`absolute font-mono text-2xl ${
              theme === "dark"
                ? "text-blue-400/15 drop-shadow-lg"
                : "text-blue-600/10"
            } animate-float select-none`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 30}s`,
              animationDuration: `${Math.random() * 20 + 25}s`,
              filter:
                theme === "dark"
                  ? "drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))"
                  : "none",
            }}
          >
            {["{", "}", "[", "]", "<", ">"][i]}
          </div>
        ))}
      </div>

      {/* Gradient Blobs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/8 to-purple-400/8 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/8 to-pink-400/8 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-3/4 w-72 h-72 bg-gradient-to-r from-pink-400/8 to-blue-400/8 rounded-full blur-3xl animate-pulse delay-500" />

      {/* Moving Code Dots */}
      <div className="absolute inset-0">
        {[...Array(10)].map((_, i) => (
          <div
            key={`dot-${i}`}
            className={`absolute w-1 h-1 rounded-full ${
              theme === "dark" ? "bg-white/15" : "bg-black/8"
            } animate-float`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 15 + 10}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
