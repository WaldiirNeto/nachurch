import { Component, OnInit, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';



@Component({
    selector: 'na-heroslides',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

    mySlideOptions={items: 1, dots: true, nav: false};
    myCarouselOptions={items: 3, dots: true, nav: true};

    @ViewChild('owlElement') owlElement: OwlCarousel
 
    ngOnInit(): void {
       
    }

  
 
   fun() {
    
     this.owlElement.next([200]);
   }
}