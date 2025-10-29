import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background stars */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Galactic glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8 animate-slide-in">
        {/* Title with glow effect */}
        <div className="mb-6 animate-float">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4 tracking-wider">
            <span className="inline-block">
              Arthur
            </span>
            <br />
            <span className="text-accent drop-shadow-lg" style={{ textShadow: "0 0 20px rgba(96, 165, 250, 0.5)" }}>
              Azevedo
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light tracking-wide">
          Frontend Developer | Student
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
          Transformando ideias em experiências web incríveis com React, TypeScript e Next.js.
          Navegando pelo universo do desenvolvimento front-end como um "Sufista".
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
          >
            Ver Projetos
          </a>
          {/* dando erro aqui- contato */}
          <a
            href="#contact"  
            className="px-8 py-3 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
          >
            Entrar em Contato
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-accent" />
      </div>
    </section>
  );
}
