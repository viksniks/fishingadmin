import { Component } from '@angular/core';

import {CallingService} from "../api/calling.service";
import {ToastController,LoadingController} from "@ionic/angular";

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
  location:string="";
  comments:string="";
  
  constructor(private service:CallingService,private loader:LoadingController,private toast:ToastController)
  {

  }
  getMetaInfo()
  {
    var ref = this;
    this.service.getMetaInfo(function(data)
    {
      if(data)
      {
       ref.location = data.location;
       ref.comments = data.comments;
      }
    })
  }
  insertMetaInfo()
  {
  this.service.insertMetaInfo({location:this.location,comments:this.comments});
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
    this.loader.create({
      message:"please wait..."
    }).then((ele)=>{
  
    ele.present();
   this.service.deleteData(key,function(data)
   {
     ele.dismiss();
     ref.showToast(data);
     ref.getData();
   })
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
   
  this.loader.create({
    message:"please wait..."
  }).then((ele)=>{

  ele.present();
    this.service.insertData(this.obj,function(str)
    {
      //alert(str);
      ele.dismiss();
      ref.showToast(str);
      ref.insertMetaInfo();
      ref.getData();

    });
  })
  
  }

  getData()
  {
    let ref = this;
    this.loader.create({
      message:"please wait..."
    }).then((ele)=>{
  
    ele.present();
    this.service.getData(function(data)
    {
      ele.dismiss();
      if(data)
      {
      console.log(JSON.stringify(data));
      ref.keys = Object.keys(data);
      ref.obj = data;
      ref.getMetaInfo();
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
  })
  
  }

  showToast(msg)
  {
    this.toast.create({
      message:msg,
      duration:3000
    }).then((ele)=>{
      ele.present();
    })
  }
  

}
