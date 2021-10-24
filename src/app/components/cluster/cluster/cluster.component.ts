import { Component, OnInit } from '@angular/core';
import { ClusterService } from 'src/app/service';

@Component({
    selector: 'app-cluster',
    templateUrl: './cluster.component.html',
    styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
    search: string = '';
    p: number = 1;

    clusterLit: any;

    constructor(
        private ClusterService: ClusterService,
    ) { }

    ngOnInit(): void {
        this.getClusterData();
    }

    getClusterData() {
        this.ClusterService.getClusterData().subscribe(Response => {
            this.clusterLit = Response;
        }, error => {
            console.log(error.message);
        });
    }
}
