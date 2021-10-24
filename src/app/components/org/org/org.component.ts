import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { OrgService } from 'src/app/service';

@Component({
    selector: 'app-org',
    templateUrl: './org.component.html',
    styleUrls: ['./org.component.css']
})
export class OrgComponent implements OnInit {

    search: string = '';
    p: number = 1;

    orgList: any;

    constructor(
        private OrgService: OrgService,
    ) { }

    ngOnInit(): void {
        this.getOrgList();
    }

    getOrgList() {
        this.OrgService.getOrgData().subscribe(Response => {
            this.orgList = Response;
        }, error => {
            console.clear();
            console.log(error.message);
        });
    }
}
