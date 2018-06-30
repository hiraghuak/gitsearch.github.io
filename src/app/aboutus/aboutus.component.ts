import { Component, OnInit , ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

import { ProfileService } from '../services/profile.service';


@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})


export class AboutusComponent implements OnInit {
  profile: any[];
  username: string;

constructor(private profileService: ProfileService) {

}

findProfile(){
  this.profileService.updateProfile(this.username);
  this.profileService.getProfileinfo().subscribe(profile => {
    console.log(profile);
    this.profile = profile;
  });
}


// gituser = '';
// gitResult = '';
// gitUserSearch() {
// this.http.get('https://api.github.com/users?q=' + this.gituser  )
//   .subscribe(
//     (res: Response) => {
//     const gitRespons = res.json();
//     console.log(gitRespons);
//     this.gitResult = gitRespons;
// }
// );
// }
// https://api.github.com/search/users?q=raghu112220


  ngOnInit() {
  }

}
