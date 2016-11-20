import { EnvironmentService } from './../services/environment.service';
import { DataService } from './../services/data.service';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { EventsPage } from '../pages/events/events';
import { PeoplePage } from '../pages/people/people';
import { WorldPage } from '../pages/world/world';
import { TabsPage } from '../pages/tabs/tabs';
import { MapboxMap } from './../components/mapbox-map/mapbox-map';

@NgModule({
  declarations: [
    MyApp,
    EventsPage,
    PeoplePage,
    WorldPage,
    TabsPage,
    MapboxMap
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EventsPage,
    PeoplePage,
    WorldPage,
    TabsPage,
    MapboxMap
  ],
  providers: [ DataService, EnvironmentService ]
})
export class AppModule {}
