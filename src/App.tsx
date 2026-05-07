import Foto from './assets/foto_titulo.jpg'
import CV from './assets/CV_Abel_Barojas.pdf'
import ExperienceItem from './components/ExperienceItem'
import Projects from './components/projects'


const ProjectsData = [
  {
    title: "Agenda web ",
    tecnologies: ["Vue.Js", "Laravel", "Tailwind", "MySQL", "Api ", "SwetAlert2"],
    description: "Sistema desarrollado con Vue.Js y Laravel enfocado en una experiencia moderna y optimizada.",
    images: ["", ""]
  },
  {
    title: "D'novac Papeleria ",
    tecnologies: ["Vue.Js", "Laravel", "Tailwind", "MySQL", "Api "],
    description: "Sistema desarrollado con Vue.Js y Laravel enfocado en una experiencia moderna y optimizada.",
    images: ["", ""]
  },
  {
    title: "Galeria de arte digital ",
    tecnologies: ["Html", "Css", "JavaScript"],
    description: "Sistema desarrollado con Vue.Js y Laravel enfocado en una experiencia moderna y optimizada.",
    images: ["", ""]
  },
  {
    title: "Vistella E-commerce ",
    tecnologies: ["Nest.Js", "Postgress", ""],
    description: "Sistema desarrollado con Vue.Js y Laravel enfocado en una experiencia moderna y optimizada.",
    images: ["", ""]
  }
  ,
  {
    title: "Api Multi-Empresas ",
    tecnologies: ["Laravel ", "Mysql", "Postman"],
    description: "Sistema desarrollado con laravel y Mysql enfocado en una experiencia moderna y optimizada.",
    images: ["", ""]
  }


]


const experiences = [
  {
    title: "Freelance Jr Developer - Ludens",
    period: "2024 - Actualidad",
    description: "Desarrollo y despliegue de aplicaciones web modernas, participando en el diseño responsive, desarrollo frontend/backend e implementación en producción, adaptando cada proyecto a las necesidades del cliente y experiencia del usuario."
  },
  {
    title: "Developer Jr - Decali.ws",
    period: "Enero 2026 - Abril 2026, Estadias",
    description: "En Decali.ws participé en el desarollo de la plataforma con gestion de proyectos, con implementacion de APIS externas, de calendario, y autenticacion de usuario con Google."
  },
  {
    title: "Developer Jr - Cystac Soluciones Infinitas",
    period: "Mayo 2024 - Agosto 2024",
    description: "En Cystac desarolle un proyecto para la descarga de archivos XML, por medio de una API interna de la empresa."
  },
  {
    title: "Asesor Interno - UTP",
    period: "Septiembre 2023 - Noviembre 2023",
    description: "En la UTP participé como Asesor Interno impartiendo la materia de Fundamentos de la Programacion"
  },
];

export default function CVWeb() {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans">
      {/* Header */}
      <header className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl"></div>

        <div className="relative max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Ingeniero en Gestión y Desarrollo de Software Recien Egresado
            </p>
            <p className="text-cyan-400 uppercase tracking-[0.3em] text-sm mb-4">
              Técnico Supeior Universitario en desarrollo de software
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Abel <span className="text-cyan-400">Barojas Sanchez</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed max-w-xl mb-8">
              Desarrollador enfocado en crear aplicaciones modernas con React,
              Laravel y APIs REST. Apasionado por el diseño web, la experiencia
              de usuario y las arquitecturas escalables. Con conocimientos en
              bases de datos relacionales, consultas SQL complejas, análisis y
              desarrollo de sistemas, diseño de interfaces y manejo de paquetería
              Office para documentación y gestión de información.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={CV}
                download
                className="bg-cyan-500 hover:bg-cyan-400 transition px-6 py-3 rounded-2xl font-semibold text-black shadow-lg shadow-cyan-500/30"
              >
                Descargar CV
              </a>

              <a href="mailto:[abelbarojassanchez25@gmail.com]" className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition px-6 py-3 rounded-2xl font-semibold">
                Contactar
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500 blur-3xl opacity-20 rounded-full"></div>

              <div className="relative w-80 h-80 rounded-[2rem] overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 flex items-center justify-center text-slate-500 text-xl font-semibold">
                <img src={Foto} alt="" />

              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Sobre mí</h2>

            <p className="text-slate-300 leading-relaxed">
              Actualmente enfocado en el desarrollo full stack, creando sistemas
              web modernos y optimizados. Tengo experiencia trabajando con
              React, Laravel, TailwindCSS y bases de datos relacionales. Además cuenta con los conocimientos basicos de desarollo movil con React Native , manejo y Prototipado en figma, y analisis de datos con python y librerias como pandas, nump, etc. Trabajo con metodologias agiles como Scrum, y  Git, Github para el control de versiones.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
            <h2 className="text-3xl font-bold mb-6">Información</h2>

            <div className="space-y-4 text-slate-300">
              <p>
                <span className="text-cyan-400 font-semibold">Email:</span>{" "}
                abelbarojassanchez25@gmail.com
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">Teléfono:</span>{" "}
                +52 222 579 9606
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">Ubicación:</span>{" "}
                Puebla, México
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-10">Habilidades Blandas</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "Trabajo en Equipo",
            "Comunicación",
            "Resolución de Problemas",
            "Adaptabilidad",
            "Liderazgo",
            "Trabajo Bajo Presión",
            "Metodologia de Trabajo",
            "Gestión del tiempo",
            "Toma de Decisiones",
            "Negociación"
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-6 text-center font-semibold shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>
      {/* Habilidades Blandas */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-4xl font-bold mb-10">Habilidades Gruesas</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            "React",
            "Laravel",
            "TailwindCSS",
            "Bootstrap",
            "PHP",
            "MySQL",
            "Node.js",
            "OAuth 2.0",
            "APIs REST",
            "Git & GitHub",
            "Vercel",
            "Postman",
            "EC2",
            "Office 365",
            "Word",
            "Excel",
            "Nest.js",
            "Postgress",
            "SwetAlert2",
            "JWT",
            "Bash",
            "API REST",
            "Python",
            "Pandas",
            "Numpy",
            "Matplotlib",
            "Scrum",


          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-6 text-center font-semibold shadow-lg"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>


      {/* ------------------------- */}
      {/* Experience */}
      <section className="bg-slate-900/50 border-y border-slate-800 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12">Experiencia</h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                title={exp.title}
                period={exp.period}
                description={exp.description}
              />
            ))}
          </div>
        </div>
      </section>


      {/* Projects */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold">Proyectos</h2>

          <a href="https://github.com/Abel1565" target="_blank" rel="noopener noreferrer" className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition px-5 py-2 rounded-xl">
            Ver GitHub
          </a>
        </div>

        <div className=" ">


          <div className="space-y-8">
            {ProjectsData.map((pro, index) => (
              <Projects
                key={index}
                title={pro.title}
                tecnologies={pro.tecnologies}
                description={pro.description}
                images={pro.images}
              />
            ))}
          </div>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-10 text-center text-slate-500">
        © 2026 Abel Barojas — Portafolio & CV Web
      </footer>
    </div>
  );
}
