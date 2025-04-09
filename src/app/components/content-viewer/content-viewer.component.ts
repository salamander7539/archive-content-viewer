import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Content } from '../../interfaces/files.interface';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-content-viewer',
  standalone: false,
  templateUrl: './content-viewer.component.html',
  styleUrl: './content-viewer.component.scss',
})
export class ContentViewerComponent implements OnInit {
  contentData?: Content;
  parrentContent?: Content;
  paths: string[] = [];

  constructor(public httpService: HttpService) {}

  ngOnInit(): void {
    this.httpService.getContent().subscribe((content) => {
      this.contentData = content;
      this.parrentContent = this.contentData;
    });
  }

  goNext(folder: Content) {
    if (!folder.size) {
      this.pushToPath(folder.name!);
      this.contentData = folder;
    }
  }

  goToFolder(folderName: string) {
    let i = 0;
    this.paths.reverse();
    while (i < this.paths.length) {
      if (this.paths[i] !== folderName) {
        this.paths.shift();
      } else {
        break;
      }
    }
    this.paths.reverse();
    this.contentData = this.findNestedFolder(this.parrentContent, folderName);
  }

  goBack() {
    this.popFromPath();
    if (!this.paths.length) {
      this.httpService.getContent().subscribe((content) => {
        this.contentData = content;
      });
    } else {
      this.contentData = this.findNestedFolder(
        this.parrentContent,
        this.paths[this.paths.length - 1]!
      );
    }
  }

  pushToPath(folderName: string) {
    this.paths.push(folderName);
  }

  popFromPath() {
    this.paths.pop();
  }

  findNestedFolder(entireObj: any, folderToFind: string) {
    let foundFolder;
    JSON.stringify(entireObj, (_, nestedValue) => {
      if (nestedValue && nestedValue['name'] === folderToFind) {
        foundFolder = nestedValue;
      }
      return nestedValue;
    });
    return foundFolder;
  }
}
