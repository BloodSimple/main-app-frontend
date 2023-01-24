import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginResponse } from 'src/app/model/LoginResponse';
import { UserModel } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { UserService } from 'src/app/service/user.service';
import Swal from 'sweetalert2';

import Map from 'ol/Map';
import Tile from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import View from 'ol/View';
import Feature from 'ol/Feature';
import { MultiPoint, Point } from 'ol/geom';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import { reduce } from 'rxjs';
import VectorSource from 'ol/source/Vector';
import TileJSON from 'ol/source/TileJSON';
import VectorLayer from 'ol/layer/Vector';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import Vector from 'ol/source/Vector';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  map?: Map;
  myLocationFeauture = new Feature();
  myLocationVectorSource = new VectorSource();
  myLocationVectorLayer = new VectorLayer();
  rasterLayer = new TileLayer();
  // TODO: Hospital CENTERs
  randomPoints: any = [
    { lat: 40, lon: 40 },
    { lat: 50, lon: 50 },
    { lat: 60, lon: 60 },
  ];

  randomPointsFeature = new Feature();
  randomPointsVectorSource = new VectorSource();
  randomPointsVectorLayer = new VectorLayer();

  personalId: string = '';
  email: string = '';
  password: string = '';
  name: string = '';
  surname: string = '';
  gender: string = '';
  phoneNumber: string = '';
  job: string = '';

  addressStreet: string = '';
  addressNumber: string = '';
  addressCity: string = '';
  addressCountry: string = '';
  bio: string = '';

  filledDonationForm: boolean = false;
  howLongAgoWasDonationFormFilled: string = '';
  donationFormDate: Date = new Date();
  //  role: string='';

  user = new UserModel();
  activeUser: LoginResponse = new LoginResponse();

  constructor(
    private authenticationService: AuthenticationService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    console.log(this.user.personalId);
    this.activeUser = this.authenticationService.getCurrentUser();
    this.userService
      .getUserByPersonalId(this.activeUser.personalId)
      .subscribe((response) => {
        console.log(response);
        this.user = response;
        this.initializeMap();
        if (response.donationForm != null) {
          this.filledDonationForm = true;
          this.donationFormDate = new Date(response.donationForm.date);
          this.howLongAgoWasDonationFormFilled = this.formatPostDates(
            this.donationFormDate.getTime()
          );
          console.log('date: ' + this.donationFormDate);
        }
      });
  }

  save(): void {
    this.userService.updateUser(this.user).subscribe((user: UserModel) => {
      this.user = user;
      console.log(user);
      Swal.fire({
        icon: 'success',
        title: 'Yippee!',
        text: 'Successfull profile update!',
        background: '#1e2126',
        color: '#c4c4c4',
        showCancelButton: false,
        showConfirmButton: false,
        timer: 2000,
      });
    });
  }

  isRecentDate(date: Date): boolean {
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    return date >= sixMonthsAgo;
  }

  formatPostDates(date: number) {
    var now = new Date().getTime();
    var seconds = Math.floor((now - date) / 1000);
    var interval = seconds / 31536000;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' year ago';
      }
      return num + ' years ago';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' month ago';
      }
      return num + ' months ago';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' day ago';
      }
      return num + ' days ago';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' day ago';
      }
      return num + ' days ago';
    }
    interval = seconds / 60;
    if (interval > 1) {
      let num = Math.floor(interval);
      if (num <= 1) {
        return num + ' minute ago';
      }
      return num + ' minutes ago';
    }
    if (seconds >= 1) {
      return Math.floor(seconds) + ' seconds ago';
    } else {
      return 'just now';
    }
  }

  initializeMap() {
    if (this.user.addressX != undefined && this.user.addressY != undefined) {
      console.log(this.user.addressX, this.user.addressY);

      this.randomPointsVectorLayer = new VectorLayer({
        source: new Vector(),
        style: new Style({
          image: new Icon({
            anchor: [0.5, 46],
            color: 'orange',
            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '../assets/images/icon-hospital-marker.png',
          }),
        }),
      });

      for (let i = 0; i < this.randomPoints.length; i++) {
        let point = new Feature({
          geometry: new Point(
            fromLonLat([this.randomPoints[i].lon, this.randomPoints[i].lat])
          ),
        });
        this.randomPointsVectorLayer.getSource()!.addFeature(point);
      }

      this.myLocationFeauture = new Feature({
        geometry: new Point(
          fromLonLat([this.user.addressY, this.user.addressX])
        ),
      });
      this.myLocationFeauture.setStyle(
        new Style({
          image: new Icon({
            anchor: [0.5, 46],
            crossOrigin: 'anonymous',
            color: 'orange',

            anchorXUnits: 'fraction',
            anchorYUnits: 'pixels',
            src: '../assets/images/icon-marker.png',
          }),
        })
      );
      this.myLocationVectorSource = new VectorSource({
        features: [this.myLocationFeauture],
      });
      this.myLocationVectorLayer = new VectorLayer({
        source: this.myLocationVectorSource,
      });
      this.rasterLayer = new TileLayer({
        source: new OSM(),
      });

      this.map = new Map({
        layers: [
          this.rasterLayer,
          this.myLocationVectorLayer,
          this.randomPointsVectorLayer,
        ],
        target: 'map',
        view: new View({
          center: fromLonLat([this.user.addressY, this.user.addressX]),
          zoom: 13,
        }),
      });
      console.log(this.user.addressY, this.user.addressX);
    }
  }
}
