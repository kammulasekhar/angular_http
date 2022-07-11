import { Component, OnInit } from '@angular/core';
import { CurdService } from './curd.service';

@Component({
  selector: 'app-curd-operations',
  templateUrl: './curd-operations.component.html',
  styleUrls: ['./curd-operations.component.css']
})
export class CurdOperationsComponent implements OnInit {

  constructor(private cd:CurdService) { }
  collections:any;
  test:any;
  ngOnInit(): void {
    this.cd.getData().subscribe((data:any)=>{
    this.collections = data;
    // console.log(this.collections);
    })
  }

  search(){
    console.log(this.test,"this.test")
    if(this.test== ''){
      this.ngOnInit();
    }else{
      this.collections = this.collections.filter((collection:any)=>{
        return (this.test == collection.id || this.test == collection.title)
      })
    }
  }

}
