import { Component, OnInit, ElementRef } from '@angular/core';
import { longStackSupport } from 'q';
import { ViewChild } from '@angular/core';

@Component({
  selector: "app-computer-q",
  templateUrl: "./computer-q.component.html",
  styleUrls: ["./computer-q.component.scss"]
})
export class ComputerQComponent implements OnInit {
  @ViewChild("myField") myField: ElementRef;

  public fakeAnswer = [
    'It is ok for you to pop a kid\'s balloon.',
    'It is important for humans to breathe.',
    'Theft is no a good thing.',
  ];
  public fakeQuestions = [
    'Is it ok to pop a kid\'s balloon?',
    'Is breathing important for humans?',
    'It theft a good thing?',
  ];
  public option = Math.floor(Math.random() * this.fakeQuestions.length);

  public itIsOn = 0;
  public fakePersonAnswer = "";

  public fakeComputerQuestion = this.fakeQuestions[this.option];
  public fakeComputerAnswer = this.fakeAnswer[this.option];

  constructor() {}

  ngOnInit() {}

  keys(e) {
    if (this.itIsOn) {
      e.preventDefault();
      this.fakePersonAnswer += e.key;
      localStorage.setItem('fakeanswer', this.fakePersonAnswer);
      this.myField.nativeElement.value = this.fakeComputerAnswer.substr(0,this.fakePersonAnswer.length);
    } else {
      this.itIsOn = e.key === ";" ? 1 : 0;
      if (this.itIsOn) {
        e.preventDefault();
      }
    }
    console.log(e);
  }
}
