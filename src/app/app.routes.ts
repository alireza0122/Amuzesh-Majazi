import { Routes } from '@angular/router';
import { Dashboard } from './view/dashboard/dashboard';
import { Management } from './view/management/management';

export const routes: Routes = [
  {
    path: '',
    component: Dashboard,
  },
  {
    path: 'Management',
    component: Management,
  },
];
