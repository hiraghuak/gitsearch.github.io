import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';



@Injectable()
export class ProfileService {

  private username: string;
  private clientid = 'd09c9b50d1a60c130d37';
  private clientsecret = '447a2b4a7cf044f865574523c6ceb353ec372a81';

  constructor(private http: Http) {
    console.log('service is now ready');
    this.username = '';
   }

// get funcation
getProfileinfo() {
// tslint:disable-next-line:max-line-length
return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret )
  .map(res => res.json());
}

updateProfile(username: string){
  this.username = username;
}


}
