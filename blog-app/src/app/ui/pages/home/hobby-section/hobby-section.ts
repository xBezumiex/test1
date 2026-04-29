import { Component } from '@angular/core';

interface HobbyItem {
  img?: string;
  title: string;
  desc: string;
}

@Component({
  selector: 'app-hobby-section',
  standalone: true,
  templateUrl: './hobby-section.html',
  styleUrl: './hobby-section.scss'
})
export class HobbySectionComponent {
  protected hobbyItems: HobbyItem[] = [
    { img: 'img/mock img 1.png', title: 'Portrait series', desc: 'Captured in natural light' },
    { img: 'img/mock img 2.png', title: 'Branding', desc: 'Brand identity design' },
    { title: 'Urban shots', desc: 'City street photography' },
    { title: 'Nature', desc: 'Landscapes & wildlife' }
  ];
}
