import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  ads = [
    { id: 1, description: 'Netflix', link: 'https://netflix.com/' },
    { id: 2, description: 'Globoesporte', link: 'https://globoesporte.globo.com' },
    { id: 3, description: 'Globoplay', link: 'https://globoplay.globo.com/' },
  ];
  constructor() { }

  list() {
    return this.ads;
  }
}
