import { Component, OnInit } from '@angular/core';
import { CustomerService  } from "../shared/customer.service";

@Component({
 selector: 'app-customer',
 templateUrl: './customer.component.html',
 styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

 constructor(private customerService: CustomerService) { }
 submitted: boolean;
 formControls =this.customerService.form.controls;
showSuccessMessage: boolean;
 ngOnInit() {
 }

 onSubmit(){
   this.submitted = true;
   if(this.customerService.form.valid){
         if(this.customerService.form.get("$key").value == null ){ // here we said that if the value of the hidden input is null and it's by default null we will insert a new customer
                 // insert
   this.customerService.insertCustomer(this.customerService.form.value);
  
    this.showSuccessMessage =true;// we set the property to true
       setTimeout(()=>this.showSuccessMessage=false,3000); 

   this.submitted = false;
   this.customerService.form.reset();

         }else {
                 //update
         }
   }
 }
}