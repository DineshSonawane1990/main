import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cluster',
  templateUrl: './cluster.component.html',
  styleUrls: ['./cluster.component.css']
})
export class ClusterComponent implements OnInit {
  search: string = '';
  p: number = 1;

  clusterLit = [
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },
    { clusterName: 'ample-dev-cluster', server: 'http//:192.168.1.99', contentName: 'ample-dev-content' },
    { clusterName: 'ample-prod-cluster', server: 'http//:192.168.1.998', contentName: 'ample-prod-content' },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
