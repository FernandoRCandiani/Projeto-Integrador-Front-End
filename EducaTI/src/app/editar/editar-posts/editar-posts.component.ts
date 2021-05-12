import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/model/Posts';
import { PostsService } from 'src/app/service/posts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-editar-posts',
  templateUrl: './editar-posts.component.html',
  styleUrls: ['./editar-posts.component.css']
})
export class EditarPostsComponent implements OnInit {

  posts: Posts = new Posts()

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    let id = this.route.snapshot.params['id']
    this.findByIdPosts(id)
  }

  findByIdPosts(id: number){
    this.postsService.getByIdPosts(id).subscribe((resp: Posts) => {
      this.posts = resp
    })
  }

  atualizar(){
    this.postsService.putPosts(this.posts).subscribe((resp: Posts) => {
      this.posts = resp
      alert("Postagem atualizada!!")
      this.router.navigate(['/posts'] )
    })
  }
}
