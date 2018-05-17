import { Component } from '@angular/core';
import { IonicPage, ModalController, NavParams, ToastController } from 'ionic-angular';
import { Medico } from '../../entity/Medico';
import { MedicoServiceProvider } from '../../providers/medico-service/medico-service';

@IonicPage({
    segment: 'medico-detail/:id'
})
@Component({
    selector: 'page-medico-detail',
    templateUrl: 'medico-detail.html'
})
export class MedicoDetailPage {
    medico: Medico;

    constructor(private modalCtrl: ModalController, private params: NavParams,
                private medicoService: MedicoServiceProvider, private toastCtrl: ToastController) {
        this.medico = new Medico();
        this.medico.id = params.get('id');
    }

    ionViewDidLoad() {
        this.medicoService.find(this.medico.id).subscribe(data => {
            console.log(data);
            this.medico = data
        });
    }

    open(item: Medico) {
        let modal = this.modalCtrl.create('MedicoDialogPage', {item: item});
        modal.onDidDismiss(medico => {
            if (medico) {
                this.medicoService.update(medico).subscribe(data => {
                    this.medico = data;
                    let toast = this.toastCtrl.create(
                        {message: 'Medico updated successfully.', duration: 3000, position: 'middle'});
                    toast.present();
                }, (error) => console.error(error));
            }
        });
        modal.present();
    }
}
