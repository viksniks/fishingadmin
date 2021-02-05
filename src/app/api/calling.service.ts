import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {environment} from "../../environments/environment";
import {Platform} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class CallingService {

  config:any= environment.config;
 appname:any = environment.appname;
  constructor(private platform:Platform) {
   
   this.platform.ready().then(()=>{
     if(firebase.apps.length == 0)

     {
  firebase.initializeApp(this.config);
     }

   })
    
    
   }
   deleteData(key,fn)
   {
    firebase.database().ref(this.appname + "/data/"+key+"/").remove(function (err) {
      if(err)
      {
        fn(JSON.stringify(err));
      }
      else{
         fn("successfully inserted!!!");
      }
    });
   
   }
   getData(fn)
   {
    
    firebase.database().ref(this.appname + "/data/").once('value').then(function (snapshot) {
        let data =  snapshot.val();
        fn(data);
   
      });
   }

   insertData(obj,fn)
   {
    firebase.database().ref(this.appname + "/data/").set(obj, function (err) {
      if(err)
      {
        fn(JSON.stringify(err));
      }
      else{
         fn("successfully inserted!!!");
      }
    });
   }
}
