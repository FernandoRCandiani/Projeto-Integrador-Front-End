import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';

import { SidebarComponent } from './sidebar/sidebar.component';

import { ContaComponent } from './conta/conta.component';
import { PostsComponent } from './posts/posts.component';
import { MenuComponent } from './menu/menu.component';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,

    SidebarComponent,

    ContaComponent,

    PostsComponent,

    MenuComponent,

    RodapeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
