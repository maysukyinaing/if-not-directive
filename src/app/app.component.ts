import {Component, OnInit} from '@angular/core';

enum Visibility{
  On = 'on',
  Off = 'off'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'if-not-directive';

  visibility ?: Visibility
  VISIBILITY = Visibility

  ngOnInit(): void {
    this.setVisibility(this.VISIBILITY.Off)
  }

  setVisibility(value:Visibility) {
    this.visibility = value
  }



}
