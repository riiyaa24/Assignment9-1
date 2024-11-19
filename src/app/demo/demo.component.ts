import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyRevPipe } from '../my-rev.pipe';

@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [CommonModule, MyRevPipe],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

}
