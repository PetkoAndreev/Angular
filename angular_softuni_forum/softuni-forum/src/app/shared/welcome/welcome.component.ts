import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit, OnDestroy {

  // isLoggedIn$: Observable<boolean> = this.authService.isLoggedIn$;
  isLoggedIn!: boolean;

  private subscription: Subscription = new Subscription();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.authService.isLoggedIn$.subscribe(isLoggedIn => {
        // console.log('isLoggedIn', isLoggedIn)
        this.isLoggedIn = isLoggedIn;
      })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
