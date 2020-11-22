import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './components/tree/tree.component';
import { SkillComponent } from './components/skill/skill.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LeftBar } from './components/left-bar/left-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'antd/dist/antd.css';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number'; 
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { AjaxInterceptor } from './interceptors/ajax-interceptor';
import { AddSkillForm } from './components/add-skill-form/add-skill-form.component';
import { NzFormModule } from 'ng-zorro-antd/form';


registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    SkillComponent,
    LeftBar,
    AddSkillForm,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FlexLayoutModule,
    IconsProviderModule,
    NzLayoutModule,
    NzDrawerModule,
    NzMenuModule,
    NzFormModule,
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzCollapseModule,
    ReactiveFormsModule,
    NzInputNumberModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    { provide: HTTP_INTERCEPTORS, useClass: AjaxInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
