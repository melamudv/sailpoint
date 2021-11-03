import { TestBed } from '@angular/core/testing';

import {DataService, ICity} from './data.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('DataService', () => {
  let service: DataService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#searchCities should use POST to retrieve data', () => {
    service.searchCities('is').subscribe();

    const testRequest = httpTestingController.expectOne('http://localhost:3000/api/search/');

    expect(testRequest.request.method).toEqual('POST');
  });

  it('should call with name and return the updated cities from the API', () => {
    const city: ICity[] = [{
      name: 'Beer',
      country: 'Israel',
      subcountry: 'Israel',
      geonameid: 222
    }];
    const send = 'beer';
    service.searchCities(send).subscribe((data) => {
      expect(data).toEqual(city);
    });
  });
});
