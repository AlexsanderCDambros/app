import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      providers: [
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should focusOnMainContent works when main tag exists', () => {
    fixture.detectChanges();

    const header = fixture.debugElement.query(By.css('header')).nativeElement;
    header.innerHTML = header.innerHTML + '<main></main>';    

    const main = fixture.debugElement.query(By.css('main')).nativeElement;
    spyOn(main, 'setAttribute');
    spyOn(main, 'removeAttribute');
    spyOn(main, 'focus');
    
    jasmine.clock().install();

    const btn = fixture.debugElement.query(By.css('.accessibility-button')).nativeElement;
    btn.click();

    jasmine.clock().tick(150);
    
    expect(main.setAttribute).toHaveBeenCalled();
    expect(main.focus).toHaveBeenCalled();
    expect(main.removeAttribute).toHaveBeenCalled();
    jasmine.clock().uninstall()
  });

  it('should do nothing when main tag does not exist', () => {
    fixture.detectChanges(); 

    const main = fixture.debugElement.query(By.css('main'))?.nativeElement;
    
    jasmine.clock().install();

    const btn = fixture.debugElement.query(By.css('.accessibility-button')).nativeElement;
    btn.click();

    jasmine.clock().tick(150);
    
    expect(main).toBeUndefined();
    jasmine.clock().uninstall()
  });
});
