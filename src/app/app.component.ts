import { Component } from '@angular/core';
import {SearchPipePipe} from './search-pipe.pipe';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
//  pipe:[SearchPipePipe]
})
export class AppComponent {
  title = 'app';
  opent= true;
  _opent= true;
  show: any;
iname: any;

  _Movie_typei;
  Movie_type_short: any;
   itemo: any;
  opentt= false;
  movie: any= [{
    'title': 'Troy',
    'dur': '90',
    'act': 'sa',
    'dir': 'A j Mike',
    'type': 'Action',
    'search':'Troy 90 sa A j Mike Action'
  }];
  hd= true;
  _Movie_title;
  _Movie_dur;
  _Movie_act;
  _Movie_dir;
  _Movie_type;

 // _Movie_typei;
  Movie_title;
  Movie_dur;
  Movie_act;
  Movie_dir;
  Movie_type;
  item: any;
  index: any;



  opw() {
    this.opent = false;
    this.hd = false;

    this.opentt = true;
  }
 colsub() {
    this.opent = true;
   this.hd = true;
   this.opentt = false;

  }


  Addmovie(){

    if(this.Movie_title !=" " && this.Movie_dur != "" && this.Movie_act !="" &&this.Movie_dir !="" &&this.Movie_type !=""){
   this.item = {
     'title': this.Movie_title,
     'dur': this.Movie_dur,
     'act': this.Movie_act,
     'dir': this.Movie_dir,
     'type': this.Movie_type,
     'search': this.Movie_title + this._Movie_dur + this._Movie_act + this.Movie_dir + this.Movie_type
   };
   console.log(this.item);
    this.movie.push(this.item);
    this.initializeItems();

    this.opent = true;
    this.hd = true;
    this.Movie_type = "";
      this.Movie_dur ="" ;
      this.Movie_act= "" ;
      this.Movie_dir = "";
      this.Movie_title = "";
    }

  }


  delt(i){
    this.movie.splice(i, 1);

  }

  edit(i){
    this._opent = false;

    this._Movie_title = this.movie[i].title;
      this._Movie_dur = this.movie[i].dur;
      this._Movie_act = this.movie[i].act;
      this._Movie_dir = this.movie[i].dir;
      this._Movie_type = this.movie[i].type;
      this.index = i;


  }

  filter(){
    this._Movie_typei = this.show;
  }
  initializeItems() {
    this.itemo = this.movie;
  }


  save(){
    this.movie[this.index].title = this._Movie_title;

    this.movie[this.index].dur = this._Movie_dur;
    this.movie[this.index].act = this._Movie_act;
    this.movie[this.index].dir = this._Movie_dir;
    this.movie[this.index].type = this._Movie_type;
    this._opent = true;
  }
   can(){
     this._opent = true;
   }

  getItems(ev) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the ev target
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.itemo.search = this.itemo.search.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }


}
