import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterOnlineApplicationSharedModule } from 'app/shared/shared.module';

import { ConfigurationComponent } from './configuration.component';

import { configurationRoute } from './configuration.route';

@NgModule({
  imports: [JhipsterOnlineApplicationSharedModule, RouterModule.forChild([configurationRoute])],
  declarations: [ConfigurationComponent],
})
export class ConfigurationModule {}
