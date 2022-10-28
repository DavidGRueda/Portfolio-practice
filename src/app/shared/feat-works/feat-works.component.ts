import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeatWorksService } from 'src/app/services/feat-works.service';
import { IWork } from './work';

@Component({
  selector: 'pf-feat-works',
  templateUrl: './feat-works.component.html',
  styleUrls: ['./feat-works.component.scss'],
})
export class FeatWorksComponent implements OnInit, OnDestroy {
  constructor(private _featWorksService: FeatWorksService) {}

  subscriber$!: Subscription;
  errorMessage: string = '';

  featWorks: IWork[] = [];
  @Input() num_works: number = -1;
  @Input() showTitle: boolean = false;

  ngOnInit(): void {
    this.subscriber$ = this._featWorksService.getWorks().subscribe({
      next: (works) => this.setWorks(works),
      error: (err) => (this.errorMessage = err),
    });
  }

  ngOnDestroy(): void {
    this.subscriber$.unsubscribe();
  }

  private setWorks(works: IWork[]): void {
    this.featWorks = works;
    if (this.num_works == -1) {
      this.num_works = this.featWorks.length;
    }
  }

  filter(): IWork[] {
    return this.featWorks.slice(0, this.num_works);
  }
}
