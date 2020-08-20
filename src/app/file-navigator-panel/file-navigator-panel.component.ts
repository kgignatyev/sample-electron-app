import {Component, OnDestroy, OnInit} from '@angular/core';
import {Line} from "../data";
import {EligFileParserService} from "../core/services/elig-file-parser.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-file-navigator-panel',
  templateUrl: './file-navigator-panel.component.html',
  styleUrls: ['./file-navigator-panel.component.scss']
})
export class FileNavigatorPanelComponent implements OnInit, OnDestroy {

  lines:Array<Line>
  private sub: Subscription;

  constructor( public eligFileService:EligFileParserService ) { }

  ngOnInit() {
    try {
      this.sub = this.eligFileService.fileLines$.subscribe(   lines =>{
        this.lines = lines;
      })
    }catch (e) {
      this.lines = [];
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
