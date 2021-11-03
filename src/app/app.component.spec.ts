import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('AppComponent', () => {
  let httpTestingController: HttpTestingController;
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    httpTestingController = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it(`should have as title 'sailpoint'`, () => {
    expect(component.title).toEqual('sailpoint');
  });

  it('should render h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Search Cities');
  });
  it('should create h2 tag with selected City', () => {
    component.selectedCity = {
      name: 'Beer',
      country: 'Israel',
      subcountry: 'Israel',
      geonameid: 222
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h2').textContent).toContain('Selected:Beer');
  });

  it('should create p tag with empty text', () => {
    component.cities = [];
    component.hasQuery = true;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.empty-text').textContent).toContain('Sorry. Nothing Found.');
  });


});
