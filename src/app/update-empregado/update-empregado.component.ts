import { Component, OnInit } from '@angular/core';
import { EmpregadoService } from '../empregado.service';
import { Empregado } from '../empregado';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-empregado',
  templateUrl: './update-empregado.component.html',
  styleUrls: ['./update-empregado.component.css']
})
export class UpdateEmpregadoComponent implements OnInit {

  id: number;
  empregado: Empregado = new Empregado();
  constructor(private empregadoService: EmpregadoService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.empregadoService.getEmpregadoById(this.id).subscribe(data => {
      this.empregado = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.empregadoService.updateEmpregado(this.id, this.empregado).subscribe( data =>{
      this.goToEmpregadoList();
    }
    , error => console.log(error));
  }

  goToEmpregadoList(){
    this.router.navigate(['/empregados']);
  }
}