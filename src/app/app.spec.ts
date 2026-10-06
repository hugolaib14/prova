import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('El meu catàleg');
    expect(compiled.querySelectorAll('app-perfil').length).toBe(2);
    expect(compiled.querySelectorAll('.llistes li').length).toBe(17);
    expect(compiled.querySelector('.llistes')?.textContent).toContain('monitor');
    expect(compiled.querySelector('.llistes')?.textContent).toContain('5. webcam');
    expect(compiled.textContent).toContain('Edat: 19 anys');
  });
});
