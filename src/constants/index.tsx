
import { IconDeviceDesktop, IconLanguage, IconBallFootball, IconChess, IconMusic, TablerIconsProps } from '@tabler/icons-react';

interface INavLink {
  id: string
  title: string
}

export const navLinks: INavLink[] = [
  {
    id: "#home",
    title: "Inicio",
  },
  {
    id: '#about-us',
    title: 'Sobre Nosotros'
  },
  {
    id: '#notices',
    title: 'Avisos'
  },
  {
    id: '#courses',
    title: 'Talleres'
  },
  {
    id: '#installations',
    title: 'Instalaciones'
  },
  {
    id: '#contact',
    title: 'Contactanos'
  },
  {
    id: '#gallery',
    title: 'Galería'
  },

];


export interface ICourse {
  name: string
  IconElement: (props: TablerIconsProps) => JSX.Element
}

export const courses: ICourse[] = [
  {
    name: 'Computación',
    IconElement: IconDeviceDesktop
  },
  {
    name: 'Inglés',
    IconElement: IconLanguage
  },
  {
    name: 'Educación Fisica',
    IconElement: IconBallFootball
  },
  {
    name: 'Ajedréz',
    IconElement: IconChess
  },
  {
    name: 'Música',
    IconElement: IconMusic
  }

]
