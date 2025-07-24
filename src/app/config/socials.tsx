import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { Social } from '../types/types';

export const socials: Social[] = [
  {
    name: 'GitHub',
    icon: <Github size={20} />,
    url: 'https://github.com/Aravinth1312',
    color: '#6e7681',
  },
  {
    name: 'LinkedIn',
    icon: <Linkedin size={20} />,
    url: 'https://www.linkedin.com/in/aravinth-m-190b8a24b',
    color: '#0077B5',
  },
  {
    name: 'Email',
    icon: <Mail size={20} />,
    url: 'mailto:aravinthm6382@gmail.com',
    color: '#D44638',
  },
  {
    name: 'Phone',
    icon: <Phone size={20} />,
    url: 'tel:+916382833566',
    color: '#10B981',
  },
];
