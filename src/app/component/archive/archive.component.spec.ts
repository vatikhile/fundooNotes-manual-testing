import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ArchiveComponent } from './archive.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import {IconComponent} from '../../../../src/app/component/icon/icon.component';
import {OrderOfPipe} from '../../../../src/app/pipe/order-of.pipe';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
// import { MatSnackBarModule } from '@angular/material/dialog';
describe('ArchiveComponent', () => {
  let component: ArchiveComponent;
  let fixture: ComponentFixture<ArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveComponent,IconComponent,OrderOfPipe],
      imports: [MatCardModule,MatTooltipModule,MatDialogModule,HttpClientModule,MatSnackBarModule,MatMenuModule,FlexLayoutModule, MatCheckboxModule,RouterTestingModule.withRoutes([{ path: 'archive', component: ArchiveComponent }])]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
