import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Usuario } from '../../models/usuario.model';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { CargarUsuarios } from 'src/app/store/actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading: boolean;
  error: any;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
      this.store.dispatch(new CargarUsuarios());

      this.store.select('usuarios')
      .subscribe( usuarios => {
        this.usuarios = usuarios.users;
        this.loading = usuarios.loading;
        this.error = usuarios.error;
       });
  }

}
