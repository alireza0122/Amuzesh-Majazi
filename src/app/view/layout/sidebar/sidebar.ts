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

  isDarkMode = false;

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');

    if (savedTheme === 'dark') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    this.isDarkMode = !this.isDarkMode;

    if (this.isDarkMode) {
      document.documentElement.classList.add('dark');

      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');

      localStorage.setItem('theme', 'light');
    }
  }
}
