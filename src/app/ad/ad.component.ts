import { AdService } from './../services/ad.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css']
})
export class AdComponent implements OnInit {

  ads = [];
  constructor(private ad: AdService) { }

  ngOnInit(): void {
    this.ads = this.ad.list();
  }

}
