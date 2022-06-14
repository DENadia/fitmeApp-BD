import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { signOut } from '@firebase/auth';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Firestore, collection, collectionData, doc, docData, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { LoadingController, ToastController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
user$: Observable<User>;
user: User;
userData: any;
  constructor(private auth: Auth,
    private afs: Firestore,
    private loadinControl: LoadingController,
    private toaster: ToastController) { 
    }
    getUsers(): Observable<User[]> {
      const userRef = collection(this.afs, 'users');
      return collectionData(userRef, { idField: 'userId'}) as Observable<User[]>;
    }
   
    getUserById(id): Observable<User> {
      const user=this.auth.currentUser;
      const userDocRef = doc(this.afs, `users/${id}`);
      return docData(userDocRef, { idField: 'userId' }) as Observable<User>;
    }
   
    addUser(user: User) {
      const userRef = collection(this.afs, 'users');
      return addDoc(userRef, user);
    }
    deleteUser(user: User) {
      const userDocRef = doc(this.afs, `users/${user.userId}`);
      return deleteDoc(userDocRef);
    }
   
    updateUser(user: User) {
      const userDocRef = doc(this.afs, `users/${user.userId}`);
      return updateDoc(userDocRef, { name: user.userName, email:user.userEmail});
    }

  async register(email, password){
     const user= await createUserWithEmailAndPassword(this.auth, email,password);
     return user;
  }
  async login({email, password}){
    try{
      const user= await signInWithEmailAndPassword(this.auth, email,password);
      return user;
    }catch(e){
      return null;
    }
  }
  logout(){
    return signOut(this.auth);
  }
  async toast(msg, status)
  {
    const toast=await this.toaster.create({
      message:msg,
      color:status,
      position:'top',
      duration:2000
    });
  }
}
