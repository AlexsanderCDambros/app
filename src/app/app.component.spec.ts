import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderService } from './shared/services/header.service';

describe('AppComponent', () => {
  let spyHeaderService = {
    showHeader: true
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: HeaderService, useValue: spyHeaderService }
      ]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'app' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('app');
  });
});
