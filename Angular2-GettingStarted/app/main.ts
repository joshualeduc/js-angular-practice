// main entry point
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

//the code above to for compiling the app within the browser 'JiT'
//the code below compiles the app ahead of time 'AoT'

// import { platformBrowser } from '@angular/platform-browser';
// import { AppModuleNgFactory } from './app.module.ngfactory';

// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);