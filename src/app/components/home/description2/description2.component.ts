import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pf-description2',
  templateUrl: './description2.component.html',
  styleUrls: ['./description2.component.scss'],
})
export class Description2Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  downloadPDF(): void {
    let link = document.createElement('a');
    link.download = 'cv.pdf';
    link.href = 'assets/cv.pdf';
    link.click();
  }
}
