import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

import { HeaderComponent } from './header/header.component';
import {MainComponent} from './main/main.component';
import { SearchComponent } from './search/search.component';
import { PhotodetailComponent } from './photodetail/photodetail.component';
import { PhotolistComponent } from './photolist/photolist.component';

import {PixalsearchService} from './pixalsearch.service';
import {ImagesearchresolverService} from './imagesearchresolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'photo/:id', component: PhotodetailComponent, resolve: {picInfo: ImagesearchresolverService}}
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [MainComponent, HeaderComponent, SearchComponent, PhotodetailComponent, PhotolistComponent],
  providers: [PixalsearchService, ImagesearchresolverService],
  exports: [MainComponent]
})
export class PixalModule { }
