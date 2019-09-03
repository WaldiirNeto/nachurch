import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
    selector: 'na-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

  public isMobile = false;
  manipularDivs = false;

    constructor(private router: Router,
      // tslint:disable-next-line:align
      private breakpointObserver: BreakpointObserver) { }

    submeterMinisterios() {
        this.router.navigate(['/ministerios']);
    }

    submeterContato() {
        this.router.navigate(['/contato']);
    }
    ngOnInit(): void {

      this.breakpointObserver.observe([
        '(max-width: 700px)'
    ]).subscribe(result => {
        this.isMobile = result.matches;
        console.log(this.isMobile);
        if (!this.isMobile) {
          console.log('nao é mobile');
        } else {
          this.manipularDivs = true;
          console.log('é mobile');
         //   this.textoBotao="Cadastrar Armamento";
        }

    });

    }


}
