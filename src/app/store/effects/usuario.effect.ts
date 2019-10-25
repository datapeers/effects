import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromUsuario from '../actions';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from '../../users/users.service';

@Injectable()
export class UsuarioEffects {
    constructor(private actions$: Actions,
                private usersService: UsersService) {}

    cargarusuarios$ = createEffect(() => this.actions$.pipe(
            ofType(fromUsuario.CARGAR_USUARIO),
            switchMap(action => this.usersService.getUserById(action['id'])
                .pipe(
                  map(user => new fromUsuario.CargarUsuarioSuccess(user)),
                  catchError(err => of(new fromUsuario.CargarUsuarioFail(err)))
                ))
              ));
}
