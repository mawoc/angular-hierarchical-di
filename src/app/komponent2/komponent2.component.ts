import { Component, OnInit } from '@angular/core';
import { SerwisService } from '../serwis.service';

@Component({
  selector: 'app-komponent2',
  templateUrl: './komponent2.component.html',
  styleUrls: ['./komponent2.component.css']
})
export class Komponent2Component implements OnInit {

  constructor(public serwis: SerwisService) { }

  ngOnInit(): void {
  }

}
