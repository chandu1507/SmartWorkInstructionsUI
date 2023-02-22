import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
@Component({
  selector: 'app-create-instruction',
  templateUrl: './create-instruction.component.html',
  styleUrls: ['./create-instruction.component.css']
})
export class CreateInstructionComponent implements OnInit {
  public createForm!: FormGroup;
  constructor(private router: Router) { }

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
    let requestPayload = {
      
      "Title": this.createForm.get('title')?.value,
      "Description": this.createForm.get('description')?.value,
      "Progress": this.createForm.get('progress')?.value,
      "Isactive": true,
      "CreatedDate": null,
      "StartDate": this.createForm.get('startDate')?.value,
      "EndDate": this.createForm.get('endDate')?.value,
      "Image": null,
      
    };
  }
  CancelForm() {
    this.router.navigate(['home']);
  }
  saveInstructionData(form: NgForm){

  }
}
