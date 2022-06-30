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

  //CRUD on styles and exercises for yoga edition 
  getYogaStyles(){
    const groupsRef=collection(this.firestore,`categories/yoga/styles`);
    return collectionData(groupsRef, {idField:'categoryId'}) as Observable<any[]>;
  }

  addUserYogaStyle(idUser: string, style: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/categories/yoga/styles`);
    return addDoc(categoryRef, style);
  }
  getYogaExercises( categoryId: string){
    const groupsRef=collection(this.firestore,`categories/yoga/styles/${categoryId}/exercises`);
    return collectionData(groupsRef) as Observable<any[]>;
  }

  addUserYogaExercise(idUser: string, exercise: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/yoga-exercises`);
    return addDoc(categoryRef, exercise);
  }
  getUserYogaStyles(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/categories/yoga/styles`);
    return collectionData(grouptRef,  {idField:'categoryId'}) as Observable<any[]>;
  }

  getUserYogaStyleById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/categories/yoga/styles/${id}`);
    return docData(grouptRef,{idField:'categoryId'}) as Observable<any>;
  }

  deleteUserYogaStyle(idUser: string,style: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/yoga/styles/${style.categoryId}`);
    return deleteDoc(categoryRef);
  }

  updateUserYogaStyle(idUser: string,style: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/yoga/styles/${style.categoryId}`);
    return updateDoc(categoryRef, {name: style.name});
  }

  getUserYogaExercises(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/yoga-exercises`);
    return collectionData(grouptRef, {idField:'exerciseId'}) as Observable<any[]>;
  }

  getUserYogaExerciseById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/yoga-exercises/${id}`);
    return docData(grouptRef,{idField:'exerciseId'}) as Observable<any>;
  }
  deleteUserYogaExercise(idUser: string, idExercise){
    const exerciseRef=doc(this.firestore, `users/${idUser}/yoga-exercises/${idExercise}`);
    return deleteDoc(exerciseRef);
  }

  updateUserYogaExercise(idUser: string, exercise: any)
  {
    const exerciseRed=doc(this.firestore, `users/${idUser}/yoga-exercises/${exercise.exerciseId}`);
    return updateDoc(exerciseRed, {name: exercise.name, style: exercise.style, description: exercise.description});
  }
  async getUserYogaExerciseByStyle(idUser: string, style: string){
   const exercises: any[]=[];
    const q=query(collection(this.firestore,`users/${idUser}/yoga-exercises`), where('style','==', `${style}`));
    const querySnapshot = await getDocs(q);
     querySnapshot.docs.forEach((docc) => {
       exercises.push({exerciseId: docc.id,
         name:docc.data().name,
         style:docc.data().style,
         description: docc.data().description
       });
     });
     return exercises;
  }

  //CRUD operations on target and exercises for streching edition 
  getStrechingTargets(){
    const groupsRef=collection(this.firestore,`categories/streching/target`);
    return collectionData(groupsRef, {idField:'categoryId'}) as Observable<any[]>;
  }

  addUserStrechingTargets(idUser: string, target: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/categories/streching/target`);
    return addDoc(categoryRef, target);
  }

  getUserStrechingTargets(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/categories/streching/target`);
    return collectionData(grouptRef,  {idField:'categoryId'}) as Observable<any[]>;
  }

  getUserStrechingTargetById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/categories/streching/target/${id}`);
    return docData(grouptRef,{idField:'categoryId'}) as Observable<any>;
  }

  deleteUserStrechingTarget(idUser: string,target: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/streching/target/${target.categoryId}`);
    return deleteDoc(categoryRef);
  }

  updateUserStrechingTarget(idUser: string,target: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/streching/target/${target.categoryId}`);
    return updateDoc(categoryRef, {name: target.name});
  }
  getStrechingExercises( categoryId: string){
    const groupsRef=collection(this.firestore,`categories/streching/target/${categoryId}/exercises`);
    return collectionData(groupsRef) as Observable<any[]>;
  }
  addUserStrechingExercise(idUser: string, exercise: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/streching-exercises`);
    return addDoc(categoryRef, exercise);
  }
  getUserStrechingExercises(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/streching-exercises`);
    return collectionData(grouptRef, {idField:'exerciseId'}) as Observable<any[]>;
  }

  getUserStrechingExerciseById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/streching-exercises/${id}`);
    return docData(grouptRef,{idField:'exerciseId'}) as Observable<any>;
  }
  deleteUserStrechingExercise(idUser: string, idExercise){
    const exerciseRef=doc(this.firestore, `users/${idUser}/streching-exercises/${idExercise}`);
    return deleteDoc(exerciseRef);
  }

  updateUserStrechingExercise(idUser: string, exercise: any)
  {
    const exerciseRed=doc(this.firestore, `users/${idUser}/streching-exercises/${exercise.exerciseId}`);
    return updateDoc(exerciseRed, {name: exercise.name, target: exercise.target, description: exercise.description});
  }
  async getUserStrechingExerciseByTarget(idUser: string, target: string){
   const exercises: any[]=[];
    const q=query(collection(this.firestore,`users/${idUser}/streching-exercises`), where('target','==', `${target}`));
    const querySnapshot = await getDocs(q);
     querySnapshot.docs.forEach((docc) => {
       exercises.push({exerciseId: docc.id,
         name:docc.data().name,
         target:docc.data().target,
         description: docc.data().description
       });
     });
     return exercises;
  }

  
  //CRUD operations on types and exercises for outdoors edition 
  getOutdoorsTypes(){
    const groupsRef=collection(this.firestore,`categories/outdoors/types`);
    return collectionData(groupsRef, {idField:'typeId'}) as Observable<any[]>;
  }

  addUserOutdoorsTypes(idUser: string, type: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/categories/outdoors/types`);
    return addDoc(categoryRef, type);
  }

  getUserOutdoorsTypes(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/categories/outdoors/types`);
    return collectionData(grouptRef,  {idField:'typeId'}) as Observable<any[]>;
  }

  getUserOutdoorsTypesById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/categories/outdoors/types/${id}`);
    return docData(grouptRef,{idField:'typeId'}) as Observable<any>;
  }

  deleteUserOutdoorsTypes(idUser: string,type: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/outdoors/types/${type.typeId}`);
    return deleteDoc(categoryRef);
  }

  updateUserOutdoorsTypes(idUser: string,type: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/categories/outdoors/types/${type.typeId}`);
    return updateDoc(categoryRef, {name: type.name});
  }
  getOutdoorsActivities( typeId: string){
    const groupsRef=collection(this.firestore,`categories/outdoors/types/${typeId}/activities`);
    return collectionData(groupsRef) as Observable<any[]>;
  }

  addUserOutdoorsActivity(idUser: string, activity: any){
    const categoryRef=collection(this.firestore, `users/${idUser}/outdoors-activities`);
    return addDoc(categoryRef, activity);
  }
  getUserOutdoorsActivities(idUser: string): Observable<any[]>{
    const grouptRef=collection(this.firestore, `users/${idUser}/outdoors-activities`);
    return collectionData(grouptRef, {idField:'activityId'}) as Observable<any[]>;
  }

  getUserOutdoorsActivityById(idUser: string, id: string){
    const grouptRef=doc(this.firestore, `users/${idUser}/outdoors-activities/${id}`);
    return docData(grouptRef,{idField:'activityId'}) as Observable<any>;
  }
  deleteUserOutdoorsActivity(idUser: string, idActivity){
    const exerciseRef=doc(this.firestore, `users/${idUser}/outdoors-activities/${idActivity}`);
    return deleteDoc(exerciseRef);
  }

  updateUserOutdoorsActivity(idUser: string, activity: any)
  {
    const exerciseRed=doc(this.firestore, `users/${idUser}/outdoors-activities/${activity.activityId}`);
    return updateDoc(exerciseRed, {name: activity.name, type: activity.type});
  }
  async getUserOutdoorsActivityByType(idUser: string, type: string){
   const exercises: any[]=[];
    const q=query(collection(this.firestore,`users/${idUser}/outdoors-activities`), where('type','==', `${type}`));
    const querySnapshot = await getDocs(q);
     querySnapshot.docs.forEach((docc) => {
       exercises.push({activityId: docc.id,
         name:docc.data().name,
         type:docc.data().type
       });
     });
     return exercises;
  }

  addUserCaloriesData(idUser: string, caloriesData: any){
    const categoryRef=doc(this.firestore, `users/${idUser}/calories-data/calories`);
    return setDoc(categoryRef, caloriesData);
  }
  getUserCaloriesData(idUser: string): Observable<any>{
    const grouptRef=doc(this.firestore, `users/${idUser}/calories-data/calories`);
    return docData(grouptRef, {idField:'caloryId'}) as Observable<any>;
  }
  updateUserCaloriesData(idUser: string, caloriesData: any)
  {
    const exerciseRed=doc(this.firestore, `users/${idUser}/calories-data/calories`);
    return updateDoc(exerciseRed, caloriesData);
  }
  addUserRoutine(idUser: string,routine)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/routines/${routine.routineName}`);
    return setDoc(categoryRef, routine);
 
  }
  getUserRoutine(idUser: string)
  {
    const categoryRef=collection(this.firestore, `users/${idUser}/routines`);
    return collectionData(categoryRef, {idField:'routineId'}) as Observable<any[]>;
 
  }
  updateUserRoutine(idUser: string, routine: any)
  {
    const categoryRef=doc(this.firestore, `users/${idUser}/routines/${routine.routineId}`);
    return updateDoc(categoryRef, routine);
  }
  deleteUserRoutine(idUser: string, routine){
    const exerciseRef=doc(this.firestore, `users/${idUser}/routines/${routine.routineId}`);
    return deleteDoc(exerciseRef);
  }
}
