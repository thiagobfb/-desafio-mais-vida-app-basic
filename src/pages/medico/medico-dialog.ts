import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController, ViewController } from 'ionic-angular';
import { Medico } from '../../entity/Medico';
import { MedicoServiceProvider } from '../../providers/medico-service/medico-service';

@IonicPage()
@Component({
    selector: 'page-medico-dialog',
    templateUrl: 'medico-dialog.html'
})
export class MedicoDialogPage {

    medico: Medico;
    isReadyToSave: boolean;

    form: FormGroup;

    constructor(public navCtrl: NavController, public viewCtrl: ViewController, public toastCtrl: ToastController,
                formBuilder: FormBuilder, params: NavParams,
                private medicoService: MedicoServiceProvider) {
        this.medico = params.get('item');
        if (this.medico && this.medico.id) {
            this.medicoService.find(this.medico.id).subscribe(data => {
                this.medico = data;
            });
        }

        this.form = formBuilder.group({
            id: [params.get('item') ? this.medico.id : ''],
            primeiroNome: [params.get('item') ? this.medico.primeiroNome : '',  Validators.required],
            ultimoNome: [params.get('item') ? this.medico.ultimoNome : '',  Validators.required],
            especialidade: [params.get('item') ? this.medico.especialidade : '',  Validators.required],
            email: [params.get('item') ? this.medico.email : '',  Validators.required],
            ativo: [params.get('item') ? this.medico.ativo : '',  Validators.required],
            status: [params.get('item') ? this.medico.status : '',  Validators.required],
            cidade: [params.get('item') ? this.medico.cidade : '', ],
            estado: [params.get('item') ? this.medico.estado : '', ],
        });

        // Watch the form for changes, and
        this.form.valueChanges.subscribe((v) => {
            this.isReadyToSave = this.form.valid;
        });
    }

    ionViewDidLoad() {
    }

    /**
     * The user cancelled, dismiss without sending data back.
     */
    cancel() {
        this.viewCtrl.dismiss();
    }

    /**
     * The user is done and wants to create the medico, so return it
     * back to the presenter.
     */
    done() {
        if (!this.form.valid) { return; }
        this.viewCtrl.dismiss(this.form.value);
    }

    onError(error) {
        console.error(error);
        let toast = this.toastCtrl.create({message: 'Failed to load data', duration: 2000, position: 'middle'});
        toast.present();
    }

}
