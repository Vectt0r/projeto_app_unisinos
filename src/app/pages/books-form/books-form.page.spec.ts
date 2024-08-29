import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookFormPage } from './books-form.page';

describe('BooksFormPage', () => {
  let component: BookFormPage;
  let fixture: ComponentFixture<BookFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
