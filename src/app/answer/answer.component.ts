import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  public answer = localStorage.getItem('fakeanswer');

  constructor() { }

  ngOnInit() {
  }

}
