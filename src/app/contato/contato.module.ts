import { NgModule } from '@angular/core';
import { ContatoComponent } from './contato.component';
import { CommonModule } from '@angular/common';
import { BreadcumbAreaStartContactComponent } from './breadcumb-area-start/breadcumb-area-start-contact.component';
import { ContatoRoutingModule } from './contato.routing.module';
import { ContatoAreaStartModule } from './contato-area-start/contato-area-start.module';

@NgModule ({
    declarations : [ContatoComponent, BreadcumbAreaStartContactComponent],
    imports : [CommonModule, ContatoRoutingModule, ContatoAreaStartModule],
    exports : [ContatoComponent]
})
export class ContatoModule {}