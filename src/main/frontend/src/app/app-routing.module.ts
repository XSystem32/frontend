import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ISAMComponent} from './isam/isam.component';
import {JunctionsComponent} from './junctions/junctions.component';
import {TestformComponent} from "./testform/testform.component";
import {JunctionComponent} from "./junction/junction.component";


/**
 * Denne fil indeholder al routing i ISAM
 * BEMÆRK! Rækkefølgen af routes / path har betydning! Den 1. der matcher følges!
 */

export const routes: Routes = [
    {path: 'formCreator', component: ISAMComponent},
    {path: 'formular', component: JunctionsComponent},
    {path: 'testform', component: TestformComponent},
    {path: 'forms/:id', component: JunctionComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
