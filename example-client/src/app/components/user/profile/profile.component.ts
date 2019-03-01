import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { ProfileService } from 'src/app/services/auth/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: User;

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.loadProfileInformation();
  }

  loadProfileInformation() {
    this.profileService.getUserInformation().subscribe((result : User) => {
      this.currentUser = result;
    },
    (error) => {
      
    }
    );
  }

}
