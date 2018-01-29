import { Injectable } from '@angular/core';
import {Resolve, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {PixalsearchService} from './pixalsearch.service';

@Injectable()
export class ImagesearchresolverService implements Resolve<any> {

  constructor(private pixal: PixalsearchService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');
     return this.pixal.getSinglePhoto(id);
  }

}
