import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReservasCultoComponent } from './reservas-culto.component';



const routes: Routes = [

    {
        path: '',
        component: ReservasCultoComponent,
        data: {
            title: 'nachurch - Reservas'
        }
        // children: [
        //     {
        //         path: '', component: MinistracoesComponent,

        //         data: {
        //             title: 'nachurch - ministrações'
        //         }

        //     }


        // ]


    }



];
@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class ReservasCultoRoutingModule {
}