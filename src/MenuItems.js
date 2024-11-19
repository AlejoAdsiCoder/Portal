import { Home, User, Briefcase, Mail } from 'lucide-react';

export const menuItems = [
    { id: 'home', icon: <Home size={24} />, text: 'Inicio', path: '/' },
    { id: 'about', icon: <User size={24} />, text: 'Acerca de mí', path: '/about' },
    { id: 'portfolio', icon: <Briefcase size={24} />, text: 'Portafolio', path: '/projects' },
    { id: 'contact', icon: <Mail size={24} />, text: 'Contacto', path: '/contact' },
  ];