import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../services/global.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  theme = 'dark';

  constructor(private _globalService: GlobalService) { }

  ngOnInit(): void {
    this.theme = 'dark';

    this._globalService.themeName.subscribe(
      (newtheme:any) => {
        this.theme = newtheme || this._globalService.toUpperCase(this._globalService.appTheme);

      }
    );
  }

}
