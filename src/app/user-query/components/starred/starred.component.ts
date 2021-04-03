import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserQueryService } from '../../service/user-query.service';

@Component({
  selector: 'app-starred',
  templateUrl: './starred.component.html',
  styleUrls: ['./starred.component.css']
})
export class StarredComponent implements OnInit {

  starred: any = [];

  constructor(private http: UserQueryService, private route: ActivatedRoute, private navigate: Router) { }

  ngOnInit(): void {
    console.log("Entrou");
    this.getStarred(this.route.snapshot.params.id);
  }

  // Requisição do serviço que obtém os repositórios com estrela
  getStarred(user: string) {
    this.http.getStarred(user).subscribe((starred: any) => {
      starred.forEach((value: any) => value.stargazers_count = value.stargazers_count.toLocaleString('pt-br'));
      this.starred = starred;
    });
  }

  redirect() {
    this.navigate.navigateByUrl('/');
  }

}
