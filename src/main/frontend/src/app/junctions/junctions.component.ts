import { Component, OnInit } from '@angular/core';
import { Junction } from "../entities/junction";
import {JunctionsDataService} from "../service/data/junctions-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-formular',
  templateUrl: './junctions.component.html',
  styleUrls: ['./junctions.component.scss']
})
export class JunctionsComponent implements OnInit{

    servers: any;

        constructor(private junctionsDataService: JunctionsDataService,
                    private router: Router) {
        }
      junctions:  Junction[] = [];
      message: string;

      ngOnInit(): void {
        this.refreshJunctions();
        console.log(this.junctions)
      }

      refreshJunctions() {
          this.junctionsDataService.getAllJunctions().subscribe(
              response => {
                  console.log(response);
                  this.junctions = response;
              }
          )
      }

      deleteJunction(id) {
          this.junctionsDataService.deleteJunction(id).subscribe(
              response => {
                  console.log(response);
                  this.message = `Delete of form ${id} is successful!`;
                  this.refreshJunctions();
              }
          )
      }

      updateForm(id) {
          console.log(`update ${id}`);
          this.router.navigate(["forms", id])
      }

      addForm() {
          this.router.navigate(["forms", -1])
      }

    }
