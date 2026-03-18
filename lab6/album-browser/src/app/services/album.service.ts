import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Photo, Album } from "../models";

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
    private API_URL = 'https://jsonplaceholder.typicode.com/albums';

    constructor(private http: HttpClient) {}

    getAlbums(): Observable<Album[]> {
        return this.http.get<Album[]>(this.API_URL);
    }

    getAlbum(id: number): Observable<Album> {
        return this.http.get<Album>(`${this.API_URL}/${id}`);
    }

    getAlbumPhotos(id: number): Observable<Photo[]> {
        return this.http.get<Photo[]>(`${this.API_URL}/${id}/photos`);
    }

    updateAlbum(album: Album): Observable<Album> {
        return this.http.put<Album>(`${this.API_URL}/${album.id}`, album);
    }

    deleteAlbum(id: number): Observable<void> {
        return this.http.delete<void>(`${this.API_URL}/${id}`);
    }
}