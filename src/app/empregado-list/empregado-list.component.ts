import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-empregado-list',
  templateUrl: './empregado-list.component.html',
  styleUrls: ['./empregado-list.component.css']
})
export class EmpregadoListComponent implements OnInit {

  empregados: Empregado[];

  constructor(private empregadoService: EmpregadoService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmpregados();
  }

  private getEmpregados(){
    this.empregadoService.getEmpregadosList().subscribe(data => {
      this.empregados = data;
    });
  }

  empregadoDetails(id: number){
    this.router.navigate(['empregado-details', id]);
  }

  updateEmpregado(id: number){
    this.router.navigate(['update-empregado', id]);
  }

  deleteEmpregado(id: number){
    this.empregadoService.deleteEmpregado(id).subscribe( data => {
      console.log(data);
      this.getEmpregados();
    })
  }
}