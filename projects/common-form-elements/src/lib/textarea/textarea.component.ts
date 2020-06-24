import {ChangeDetectionStrategy, Component, OnInit, Input} from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'sb-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit {
  @Input() label: String;
  @Input() placeholder: String;
  @Input() formControlRef?: FormControl;
  constructor() { }

  ngOnInit() {
  }

}
