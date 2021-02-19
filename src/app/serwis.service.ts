import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SerwisService {

  public serviceId: number;

  constructor() {
    this.serviceId = Math.random();
  }
}
