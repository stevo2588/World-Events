import { Component } from '@angular/core';

import { WorldPage } from '../world/world';
import { EventsPage } from '../events/events';
import { PeoplePage } from '../people/people';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = WorldPage;
  tab2Root: any = EventsPage;
  tab3Root: any = PeoplePage;

  constructor() {

  }
}
