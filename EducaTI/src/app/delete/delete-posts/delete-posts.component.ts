import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/model/Posts';
import { PostsService } from 'src/app/service/posts.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-delete-posts',
  templateUrl: './delete-posts.component.html',
  styleUrls: ['./delete-posts.component.css']
})
export class DeletePostsComponent implements OnInit {

  posts: Posts = new Posts()
  idPost: number
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postsService: PostsService
  ) { }

  ngOnInit(){
    if(environment.token == ''){
      this.router.navigate(['/entrar'])
    }

    this.idPost = this.route.snapshot.params['id']
    this.findByIdPosts(this.idPost)
  }

  findByIdPosts(id: number){
    this.postsService.getByIdPosts(id).subscribe((resp: Posts) => {
      this.posts = resp
    })
  }

  apagar(){
    this.postsService.deletePosts(this.idPost).subscribe(() => {
      alert("Postagem atualizada!!")
      this.router.navigate(['/posts'] )
    })
  }

}
