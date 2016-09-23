"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
// 自定义类规则的位置,必须在import之下
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
// 定义一个常量数组, 这个数据通常是http请求返回来的数组对象
var HEROES = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' },
    { id: 14, name: 'Celeritas' },
    { id: 15, name: 'Magneta' },
    { id: 16, name: 'RubberMan' },
    { id: 17, name: 'Dynama' },
    { id: 18, name: 'Dr IQ' },
    { id: 19, name: 'Magma' },
    { id: 20, name: 'Tornado' }
];
var AppComponent = (function () {
    function AppComponent() {
        this.title = "angular2";
        // 创建一个属性, 等于这个对象数组, 然后在模板界面中调用
        this.heros = HEROES;
        // 实例化类 Hero
        this.hero = {
            id: 1,
            name: "zhangxuchao",
            sex: "male"
        };
    }
    // 单机选中英雄事件
    AppComponent.prototype.onSelect = function (heroName) {
        this.selectHero = heroName;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            // 注意路径, 从根目录开始查找文件
            templateUrl: "app/templates/tpl1.html"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map