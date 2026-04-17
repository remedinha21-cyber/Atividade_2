const projetos = [
  {
    nome: "Sistema Escolar",
    descricao: "Projeto simples para gerenciamento de alunos",
    link: "https://meusistema.com",
  },
  {
    nome: "Portfólio Pessoal",
    descricao: "Site para apresentar meus projetos e habilidades",
    link: "https://meuportfolio.com",
  },
  {
    nome: "Lista de Tarefas",
    descricao: "Aplicação simples de controle de tarefas",
    link: "https://tarefas.com",
  },
];

function Projects() {
  return (
    <section id="projetos" className="p-6">
      <h2 className="text-center text-2xl mb-6">Meus Projetos</h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projetos.map((projeto, index) => (
          <div
            key={index}
            className="bg-slate-950 p-5 rounded-xl hover:-translate-y-1 transition"
          >
            <h3 className="text-lg font-bold mb-2">{projeto.nome}</h3>
            <p className="mb-3 text-slate-400">{projeto.descricao}</p>
            <a
              href={projeto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-400"
            >
              Ver projeto
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="text-center max-w-2xl mx-auto p-6">
      <h2 className="text-2xl mb-2">Sobre mim</h2>
      <p>
        Olá! Me chamo Remédios, sou desenvolvedora em formação apaixonada por tecnologia.
      </p>
    </section>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-200">
      <header className="flex justify-between items-center p-6 bg-slate-950 flex-wrap">
        <h1 className="text-sky-400 text-xl font-bold">Remédios</h1>
        <nav className="flex gap-4">
          <a href="#sobre">Sobre mim</a>
          <a href="#projetos">Meus Projetos</a>
        </nav>
      </header>

      <main>
        <About />
        <Projects />
      </main>

      <footer className="text-center p-4 bg-slate-950 mt-6">
        <p>© 2026 - Remédios</p>
      </footer>
    </div>
  );
}
