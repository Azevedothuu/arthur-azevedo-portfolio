export default function Skills() {
  const skills = [
    { category: "Frontend", items: ["React", "TypeScript", "Next.js", "JavaScript", "Tailwind CSS", "HTML/CSS"] },
    { category: "Tools & Libraries", items: ["Vite", "npm/pnpm", "Git", "Figma", "REST APIs", "GraphQL"] },
    { category: "Soft Skills", items: ["Problem Solving", "Team Collaboration", "Communication", "Project Management"] },
  ];

  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-card relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16 text-center">
          Habilidades <span className="text-accent">Técnicas</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup) => (
            <div
              key={skillGroup.category}
              className="bg-background border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
            >
              <h3 className="text-2xl font-bold text-accent mb-6">{skillGroup.category}</h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-3 group"
                  >
                    <div className="w-2 h-2 bg-accent rounded-full group-hover:w-3 group-hover:h-3 transition-all duration-300" />
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency bars */}
        <div className="mt-16 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8">Proficiência</h3>
          <div className="space-y-6">
            {[
              { name: "React", level: 70 },
              { name: "TypeScript", level: 60 },
              { name: "Next.js", level: 40 },
              { name: "Tailwind CSS", level: 70 },
            ].map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-foreground font-semibold">{skill.name}</span>
                  <span className="text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-accent h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
