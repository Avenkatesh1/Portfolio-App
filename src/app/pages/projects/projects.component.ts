import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 
  constructor(private route:Router){}
 
  goBack() {
    this.route.navigate(['/Services']);
  }
}
