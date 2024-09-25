import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'calculator';
  
  constructor(public http:HttpClient){
  }
  num1=0;
  num2=0;
  result=0;
  baseUrl = "http://3.109.209.238:8080/calculator/"


  
  add(){
    let url= this.baseUrl+'addA'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>{this.result=data})
  }

  sub(){
    let url=this.baseUrl+'subS'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>{this.result=data})
  }

  mult(){
    let url=this.baseUrl+'multM'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>{this.result=data})
  }

  div(){
    let url=this.baseUrl+'divD'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>{this.result=data})
  }

  mod(){
    let url=this.baseUrl+'modM'+this.num1+'and'+this.num2;
    this.http.get(url).subscribe((data:any)=>{this.result=data})
  }
}