import { NgModule } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentViewerComponent } from './components/content-viewer/content-viewer.component';
import { FileSizePipe } from './pipes/filesize.pipe';
import { CommonModule, NgFor } from '@angular/common';

@NgModule({
  declarations: [AppComponent, ContentViewerComponent],
  imports: [BrowserModule, AppRoutingModule, CommonModule, FileSizePipe, NgFor],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
