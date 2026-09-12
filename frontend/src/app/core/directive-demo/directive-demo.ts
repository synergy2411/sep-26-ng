import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  imports: [CommonModule],
  templateUrl: './directive-demo.html',
  styleUrl: './directive-demo.css',
})
export class DirectiveDemo {
  styles = {
    border: '2px red solid',
    color: 'blue',
  };

  classes = {
    feature: true,
    'my-border': false,
  };

  changeStyle(flag: boolean) {
    if (flag) {
      this.styles.border = '2px blue solid';
      this.styles.color = 'red';
    } else {
      this.styles.border = '2px red solid';
      this.styles.color = 'blue';
    }
  }

  toggleClasses() {
    this.classes.feature = !this.classes.feature;
    this.classes['my-border'] = !this.classes['my-border'];
  }
}
