import { Component } from '@angular/core';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { DashboardBanner } from './dashboard-banner/dashboard-banner';
import { DashboardFooter } from './dashboard-footer/dashboard-footer';

@Component({
  imports: [DashboardHeader, DashboardBanner, DashboardFooter],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {}
