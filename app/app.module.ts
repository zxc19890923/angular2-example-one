import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
// 表单处理,双向数据绑定
import {FormsModule}   from '@angular/forms';
// 引入自定义的组件
import {AppComponent}  from './app.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {
}
