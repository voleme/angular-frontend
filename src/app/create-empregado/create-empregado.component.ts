import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';
import { EmpregadoService } from '../empregado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-empregado',
  templateUrl: './create-empregado.component.html',
  styleUrls: ['./create-empregado.component.css']
})
export class CreateEmpregadoComponent implements OnInit {

  empregado: Empregado = new Empregado();
  constructor(private empregadoService: EmpregadoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmpregado(){
    this.empregadoService.createEmpregado(this.empregado).subscribe( data =>{
      console.log(data);
      this.goToEmpregadoList();
    },
    error => console.log(error));
  }

  goToEmpregadoList(){
    this.router.navigate(['/empregados']);
  }
  
  onSubmit(){
    console.log(this.empregado);
    this.saveEmpregado();
  }
}