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
  selector: 'app-dashboard-banner',
  styleUrl: './dashboard-banner.css',
  templateUrl: './dashboard-banner.html',
})
export class DashboardBanner implements AfterViewInit, OnDestroy {
  // @ViewChild('welcomeText')
  // welcomeText!: ElementRef<HTMLHeadingElement>;

  @ViewChild('BoxwelcomeText')
  BoxwelcomeText!: ElementRef<HTMLHeadingElement>;

  @ViewChild('bannerContent')
  bannerContent!: ElementRef<HTMLDivElement>;

  @ViewChild('bannerContentTo')
  bannerContentTo!: ElementRef<HTMLDivElement>;

  private ctx!: gsap.Context;

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      // gsap.fromTo(
      //   this.welcomeText.nativeElement,
      //   {
      //     opacity: 0,
      //     clipPath: 'inset(0 0 0 100%)',
      //   },
      //   {
      //     opacity: 1,
      //     clipPath: 'inset(0 0 0 0)',
      //     duration: 1.3,
      //     delay: 0.5,
      //     ease: 'power2.out',
      //   },
      // );

      gsap.fromTo(
        this.BoxwelcomeText.nativeElement,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.25,
          ease: 'power2.out',
        },
      );
      gsap.fromTo(
        this.bannerContent.nativeElement,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.25,
          ease: 'power2.out',
        },
      );
      gsap.fromTo(
        this.bannerContentTo.nativeElement,
        {
          opacity: 0,
          y: 10,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.5,
          ease: 'power2.out',
        },
      );
    });
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
