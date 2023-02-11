import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-instruction',
  templateUrl: './create-instruction.component.html',
  styleUrls: ['./create-instruction.component.css']
})
export class CreateInstructionComponent implements OnInit {
  public createForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      title: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      progress: new FormControl(''),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required),
      image: new FormControl('')
    });
  }
  public onSubmit() {
    
  }

}
