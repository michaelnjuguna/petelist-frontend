import { Component, OnInit } from '@angular/core';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss'],
})
export class EditProfileComponent implements OnInit {

  constructor(private file:File) { }


  ngOnInit() {}

}
