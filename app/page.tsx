export default function Home() {
  const team = [
    { name: "Jordan", role: "Développeur Front-end", color: "from-blue-400 to-blue-600" },
    { name: "Hugo", role: "Designer UI/UX", color: "from-purple-400 to-purple-600" },
    { name: "Martin", role: "Architecte Back-end", color: "from-emerald-400 to-emerald-600" },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 sm:p-20">
      
      {/* Contenu Principal */}
      <main className="flex flex-col items-center text-center max-w-5xl w-full flex-1 justify-center gap-12">
        
        {/* Section Hero */}
        <div className="space-y-6 animate-fade-in-up">
          <div className="inline-block rounded-full border border-foreground/10 px-4 py-1.5 text-sm font-medium transition-colors hover:bg-foreground/5 mb-4">
            ✨ Bienvenue sur notre portfolio
          </div>
          <h1 className="text-5xl sm:text-7xl font-extrabold tracking-tight">
            Création, Code et{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Innovation
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto">
            Une expérience numérique moderne conçue avec passion par trois développeurs. Découvrez notre univers propulsé par Next.js et Tailwind CSS.
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <a
            href="#team"
            className="h-12 px-8 rounded-full bg-foreground text-background flex items-center justify-center font-medium hover:scale-105 transition-transform"
          >
            Découvrir l'équipe
          </a>
          <a
            href="#contact"
            className="h-12 px-8 rounded-full border-2 border-foreground/10 flex items-center justify-center font-medium hover:bg-foreground/5 transition-colors"
          >
            Nous contacter
          </a>
        </div>

        {/* Section Équipe (Cartes) */}
        <div id="team" className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12 pt-12 border-t border-foreground/10">
          {team.map((member) => (
            <div 
              key={member.name} 
              className="group relative flex flex-col items-center p-8 rounded-3xl border border-foreground/10 bg-foreground/[0.02] hover:bg-foreground/[0.04] transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Effet de brillance en arrière-plan */}
              <div className={`absolute top-0 w-full h-1 bg-gradient-to-r ${member.color} opacity-50 group-hover:opacity-100 transition-opacity`} />
              
              {/* Avatar stylisé */}
              <div className={`w-24 h-24 rounded-full mb-6 bg-gradient-to-br ${member.color} flex items-center justify-center text-white text-3xl font-bold shadow-lg`}>
                {member.name.charAt(0)}
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{member.name}</h2>
              <p className="text-foreground/60">{member.role}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Footer minimaliste */}
      <footer className="mt-20 text-center text-sm text-foreground/50">
        <p>© {new Date().getFullYear()} - Jordan, Hugo & Martin. Fait avec ♥️ sur Next.js.</p>
      </footer>

    </div>
  );
}