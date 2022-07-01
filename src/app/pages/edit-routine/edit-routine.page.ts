import { Component, Input, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { SubjectInServiceService } from 'src/app/services/subject-in-service.service';
import { MusclesGroupForRoutinePage } from '../muscles-group-for-routine/muscles-group-for-routine.page';

@Component({
  selector: 'app-edit-routine',
  templateUrl: './edit-routine.page.html',
  styleUrls: ['./edit-routine.page.scss'],
})
export class EditRoutinePage implements OnInit {
  @Input() routine;
  public today;
  active=-1;
  routineForm: FormGroup;
  exerciseName: string;
  constructor(private modalCtrl: ModalController,
    private fb: FormBuilder,
    private subjectInService: SubjectInServiceService, 
    private modalControler: ModalController,
    private auth: Auth,
    private dataService: DatafirebaseService,
    private alertCtrl: AlertController ) { }

  ngOnInit() {
    console.log(this.routine);
    this.today = Date.now();
    this.routineForm = this.fb.group({
      routineName:this.routine.routineName,
      exercises: this.fb.array([])
    });
     this.routine.exercises.forEach(exercise=>{
      this.exercises().push(this.newExercise(exercise.name));
      for(let set of exercise.sets)
      {
        this.exerciseSets(this.routine.exercises.indexOf(exercise)).push(this.newSet(set.weight, set.reps, set.notes));
      }
      });
  }
  exercises(): FormArray {
    return this.routineForm.get('exercises') as FormArray;
  }
  newExercise(exercise): FormGroup {

    return this.fb.group({
      name:exercise,
      sets: this.fb.array([])
    });
  }
  addExercise(active) {
    if(active===1)
    {
      this.subjectInService.currentData.subscribe((e)=>this.exerciseName=e);
        this.exercises().push(this.newExercise(this.exerciseName));
    }
   
  }
  removeExercise(routineIndex: number) {
    this.exercises().removeAt(routineIndex);
  }

  exerciseSets(routineIndex: number): FormArray {
    return this.exercises()
      .at(routineIndex)
      .get('sets') as FormArray;
  }

  newSet(weightSet, repsSet, notesSet): FormGroup {
    return this.fb.group({
      weight: weightSet,
      reps: repsSet,
      notes: notesSet
    });
  }

  addExerciseSet(routineIndex: number) {
    this.exerciseSets(routineIndex).push(this.newSet(0,0,''));
  }

  removeExerciseSet(routineIndex: number, setIndex: number) {
    this.exerciseSets(routineIndex).removeAt(setIndex);
  }

  onSubmit() {
    console.log(this.routine.routineId);
    
    const routine=this.routineForm.value;
    this.routine.routineName=routine.routineName;
    this.routine.exercises=routine.exercises;
    console.log(this.routine);
  }

  dismiss()
  {
    const routine=this.routineForm.value;
    this.routine.routineName=routine.routineName;
    this.routine.exercises=routine.exercises;
    this.dataService.updateUserRoutine(this.auth.currentUser.uid, this.routine);
    this.modalCtrl.dismiss();    
  }
 async open()
 {
   const modal=await this.modalCtrl.create({
     component: MusclesGroupForRoutinePage,
     breakpoints:[0,0.5,0.8],
        initialBreakpoint:0.8
   });
  await modal.present();
  const{data}=await modal.onWillDismiss();
  console.log(data);
  this.active=data.active;
  this.addExercise(this.active);
 }

options()
{
  
  this.showAlertDelete("Delete routine", "Are you sure you want to delete your routine?");
}


async showAlert(header, message) {
  const alert = await this.alertCtrl.create({
    header,
    message,
    buttons: [
      {
        text:'Ok',
        handler:()=>{
          this.modalCtrl.dismiss();
        }
      }
    ]
  });
  await alert.present();
}
async showAlertDelete(header, message) {
  const alert = await this.alertCtrl.create({
    header,
    message,
    buttons: [
      {
        text:'Cancel',
        role:'cancel',
      },
      {
        text:'Ok',
        handler:()=>{
          this.dataService.deleteUserRoutine(this.auth.currentUser.uid, this.routine);
          this.showAlert('Great!', 'Routine deleted! The page will close');

        }
      }
    ]
  });
  await alert.present();
}
}
