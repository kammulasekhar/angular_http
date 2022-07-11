import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { from, fromEvent, interval, Observable, of } from 'rxjs';

@Component({
  selector: 'app-rxjs-learning',
  templateUrl: './rxjs-learning.component.html',
  styleUrls: ['./rxjs-learning.component.css']
})
export class RxjsLearningComponent implements OnInit {

  @ViewChild('validate')
  validate:ElementRef | undefined

  agents:Observable<string> | undefined;
  agentName:string = "";
  studentsList = ["mark", "ram", "sita", "lisa"]
  students:Observable<string[]> = of(this.studentsList);

  studentNames:Observable<string> = of("Ram")

  studentObj = {
    id:10,
    name:"ram"
  }

  student$:Observable<any> = of(this.studentObj);

  orderArr = ["Fashion", "Electronics", "Mobiles", "House Hold"]
  orders$:Observable<string> = from(this.orderArr)

  constructor() { }

  ngOnInit(): void {

    this.orders$.subscribe((data)=>{
      const seqNum$ = interval(500);
      seqNum$.subscribe((num)=>{
        if(num<5){
           console.log(data + num);
        }
      })
    })

    // this.students.subscribe((data)=>{
    //   console.log(data);
    // })

    // this.studentNames.subscribe((data)=>{
    //   console.log(data);
    // })

    // this.student$.subscribe((data)=>{
    //   console.log(data);
    // })

    // this.orders$.subscribe((data)=>{
    //   console.log(data);
    // })
    
    // this.agents = new Observable(
    //   function(observer){
    //     try{
    //       observer.next("ram");
    //       setInterval(()=>{
    //        observer.next("mark");
    //       },3000)
    //       setInterval(()=>{
    //        observer.next("sita");  
    //       },6000)
    //     }
    //     catch(e){
    //       observer.error(e);
    //     }
    //   }
    // )

    // this.agents.subscribe((data)=>{
    //   console.log(data);
    //   this.agentName = data
    // })


  } 

  rxjsEventObserable(){
    const btnObserable$ = fromEvent(this.validate?.nativeElement, "click")
    btnObserable$.subscribe((data)=>{
      console.log(data);
    })
  }

}
