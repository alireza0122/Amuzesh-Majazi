import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  imports: [],
  selector: 'app-dashboard-header',
  styleUrl: './dashboard-header.css',
  templateUrl: './dashboard-header.html',
})
export class DashboardHeader implements AfterViewInit, OnDestroy {

  searchOpen = false;

  @ViewChild('headerBox')
  headerBox!: ElementRef<HTMLDivElement>;

  private ctx!: gsap.Context;

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {

      gsap.fromTo(
        this.headerBox.nativeElement,
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          y: 0,
          delay: 1,
          duration: 0.5,
          ease: 'power2.out',
        },
      );

    }, this.headerBox.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }

  openSearch(): void {
    this.searchOpen = true;
  }

  closeSearch(): void {
    this.searchOpen = false;
  }

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
