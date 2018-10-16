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
  formControls = this.customerService.form.controls;
  showSuccessMessage: boolean;
  showErrorMessage: boolean;

  ngOnInit() {
  }

  onSubmit() {
  	this.submitted = true;
  	if(this.customerService.form.valid) {
      var a = this.customerService.form.get("mobile").value;
      var b = /^[0-9]+$/;

  		if(this.customerService.form.get("$key").value == null) {
        if((a.match(b) != null)) {
        this.customerService.insertCustomer(this.customerService.form.value);
        this.showSuccessMessage = true;
        setTimeout(()=>this.showSuccessMessage=false, 3000);
  			
  			this.submitted = false;
        this.customerService.form.reset();

  		} else if((a.match(b) == null)) {
        this.showErrorMessage = true;
        setTimeout(()=>this.showErrorMessage=false, 3000);

      } else {

      }
  	}
  }

}

}
