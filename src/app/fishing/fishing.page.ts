import { Component, OnInit } from '@angular/core';
import {CallingService} from "../api/calling.service";
import {ToastController,LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-fishing',
  templateUrl: './fishing.page.html',
  styleUrls: ['./fishing.page.scss'],
  providers:[CallingService]
})
export class FishingPage implements OnInit {
  obj:any={};
  keys:any[]=[];
  location:string="";
  comments:string="";
  constructor(private service:CallingService,private loader:LoadingController,private toast:ToastController)
  {

  }

  ngOnInit() {
    this.getData();
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

}
