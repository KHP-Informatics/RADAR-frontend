import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ActivatedRoute, Router } from '@angular/router'

import {
  ActivatedRouteStub,
  RouterStub
} from '../../../../assets/testing/router-stubs'
import { NotFoundPageComponent } from './not-found-page.component'

describe('NotFoundPageComponent', () => {
  let component: NotFoundPageComponent
  let fixture: ComponentFixture<NotFoundPageComponent>

  beforeEach(() => {
    const activatedRoute = ActivatedRouteStub

    TestBed.configureTestingModule({
      declarations: [NotFoundPageComponent],
      providers: [
        { provide: Router, useClass: RouterStub },
        { provide: ActivatedRoute, useValue: activatedRoute }
      ]
    })

    fixture = TestBed.createComponent(NotFoundPageComponent)
    component = fixture.componentInstance

    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
