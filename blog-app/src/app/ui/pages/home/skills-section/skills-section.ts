import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-section',
  standalone: true,
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.scss'
})
export class SkillsSectionComponent {
  protected skills: string[] = [
    'Photography',
    'Graphic Design',
    'Creativity',
    'Brand Identity',
    'Copy Writing',
    'Team Working'
  ];
}
