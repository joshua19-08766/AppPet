import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {

  categories = [ 'Dog','Cat',]

  taskName
  
  taskBreed
  taskDate
  taskGender
  taskCategory
  taskObject

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
async dismis(){
  await this.modalCtrl.dismiss(this.taskObject)
}
selectedCategory(index){
  this.taskCategory = this.categories[index]
}
AddTask(){
  this.taskObject=({itemName:this.taskName,
                     itemDate:this.taskDate,
                    itemGender:this.taskGender,
                  itemCategory:this.taskCategory,
                    itemBreed:this.taskBreed  
                  })
                  this.dismis()
}
}
