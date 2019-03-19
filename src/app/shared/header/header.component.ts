import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'na-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']

})
export class HeaderComponent implements OnInit {

   
    constructor(private router: Router) { }

    submeterMinisterios() {
        this.router.navigate(['/ministerios']);
    }

    submeterContato() {
        this.router.navigate(['/contato']);
    }
    ngOnInit(): void {
        

    }


} 