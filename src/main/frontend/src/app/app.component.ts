import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MatDialog} from "@angular/material";
import {Router} from "@angular/router";
import {UserService} from "@atp/ng-user";
import {EnvironmentService} from './common/environment.service';
import {TssService} from "@atp/ng-tss";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

    visRettigheder = false;
    userData: any;

    constructor(public uSvc: UserService,
                public dialog: MatDialog,
                private router: Router,
                private environmentService: EnvironmentService,
                private tssService: TssService) {
        this.tssService.language = 'DA';
    }

    ngOnInit(): void {
        this.userData = this.uSvc.userData;
       }

    toggle() {
        this.visRettigheder = !this.visRettigheder;
    }
}


