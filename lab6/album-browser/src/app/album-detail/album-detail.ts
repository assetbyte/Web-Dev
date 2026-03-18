import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Album } from '../models';
import { AlbumService } from '../services/album.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css',
})
export class AlbumDetail implements OnInit{
  album?: Album;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService) {}


    ngOnInit() {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.albumService.getAlbum(id).subscribe(data => this.album = data);
    }

    save(){
      if(this.album){
        this.albumService.updateAlbum(this.album).subscribe(() => {
          alert ('Album updated successfully!');
        });
      }
    }

    goBack() {
    this.router.navigate(['/albums']);
  }

}
