import { HttpClient } from '@angular/common/http';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from '../../services/usuario.service'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnDestroy, OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  providers: [UsuarioService]

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
    this.getUsuarios();
    this.getUsuariosSort();
  }
  getUsuarios() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuarios = res as Usuario[];
        this.dtTrigger.next();
      })
  }
  getUsuariosSort() {
    this.usuarioService.getUsuarios()
      .subscribe(res => {
        this.usuarioService.usuariosSort = res as Usuario[];
        const result = this.usuarioService.usuariosSort
        console.log(result.sort((a, b) => {
          if (a.name.length < b.name.length) {
            return -1
          }
          if (a.name.length > b.name.length) {
            return 1
          }
          return 0
        }))

      }
      )

  }
  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

}
