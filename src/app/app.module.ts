import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadCrumbsComponent } from './components/bread-crumbs/bread-crumbs.component';
import { FileSizePipeModule } from '@demetra/file-size-pipe';

@NgModule({
  declarations: [AppComponent, BreadCrumbsComponent],
  imports: [BrowserModule, AppRoutingModule, FileSizePipeModule],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
