import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContaComponent } from './conta/conta.component';

import { DeletePostsComponent } from './delete/delete-posts/delete-posts.component';
import { EditarPostsComponent } from './editar/editar-posts/editar-posts.component';
import { EditarTemaComponent } from './editar/editar-tema/editar-tema.component';
import { EntrarComponent } from './entrar/entrar.component';
import { MeusPostsComponent } from './meus-posts/meus-posts.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemasComponent } from './temas/temas.component';

const routes: Routes = [
  {path:'', redirectTo:'entrar',pathMatch:'full'},

  {path:'cadastrar',component:CadastrarComponent},
  {path:'entrar',component: EntrarComponent},
  {path:'posts',component:PostsComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'sobre-nos',component:SobreNosComponent},
  {path:'temas', component: TemasComponent},
  {path:'editar-tema/:id', component: EditarTemaComponent},
  {path:'meus-posts/:id', component: MeusPostsComponent},
  {path: 'editar-posts/:id', component: EditarPostsComponent},
  {path: 'delete-posts/:id', component: DeletePostsComponent},
  {path:'conta/:id',component:ContaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
