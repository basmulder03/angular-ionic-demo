import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { PhotoService } from '../services/photo.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, ExploreContainerComponent, NgFor]
})
export class Tab2Page implements OnInit{

  constructor(public photoService: PhotoService) {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }

  async ngOnInit() {
      await this.photoService.loadSaved();
  }

}
