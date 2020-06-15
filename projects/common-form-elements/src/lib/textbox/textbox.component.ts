import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent implements OnInit {
  @Input() label: String;
  @Input()  placeholder: String;
  constructor() { }

  ngOnInit() {
  }

}
