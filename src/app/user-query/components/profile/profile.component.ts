import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserQueryService } from '../../service/user-query.service';
import { UserQueryActions } from '../../store/user-query.actions';
import { UserQuerySelectors } from '../../store/user-query.selectors';
import { UserQueryState } from '../../store/user-query.states';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userData: any = {};
  user$!: Observable<any>;

  constructor(private http: UserQueryService, private route: ActivatedRoute, private store: Store<UserQueryState>) { }

  ngOnInit(): void {
    this.getUser(this.route.snapshot.params.id);
  }

  // Requisição do serviço que obtém os dados do usuário
  async getUser(user: string) {

    this.store.dispatch(UserQueryActions.loadUser({ user: user }));

    this.user$ = this.store.select(UserQuerySelectors.userLoaded);
    this.user$.subscribe(response => {
      if(response != null) {
        console.log(response);
        // response.followers = response.followers.toLocaleString('pt-br');
        // response.following = response.following.toLocaleString('pt-br');
        this.userData = response;
      }
    });

    // this.http.getUser(user).subscribe((user: any) => {
    //   user.followers = user.followers.toLocaleString('pt-br');
    //   user.following = user.following.toLocaleString('pt-br');
    //   this.userData = user;
    // });
  }

}
