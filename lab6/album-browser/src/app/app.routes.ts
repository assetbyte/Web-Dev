import { Routes } from '@angular/router';
import { Albums } from './albums/albums';
import { About } from './about/about';
import { Home } from './home/home';
import { AlbumDetail } from './album-detail/album-detail';
import {AlbumPhotos} from "./album-photos/album-photos";

export const routes: Routes = [
    {path: 'home', component: Home},
    {path: 'albums', component: Albums},
    {path: 'about', component: About},
    {path: 'albums/:id', component: AlbumDetail},
    {path: 'albums/:id/photos', component: AlbumPhotos},
    {path: '**', redirectTo: 'home'}
];
