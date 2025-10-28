import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Task Link Profile",
      description: "Desafio concluído da comunidade Frontend Mentor para praticar HTML e CSS, focado em layout e estilo de perfis.",
      technologies: [ "HTML", "CSS"],
      link: "https://azevedothuu.github.io/linkstask/",
      github: "https://github.com/Azevedothuu/linkstask",
      
    },
    {
      title: "Task Perfume",
      description: "Projeto desenvolvido a partir de um desafio do Frontend Mentor, com foco em design responsivo e boas práticas de CSS.",
      technologies: [ "HTML", "CSS"],
      link: "https://github.com/Azevedothuu/perfume",
      github: "https://azevedothuu.github.io/perfume/",
    },
    {
      title: "QRCode Card Preview",
      description: "Desafio finalizado do Frontend Mentor para treinar estruturação com HTML e estilização moderna com CSS.",
      technologies: ["HTML", "CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Task Rocketseat",
      description: "Projeto feito para reforçar conceitos básicos de programação e lógica com HTML, CSS e JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://azevedothuu.github.io/rocket/",
      github: "https://github.com/Azevedothuu/rocket",
    },
    {
      title: "Card Recipe Main",
      description: "Desafio do Frontend Mentor voltado para praticar a criação de layouts limpos e organizados com HTML e CSS.",
      technologies: ["HTML", "CSS"],
      link: "https://github.com/Azevedothuu/projeto",
      github: "https://azevedothuu.github.io/projeto/",
    },
    {
      title: "React",
      description: "Com React, aprendi a criar interfaces dinâmicas com componentes, estados, propriedades e eventos, entendendo melhor o funcionamento do front-end moderno.",
      technologies: ["React", "TypeScript", "Storybook", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-background relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Meus <span className="text-accent">Projetos</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-lg p-6 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 flex flex-col hover:-translate-y-2"
            >
              {/* Project header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-6 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-auto pt-6 border-t border-border">
                <a
                  href={project.link}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-sm font-semibold">Ver Projeto</span>
                </a>
                <a
                  href={project.github}
                  className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors duration-300"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-semibold">Código</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
