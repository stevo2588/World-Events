import { WorldEvent } from './../../models/world-event';
import { DataService } from './../../services/data.service';
import { Component } from '@angular/core';

import { NavController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {

  worldEvents = []

  constructor(public navCtrl: NavController, platform: Platform, private dataService: DataService) {
      platform.ready().then(() => this.loadEvents());
  }

  private loadEvents(){
    this.dataService.obsv.subscribe(
        worldEvents => {
            this.worldEvents = worldEvents.map<any>(
                    e => ({
                      title: e.title,
                      subtitle: e.source
                    })
            );
        },
        err => console.log(err),
        () => console.log('done loading data')
    );
  }


}
