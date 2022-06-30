import { Component,VERSION, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { AlertController, ModalController } from '@ionic/angular';
import { DatafirebaseService } from 'src/app/services/datafirebase.service';
import { SubjectInServiceService } from 'src/app/services/subject-in-service.service';
import { MusclesGroupForRoutinePage } from '../muscles-group-for-routine/muscles-group-for-routine.page';
import { WorkoutComponent } from '../workout/workout.component';

@Component({
  selector: 'app-create-routine',
  templateUrl: './create-routine.page.html',
  styleUrls: ['./create-routine.page.scss'],
})
export class CreateRoutinePage implements OnInit {
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
    
    this.today = Date.now();
    this.routineForm = this.fb.group({
      routineName: '',
      exercises: this.fb.array([])
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

  newSet(): FormGroup {
    return this.fb.group({
      weight: 0,
      reps: 0,
      notes: ''
    });
  }

  addExerciseSet(routineIndex: number) {
    this.exerciseSets(routineIndex).push(this.newSet());
  }

  removeExerciseSet(routineIndex: number, setIndex: number) {
    this.exerciseSets(routineIndex).removeAt(setIndex);
  }

  onSubmit() {
    const routine=this.routineForm.value;
    if(routine.routineName===''){
      routine.routineName='Routine';
    }
    console.log(routine);
  }

  dismiss()
  {
    const routine=this.routineForm.value;
    if(routine.routineName===''){
      routine.routineName='Routine';
    }
    this.dataService.addUserRoutine(this.auth.currentUser.uid, this.routineForm.value);
    this.modalCtrl.dismiss();    
  }
  dismissModal()
  {
    this.showAlert('Oops!', 'It looks like you did not saved the changes. If you exit your routine will be deleted. Proceed?');
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
 async showAlert(header, message) {
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
          this.modalCtrl.dismiss();
        }
      }
    ]
  });
  await alert.present();
}
}
