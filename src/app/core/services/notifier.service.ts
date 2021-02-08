import { Injectable, Injector, Input } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NotifierService {


  constructor(
    private snackBar:MatSnackBar,private injector: Injector) { }


  notify(label:string){
    const translate= this.injector.get(TranslateService);
    translate.get(label).subscribe(
      res => {
        this.snackBar.open(res,null,{
          panelClass: ['mat-toolbar', 'mat-primary']
        })
      }
    )
  }

  error(label:string){
    const translate= this.injector.get(TranslateService);
    translate.get(label).subscribe(
      res => {
        this.snackBar.open(res,null,{
          panelClass: ['mat-toolbar', 'mat-accent']
        })
      }
    )
  }

  warn(label:string){
    const translate= this.injector.get(TranslateService);
    translate.get(label).subscribe(
      res => {
        this.snackBar.open(res,null,{
          panelClass: ['mat-toolbar', 'mat-warn']
        })
      }
    )
  }
  
}
