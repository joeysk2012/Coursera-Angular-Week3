/// <reference types="@types/googlemaps" />
import { Component, OnInit, ViewChild } from '@angular/core';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  leaders : Leader[];
  displayedColumns: string[] = ['id','name','number','address', 'hours', 'promotions'];
  selected : string;
  markerDict : any;

  constructor(private leaderService: LeaderService) { }

  ngOnInit() { 
    this.leaders = this.leaderService.getLeaders();

  } 

}
