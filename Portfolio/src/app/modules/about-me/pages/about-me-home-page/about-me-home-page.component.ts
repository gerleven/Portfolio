import { Component, OnInit } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'app-about-me-home-page',
  templateUrl: './about-me-home-page.component.html',
  styleUrls: ['./about-me-home-page.component.css'],
})
export class AboutMeHomePageComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    // this.test();
  }

  private prom1: Promise<string|void|any> = new Promise((resolve, reject) => {
    // setTimeout(( ) => {resolve('I resolved!')}, 500);
    // setTimeout(( ) => {this.prom1; debugger}, 1500);
  })
  .then(
  //   (firstResolveVal)=>{
  //   (firstResolveVal: string)=>( new Promise((resolve, reject) => {reject(firstResolveVal);}));
  //   // return "houch"
  // }
  )
  .then(
    (data)=>{ },
  );
  

  private test() {
    function job(state: any) {
      return new Promise(function (resolve, reject) {
        if (state) {
          resolve('success');
        } else {
          reject('error');
        }
      });
    }

    let promise = job(true); //this job(true) return a new promise with state: fulfilled and value: "success"

    let finalResult = promise //since the actual state of promise is fulfilled, the successHandler function will be runed in the next .then() receiving "success" as parameter
      .then(function (data) {
        //data: “success”
        console.log(data); //first console out: "success"
        return job(false); // this .then() will rturn the new promise returned by the job(false), wich has state rejected and value "error"
      }) 
      // when the needed handler is given to a then or a catch. and it return a promise, so the .then() will return this promise, (in this case a promise with state rejected and value "error").
      .catch(function (error) { //now the promise that call this catch has state rejected and the .catch() has the failureHandlerFunction for this. But this failureHandlerFunction doesn't return a promise, it return a value "Error caught", so this .catch() will return a new promise with state fulfilled and value "Error caught"
        //error: "error"
        console.log(error); //second console out: "error"
        return 'Error caught';
      })
      //Now we have a promise fulfilled with value "Error caught", so the next then will run the successHandler and pass the as parameter in "data"
      .then(function (data) { 
        console.log(data); //third console out: "Error caught"
        return job(true); //this return a promise with status fulfilled and value "success". so the .then() return that promise
      })
      //In the next .catch(), since the promise that call this .catch() has state fulfilled, the needed successHandler is not given, so the function will not be runed and the .catch() will return an new promise
      //with the same state and same value that the promise that call the catch. it is a promise with state fulfilled and value "success"
      .catch(function (error) {
        console.log(error);
      });
      //Finally, this last .catch() return a promise with state fulfilled and value "success" and this is the value seted to out variable "promise"
      
      // setTimeout(( ) => {finalResult; debugger}, 5500);
  }
}