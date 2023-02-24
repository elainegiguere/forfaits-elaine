import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulaire-contact',
  templateUrl: './formulaire-contact.component.html',
  styleUrls: ['./formulaire-contact.component.css']
})

export class FormulaireContactComponent implements OnInit {

  toppings = new FormControl('');
  toppingList: string[] = ['Réseaux sociaux', 'Bouche à oreille', 'Journal', 'Internet'];

  isChecked = true;
  
  

  profileForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    email:[''],
    tel:[''],
    message:[''],
   
  });

 

  constructor(private fb: FormBuilder) { }

  updateProfile() {
    this.profileForm.patchValue({
      firstName: 'Nancy',
    
    });
  }

  

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }
  
 
 

  ngOnInit(): void {
  }

}
