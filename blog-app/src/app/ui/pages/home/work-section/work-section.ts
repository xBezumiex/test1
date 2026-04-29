import { Component } from '@angular/core';

interface WorkItem {
  color: string;
  role: string;
  company: string;
  desc: string;
}

@Component({
  selector: 'app-work-section',
  standalone: true,
  templateUrl: './work-section.html',
  styleUrl: './work-section.scss'
})
export class WorkSectionComponent {
  protected workItems: WorkItem[] = [
    {
      color: 'orange',
      role: 'Graphic design',
      company: 'Consectetur · 2016–2017',
      desc: 'Nostrud tempor ultem cum accepteur do ut proident deserunt anim consequat exercitadu'
    },
    {
      color: 'purple',
      role: 'Photographer',
      company: 'Alienum · 2017–2020',
      desc: 'Ad do dolore ultem dolor et ea non dolor qui. Dolor amet tempor parteur officia paletur at'
    },
    {
      color: 'teal',
      role: "Photographer's Assistant",
      company: 'Adpliving · 2016–2020',
      desc: 'Ad do dolore ultem dolor et ea non dolor qui. Dolor amet tempor parteur officia paletur at'
    }
  ];
}
