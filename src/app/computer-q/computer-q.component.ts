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

  public itIsOn = 0;
  public fakePersonAnswer = "";
  public fakeComputerAnswer = "It is not ok for you to pop a kid's balloon.";

  constructor() {}

  ngOnInit() {}

  keys(e) {
    if (this.itIsOn) {
      e.preventDefault();
      this.fakePersonAnswer += e.key;
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
