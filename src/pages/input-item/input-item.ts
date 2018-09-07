import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-input-item',
  templateUrl: 'input-item.html',
})
export class InputItemPage {

  public title: string;
  public description: string;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    // 呼び出し時に引数が渡っていればそれを表示
    let item = this.navParams.get('item');
    if (item) {
      this.title = item.title;
      this.description = item.description;
    }
  }

  saveItem() {
    let inputItem = {
      title: this.title,
      description: this.description
    };
    // 入力された値を閉じる際に返す
    this.viewCtrl.dismiss(inputItem);
  }

  close() {
    this.viewCtrl.dismiss();
  }

}