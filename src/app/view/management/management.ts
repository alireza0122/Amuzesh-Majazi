import { Component } from '@angular/core';
import { ManagementBanner } from './management-banner/management-banner';

@Component({
  imports: [ManagementBanner],
  selector: 'app-management',
  styleUrl: './management.css',
  templateUrl: './management.html',
})
export class Management {}
