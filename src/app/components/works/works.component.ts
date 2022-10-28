import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FeatWorksService } from 'src/app/services/feat-works.service';
import { IWork } from '../../shared/feat-works/work';

@Component({
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss'],
})
export class WorksComponent implements OnInit {
  constructor(private _featWorksService: FeatWorksService) {}

  works: IWork[] = [];
  suscriber!: Subscription;
  errorMessage: string = '';

  ngOnInit(): void {
    this.suscriber = this._featWorksService.getWorks().subscribe({
      next: (works) => (this.works = works),
      error: (err) => (this.errorMessage = err),
    });
  }
}
