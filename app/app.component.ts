import {Component} from '@angular/core';
// 自定义类规则的位置,必须在import之下
export class Hero {
    id:number;
    name:string;
    sex:string;
}
// 定义一个常量数组, 这个数据通常是http请求返回来的数组对象
const HEROES:Hero[] = [
    {id: 11, name: 'Mr. Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
];
@Component({
    selector: 'my-app',
    // 注意路径, 从根目录开始查找文件
    templateUrl: "app/templates/tpl1.html"
})
export class AppComponent {
    title = "angular2";
    // 创建一个属性, 等于这个对象数组, 然后在模板界面中调用
    heros = HEROES;

    // 选中的英雄
    selectHero:"";
    // 单机选中英雄事件
    onSelect(heroName): void {
        this.selectHero = heroName;
    }

    // 实例化类 Hero
    hero:Hero = {
        id: 1,
        name: "zhangxuchao",
        sex: "male"
    };
}
