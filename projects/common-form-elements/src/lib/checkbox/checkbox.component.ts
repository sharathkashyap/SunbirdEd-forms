import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label: any;
  @Input() values: any;
  valuesInArr = [];

  constructor() { }

  ngOnInit() {
    for (const prop of Object.keys(this.values)) {
      this.valuesInArr.push(this.values[prop]);
    }
  }

}
