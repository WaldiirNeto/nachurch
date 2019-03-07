import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MinisteriosComponent } from '../ministerios/ministerios.component';



const routes: Routes = [

    {
        path: '',
        component: MinisteriosComponent,
        children: [
            {
                path: '', component: MinisteriosComponent,

                data: {
                    title: 'nachurch - ministérios'
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
export class MinisteriosRoutingModule { }
