import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  user: any = {};
  message: string;
  //dp: File  = null;

  constructor() {
    this.getProfile();
   }

  ngOnInit() {
  }

  /*onFileSelected(event) {
    this.dp = event.target.files[0];
  }*/

  getProfile(){

    let userId = firebase.auth().currentUser.uid;

    firebase.firestore().collection("users").doc(userId).get().then((documentSnapshot) => {

      this.user = documentSnapshot.data();
      this.user.displayName = this.user.firstName + " " + this.user.lastName;
      this.user.id = documentSnapshot.id;
      console.log(this.user);

    }).catch((error) => {
      console.log(error);
    })

  }

  update(){

    this.message = "Updating Profile...";

    firebase.auth().currentUser.updateProfile({
      displayName: this.user.displayName, 
      photoURL: this.user.photoURL
    }).then(() => {

      let userId = firebase.auth().currentUser.uid;
      firebase.firestore().collection("users").doc(userId).update({
        firstName: this.user.displayName.split(' ')[0],
        lastName: this.user.displayName.split(' ')[1],
        hobbies: this.user.hobbies,
        interests: this.user.interests,
        bio: this.user.bio
        //photoURL: this.dp.name
      }).then(() => {

        this.message = "Profile Updated Successfully.";

      }).catch((error) => {
        console.log(error)
      })


    }).catch((error) => {
      console.log(error)
    })

  }
}
