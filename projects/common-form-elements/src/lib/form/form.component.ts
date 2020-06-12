import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Input() formInput: any;
  constructor() { }

  ngOnInit() {

    this.formInput = {
      label: 'Board',
      placeholder: '',
      values: ['andhra pradesh', 'Tamil Nadu', 'Icse', 'cbse'],
      dataSrc: '',
      apiPath: '',
      parentId: ''
    };
  }

}
