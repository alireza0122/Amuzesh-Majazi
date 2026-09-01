import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-dashboard-header',
  styleUrl: './dashboard-header.css',
  templateUrl: './dashboard-header.html',
})
export class DashboardHeader {
  date = new Date();

  weekday = new Intl.DateTimeFormat('fa-IR', {
    weekday: 'long',
  }).format(this.date);

  day = new Intl.DateTimeFormat('fa-IR', {
    day: 'numeric',
  }).format(this.date);

  month = new Intl.DateTimeFormat('fa-IR', {
    month: 'long',
  }).format(this.date);

  year = new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
  }).format(this.date);
}
