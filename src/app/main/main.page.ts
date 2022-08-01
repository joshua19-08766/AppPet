import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  animalList = []

constructor(
            public modalCtrl:ModalController,
            private alertController: AlertController 
            
            ) { }

async addTask(){
  const modal = await this.modalCtrl.create({
      component: AddNewTaskPage
  })
  modal.onDidDismiss().then(newTaskObj =>{
    console.log(newTaskObj.data);
    this.animalList.push(newTaskObj.data)
  })
  return await modal.present()
}

async delete(index) {
  this.animalList.splice(index,1)
  const alert = await this.alertController.create({
    header: 'Are you sure to delete this list?',
    message: '',
    cssClass: 'custom-alert',
    buttons: [
      {
        text: 'No',
        cssClass: 'alert-button-cancel'
      },
      {
        text: 'Yes',
        cssClass: 'alert-button-confirm'
        
      }
    ]
  });

  await alert.present();
}


}



