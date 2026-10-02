import { Link } from "@/types";

const links: Link[] = [
  {
    title: 'Home',
    href: '/',
    thumbnail: '/assets/me.png'
  },
  {
    title: 'About',
    href: '/#about',
    thumbnail: '/assets/projects/research.jpeg'
  },
  {
    title: 'Projects',
    href: '/#projects',
    thumbnail: '/assets/projects/filepeek.jpeg'
  },
  // {
  //   title: 'Skills',
  //   href: '/skills',
  //   thumbnail: '/assets/nav-link-previews/skills.png'
  // },
  // {
  //   title: 'Testimonials',
  //   href: '/testimonials',
  //   thumbnail: '/assets/nav-link-previews/testimonials.png'
  // },
  {
    title: 'Build Log',
    href: '/blogs',
    thumbnail: '/assets/projects/tweet.jpeg',
  },
  {
    title: 'Contact',
    href: '/#contact',
    thumbnail: '/assets/projects/random.jpeg'
  }
];

export { links };
