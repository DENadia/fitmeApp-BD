import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collectionData, deleteDoc, doc, docData, Firestore, getDocs, query, setDoc, updateDoc, where } from '@angular/fire/firestore';
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
  //al categories availabble in the app 
  getCategories(): Observable<Routines[]>{
    const categoriesRef=collection(this.firestore, 'categories');
    return collectionData(categoriesRef, {idField: 'id'}) as Observable<Routines[]>;
  }
  //getting routines and exercises for a specified path (for workout, yoga or others)
  getRoutines(idRoutine: string, type: string){
    const categoriesRef=collection(this.firestore, `routines/${idRoutine}/${type}`);
    return collectionData(categoriesRef,{idField: 'id'}) as Observable<any[]>;
  }
  
  getRoutineExercises(idRoutine: string, type: string, category: string){
    const categoriesRef=collection(this.firestore, `routines/${idRoutine}/${type}/${category}/exercises`);
    return collectionData(categoriesRef) as Observable<any[]>;
  }
  //get group muscles (workout edition)
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
  //exercises for workout (for each muscle group )
  getExercises(routine: string, categoryId: string){
    const groupsRef=collection(this.firestore,`categories/${routine}/muscles-groups/${categoryId}/exercises`);
    return collectionData(groupsRef,{idField:'exerciseId'}) as Observable<any[]>;
  }
  addUserExercise(idUser: string, exercise: Exercise){
    const categoryRef=collection(this.firestore, `users/${idUser}/exercises`);
    return addDoc(categoryRef, exercise);
  }
  getUserExercises(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/exercises`);
    return collectionData(grouptRef, {idField:'exerciseId'}) as Observable<MusclesCategory[]>;
  }

  getUserExerciseById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/exercises/${id}`);
    return docData(grouptRef,{idField:'exerciseId'}) as Observable<Exercise>;
  }
  deleteUserExercise(idUser: string,idExercise){
    const exerciseRef=doc(this.firestore, `users/${idUser}/exercises/${idExercise}`);
    return deleteDoc(exerciseRef);
  }

  updateUserExercise(idUser: string, exercise: Exercise)
  {
    const exerciseRed=doc(this.firestore, `users/${idUser}/exercises/${exercise.exerciseId}`);
    return updateDoc(exerciseRed, {exerciseName: exercise.exerciseName, category: exercise.category});
  }
  async getUserExerciseByCategory(idUser: string, category: string){
   const exercises: Exercise[]=[];
    const q=query(collection(this.firestore,`users/${idUser}/exercises`), where('category','==', `${category}`));
    const querySnapshot = await getDocs(q);
     querySnapshot.docs.forEach((docc) => {
       exercises.push({exerciseId: docc.id,
         exerciseName:docc.data().exerciseName,
         category:docc.data().category
       });
     });
     return exercises;
  }

  //CRUD on styles for yoga edition 
  getYogaStyles(){
    const groupsRef=collection(this.firestore,`categories/yoga/styles`);
    return collectionData(groupsRef, {idField:'categoryId'}) as Observable<any[]>;
  }

  addYogaStyle(style: any, id: string) {
    const userRef = doc(this.firestore, `categories/yoga/styles/${id}`);
    return setDoc(userRef, style);
  }
  addUserYogaStyle(idUser: string, style: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/categories/yoga/styles`);
    return addDoc(categoryRef, style);
  }
  getYogaExercises( categoryId: string){
    const groupsRef=collection(this.firestore,`categories/streching/styles/${categoryId}/exercises`);
    return collectionData(groupsRef) as Observable<any[]>;
  }
  addYogaExercise(idStyle: string, exercise: any){
    const categoryRef=collection(this.firestore, `categories/yoga/styles/${idStyle}/exercises`);
    return addDoc(categoryRef, exercise);
  }
  addUserYogaExercise(idUser: string, exercise: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/yoga-exercises`);
    return addDoc(categoryRef, exercise);
  }
}
