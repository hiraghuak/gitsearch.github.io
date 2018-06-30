import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: Http){}
  cityName = '';
  cityHumid = '';
  searchCity() {
this.http.get('http://api.openweathermap.org/data/2.5/find?q=' + this.cityName + '&APPID=81d02afb59eae5602a84c1ac69684d1e' )
    .subscribe(
      (res: Response) => {
      const weatherCity = res.json();
      console.log(weatherCity);
      this.cityHumid = weatherCity.list;
  }
);
}

  // constructor() { }
  ngOnInit() {
  }



}
