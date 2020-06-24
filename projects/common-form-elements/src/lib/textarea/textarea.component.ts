import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';


@Component({
  selector: 'sb-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextareaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
