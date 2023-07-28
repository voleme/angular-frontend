import { Component, OnInit } from '@angular/core';
import { Empregado } from '../empregado';
import { ActivatedRoute } from '@angular/router';
import { EmpregadoService } from '../empregado.service';

@Component({
  selector: 'app-empregado-details',
  templateUrl: './empregado-details.component.html',
  styleUrls: ['./empregado-details.component.css']
})
export class EmpregadoDetailsComponent implements OnInit {

  id: number
  empregado: Empregado
  constructor(private route: ActivatedRoute, private employeService: EmpregadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empregado = new Empregado();
    this.employeService.getEmpregadoById(this.id).subscribe( data => {
      this.empregado = data;
    });
  }
}