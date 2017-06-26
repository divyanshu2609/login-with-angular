import {
    MdButtonModule, MdCardModule, MdCheckboxModule, MdIconModule, MdInputModule, MdMenuModule,
    MdProgressSpinnerModule, MdSnackBarModule, MdTabsModule,
    MdToolbarModule
} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
    imports: [
        MdInputModule,
        MdToolbarModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdCardModule,
        MdProgressSpinnerModule,
        MdSnackBarModule,
        MdTabsModule
    ],
    exports: [
        MdInputModule,
        MdToolbarModule,
        MdButtonModule,
        MdCheckboxModule,
        MdIconModule,
        MdMenuModule,
        MdCardModule,
        MdProgressSpinnerModule,
        MdSnackBarModule,
        MdTabsModule
    ],
})
export class MaterialModule {
}