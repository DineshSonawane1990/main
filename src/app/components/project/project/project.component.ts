import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  search: string = '';
  p: number = 1;

  projectList = [
    { projectName: 'p1', orgName: '01' },
    { projectName: 'p2', orgName: '02' },
    { projectName: 'p3', orgName: '03' },
    { projectName: 'p4', orgName: '04' },
    { projectName: 'p5', orgName: '05' },
    { projectName: 'p6', orgName: '06' },
    { projectName: 'p7', orgName: '07' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
