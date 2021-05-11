import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContaComponent } from './conta/conta.component';
import { PostsComponent } from './posts/posts.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { TemasComponent } from './temas/temas.component';
import { EditarTemaComponent } from './editar/editar-tema/editar-tema.component';
import { DeleteTemaComponent } from './delete/delete-tema/delete-tema.component';
import { MeusPostsComponent } from './meus-posts/meus-posts.component';




@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    SidebarComponent,
    ContaComponent,
    PostsComponent,
    MenuComponent,
    RodapeComponent,
    SobreNosComponent,
    TemasComponent,
    EditarTemaComponent,
    DeleteTemaComponent,
    MeusPostsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
