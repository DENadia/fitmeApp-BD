import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { MusclesCategory } from '../models/muscles-category';
export interface Routines {
  id?: string;
  imageUrl: string;
  name: string;
}
@Injectable({
  providedIn: 'root'
})
export class DatafirebaseService {

  user=this.auth.currentUser.uid;
  constructor(private firestore: Firestore, private auth: Auth) {
  }
  getCategories(): Observable<Routines[]>{
    const categoriesRef=collection(this.firestore, 'categories');
    return collectionData(categoriesRef, {idField: 'id'}) as Observable<Routines[]>;
  }
  getMusclesGroups(){
    const groupsRef=collection(this.firestore,`categories/workout/muscles-groups`);
    return collectionData(groupsRef) as Observable<any[]>;
  }
  getUserMusclesGroups(){
    const grouptRef=collection(this.firestore, `users/${this.user}/categories/workout/muscles-groups`);
    return collectionData(grouptRef, {idField: 'categoryId'}) as Observable<MusclesCategory[]>;
  }
  getUserMusclesGroupById( id: string){
    const grouptRef=doc(this.firestore, `users/${this.auth.currentUser.uid}/categories/workout/muscles-groups/${id}`);
    return docData(grouptRef,{idField:'categoryId'}) as Observable<MusclesCategory>;
  }
  addUserMuscles(category: MusclesCategory){
    const categoryRef =collection(this.firestore, `users/${this.user}/categories/workout/muscles-groups`);
    return addDoc(categoryRef, category);
  }
  deleteUserMuscle(category: MusclesCategory)
  {
    const categoryRef=doc(this.firestore, `users/${this.user}/categories/workout/muscles-groups/${category.categoryId}`);
    return deleteDoc(categoryRef);
  }
  updateUserMuscle(category: MusclesCategory)
  {
    const categoryRef=doc(this.firestore, `users/${this.user}/categories/workout/muscles-groups/${category.categoryId}`);
    return updateDoc(categoryRef, {categoryName: category.categoryName});
  }
}
