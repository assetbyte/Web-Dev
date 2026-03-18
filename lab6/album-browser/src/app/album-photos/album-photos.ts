import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../services/album.service';
import { Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <h3>Photos</h3>
    <button [routerLink]="['..']">Back to Album</button>
    <div class="photo-grid">
      <div *ngFor="let photo of photos" class="photo-item">
        <img [src]="photo.thumbnailUrl" [title]="photo.title">
        <p>{{ photo.title }}</p>
      </div>
    </div>
  `,
  styles: [`
    .photo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
    .photo-item { border: 1px solid #ccc; padding: 5px; text-align: center; }
    img { max-width: 100%; }
  `]
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];

  constructor(private route: ActivatedRoute, private albumService: AlbumService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => 
      this.photos = data);
  }
}