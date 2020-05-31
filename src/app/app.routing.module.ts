import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { notFoundComponent } from './errors/not-found/not-found.component';
import { MinisteriosComponent } from './ministerios/ministerios.component';



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
        path: 'ministerios',
        pathMatch: 'full',
        redirectTo: 'ministerios'
    },
    {
        path: 'ministerios',
        loadChildren: './ministerios/ministerios.module#MinisteriosModule'
    },

    {
        path: 'contato',
        pathMatch: 'full',
        redirectTo: 'contato'
    },
    {
        path: 'contato',
        loadChildren: './contato/contato.module#ContatoModule'
    },
    {
        path: 'ministracoes',
        pathMatch: 'full',
        redirectTo: 'ministracoes'
    },
    {
        path: 'ministracoes',
        loadChildren: './ministracoes/ministracoes.module#MinistracoesModule'
    },

    {
        path: 'contribuicoes',
        pathMatch: 'full',
        redirectTo: 'contribuicoes'
    },
    {
        path: 'contribuicoes',
        loadChildren: './contribuicoes/contribuicoes.module#ContribuicoesModule'
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
    imports: [RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]
})

export class AppRoutingModule { }
