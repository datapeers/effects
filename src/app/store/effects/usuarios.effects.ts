import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as fromUsuarios from '../actions';
import { map, switchMap, catchError  } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from '../../users/users.service';

@Injectable()
export class UsuariosEffects {
    constructor(private actions$: Actions,
                private usersService: UsersService) {}

    cargarusuarios$ = createEffect(() => this.actions$.pipe(
            ofType(fromUsuarios.CARGAR_USUARIOS),
            switchMap(() => this.usersService.getUsers()
                .pipe(
                  map(users => new fromUsuarios.CargarUsuariosSuccess(users)),
                  catchError(err => of(new fromUsuarios.CargarUsuariosFail(err)))
                ))
              ));
}
