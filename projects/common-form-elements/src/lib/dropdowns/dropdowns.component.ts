import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.css']
})
export class DropdownsComponent implements OnInit {
  @Input() label: any;
  @Input() placeholder: any;
  @Input() values: any;
  @Input() dataSrc: any;
  @Input() apiPath: any;
  @Input() parentId: any;

  constructor() { }

  ngOnInit() {
    console.log(this.values);
  }

}
