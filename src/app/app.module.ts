import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatButtonModule, MatDividerModule, MatListModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { PlayerComponent } from './team/player/player.component';
import { TeamFormService } from './team/team-form.service';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsFormPluginModule } from '@ngxs/form-plugin';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatListModule,
    NgxsModule.forRoot([]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsFormPluginModule.forRoot(),
  ],
  providers: [TeamFormService],
  bootstrap: [AppComponent]
})
export class AppModule { }
