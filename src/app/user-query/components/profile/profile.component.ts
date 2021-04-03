import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserQueryService } from '../../service/user-query.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any = {};

  constructor(private http: UserQueryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
  }

  // Requisição do serviço que obtém os dados do usuário
  async getUser(user: string) {
    this.http.getUser(user).subscribe((user: any) => {
      user.followers = user.followers.toLocaleString('pt-br');
      user.following = user.following.toLocaleString('pt-br');
      this.userData = user;
    });
  }

}
