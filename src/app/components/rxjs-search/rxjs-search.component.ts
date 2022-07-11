import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { debounceTime, of, take, takeLast, takeWhile, Observable, from, first, last, elementAt, filter, distinct, skip, count, max,min, reduce } from 'rxjs';

@Component({
  selector: 'app-rxjs-search',
  templateUrl: './rxjs-search.component.html',
  styleUrls: ['./rxjs-search.component.css']
})
export class RxjsSearchComponent implements OnInit {

  searchForm!: FormGroup; 
  // name!: FormControlName; 

  categories = ["mobile", "tv",  "charger", "headphones", "tv",  "charger"]

  category$:Observable<string> = from(this.categories)

  ranks = [1,2,3,4,25,26,7,81,9,10];

  rank$:Observable<number> = from(this.ranks)

  constructor() { 

    this.searchForm = new FormGroup({
      name:new FormControl("start search")
    })

    this.searchForm.get("name")?.valueChanges
    .pipe(
      filter((v)=>this.checkCharCount(v))
      // take(3), // take N values
      // takeWhile((v)=>this.valueChages(v)), // based on contion
      // takeLast(2), // gives last N values
      // debounceTime(3000)
      ) //like setTimeout after certian period of time will execuates
    .subscribe((data)=>{
      // console.log(data);
      this.rank$.
      pipe(
        distinct(),
        filter((v)=>this.filteredValues(v)),
        // min(),
        // max()
        )
      // this.category$
      // .pipe(
      //   distinct(), // like set will give unique values
      //   // skip(2), we can skip N values
      //   count()
      //   // takeLast(2)
      //   // first() //gives 1st value
      //   // last() // gives last value
      //   // elementAt(1) // like array index 
      // )
      .subscribe((data)=>{
        console.log(data);
      })
    })

  }

  ngOnInit(): void {
  }

  // valueChages(v:string){
  //   return  v.length>3? true:false
  // }

  checkCharCount(v:any){
    return v.length < 10? true:false;
  }

  filteredValues(v:number){
    return v<10?false:true;
  }

  readValue(){
  }
}
