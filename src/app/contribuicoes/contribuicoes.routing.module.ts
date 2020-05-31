import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContribuicoesComponent } from './contribuicoes.component';



const routes: Routes = [

    {
        path: '',
        component: ContribuicoesComponent,
        children: [
            {
                path: '', component: ContribuicoesComponent,

                data: {
                    title: 'nachurch - Contribuições'
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
export class ContribuicoesRoutingModule {
}