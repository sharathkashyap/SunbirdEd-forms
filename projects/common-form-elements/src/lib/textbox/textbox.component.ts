import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'sb-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextboxComponent implements OnInit {
  @Input() label: String;
  @Input() placeholder: String;
  @Input() formControlRef?: FormControl;

  constructor() {
  }

  ngOnInit() {
  }

}
