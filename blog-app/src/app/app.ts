import { Component } from '@angular/core';
import { HeaderComponent } from './ui/components/header/header';
import { FooterComponent } from './ui/components/footer/footer';
import { HomeComponent } from './ui/pages/home/home';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}