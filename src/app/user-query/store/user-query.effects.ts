import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { UserQueryService } from "../service/user-query.service";
import { UserQueryActions } from "./user-query.actions";

@Injectable()
export class UserQueryEffects {
    
    constructor(
        private actions$: Actions,
        private service: UserQueryService
    ) {}

    loadUser$ = createEffect(() => this.actions$.pipe(
        ofType(UserQueryActions.loadUser),
        mergeMap((action: any) => this.service.getUser(action.user).pipe(
            map((response) => {
                console.log(response);
                return UserQueryActions.loadedUser({ userLoaded: response });
            }),
            catchError(() => EMPTY)
        ))
    ));

}