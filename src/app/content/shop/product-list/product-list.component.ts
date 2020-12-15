import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products = [
    {
      id: 1,
      name: 'Honda',
      description : 'hondata',
      price: 'P180000',
      image: 'https://s2.paultan.org/image/2020/01/Honda-Civic-EK-Modulo-Concept-TAS-2020-2-Feat.jpg'
    },
    {
      id: 2,
      name: 'Toyota',
      description : 'toyotata',
      price: 'P150000',
      image: 'https://www.extremetech.com/wp-content/uploads/2018/04/Corolla19-HERO-764A7062-edit.jpg'
    },
    {
      id: 3,
      name: 'Mitsubishi',
      description : 'mitsubishita',
      price: 'P100000',
      image: 'https://i.pinimg.com/564x/bd/11/93/bd11931323f991895c2fdd6cbbfe67c4.jpg'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
