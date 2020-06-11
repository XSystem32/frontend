import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {JunctionsComponent} from './junctions/junctions.component';
import {JunctionComponent} from './junction/junction.component';
import {TestComponent} from './test/test.component';


/**
 * Denne fil indeholder al routing i ISAM
 * BEMÆRK! Rækkefølgen af routes / path har betydning! Den 1. der matcher følges!
 */

export const routes: Routes = [
    {path: 'formular', component: JunctionsComponent},
    {path: 'forms/:id', component: JunctionComponent},
    {path: 'test', component: TestComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
