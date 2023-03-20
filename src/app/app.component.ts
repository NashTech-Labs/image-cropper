import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'image-cropper';

  imgChangeEvt:any="";
  cropImgPreview:any="";


  onFileChanged(event:any){
      this.imgChangeEvt = event;
  }

  cropImg(e:ImageCroppedEvent){
    this.cropImgPreview = e.base64
  }

  imgFailed(){
    alert('Image Failed to Load');
  }
}
