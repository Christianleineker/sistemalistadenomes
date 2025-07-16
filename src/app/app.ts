import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Componente01 } from './componente01/componente01';

@Component({
  selector: 'app-root',
  imports: [Componente01],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projecton');
}
