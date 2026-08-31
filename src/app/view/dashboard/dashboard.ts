import { Component } from '@angular/core';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { DashboardBanner } from './dashboard-banner/dashboard-banner';

@Component({
  imports: [DashboardHeader, DashboardBanner],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
