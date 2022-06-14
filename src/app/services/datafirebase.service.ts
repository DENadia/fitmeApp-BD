import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, updateDoc } from '@angular/fire/firestore';
import { collection } from '@firebase/firestore';
import { Observable } from 'rxjs';
import { Exercise } from '../models/exercise';
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

  constructor(private firestore: Firestore, private auth: Auth) {
  }
  getCategories(): Observable<Routines[]>{
    const categoriesRef=collection(this.firestore, 'categories');
    return collectionData(categoriesRef, {idField: 'id'}) as Observable<Routines[]>;
  }
  getMusclesGroups(){
    const groupsRef=collection(this.firestore,`categories/workout/muscles-groups`);
    return collectionData(groupsRef, {idField:'categoryId'}) as Observable<any[]>;
  }
  getUserMusclesGroups(idUser: string): Observable<MusclesCategory[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/categories/workout/muscles-groups`);
    return collectionData(grouptRef, {idField:'categoryId'}) as Observable<MusclesCategory[]>;
  }
  getUserMusclesGroupById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/categories/workout/muscles-groups/${id}`);
    return docData(grouptRef,{idField:'categoryId'}) as Observable<MusclesCategory>;
  }
  addUserMuscles(idUser: string,category: MusclesCategory){
    const categoryRef=collection(this.firestore, `users/${idUser}/categories/workout/muscles-groups`);
    return addDoc(categoryRef, category);
  }
  deleteUserMuscle(idUser: string,category: MusclesCategory)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/workout/muscles-groups/${category.categoryId}`);
    return deleteDoc(categoryRef);
  }
  updateUserMuscle(idUser: string,category: MusclesCategory)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/workout/muscles-groups/${category.categoryId}`);
    return updateDoc(categoryRef, {categoryName: category.categoryName});
  }
  getExercises(routine: string, categoryId: string){
    const groupsRef=collection(this.firestore,`categories/${routine}/muscles-groups/${categoryId}/exercises`);
    return collectionData(groupsRef) as Observable<any[]>;
  }
  getUserExercises(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/exercises`);
    return collectionData(grouptRef, {idField:'exerciseId'}) as Observable<MusclesCategory[]>;
  }
  getUserExerciseById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/exercises/${id}`);
    return docData(grouptRef,{idField:'categoryId'}) as Observable<MusclesCategory>;
  }
  addUserExercise(idUser: string, exercise: Exercise){
    const categoryRef=collection(this.firestore, `users/${idUser}/exercises`);
    return addDoc(categoryRef, exercise);
  }
  // deleteUserMuscle(idUser: string,category: MusclesCategory)
  // {
  //   const categoryRef=doc(this.firestore, `users/${idUser}/categories/workout/muscles-groups/${category.categoryId}`);
  //   return deleteDoc(categoryRef);
  // }
  // updateUserMuscle(idUser: string,category: MusclesCategory)
  // {
  //   const categoryRef=doc(this.firestore, `users/${idUser}/categories/workout/muscles-groups/${category.categoryId}`);
  //   return updateDoc(categoryRef, {categoryName: category.categoryName});
  // }
}
