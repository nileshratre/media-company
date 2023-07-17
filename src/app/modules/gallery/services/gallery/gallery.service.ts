import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor(
    private http: HttpClient,
  ) { }

  public fetchGalleryList() {
    return this.http.get('assets/mockData/gallery.json');
  }
}
