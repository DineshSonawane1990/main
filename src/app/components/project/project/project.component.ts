import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProjectService } from 'src/app/service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

    search: string = '';
    p: number = 1;

    projectList: any;

    constructor(
        private ProjectService: ProjectService,
    ) { }

    ngOnInit(): void {
        this.getProjectData();
    }

    getProjectData() {
        this.ProjectService.getProjectData().subscribe(Response => {
            this.projectList = Response;
        }, error => {
            console.log(error.message);
        });
    }
}
