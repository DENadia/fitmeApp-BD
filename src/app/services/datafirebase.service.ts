import { Injectable } from '@angular/core';
import { collectionData, Firestore } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
export interface Routines {
  id?: string;
  imageUrl: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class DatafirebaseService {

  constructor(private firestore: Firestore) {
  }
  getCategories(): Observable<Routines[]>{
    const categoriesRef=collection(this.firestore, 'categories');
    return collectionData(categoriesRef, {idField: 'id'}) as Observable<Routines[]>;
  }
  getMusclesGroups(id: string){
    const groupsRef=collection(this.firestore,`categories/${id}/muscles-groups`);
    return collectionData(groupsRef,
    {idField: 'id'}) as Observable<any[]>;
  }
}
