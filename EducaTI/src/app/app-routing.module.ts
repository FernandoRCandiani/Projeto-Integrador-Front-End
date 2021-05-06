import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { ContaComponent } from './conta/conta.component';
import { EntrarComponent } from './entrar/entrar.component';
import { PostsComponent } from './posts/posts.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';

const routes: Routes = [
  {path:'', redirectTo:'entrar',pathMatch:'full'},

  {path:'cadastrar',component:CadastrarComponent},
  {path:'conta',component:ContaComponent},
  {path:'entrar',component: EntrarComponent},
  {path:'posts',component:PostsComponent},
  {path:'sidebar',component:SidebarComponent},
  {path:'sobre-nos',component:SobreNosComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
