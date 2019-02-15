import { Component, ViewChild } from '@angular/core';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
    selector: 'na-donates',
    templateUrl: './donates.component.html'

})

export class DonatesComponent{

    mySlideOptions={items: 3, dots: true, nav: false};
    myCarouselOptions={items: 3, dots: true, nav: true};

    @ViewChild('owlElement') owlElement: OwlCarousel

}