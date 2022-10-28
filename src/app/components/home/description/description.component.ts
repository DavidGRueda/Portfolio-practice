import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss'],
})
export class DescriptionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadPDF(): void {
    let link = document.createElement('a');
    link.download = 'cv.pdf';
    link.href = 'assets/cv.pdf';
    link.click();
  }
}
