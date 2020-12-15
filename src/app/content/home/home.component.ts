import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/services/global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  themeInput = "";
  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this._globalService.themeName.next(this.themeInput || 'dark');
  }

  ngOnDestroy(): void{
    this._globalService.themeName.next('dark');
  }
}
