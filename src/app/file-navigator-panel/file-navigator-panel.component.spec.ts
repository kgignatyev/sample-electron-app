import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileNavigatorPanelComponent } from './file-navigator-panel.component';

describe('FileNavigatorPanelComponent', () => {
  let component: FileNavigatorPanelComponent;
  let fixture: ComponentFixture<FileNavigatorPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileNavigatorPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileNavigatorPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
