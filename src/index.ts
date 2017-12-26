import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomUrlScheme } from './service';

export * from './service';

@NgModule({
  imports: [
    CommonModule
  ],
})
export class CustomUrlSchemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CustomUrlSchemeModule,
      providers: [CustomUrlScheme]
    };
  }
}
