import { Component, OnInit } from '@angular/core';
import {IInstructions} from 'src/app/Models/IInstructions';
import { InstructionsService } from '../services/instructions.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})



export class HomePageComponent implements OnInit {
  displayedColumns: string[] = ['Title', 'Description', 'Progress','CreatedDate','StartDate','EndDate','Image'];
  Instructions:IInstructions[]=[];
  constructor(private instructionsService:InstructionsService) { }

  ngOnInit(): void {
    this.instructionsService.getData().subscribe((data: any) => {
      this.Instructions=data;
      
    }
    
  
   )
  }

}
