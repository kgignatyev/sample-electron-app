import {Component, OnDestroy, OnInit} from '@angular/core';
import {Line} from "../data";
import {EligFileParserService} from "../core/services/elig-file-parser.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-row-editor',
  templateUrl: './row-editor.component.html',
  styleUrls: ['./row-editor.component.scss']
})
export class RowEditorComponent implements OnInit, OnDestroy {

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
