import { Action } from '@ngrx/store';
import { Usuario } from '../../models/usuario.model';

export const CARGAR_USUARIOS = '[Usuarios] Cargar Usuarios';
export const CARGAR_USUARIOS_FAIL = '[Usuarios] Cargar Usuarios ok';
export const CARGAR_USUARIOS_SUCCESS = '[Usuarios] Cargar Usuarios bad';

export class CargarUsuarios implements Action {
    readonly type = CARGAR_USUARIOS;
}

export class CargarUsuariosFail implements Action {
    readonly type = CARGAR_USUARIOS_FAIL;

    constructor(public payload: any) {}
}

export class CargarUsuariosSuccess implements Action {
    readonly type = CARGAR_USUARIOS_SUCCESS;

    constructor(public usuarios: Usuario[]) {}
}

export type ActionsUsers = CargarUsuarios | CargarUsuariosFail | CargarUsuariosSuccess;
