import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  opent= true;
  _opent= true;
  show= 'Action';

  Movie_type_short: any;

  opentt= false;
  movie: any= [{
    'title': 'Troy',
    'dur': '90',
    'act': 'sa',
    'dir': 'A j Mike',
    'type': ' Action'
  }];
  hd= true;
  _Movie_title;
  _Movie_dur;
  _Movie_act;
  _Movie_dir;
  _Movie_type;

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
 colsub(){
    this.opent = true;
   this.hd = true;

   this.opentt = false;
  }


  Addmovie(){
   this.item = {
     'title': this.Movie_title,
     'dur': this.Movie_dur,
     'act': this.Movie_act,
     'dir': this.Movie_dir,
     'type': this.Movie_type
   };
   console.log(this.item);
    this.movie.push(this.item);
    this.opent = true;
    this.hd = true;

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


   filter(){
     this.Movie_type_short= this.show;

   }


}
