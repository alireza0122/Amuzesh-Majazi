import { Component } from '@angular/core';
import { DashboardHeader } from './dashboard-header/dashboard-header';
import { DashboardBanner } from './dashboard-banner/dashboard-banner';
import { DashboardFooter } from './dashboard-footer/dashboard-footer';
import { Sidebar } from '../layout/sidebar/sidebar';
@Component({
  imports: [DashboardHeader, DashboardBanner, DashboardFooter, Sidebar],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  isSidebarOpen = false;

  openSidebar() {
    this.isSidebarOpen = true;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }
}
