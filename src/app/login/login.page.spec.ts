import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { IonicModule,  } from '@ionic/angular';
import { AppRoutingModule } from '../app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPage,  } from './login.page';


describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let router: Router;
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(),
      AppRoutingModule,
      ReactiveFormsModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    router =TestBed.get(Router);

    component = fixture.componentInstance;
  }));
  
  it('should create form on init', ()=>{
      component.ngOnInit();
      expect(component.form).not.toBeUndefined();
  
})
it('should go to home page on main', ()=>{
      spyOn(router,'navigate');
      
      component.main();

      expect(router.navigate).toHaveBeenCalledWith(['main']);
  
})
    fixture.detectChanges();
  });

 

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
function component(component: any) {
  throw new Error('Function not implemented.');
}

