import { Component, OnInit } from '@angular/core';
import {galleryData} from "../typings/GalleryData";
import {BeforeSlideDetail} from "lightgallery/lg-events";

@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  settings = {
    counter: false,
    plugins: []
  };

  private readonly AUTHOR = 'Tarun Arora';

  infoTextTemplate = `<h4><%= TITLE %></h4><p><%= LOCATION %></p><p class="author">Photography by ${this.AUTHOR}</p>`;

  items = galleryData;

  constructor() {
    // console.log(this.items);
  }

  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    // console.log(index, prevIndex);
  }

  replacePlaceholderText(title: string, location: string): string {
    return this.infoTextTemplate
      .replace(new RegExp('<%=\\s+TITLE\\s+%>', 'g'), title)
      .replace(new RegExp('<%=\\s+LOCATION\\s+%>', 'g'), location);
  }
}
