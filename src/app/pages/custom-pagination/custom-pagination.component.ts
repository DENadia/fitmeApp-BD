import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
})
export class CustomPaginationComponent {

  @Input() pageData = [];
  @Output() pagination = new EventEmitter<number>();

  selectIndex = 0;
  gList = [
    {name: 'Barbell', price: 99, img: 'assets/images/list/01.jpg'},
    {name: 'Bent Barbell', price: 199, img: 'assets/images/list/02.jpg'},
    {name: 'Pull-Up', price: 299, img: 'assets/images/list/03.jpg'},
    {name: 'Standing', price: 399, img: 'assets/images/list/04.jpg'},
    {name: 'Wide-Grip', price: 99, img: 'assets/images/list/05.jpg'},
    {name: 'Reverse-Grip', price: 199, img: 'assets/images/list/01.jpg'},
];
    constructor() {
    }

    onPagination(index: number) {
        this.selectIndex = index;
        this.pagination.emit(index);
    }
}
