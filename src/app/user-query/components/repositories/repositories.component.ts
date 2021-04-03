import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserQueryService } from '../../service/user-query.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  repositories: any = [];

  constructor(private http: UserQueryService, private route: ActivatedRoute, private navigate: Router) { }

  ngOnInit(): void {
    this.getRepositories(this.route.snapshot.params.id);
  }

  // Requisição do serviço que obtém os repositórios do usuário
  getRepositories(user: string) {
    this.http.getRepositories(user).subscribe((repositories: any) => {
      this.repositories = repositories;
    });
  }

  redirect() {
    this.navigate.navigateByUrl('/');
  }
  
}
