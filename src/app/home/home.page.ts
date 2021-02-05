import { Component } from '@angular/core';

import {CallingService} from "../api/calling.service";

@Component({
  
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers:[CallingService]
})
export class HomePage {
 // private fieldArray: Array<any> = [];
  
 // private newAttribute: any = {name:"",sektor:"",weight:"",piece:"",time:""};
   
  obj:any={};
  keys:any[]=[];
  
  constructor(private service:CallingService)
  {

  }
  ngOnInit()
  {
    setTimeout(()=>{

    
    this.getData();
    },1000)
  }

  addFieldValue() {
  this.obj[Date.now().toString()] = {};
  this.keys = Object.keys(this.obj);
  //  var obj = this.newAttribute;
  //   obj["new"] = true;
  //     this.fieldArray.push(obj);
     
     // this.newAttribute = {};
  }

  deleteFieldValue(key)
  {
    if(window.confirm("Do you want to delete?"))
    {
    var ref = this;
   this.service.deleteData(key,function(data)
   {
     alert(data);
     ref.getData();
   })
  }
  }

  // deleteFieldValue(key) {
  //    // this.fieldArray.splice(index, 1);
  //    delete this.obj[key];
  //    this.keys = Object.keys(this.obj);
  // }
  insertData()
  {
    //this.fieldArray.push(this.newAttribute);
    
   // alert(JSON.stringify(this.fieldArray));
  // let  = [];
   let ref = this;
//    for(var i = 0;i<this.keys.length;i++)
//    {
//      console.log(this.obj[this.keys[i]]);
//      if(this.obj[this.keys[i]].name != "" || this.obj[this.keys[i]].sektor != "" || this.obj[this.keys[i]].weight != "" || this.obj[this.keys[i]].piece != ""  || this.obj[this.keys[i]].time != "")
//      {
      
// delete this.obj[this.keys[i]];
//      // arr.push(this.fieldArray[i]);
       
//      }
     
     
//    }
   //(JSON.stringify(arr));
   
  
    this.service.insertData(this.obj,function(str)
    {
      //alert(str);
      ref.getData();

    });
  
  }

  getData()
  {
    let ref = this;
    this.service.getData(function(data)
    {
      if(data)
      {
      console.log(JSON.stringify(data));
      ref.keys = Object.keys(data);
      ref.obj = data;
      //alert(JSON.stringify(keys));
    //   let arr = [];
    //   for(var i = 0;i<keys.length;i++)
    //   {
    //     console.log(data[keys[i]]);
    //    arr = arr.concat(data[keys[i]]);
    //   }
    //  // alert(JSON.stringify(arr));
    //   if(arr.length > 0)
    //   {
    //     ref.fieldArray = [];
    //     ref.fieldArray = arr;
    //   }
      }
    })
  }
  

}
