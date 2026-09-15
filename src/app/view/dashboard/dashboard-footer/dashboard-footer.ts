import { AfterViewInit, Component, ElementRef, ViewChild, OnDestroy } from '@angular/core';

import { gsap } from 'gsap';

@Component({
  imports: [],
  selector: 'app-dashboard-footer',
  styleUrl: './dashboard-footer.css',
  templateUrl: './dashboard-footer.html',
})
export class DashboardFooter implements AfterViewInit, OnDestroy {
  @ViewChild('footer')
  footer!: ElementRef<HTMLDivElement>;

  private ctx!: gsap.Context;

  ngAfterViewInit(): void {
    this.ctx = gsap.context(() => {
      gsap.fromTo(
        this.footer.nativeElement,
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
