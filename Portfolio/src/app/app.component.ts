import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  // ng build --target=production --environment=prod\ --base-href="https://gerleven.github.io/Portfolio/"
  // ng add angular-cli-ghpages
}
