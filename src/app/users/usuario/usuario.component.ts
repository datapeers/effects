import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { CargarUsuario } from 'src/app/store/actions';
import { Usuario } from '../../models/usuario.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  usuario: Usuario;
  loading: boolean;
  error: any;
  subsciption = new Subscription();

  constructor(private store: Store<AppState>,
              private router: ActivatedRoute) { }

  ngOnInit() {
    this.router.params
    .subscribe( params => {
      const id = params['id'];
      this.store.dispatch(new CargarUsuario(id));
    });

    this.subsciption = this.store.select('usuario')
                                  .subscribe( user => {
                                    this.usuario = user.user;
                                    this.loading = user.loading;
                                    this.error = user.error;
                                  });
  }
}
