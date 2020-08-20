import {Component, OnDestroy, OnInit} from '@angular/core';
import {EligFileParserService} from "../core/services/elig-file-parser.service";
import {Subscription} from "rxjs";
import {Line} from "../data";

@Component({
  selector: 'app-header-editor',
  templateUrl: './header-editor.component.html',
  styleUrls: ['./header-editor.component.scss']
})
export class HeaderEditorComponent implements OnInit, OnDestroy {

  public header: Line;

  constructor(public eligFileService:EligFileParserService) {
  }


  private sub: Subscription;



  ngOnInit() {
    try {
      this.sub = this.eligFileService.header$.subscribe(   h =>{
        this.header = h;
      })
    }catch (e) {
      this.header = new Line()
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
