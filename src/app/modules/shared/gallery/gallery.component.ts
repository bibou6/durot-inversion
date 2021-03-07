import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  @Input()
  images: any[];

  @Input()
  allowDelete: boolean = true;

  @Output()
  onAddPicture = new EventEmitter<any>();

  @Output()
  onDelete = new EventEmitter<any>();
  
  addPictures:boolean = false;



  _albums = [];

  constructor(private _lightbox: Lightbox) {
   
  }

  ngOnInit(){
    this.images.forEach(image => {
  
      const src = 'http://localhost:8000/' + image.url;
      const thumb = 'http://localhost:8000/' + image.url;
      const album = {
         src: src,
         thumb: thumb
      };
 
      this._albums.push(album);
    });
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._albums, index);
  }

  remove(index:number){
	  this._albums.splice(index,1);
	  this.onDelete.emit(index);
  }
 
  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }

  addMultiplePicture(event){
    this.onAddPicture.emit(event);
	
	const album = {
		src: event,
		thumb: event
	 };

	 this._albums.push(album);
  }
}
