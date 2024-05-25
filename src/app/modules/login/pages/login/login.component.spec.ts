import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { HeaderService } from '../../../../shared/services/header.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  let spyHeaderService = {
    setShowHeader: jest.fn()
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent],
      providers: [
        { provide: HeaderService, useValue: spyHeaderService }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not show header when logging in', () => {
    const header = document.getElementsByTagName("header");
    expect(header.length).toEqual(0);

    expect(spyHeaderService.setShowHeader).toHaveBeenCalledWith(false);
  });

  it('should change aria-label when click on mostrar senha button', () => {
    const button = document.getElementById('buttonToggleMostrarSenha') as HTMLButtonElement;

    expect(button.getAttribute('aria-label')).toEqual('mostrar senha');

    button?.click();
    fixture.detectChanges();

    expect(button.getAttribute('aria-label')).toEqual('esconder senha');
  });

  it('should change icon when click on mostrar senha button', () => {
    const button = document.getElementById('buttonToggleMostrarSenha') as HTMLButtonElement;
    const icon = document.getElementById('iconToggleMostrarSenha') as HTMLElement;

    expect(icon.getAttribute('class')).toEqual('bi bi-eye');

    button?.click();
    fixture.detectChanges();

    expect(icon.getAttribute('class')).toEqual('bi bi-eye-slash');
  });

  it('should show password when click on mostrar senha button', () => {
    const button = document.getElementById('buttonToggleMostrarSenha') as HTMLButtonElement;
    const input = document.getElementById('pass') as HTMLInputElement;

    expect(input.getAttribute('type')).toEqual('password');

    button?.click();
    fixture.detectChanges();

    expect(input.getAttribute('type')).toEqual('text');
  });
});
