import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { CoreModule } from './core/core.module';
// import { ThemesModule } from './features/themes/themes.module';
import { RouterModule } from '@angular/router';
import { PagesModule } from './features/pages/pages.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './core/services/auth.service';
import { StoreModule } from '@ngrx/store';
import { counterReducer, currentUserReducer, IRootState } from './+store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
// import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule.forRoot(),
    // ThemesModule, - removed for lazy loading
    AppRoutingModule,
    RouterModule,
    PagesModule,
    StoreModule.forRoot<IRootState>({
      // Will be done with reducer
      counter: counterReducer,
      currentUser: currentUserReducer,
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    EffectsModule.forRoot([]),
    // AuthModule, - removed for lazy loading
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
        // debugger; // Used for debugging purposes
        return () => authService.authenticate();
      },
      deps: [AuthService],
      multi: true,
    }
  ],
  bootstrap: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
  ]
})
export class AppModule { }
