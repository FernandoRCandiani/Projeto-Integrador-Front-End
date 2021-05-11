import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Posts } from '../model/Posts';
import { Usuario } from '../model/Usuario';
import { AuthService } from '../service/auth.service';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-meus-posts',
  templateUrl: './meus-posts.component.html',
  styleUrls: ['./meus-posts.component.css']
})
export class MeusPostsComponent implements OnInit {

  post: Posts = new Posts()
  listaPosts: Posts[]

  user: Usuario = new Usuario()


  constructor(
    private postService : PostsService,
    private authService: AuthService,
    private router : Router,
    private route : ActivatedRoute
  ) { }

  ngOnInit(){
    window.scroll(0,0)

    if (environment.token ==''){
      this.router.navigate(['/entrar'])
    }
    let id = this.route.snapshot.params['id']
    this.findByIdUser(id)
  }

  findByIdUser(id: number){
    this.authService.encontrar(id).subscribe((resp: Usuario)=>{
      this.user = resp
      this.findAllPosts()
    })
  }

  findAllPosts(){
    this.postService.getAllPosts().subscribe((resp: Posts[])=>{
      this.listaPosts = resp
    })
  }


}
