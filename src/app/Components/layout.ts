import {Component} from "@angular/core";
@Component ({
  selector: 'app-layout',
  template: `
    <h1>Home Page</h1>
    <ng-content></ng-content>

  `,

  styles: ['#layout{position: absolute;width: 100%;height: 100%}']
})
export class LayoutComponent {
}
