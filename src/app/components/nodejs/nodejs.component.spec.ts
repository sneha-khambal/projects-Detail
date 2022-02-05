/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NodejsComponent } from './nodejs.component';

describe('NodejsComponent', () => {
  let component: NodejsComponent;
  let fixture: ComponentFixture<NodejsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodejsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
