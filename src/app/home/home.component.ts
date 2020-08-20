import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
// import {dialog} from 'electron';
import {Dialog} from "electron";
import {ElectronService} from "../core/services";
import {Subscription} from "rxjs";
import {EligFileParserService} from "../core/services/elig-file-parser.service";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


  public fileName = "";
  constructor(private router: Router,public eligFileService:EligFileParserService) {
  }


  private sub: Subscription;



  ngOnInit() {
    try {
      this.sub = this.eligFileService.fileName$.subscribe(   fn =>{
        this.fileName = fn;
      })
    }catch (e) {
      this.fileName = ""
    }

  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
