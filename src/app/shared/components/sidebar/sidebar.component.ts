import { Component } from "@angular/core";

@Component({
    selector : 'na-sidebar',
    templateUrl : './sidebar.component.html',
    styleUrls : ['./sidebar.component.css']
})
export class SidebarComponent {

    isShown = false;


    toggle() {
        this.isShown = ! this.isShown;
    }
}
