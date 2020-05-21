import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newsletter',
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  subscribe(email: string) {
    alert('Email ' + email + ' cadastrado com sucesso.');
  }
}
