import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
  FacebookLoginProvider,
  LinkedinLoginProvider,
  VkontakteLoginProvider,
} from "angular-6-social-login-v2";
import { ContactComponent } from './contact/contact.component';
import { AboutUsComponent } from './about-us/about-us.component';

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
    [
      {
        id: GoogleLoginProvider.PROVIDER_ID,
        provider: new GoogleLoginProvider("696130008807-0gvkppetocedrfs4krt2g8ac4jqqp7a8.apps.googleusercontent.com")
      }
    ]
  );
  return config;
}
const appRoutes: Routes = [
  { path: '', component: AboutUsComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: getAuthServiceConfigs
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
