import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isOpen = input<boolean>(false);

  closeSidebar = output<void>();

  closeMenu() {
    this.closeSidebar.emit();
  }
}
