import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoDialogPage } from './medico-dialog';
import { MedicoServiceProvider } from '../../providers/medico-service/medico-service';

@NgModule({
    declarations: [
        MedicoDialogPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoDialogPage)
    ],
    exports: [
        MedicoDialogPage
    ],
    providers: [
        MedicoServiceProvider
    ]
})
export class MedicoDialogPageModule {
}
