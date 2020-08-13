import { Subscription } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Component,OnInit, OnDestroy} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {
 private authListenerSubs : Subscription;
 isAuthenticated = false ;

  constructor(private authService : AuthService){}

 ngOnInit(){
   this.authListenerSubs =this.authService
   .getAuthStatusListener()
   .subscribe(isAuthenticated => {
     isAuthenticated =isAuthenticated;
   });


 }
 onLogOut(){
   this.authService.logout();
 }

 ngOnDestroy(){
  this.authListenerSubs.unsubscribe();
  }

}
