import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  selectedProduct:any;

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

  constructor(
    private router: ActivatedRoute,
    private _globalService: GlobalService
  ) {
    // console.log(this.router.snapshot.params.id);
  }

  ngOnInit(): void {
    this.router.params.subscribe(
      (params: Params) => {
        const id = params.id;

        const selected = this.products.filter(
          (product) => {
            return +product.id === +id;
          }
        );

        if(selected.length > 0){
          this.selectedProduct = selected[0];
          this._globalService.subjectName.next(this.selectedProduct.name);
        }
      }
    );
  }

  ngOnDestroy(): void{
    this._globalService.subjectName.next('');
  }
}
