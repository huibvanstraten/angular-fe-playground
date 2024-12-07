import { NgModule } from '@angular/core';
import { NsApiService } from './treinreizen/ns-api.service';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule],
  providers: [NsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
