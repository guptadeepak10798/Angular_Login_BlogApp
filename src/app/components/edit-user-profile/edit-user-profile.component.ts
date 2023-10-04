import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormsModule,
  FormGroup,
  Validators,
  FormBuilder,
  AbstractControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-edit-user-profile',
  templateUrl: './edit-user-profile.component.html',
  styleUrls: ['./edit-user-profile.component.css'],
})
export class EditUserProfileComponent implements OnInit {
  editUserForm: FormGroup;
  constructor(private userService: UserService, private fb: FormBuilder,private router : Router) {
    this.editUserForm = this.fb.group({
      name: [''],
      email: [''],
      password: [''],
      about: [''],
    });
  }

  userId: any = localStorage.getItem('userId');
  listOfUsers: any;

  // email = new FormControl('');
  // name= new FormControl('');

  ngOnInit(): void {
    this.userService.getUserDetailsById(this.userId).subscribe((user: any) => {
      this.listOfUsers = user;
      console.log('------>>>>>', this.listOfUsers);
      console.log('------>>>>>', this.listOfUsers.email);

      // this.email= this.listOfUsers?.email;
      // this.editUserForm.patchValue(this.listOfUsers?.email);
      // this.editUserForm.patchValue(this.listOfUsers?.name);
      // this.editUserForm.get('email')?.setValue(this.listOfUsers?.email);
      // this.editUserForm.get('name')?.setValue(this.listOfUsers?.name);
      this.editUserForm.patchValue({
        email: this.listOfUsers?.email,
        name: this.listOfUsers?.name,
        // password:this.listOfUsers?.password,
        about : this.listOfUsers?.about
      });
      // this.email.patchValue(this.listOfUsers?.email);
      // this.email.patchValue(this.listOfUsers?.name);
    });
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }
  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  get f(): { [key: string]: AbstractControl } {
    return this.editUserForm.controls;
  }


  onSubmit() {
    alert('save');
    console.log("name from f method ===>> ",this.f['name'].value);
    
    console.log(this.editUserForm.value);
    debugger
    this.userService.updateUserProfile(this.userId,this.editUserForm.value).subscribe(
      (data)=>{
        this.router.navigate(['/userProfile']);
        console.log(data);
      }
      
    );
    
    // window.location.href = '/userProfile';
  }
}
