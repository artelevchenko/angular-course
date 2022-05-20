import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './components/post/post.component';
import { BarComponent } from './components/bar/bar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimalComponent } from './components/animal/animal.component';
import { PostFormComponent } from './components/post-form/post-form.component';
import { StyleDirective } from './directives/style.directive';
import { IfnotDirective } from './directives/ifnot.directive';
import { MultByPipe } from './pipes/mult-by.pipe';
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { AppCounterService } from './services/app-counter.service';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    BarComponent,
    HeaderComponent,
    FooterComponent,
    AnimalComponent,
    PostFormComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
    CounterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AppCounterService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
