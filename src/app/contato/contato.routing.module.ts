import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoComponent } from './contato.component';




const routes: Routes = [

    {
        path: '',
        component: ContatoComponent,
        children: [
            {
                path: '', component: ContatoComponent,

                data: {
                    title: 'nachurch - Contato'
                }

            }


        ]

                
    }



];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ContatoRoutingModule { }
