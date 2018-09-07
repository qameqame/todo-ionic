import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { InputItemPage } from '../input-item/input-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, private storage: Storage) {

  }

  ionViewDidLoad() {
    // 初期データをストレージから読み込んで表示
    this.storage.get('items').then((items) => {
      this.items = items ? items : [];
    });
  }

  createItem() {
    // モーダルの生成
    let addModal = this.modalCtrl.create(InputItemPage);

    // dismissイベント(閉じられた時)の処理
    addModal.onDidDismiss((item) => {
      if (item) {
        // 入力があればそれを追加する
        this.items.push(item);
        this.updateStorageData();
      }
    });

    // モーダルの表示
    addModal.present();
  }

  editItem(item) {
    const index = this.items.indexOf(item);

    // モーダルの生成(引数にitemを渡す)
    let editItem = this.modalCtrl.create(InputItemPage, {
      item: item
    });

    // dismissイベント(閉じられた時)の処理
    editItem.onDidDismiss((item) => {
      if (item) {
        this.items[index] = item;
        this.updateStorageData();
      }
    });

    // モーダルの表示
    editItem.present();
  }
  deleteItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.updateStorageData();
  }

  updateStorageData() {
    // ストレージのデータを更新
    this.storage.set('items', this.items).then(() => {
    });
  }

}