import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'nb-home',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/login',
      },
      {
        title: 'Register',
        link: '/register',
      },
      {
        title: 'Reset Password',
        link: '/reset-password',
      },
    ],
  },
];
