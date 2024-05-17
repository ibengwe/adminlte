import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AdminlteComponent } from './components/layout/adminlte/adminlte.component';
import { MainHeaderComponent } from './components/layout/main-header/main-header.component';
import { MainSidebarComponent } from './components/layout/main-sidebar/main-sidebar.component';
import { ContentWrapperComponent } from './components/layout/content-wrapper/content-wrapper.component';
import { ControlSidebarComponent } from './components/layout/control-sidebar/control-sidebar.component';
import { MainFooterComponent } from './components/layout/main-footer/main-footer.component';
import { Dashboard1Component } from './components/pages/dashboard1/dashboard1.component';
import { Dashboard2Component } from './components/pages/dashboard2/dashboard2.component';
import { Dashboard3Component } from './components/pages/dashboard3/dashboard3.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminlteComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    ContentWrapperComponent,
    ControlSidebarComponent,
    MainFooterComponent,
    Dashboard1Component,
    Dashboard2Component,
    Dashboard3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
