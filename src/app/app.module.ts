import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';  
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { SortNavigatorComponent } from './components/sort-navigator/sort-navigator.component';
import { SortPaneComponent } from './components/sort-pane/sort-pane.component';
import { SortGridComponent } from './components/sort-grid/sort-grid.component';
import { SortVisualizrComponent } from './components/sort-visualizr/sort-visualizr.component';
import { SortEditorComponent } from './com-parts/sort-editor/sort-editor.component';
import { appReducer } from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';

@NgModule({
  declarations: [
    AppComponent,
    SortNavigatorComponent,
    SortPaneComponent,
    SortGridComponent,
    SortVisualizrComponent,
    SortEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(
      { app: appReducer },
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true, 
          strictStateImmutability: true
        }
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
