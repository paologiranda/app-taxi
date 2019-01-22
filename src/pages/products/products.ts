import { Component } from '@angular/core';
import {ActionSheetController, AlertController} from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'products.html'
})
export class ProductsPage {


  constructor(public actionSheetCtrl: ActionSheetController,
              public alertCtrl: AlertController) { }

  openMenu() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      buttons: [
        {
          text: 'Delete',
          role: 'Delete',
          icon: 'md-archive',
          handler: () => {
            console.log('Delete clicked');
          }
        },{
          text: 'Archive',
          icon: 'md-archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Share',
          icon: 'md-share',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  openBasicAlert() {
    const alert = this.alertCtrl.create({
      title: 'New Friend!',
      subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  openPromptAlert() {
    const prompt = this.alertCtrl.create({
      title: 'Login',
      message: "Enter a name for this new album you're so keen on adding",
      inputs: [
        {
          name: 'title',
          placeholder: 'Title'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    prompt.present();
  }

}
