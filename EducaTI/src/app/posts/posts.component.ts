import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { Posts } from '../model/Posts';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']

})

export class PostsComponent implements OnInit {

  posts: Posts = new Posts()
  listaPosts: Posts[]

  constructor(
    private router: Router,
    private postsService: PostsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    window.scroll(0, 0)
    if (environment.token == '') {
      this.router.navigate(['/entrar'])
    }

    this.findAllPosts()

  }

  cadastrar() {
    this.postsService.postPosts(this.posts).subscribe((resp: Posts) => {
      this.posts = resp
      alert('Post criado com sucesso!')
      this.findAllPosts()
      this.posts = new Posts()
    })
  }

  findAllPosts() {
    this.postsService.getAllPosts().subscribe((resp: Posts[]) => {
      this.listaPosts = resp
    })
  }

}

