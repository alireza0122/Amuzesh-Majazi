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

  @ViewChild('welcomeText')
  welcomeText!: ElementRef<HTMLHeadingElement>;

  @ViewChild('bannerContent')
  bannerContent!: ElementRef<HTMLDivElement>;

  @ViewChild('bannerImage')
  bannerImage!: ElementRef<HTMLImageElement>;

  private ctx!: gsap.Context;

  ngAfterViewInit(): void {

    this.ctx = gsap.context(() => {

      gsap.fromTo(
        this.welcomeText.nativeElement,
        {
          opacity: 0,
          clipPath: 'inset(0 0 0 100%)',
        },
        {
          opacity: 1,
          clipPath: 'inset(0 0 0 0)',
          duration: 1.3,
          delay: 1,
          ease: 'power2.out',
        },
      );

      gsap.fromTo(
        this.bannerContent.nativeElement,
        {
          opacity: 0,
          y: 30,

        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 1,
          ease: 'power2.out',
        },
      );

      gsap.fromTo(
        this.bannerImage.nativeElement,
        {
          opacity: 0,
          x: 40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.4,
          ease: 'power2.out',
        },
      );

    }, this.bannerImage.nativeElement);
  }

  ngOnDestroy(): void {
    this.ctx?.revert();
  }
}
