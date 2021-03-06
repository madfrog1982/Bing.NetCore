import { NgModule } from '@angular/core';
//Angular模块
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

//CKEditor模块
import { CKEditorModule } from 'ng2-ckeditor';

//Ant Design模块
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { ViserModule } from 'viser-ng';

//ng-alain模块
import { AlainThemeModule } from '@delon/theme';
import { DelonABCModule } from '@delon/abc';

//Bing模块
import { BingModule } from '../bing';

@NgModule({
    exports: [
        CommonModule,
        FormsModule,
        RouterModule, 
        ReactiveFormsModule,
        CKEditorModule,
        NgZorroAntdModule,
        ViserModule,
        AlainThemeModule,
        DelonABCModule,
        BingModule
    ]
})
export class FrameworkModule {
}