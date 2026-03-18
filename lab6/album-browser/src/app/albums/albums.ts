import { Component } from '@angular/core';
import { Album } from '../models';
import { AlbumService } from '../services/album.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css',
})
export class Albums {
  albums$: Observable<Album[]>;

  constructor(private albumService: AlbumService) {
    this.albums$ = this.albumService.getAlbums();
  }

  deleteAlbum(id: number) {
    this.albumService.deleteAlbum(id).subscribe(() => {
      this.albums$ = this.albumService.getAlbums();
    });
  }
}