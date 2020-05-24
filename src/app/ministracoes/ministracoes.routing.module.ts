import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinisteriosComponent } from '../ministerios/ministerios.component';
import { MinistracoesComponent } from './ministracoes.component';



const routes: Routes = [

    {
        path: '',
        component: MinistracoesComponent,
        children: [
            {
                path: '', component: MinistracoesComponent,

                data: {
                    title: 'nachurch - ministrações'
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
export class MinistracoesRoutingModule {
}