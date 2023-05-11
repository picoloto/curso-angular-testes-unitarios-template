import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDropdownComponent } from './menu-dropdown.component';

const items = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' },
];

describe('MenuDropdownComponent', () => {
  let component: MenuDropdownComponent;
  let fixture: ComponentFixture<MenuDropdownComponent>;
  let button: any;
  let menu: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MenuDropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuDropdownComponent);
    component = fixture.componentInstance;
    button = fixture.nativeElement.querySelector('.dropdown-toggle');
    menu = fixture.nativeElement.querySelector('.dropdown-menu');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deve exibir o texto "Menu" no botão', () => {
    component.label = 'Menu';
    fixture.detectChanges();

    expect(button.textContent.trim()).toBe('Menu');
  });

  it('Deve abrir menu quando clicar no botão', () => {
    button.click();
    fixture.detectChanges();

    expect(menu.classList.contains('show')).toBeTrue();
  });

  it('Deve exibir os itens do menu corretamente', () => {
    component.items = items;

    button.click();
    fixture.detectChanges();

    const menuItems = fixture.nativeElement.querySelectorAll('.dropdown-item');

    expect(menuItems.length == component.items.length).toBeTrue();
  });

  it('Deve acionar o evento "selected" com o valor correto ao selecionar um item do menu', () => {
    component.items = items;

    button.click();
    fixture.detectChanges();

    const spy = spyOn(component.selected, 'emit');
    const menuItems = fixture.nativeElement.querySelectorAll('.dropdown-item');
    const item = component.items[0];

    menuItems[0].click();
    expect(spy).toHaveBeenCalledWith(item.value);
  });
});
