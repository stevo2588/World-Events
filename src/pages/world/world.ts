import { MapboxMap } from './../../components/mapbox-map/mapbox-map';
import { Component, ViewChild } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';


@Component({
  selector: 'page-world',
  templateUrl: 'world.html'
})
export class WorldPage {

  @ViewChild(MapboxMap) mapElement: MapboxMap;

  constructor(public navCtrl: NavController, platform: Platform) {
  }

  ionViewDidEnter() {
        console.log("World ready now!");
        // TODO: get height of header and tabs to set this
        this.mapElement.showMap(54,71);
  }

  ionViewWillLeave() {
        console.log("World leaving now!");
        this.mapElement.hideMap();
  }
}
