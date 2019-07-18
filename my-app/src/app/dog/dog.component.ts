import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  constructor() { }
  @Input() msg:String='';
  @Output() reply=new EventEmitter();
  ngOnInit() {
  }

}
