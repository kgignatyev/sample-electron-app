import { Component, OnInit } from '@angular/core';
import {EligFileParserService} from "../core/services/elig-file-parser.service";
import {ElectronService} from "../core/services";
import {Dialog} from "electron";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor( public eligFileSvc: EligFileParserService,public electron: ElectronService) { }

  ngOnInit(): void {
  }


  openEligFile() {
    const app = this.electron.remote;
    const dialog: Dialog = app.dialog;

    dialog.showOpenDialog({}).then( (rv)=>{
      console.log(rv.filePaths)
      this.eligFileSvc.openFile( rv.filePaths[0])
    });

    console.log(app, window['process']);

  }
}
