import { Platform } from 'ionic-angular';
import { Component } from '@angular/core';

// TODO: Still the issue of actually containing this with an html element instead of having it overlay (as webview):
// issue being worked on here: https://github.com/Telerik-Verified-Plugins/Mapbox/pull/29
 
@Component({
    selector: 'mapbox-map',
    templateUrl: './mapbox-map.html',
})
export class MapboxMap {
 
    constructor(platform: Platform){
    }

    hideMap() {
      Mapbox.hide();
    }

    showMap(marginTop, marginBottom) {
        Mapbox.show(
          {
            style: 'emerald', // light|dark|emerald|satellite|streets , default 'streets'
            margins: {
              left: 0, // default 0
              right: 0, // default 0
              top: marginTop, // default 0
              bottom: marginBottom // default 0
            },
            center: { // optional, without a default
              lat: 52.3702160,
              lng: 4.8951680
            },
            zoomLevel: 12, // 0 (the entire world) to 20, default 10
            showUserLocation: true, // your app will ask permission to the user, default false
            hideAttribution: false, // default false, Mapbox requires this default if you're on a free plan
            hideLogo: false, // default false, Mapbox requires this default if you're on a free plan
            hideCompass: false, // default false
            disableRotation: false, // default false
            disableScroll: false, // default false
            disableZoom: false, // default false
            disablePitch: false, // disable the two-finger perspective gesture, default false
            markers: [
              {
                lat: 52.3732160,
                lng: 4.8941680,
                title: 'Nice location',
                subtitle: 'Really really nice location'
              }
            ]
          },

          // optional success callback
          function(msg) {
            console.log("Mapbox Success :) " + JSON.stringify(msg));
          },

          // optional error callback
          function(msg) {
            alert("Error :( " + JSON.stringify(msg));
          }
        )
    }
}