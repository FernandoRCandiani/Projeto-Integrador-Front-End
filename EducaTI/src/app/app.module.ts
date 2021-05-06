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




@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    SidebarComponent,
    ContaComponent,
    PostsComponent,
    MenuComponent,
<<<<<<< HEAD

    RodapeComponent,

=======
    RodapeComponent,
>>>>>>> b747b15a5ef80152da058f4775f4593e721149a0
    SobreNosComponent

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
