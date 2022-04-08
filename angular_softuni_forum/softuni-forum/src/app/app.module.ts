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
import { AuthService } from './auth.service';
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
    // AuthModule, - removed for lazy loading
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (authService: AuthService) => {
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
