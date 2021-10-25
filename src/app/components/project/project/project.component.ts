import { Component, OnInit, TemplateRef } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProjectService } from 'src/app/service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})

export class ProjectComponent implements OnInit {

    modalRef?: BsModalRef;
    search: string = '';
    p: number = 1;
    projectForm: any;

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

    createForm() {
        this.projectForm = new FormGroup({
            projectName: new FormControl('', null),
            org: new FormControl('', null),
            discription: new FormControl('', null),
            ownerName: new FormControl('', null),
            ownerEmail: new FormControl('', null)
        });
    }


    openModal(template: TemplateRef<any>) {
        this.createForm();
        this.modalRef = this.modalService.show(template);
    }

    onSubmit() {
        console.log('data-->', this.projectForm.value);
        this.modalService.hide();
    }
}
