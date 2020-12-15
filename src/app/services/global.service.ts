import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  appTitle = 'Title from Service';
  appSubtitle = 'Subtitle from Service';
  appTheme = 'dark';

  subjectName = new Subject();
  themeName = new Subject();

  constructor() { }

  toUpperCase(text: any): any{
    return text.toUpperCase();
  }
}
