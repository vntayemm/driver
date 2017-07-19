import { Component } from '@angular/core';

import './ckeditor.loader';
import 'ckeditor';

@Component({
  selector: 'ckeditor-component',
  templateUrl: './ckeditor.html',
  styleUrls: ['./ckeditor.scss'],
})

export class Ckeditor {
  ckeditorContent: string = '<p>Hello CKEditor</p>';
  config = {
    uiColor: '#F0F3F4',
    height: '600',
  };

  constructor() {
  }
}
