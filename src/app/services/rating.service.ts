import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RatingService {

  constructor(private http:Http,) { }

  submitReview(pid, rating, name, email, comment){
  	return this.http.post("http://api.giftsboutiq.com/review/insert.php", {
      "pid": pid,
      "rating": rating,
      "name": name,
      "email": email,
      "comment": comment,
    }).map(res => res.text());
  }

  fetchReview(pid){
  	return this.http.post("http://api.giftsboutiq.com/review/fetch.php", {
      "pid": pid,
    }).map(res => res.json());
  }

}
