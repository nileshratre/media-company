import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../../services';
import { HttpErrorResponse } from '@angular/common/http';
import { ConstantVariables } from 'src/app/constants';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  public galleryData: any = [];

  constructor(
    public constVar: ConstantVariables,
    private galleryService: GalleryService,
  ) {

  }

  public ngOnInit(): void {
    this.getGalleryList();
  }

  public previewImage(item: any): void {
    alert();
  }

  private getGalleryList(): void {
    this.galleryService.fetchGalleryList().subscribe({
      next: (result: any) => {
        this.galleryData = result;
      },
      error: (error: HttpErrorResponse) => {
        console.log('error', error);
      },
    })
  }
}
