import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'sb-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() label: any;
  @Input() options: any;
  @Input() formControlRef?: FormControl;

  constructor() { }

  ngOnInit() {
  }

}
