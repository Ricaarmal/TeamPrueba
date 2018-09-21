import {
  Component,
  OnInit,
  ViewChild,
  Input,
  AfterViewInit
} from '@angular/core';

import { FormComponent } from '../../Form/form/form.component';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild(FormComponent)
  newText: FormComponent;
  faCoffee = faCoffee;

  constructor() {}

  ngAfterViewInit() {
    console.log(this.newText);
  }
}
