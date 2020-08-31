import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule, MatCheckbox } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatInputModule } from '@angular/material/input';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from "@angular/material/dialog";

const material = [
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule
]


@NgModule({
    imports: [
        material
    ],
    exports: [
        material
    ],
    providers: [
        { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } }
    ],
})

export class MaterialModule { }
