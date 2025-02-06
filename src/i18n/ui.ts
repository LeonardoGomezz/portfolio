import NextJS from "../components/icons/NextJS.astro"
import Tailwind from "../components/icons/Tailwind.astro"
export const languages = {
  en: "English",
  es: "Español",
};

export const defaultLang = "es";
export const showDefaultLang = true;

const TAGS = {
  NEXT: {
    name: "Next.js",
    class: "bg-black text-white",
    icon: NextJS,
  },
  TAILWIND: {
    name: "Tailwind CSS",
    class: "bg-[#003159] text-white",
    icon: Tailwind,
  },
}

export const ui = {
  en: {
    'title': "Welcome",
    'navItems': [
      { 'title': "Experience", 'label': "experience", 'url': "/#experiencia" },
      { 'title': "Projects", 'label': "projects", 'url': "/#proyectos" },
      { 'title': "About Me", 'label': "about-me", 'url': "/#sobre-mi" },
      { 'title': "Contact", 'label': "contact", 'url': "mailto:leonardogomez306@gmail.com" }
    ],
    'section_1': 'Work experience',
    'section_2': 'Projects',
    'section_3': 'About Me',
    'hero.tag': 'Available for work',
    'hero.title': "Hey, I'm Leonardo Gomez",
    'hero.text': 'Over 2 years of experience. <strong>Web Developer</strong> from Colombia, Cartagena de Indias. Specialized in developing unique web applications.',
    'hero.contact_tag': 'Contact me at',
    'experience': [
      {
        'date': "July 2023 - November 2024",
        'title': "Web Developer",
        'company': "Kru360",
        'description':
          "Develop websites, e-commerce, and landing pages using Next.js, integrate and consume APIs and microservices to improve the functionality and performance of websites. Maintenance and optimization of websites and front-end interfaces.",
      },
      {
        'date': "January 2020 - May 2021",
        'title': "Freelance Web Developer",
        'company': "",
        'description':
          "As a freelance web developer, I implemented websites and web applications using WordPress, React, Next.js, and Astro, adapting them to clients' needs. I focused on creating custom functionalities, integrating external tools, and providing technical maintenance, ensuring optimized and high-quality solutions.",
      }
    ],
    'proyects': [
      {
        'title': "Multifiltros",
        'description': "E-commerce specialized in car filters, batteries, oils, and other automotive products. We also offer professional services for the care and maintenance of your vehicle, with the quality and trust you need. Created from scratch with Next.js, React, and Tailwind CSS.",
        'link': "https://multifiltrosctg.com/",
        'github': "",
        'image': "/images/multifiltros.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "Versus",
        'description': "E-commerce for women's clothing. Created from scratch with Next.js, React, and Tailwind CSS.",
        'link': "https://www.versusbyvalen.com/",
        'image': "/images/versus.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "Viviana Rodriguez - Wedding Planner",
        'description': "Website. Experts in the design and execution of completely customized weddings in Cartagena.",
        'link': "https://vivianarodriguez.co/",
        'image': "/images/vivianaRodriguez.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "C-Marketing",
        'description': "Website for a digital marketing agency. Created from scratch with Next.js, React, and Tailwind CSS.",
        'link': "https://somoscmarketing.com/",
        'image': "/images/c-marketing.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "Creating your resume",
        'description': "Website for a consultancy and career guidance agency. Created from scratch with Next.js, React, and Tailwind CSS.",
        'link': "https://creandotuhojadevida.com/",
        'image': "/images/creando-tu-hoja-de-vida.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      }
    ],
    'about_me_1': 'Hello! I am Leonardo José Gómez, a freelance web developer with experience since 2020. My focus is on <strong>creating functional and attractive digital solutions</strong>, combining design and performance to deliver the best experience to users.',
    'about_me_2': 'I have worked with technologies such as WordPress, React, Next.js, and Astro, <strong>developing websites and applications tailored to each client’s needs.</strong> Throughout my career, I have had the opportunity to optimize projects to improve performance and ranking, always prioritizing quality and the details that make a difference.',
    'about_me_3': 'In addition to my technical experience, I am constantly learning to incorporate the latest trends and tools into my projects. I firmly believe in the value of innovation and continuous growth, which motivates me to exceed expectations and provide solutions that truly stand out.',
    'footer.about_me': 'About mí',
    'footer.contact': 'Contact'
  },
  es: {
    'title': "Bienvenido",
    'navItems': [
      { 'title': "Experiencia", 'label': "experiencia", 'url': "/#experiencia" },
      { 'title': "Proyectos", 'label': "proyectos", 'url': "/#proyectos" },
      { 'title': "Sobre mí", 'label': "sobre-mi", 'url': "/#sobre-mi" },
      { 'title': "Contacto", 'label': "contacto", url: "mailto:leonardogomez306@gmail.com" }
    ],
    'section_1': 'Experiencia laboral',
    'section_2': 'Proyectos',
    'section_3': 'Sobre mí',
    'hero.tag': 'Disponible para trabajar',
    'hero.title': 'Hey, soy Leonardo Gomez',
    'hero.text': '+2 años de experiencia. <strong>Desarrollador web</strong> de Colombia, Cartagena de Indias. Especializado en el desarrollo de aplicaciones web únicas.',
    'hero.contact_tag': 'Contáctame',
    'experience': [
      {
        'date': "Julio 2023 - Novienmbre 2024",
        'title': "Dedarrollador web",
        'company': "Kru360",
        'description': "Desarrollar sitios web, Ecomerce y Landing pages utilizando Nextjs, Integrar y consumir APIs y micro servicios para mejorar la funcionalidad y el rendimiento de los sitios web. Mantenimiento y optimización de sitios web e interfaces en el frontend",
      },
      {
        'date': "Enero 2020 - Mayo 2021",
        'title': "Desarrollador Web Freelance",
        'company': "",
        'description': "Como desarrollador web freelance, implementé sitios y aplicaciones web utilizando WordPress, React, Next.js y Astro, adaptándolos a las necesidades de los clientes. Me enfoqué en la creación de funcionalidades personalizadas, integración de herramientas externas y mantenimiento técnico, asegurando soluciones optimizadas y de alta calidad.",
      }
    ],
    'proyects': [
      {
        'title': "Multifiltros",
        'description': "E-commerce especializado en filtros para autos, baterías, aceites y otros productos automotrices. Además, ofrecemos servicios profesionales para el cuidado y mantenimiento de tu vehículo, con la calidad y confianza que necesitas. Creado desde cero con Next.js, React y Tailwind CSS.",
        'link': "https://multifiltrosctg.com/",
        'github': "",
        'image': "/images/multifiltros.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "Versus",
        'description': "E-commerce de ropa para dama. Creado desde cero con Next.js, React y Tailwind CSS.",
        'link': "https://www.versusbyvalen.com/",
        'image': "/images/versus.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "Viviana Rodriguez - Wedding planner",
        'description': "Sitio web. Expertos en diseño y ejecución de bodas completamente personalizadas en Cartagena. ",
        'link': "https://vivianarodriguez.co/",
        'image': "/images/vivianaRodriguez.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "C-Marketing",
        'description': "Sitio web agencia de marketing digital. Creado desde cero con Next.js, React y Tailwind CSS.",
        'link': "https://somoscmarketing.com/",
        'image': "/images/c-marketing.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      },
      {
        'title': "Creando tu hoja de vida",
        'description': "Sitio web agencia de consultoría y orientación laboral. Creado desde cero con Next.js, React y Tailwind CSS.",
        'link': "https://creandotuhojadevida.com/",
        'image': "/images/creando-tu-hoja-de-vida.png",
        'tags': [TAGS.NEXT, TAGS.TAILWIND],
      }
    ],
    'about_me_1': '¡Hola! Soy Leonardo José Gómez, desarrollador web freelance con experiencia desde 2020. Mi enfoque está en <strong>crear soluciones digitales</strong> funcionales y atractivas, combinando diseño y rendimiento para ofrecer la mejor experiencia a los usuarios.',
    'about_me_2': '  He trabajado con tecnologías como WordPress, React, Next.js y Astro, <strong>desarrollando sitios y aplicaciones adaptadas a las necesidades de cada cliente.</strong> Durante mi carrera, he tenido la oportunidad de optimizar proyectos para mejorar su rendimiento y posicionamiento, siempre priorizando la calidad y los detalles que marcan la diferencia.',
    'about_me_3': ' Además de mi experiencia técnica, me mantengo en constante aprendizaje para incorporar las últimas tendencias y herramientas en mis proyectos. Creo firmemente en el valor de la innovación y el crecimiento continuo, lo que me motiva a superar expectativas y aportar soluciones que realmente destaquen.',
    'footer.about_me': 'Sobre mí',
    'footer.contact': 'Contacto'
  },
} as const;
