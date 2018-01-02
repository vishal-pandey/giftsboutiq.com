import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(rating: string, limit?: number){

  	if(rating == "1"){
  		return "★☆☆☆☆";
  	}else if(rating == "2"){
  		return "★★☆☆☆";
  	}else if(rating == "3"){
  		return "★★★☆☆";
  	}else if(rating == "4"){
  		return "★★★★☆";
  	}else if(rating == "5"){
  		return "★★★★★";
  	}
  	

    // if(!text) return null;

    // let desiredLimit = (limit) ? limit : 20;

    // return text.substr(0, desiredLimit) + '...';
  
  }

}
