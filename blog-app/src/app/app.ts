import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './ui/components/header/header';
import { FooterComponent } from './ui/components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}