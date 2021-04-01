import * as core from '@angular/core';
@core.Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements core.OnInit {
  constructor() { }

  ngOnInit(): void {
  }
  Enviar(): void {
    console.log('Enviar Arquivo!');
  }
}
