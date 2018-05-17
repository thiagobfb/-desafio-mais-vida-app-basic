import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MedicoDetailPage } from './medico-detail';
import { MedicoServiceProvider } from '../../providers/medico-service/medico-service';

@NgModule({
    declarations: [
        MedicoDetailPage
    ],
    imports: [
        IonicPageModule.forChild(MedicoDetailPage)
    ],
    exports: [
        MedicoDetailPage
    ],
    providers: [MedicoServiceProvider]
})
export class MedicoDetailPageModule {
}
