import { Component, OnInit } from '@angular/core';
import * as L from "leaflet";

@Component({
  selector: 'app-explorar',
  templateUrl: './explorar.page.html',
  styleUrls: ['./explorar.page.scss'],
})
export class ExplorarPage implements OnInit {

  map!: L.Map;

  constructor() { }

  ngOnInit() {  
  }
  
  ionViewDidEnter(){
    if (this.map) {
      
    }else{
      this.map = L.map('mapId').setView([-33.590471, -70.586073], 13);

      L.tileLayer('https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png', {
      }).addTo(this.map);
      var nuevoIcono = L.icon({
        iconUrl: 'assets/icon/basurero.png',
        iconSize: [50, 50],
      });
      this.addMarkers()
    
      L.marker([-33.590471, -70.586073], { icon: nuevoIcono }).addTo(this.map);
      
    }
    

  }
  addMarkers(){
    const markersData = [
      { lat: -33.593617, lng: -70.593795},
      { lat: -33.60845101140838, lng: -70.57574385662116},
    ]
   
    var nuevoIcono = L.icon({
      iconUrl: 'assets/icon/basurero.png',
      iconSize: [50, 50],
    });
    

    for (let index = 0; index < markersData.length; index++) {
      const element = markersData[index];
      L.marker([element.lat, element.lng], {icon: nuevoIcono}).addTo(this.map)
      .bindPopup('Text')
      .openPopup();
      
    }
   
  }
 
  
}

