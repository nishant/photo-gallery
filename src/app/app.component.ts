import { Component } from '@angular/core';
import {BeforeSlideDetail} from 'lightgallery/lg-events';
import lgZoom from 'lightgallery/plugins/zoom';
import {galleryData} from './typings/GalleryData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  settings = {
    counter: false,
    plugins: []
  };

  readonly AUTHOR = 'Tarun Arora';

  infoTextTemplate = `<h4><%= TITLE %></h4><p><%= LOCATION %></p><p class="author">Photography by ${this.AUTHOR}</p>`;

  items = galleryData;

  constructor() {
    console.log(this.items);
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  }

  replacePlaceholderText(title: string, location: string): string {
    return this.infoTextTemplate
      .replace(new RegExp('<%=\\s+TITLE\\s+%>', 'g'), title)
      .replace(new RegExp('<%=\\s+LOCATION\\s+%>', 'g'), location);
  }
}

