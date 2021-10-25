import { Component, OnInit, TemplateRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProjectService } from 'src/app/service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

    modalRef?: BsModalRef;
    search: string = '';
    p: number = 1;

    projectList: any;

    constructor(
        private ProjectService: ProjectService,
        private modalService: BsModalService,
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

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
      }
}
