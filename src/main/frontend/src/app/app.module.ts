import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ButtonsModule, NavbarModule, WavesModule} from 'angular-bootstrap-md'
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {A11yModule} from '@angular/cdk/a11y';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {HttpClientModule} from "@angular/common/http";
import {EditorModule} from "@tinymce/tinymce-angular";
import { ReactiveFormsModule } from '@angular/forms';
import {
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule
} from "@angular/material";
import {BrowserModule} from "@angular/platform-browser";
import {NgStartupComponentModule} from "@atp/ng-startup";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ISAMComponent} from './isam/isam.component';
import {EnvironmentService} from './common/environment.service';
import { ViewComponent } from './view/view.component';
import { JunctionsComponent } from './junctions/junctions.component';
import { TestformComponent } from './testform/testform.component';
import { JunctionComponent } from './junction/junction.component';

@NgModule({
    declarations: [
        AppComponent,
        ISAMComponent,
        ViewComponent,
        JunctionsComponent,
        TestformComponent,
        JunctionComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        A11yModule,
        CdkStepperModule,
        CdkTableModule,
        CdkTreeModule,
        DragDropModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatTreeModule,
        ScrollingModule,
        NavbarModule, WavesModule, ButtonsModule,
        FormsModule,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        EditorModule,
        ReactiveFormsModule,
        NgStartupComponentModule.forRoot()
    ],
    providers:
        [
            EnvironmentService
            // {provide: APP_INITIALIZER, useFactory: init_adgang, deps: [AdgangService], multi: true}
            // {provide: APP_BASE_HREF, useValue: environment.production ? '/eps/virk' : './'},
        ],
    bootstrap:
        [AppComponent],
    entryComponents: []
})

export class AppModule {
}
