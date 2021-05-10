import * as core from '@angular/core';


@core.Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements core.OnInit {
  formac = [{}];
  exper = [{}];

  constructor() { }

  ngOnInit(): void {
  }
  Enviar(): void {
    console.log('Enviar Arquivo!');
  }
  adicinarfor(): void {
    this.formac.push({});
    console.log('Adicionar');
  }
  removerfor(): void{
    this.formac.pop();
    console.log('remover');
  }
  adcionarexper(): void {
    this.exper.push({});
    console.log('Adicionar');
  }
  removerexper(): void {
    this.exper.pop();
    console.log('remover');
  }
}
