export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12 text-center">
          Sobre <span className="text-accent">Mim</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Sou um desenvolvedor frontend apaixonado por criar interfaces web modernas e responsivas -
              Sem experiência profissional. Em React, TypeScript e Next.js, busco sempre entregar soluções de alta qualidade.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Meu foco é transformar designs em código funcional, otimizado e acessível.
              Acredito que o desenvolvimento web é uma arte que combina criatividade, lógica e atenção aos detalhes.
            </p>

            <p className="text-muted-foreground leading-relaxed text-lg">
              Quando não estou codificando, estou aprendendo novas tecnologias, explorando padrões de design
              e contribuindo para a comunidade open source.
            </p>

            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-2 border border-accent text-accent rounded-lg font-semibold hover:bg-accent/10 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>
          </div>

          {/* Right side - Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300">
              <div className="text-3xl font-bold text-accent mb-2">1</div>
              <p className="text-muted-foreground">Ano de Experiência</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300">
              <div className="text-3xl font-bold text-accent mb-2">+5</div>
              <p className="text-muted-foreground">Projetos Concluídos</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300">
              <div className="text-3xl font-bold text-accent mb-2">100%</div>
              <p className="text-muted-foreground">adaptação com Linguagens Diferentes</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 text-center hover:border-accent transition-colors duration-300">
              <div className="text-3xl font-bold text-accent mb-2">10+</div>
              <p className="text-muted-foreground">Tecnologias</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
