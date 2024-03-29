import './imports/polyfills';
import { Meteor } from 'meteor/meteor';

import 'hammerjs';
import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css";

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './imports/app/app.module';

Meteor.startup(() => {

  if (Meteor.isProduction) {
    enableProdMode();
  }

  platformBrowserDynamic().bootstrapModule(AppModule);

});
