const person = {
  firstName: "Herson",
  lastName: "Chur",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "hersonchur.dev@gmail.com",
  location: "America/Guatemala", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Spanish", "English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about software development, technology trends, and share insights on how coding and innovation come together.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/roely16",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/herson-chur-dev",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between code and innovation</>,
  // featured: {
  //   display: false,
  //   title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
  //   href: "/work/building-once-ui-a-customizable-design-system",
  // },
  subline: (
    <>
      I'm Herson, a software engineer specializing in frontend development, where I create seamless user experiences. By day, I work with technologies like React, Vue, and Laravel; by night, I bring my own tech projects to life.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        👋 Hello! I'm Herson Chur, a versatile Software Engineer with solid experience building robust web and mobile applications. I specialize in modern frontend frameworks like React, React Native, and Vue.js, and also have strong backend expertise using PHP and Laravel, complemented by experience with SQL databases and cloud-based architectures using Firebase and AWS.
        <br />
        <br />
        With a background in the banking industry, I value performance, security, and clean code. I enjoy transforming ideas into functional, scalable solutions and working closely with clients to bring their vision to life — from prototype to production.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "ZIGI",
        timeframe: "2023 - Present",
        role: "Senior Frontend Engineer",
        achievements: [
          <>
            Developing and maintaining a React Native-based wallet application, focusing on high-quality, scalable mobile interfaces.
          </>,
          <>
            Collaborate with design teams using Figma to translate UI/UX into responsive mobile experiences.
          </>,
          <>
            Write and maintain unit tests with Jest, ensuring code reliability and reducing bugs in production.
          </>,
          <>
            Utilize Bitrise for continuous integration and deployment, streamlining delivery workflows.
          </>,
          <>
            Manage tasks and sprints efficiently through Jira, ensuring consistent delivery in an agile environment.
          </>
        ],
        images: [],
      },
      {
        company: "Municipality of Guatemala City",
        timeframe: "2018 - 2022",
        role: "Senior Full Stack Engineer",
        achievements: [
          <>
            Built and maintained web and mobile apps using Vue, Angular, and React Native for public service platforms.
          </>,
          <>
            Developed backend APIs and business logic using PHP and Laravel, integrating MySQL and Oracle databases.
          </>,
          <>
            Managed push notifications via Firebase and handled mobile app publishing on Google Play and the App Store.
          </>,
          <>
            Led end-to-end development efforts on multiple digital solutions, ensuring smooth integration between front and back ends across services.
          </>
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Mariano Gálvez University of Guatemala",
        description: <>Master of Business Administration (MBA)</>,
      },
      {
        name: "Mariano Gálvez University of Guatemala",
        description: <>B.Sc. in Information Systems and Computer Science</>,
      },
    ],
  }, 
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Design",
        description: <>Comfortable using Figma as a development tool rather than a design suite — turning UI concepts into working interfaces with speed and precision.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Frontend",
        description: <>Experienced in building modern, responsive user interfaces using Vue.js, Angular, React, and React Native — delivering smooth and engaging user experiences across platforms.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Backend",
        description: <>Proficient in creating robust and maintainable backend systems with PHP, Laravel, and Node.js — ensuring secure, scalable, and well-integrated applications.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Cloud",
        description: <>Hands-on experience with Firebase, particularly Firestore, Authentication, and Push Notifications — powering real-time features and user-centric functionality.</>,
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
