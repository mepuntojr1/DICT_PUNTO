import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = "EEPJR Portfolio";
 
  items: Observable<any[]>

  x = "Hi";

  isDisabled = false;
  isShow = false;
  count = [1,2,3,4,5];

  // imgLink = "../../assets/Capture.PNG";

  constructor(private firestore: AngularFirestore) { }

  ngOnInit(): void {
    this.items = this.firestore.collection('data').valueChanges();
  }
  
 
  click(){
    this.x = "Click Hello";

  }
  
}
