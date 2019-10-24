import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private userService: UsersService) { }

  ngOnInit() {
      this.userService.getUsers()
                      .subscribe( users => this.usuarios = users);
  }

}
