import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { notFoundComponent } from './errors/not-found/not-found.component';



// ROTAS PARA PAGINAS
const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
    },
    {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: '**',
        component: notFoundComponent,
        data: {
            title: 'not Found'
        }
    }


];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
