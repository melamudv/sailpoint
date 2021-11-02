import {Component} from '@angular/core';
import {ICity, DataService} from './data.service';
import { debounce } from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'sailpoint';
  cities: ICity[] = [];
  hasQuery: boolean = false;
  selectedCity: ICity;
  constructor(private postService: DataService) {
    this.sendData = debounce(this.sendData, 700);
  }

  sendData(event: any): void{
    const query: string = event.target.value;
    //Will match if query is nothing or is only spaces
    const matchSpaces: any = query.match(/\s*/);
    this.checkSpaces(matchSpaces, query);
    this.postService
      .searchCities(query.trim())
      .subscribe(results => {
      this.cities = results;
      this.hasQuery = true;
    });
  }
  checkSpaces(matchSpaces, query): void{
    if (matchSpaces[0] === query){
      this.cities = [];
      this.hasQuery = false;
      return;
    }
  }

  onSelectedCity(city: ICity): void{
    this.selectedCity = city;
  }
}
