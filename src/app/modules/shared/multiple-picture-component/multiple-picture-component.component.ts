import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotifierService } from 'src/app/core/services/notifier.service';

@Component({
  selector: 'app-multiple-picture-component',
  templateUrl: './multiple-picture-component.component.html',
  styleUrls: ['./multiple-picture-component.component.sass']
})
export class MultiplePictureComponentComponent implements OnInit {


  @Input()
  label: string;

  @Input()
  base64Output:boolean = true;

  @Input()
  maxFileSize: string = "2000000";

  @Input()
  allowRemoval:boolean = true

  @Input()
  showClose: boolean = false;

  @Output()
  onClose = new EventEmitter<any>();

  @Output()
  onAddPicture = new EventEmitter<any>();

  @Output()
  onRemovePicture = new EventEmitter<any>();


  
  files: File[] = [];
  constructor(private notifier:NotifierService) { }

  ngOnInit(): void {
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
    for(var file of  event.addedFiles){
      if(this.base64Output){
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.onAddPicture.emit(reader.result);
      };
      }else{
        this.onAddPicture.emit(file)
      }
    }

	console.log(event);
	for(var file of  event.rejectedFiles){
		if(file.reason == 'size'){
			this.notifier.error('global.flash.gallery.error.fileTooBig');
		}

	}

  }
  
  onRemove(event) {
    this.onRemovePicture.emit(this.files.indexOf(event));
    this.files.splice(this.files.indexOf(event), 1);
  }

  close(){
	  this.files = null;
	  this.onClose.emit(true);
  }

}
