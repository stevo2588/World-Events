import { WorldEvent } from './../../models/world-event';
import { DataService } from './../../services/data.service';
import { MapboxMap } from './../../components/mapbox-map/mapbox-map';
import { Component, ViewChild } from '@angular/core';

import { NavController, Platform, Events } from 'ionic-angular';


@Component({
  selector: 'page-world',
  templateUrl: 'world.html'
})
export class WorldPage {

  @ViewChild(MapboxMap) mapElement: MapboxMap;

  mapEvents = [];

  constructor(public navCtrl: NavController, platform: Platform, private dataService: DataService) {
      platform.ready().then(() => this.loadEvents());
  }

  private loadEvents(){
      this.dataService.obsv.subscribe(
          worldEvents => {
              console.log("Adding events to world now");
              this.mapEvents = worldEvents.map<any>(
                      e => ({
                        lat: e.wgs84_lat,
                        lng: e.wgs84_long,
                        title: e.title,
                        subtitle: e.source
                      })
              );
              // if(this.mapElement.visible) {
              //   this.mapElement.addEvents(worldEvents)
              // }
          },
          err => console.log(err),
          () => console.log('done loading data')
      );
  }


  ionViewDidEnter() {
        console.log("World ready now!");
        // TODO: get height of header and tabs to set this
        this.mapElement.showMap(54,71, this.mapEvents);
  }

  ionViewWillLeave() {
        console.log("World leaving now!");
        this.mapElement.hideMap();
  }
}
