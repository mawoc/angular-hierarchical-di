import { Component, OnInit } from '@angular/core';
import { SerwisService } from '../serwis.service';

@Component({
  selector: 'app-komponent',
  templateUrl: './komponent.component.html',
  styleUrls: ['./komponent.component.css'],
  providers:[SerwisService]
})
export class KomponentComponent implements OnInit {

  constructor(public serwis: SerwisService) { 

  }

  ngOnInit(): void {
  }

}
