import { useRef } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wkief3c",     //  SERVICE ID
        "template_98xrdow",    // TEMPLATE ID
        form.current,
        "0xIsjsGsJGhVYNWSP"       // PUBLIC KEY
      )
      .then(
        () => {
          alert("Mensagem enviada com sucesso!");
          form.current.reset();
        },
        (error) => {
          console.error("Erro:", error);
          alert("Erro ao enviar: " + error.text);
        }
      );
  };

  const socialLinks = [
    {
      name: "Email",
      icon: Mail,
      link: "mailto:contatoarthuraz@gmail.com",
      color: "hover:text-red-400",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      link: "https://www.linkedin.com/in/huazevedo/",
      color: "hover:text-blue-400",
    },
    {
      name: "GitHub",
      icon: Github,
      link: "https://github.com/Azevedothuu",
      color: "hover:text-gray-400",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 px-4 md:px-8 bg-card relative overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-center">
          Vamos <span className="text-accent">Conversar</span>
        </h2>

        <p className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
          Tenho interesse em oportunidades de freelance e projetos interessantes.
          Sinta-se livre para entrar em contato comigo!
        </p>

        {/* Contact form */}
        <div className="bg-background border border-border rounded-lg p-8 mb-12">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Nome
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="Seu nome"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">
                Assunto
              </label>
              <input
                type="text"
                name="subject"
                className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300"
                placeholder="Assunto da mensagem"
                required
              />
            </div>

            <div>
              <label className="block text-foreground font-semibold mb-2">
                Mensagem
              </label>
              <textarea
                name="message"
                rows={6}
                className="w-full bg-input border border-border rounded-lg px-4 py-2 text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
                placeholder="Sua mensagem aqui..."
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-semibold py-3 rounded-lg hover:bg-accent/90 transition-all duration-300 hover:shadow-lg hover:shadow-accent/50"
            >
              Enviar Mensagem
            </button>
          </form>
        </div>

        {/* Social links */}
        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Ou conecte-se comigo nas redes sociais:
          </p>
          <div className="flex justify-center gap-8">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-accent transition-all duration-300 ${social.color} hover:scale-125`}
                  title={social.name}
                >
                  <Icon className="w-8 h-8" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
