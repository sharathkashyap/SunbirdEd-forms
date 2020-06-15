import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() config;
  constructor() { }

  ngOnInit() {
    console.log('config here is ', this.config);
  }

}
