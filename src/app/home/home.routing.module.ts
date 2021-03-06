import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MinisteriosComponent } from '../ministerios/ministerios.component';



const routes: Routes = [

    {
        path: '',
        component: HomeComponent,
        
        children: [
            { 
                path: '',
                component: HomeComponent,
                data: {
                    title: 'Nova Aliança Church'
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
export class HomeRoutingModule { }
