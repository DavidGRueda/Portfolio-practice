import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, Subscription } from 'rxjs';
import { FeatWorksService } from 'src/app/services/feat-works.service';
import { IWork } from 'src/app/shared/feat-works/work';

@Component({
  templateUrl: './work-detail.component.html',
  styleUrls: ['./work-detail.component.scss'],
})
export class WorkDetailComponent implements OnInit, OnDestroy {
  constructor(
    private route: ActivatedRoute,
    private _featWorksService: FeatWorksService
  ) {}

  workInfo?: IWork;
  workId: number = -1;
  suscriber$!: Subscription;

  ngOnInit(): void {
    // this.workId = Number(this.route.snapshot.paramMap.get('id'));
    // this.suscriber$ = this._featWorksService
    //   .getWorkById(this.workId)
    //   .subscribe((work) => (this.workInfo = work));

    this.route.paramMap.subscribe((params) => {
      console.log(params);
      this.workId = Number(params.get('id'));
      this.suscriber$ = this._featWorksService
        .getWorkById(this.workId)
        .subscribe((work) => (this.workInfo = work));
    });

    console.log('CREATED!');
    // this.suscriber$ = this.route.paramMap
    //   .pipe(
    //     map((params) => Number(params.get('id'))),
    //     mergeMap((id) => this._featWorksService.getWorkById(id))
    //   )
    //   .subscribe((work) => (this.workInfo = work));
  }

  ngOnDestroy(): void {
    this.suscriber$.unsubscribe();
    console.log('DESTROYED!');
  }
}
