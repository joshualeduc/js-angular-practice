import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { WelcomeComponent } from './home/welcome.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { AuthGuard } from './user/auth-guard.service';
import { SelectiveStrategy } from './selective-strategy.service';

@NgModule({
    imports: [
        RouterModule.forRoot([
            { path: 'welcome', component: WelcomeComponent },
            { path: 'products', canActivate: [ AuthGuard ], data: { preload: true }, loadChildren: 'app/products/product.module#ProductModule'}, //use canLoad for no preloading (data was for custom strategy only)
            { path: '', redirectTo: 'welcome', pathMatch: 'full' },
            { path: '**', component: PageNotFoundComponent }
        ], { enableTracing: true, preloadingStrategy: SelectiveStrategy })
    ],
    providers: [ SelectiveStrategy ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
