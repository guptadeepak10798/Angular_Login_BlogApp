import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { EditUserProfileComponent } from '../edit-user-profile/edit-user-profile.component';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  listOfUsers: any
  userId: any = localStorage.getItem('userId');
  imageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAB8CAMAAACWsEibAAAANlBMVEX///+dnZ3c3Nzf39+YmJjGxMXV1dX6+vrm5uapqamkpKSVlZW6urrZ2dnNzc3Dw8Px8fGxsbF2Q1rQAAAErElEQVRoge1b2ZaDIAwtEBVZ9f9/dsAV60K0ofPS+9CZM0e5t0lIWDKv1w8//PAZOuNr2f0Hc9MMP3oA0MqIb9ML3w9f22o2QLfum/QOtPYpf5SgvuYIwSDwBaM3HlgCqL/D7wZWbTunNvxBwVfc4Ger6zf6+KcvKPB6R5sqKO4Ft//aWy+ALxmLXZ/hjxKYLcbPWZ4/+sE0Zfgtij4aoS+iQFyG38hsYFJQgL/B8M+ZCTy9gGz8ATNiSY1aUvMfOQAGjL8xZWohzKKypRbQv3FrUL0xPqBylXMusHOeCNDEBVpuy07rA+EKPkEk1Yk4Dg2k9G7l3EBU62NAmhEblfD3/Jg+oF4F0JYFmfCbU/qAxAKGUsCaBK/5RRIoilLAElzX/Fyk2YIyCJZxlb3i5yIt15S5aI5BcJcGCEiCpYQAleNPUhFQpqJ5UJ8TwGtWRMBsgesI2JqghICsBwJskRhoMXNwMsEyZSmn4Tgo5EOAJ7mAUsCU47OTcFTQ0mfCqRrXGH4uxplAWo87TBpcFShGvixssZNg8YGm3Z8MUdjeEUA6C6d6fEsA7XlFN8RVjxUQY6AltYC06q6AXlDuz0J2iYvBGwLAc0IfNDaud+8JsKQCQo0BXCmYBSjOCYMgCODqnoDwLK2AEAS4WjQKiGs3YgEeoLohQJC64BVGtTq/Ip0FtDFeLWUmiqMywBXDuCzTLvwgzQMxCFokf1iZxrJFmohkHBVZjBc7EPIP8/AmSEPg9UKGXwrao7ruNj/1KdVdE1jqs8qbUWDJj+lenZRoeiFlV+C0Fm+EUndo6Digt/8IrA+IU8B9AcQpYAU2GZTyAFZAMQ9gfVDuziisjv/VAy+cCciTcAqMCUoaAGWCkgZApOMCVWiLLuOE8q0UmYJQ1gERGQ+UFyDqKxtU5QVId6HA+S8I4P5Mga2qLwgImz7vDvnrKggo3kpT1VzUvtpvE62rItqyNmjauEONCqKQ9NuP9EEAlOwnkgzG8+Jo7crF3WJQYRf2KID8iDIB18uBta1OMJzSFuqlGW8vZ++7cwGFeqrE25F9fShgvOaHAqsiOXUwLALEoRHGywry9oFQBecOimQCCruXMDc6UPdwdMv9/VsGqLca3Hp5TDsb13EPUlBd1y6iru10XxTDoKXLSE1nrq/vl1aOtIcDDM0OWQarpp170J/0b/BtC8fQ6NK7z0KhCd9o1zYI6qQaCm7enw0itHm6SmqkYXDcvWSOukjErsNy0gCPLi+6UFZOe6dA7U5the3Pno52UDfrtDQHDZubIfutH4TPtPqB7jma3rF849pmOgjbIlr9NHMYT3Tu3PRbBcvZsajzT4+v6KwnupwpDxSg+eM77FqCw9OzxQtW5R9NJZwv3aVC+H4zWJwMAtHpun1LnZTK65bhQ6i31iEkDtteu+M0cg2oxFp+7ry3r5XylvcXtMI9eY3t+qy6h8MwfpEAL7FdOzdP+dlTA7x1PGIS2TH2BRCNpMvF3o//ZZTHb6b/jvDBKJ8A5skonxvgIyw7KP/cj59hbjs1/8TP5oXz06n8E/ATQCdAwzu0Xj8B9amvXjsZSE0CpPgnlD5Z/+EHFP4AC81CGVZrWt8AAAAASUVORK5CYII=';
  constructor(private userService: UserService,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadUserDetails();
  }

  loadUserDetails(){
    this.userService.getUserDetailsById(this.userId).subscribe((user: any) => {
      // debugger
      this.listOfUsers = user;
      console.log("------",this.listOfUsers);

      // console.log(user.roles[0].name);

      // console.log(typeof user);
      // console.log(typeof this.listOfUsers.user);
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditUserProfileComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      
      console.log(`Dialog result: ${result}`);
    });
  }
}
