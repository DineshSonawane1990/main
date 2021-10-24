import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-org',
  templateUrl: './org.component.html',
  styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {
  search:string = '';
  p: number = 1;

  orgList = [
    { name: 'Sambian' },
    { name: 'Samcorp' },
    { name: 'sideway' },
    { name: 'Scrump' },
    { name: 'Subway' },
    { name: 'Astronot' },
    { name: 'airway' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
