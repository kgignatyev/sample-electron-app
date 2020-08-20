import {Injectable} from '@angular/core';
import {Line} from "../../data";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EligFileParserService {

  public fileLines$: BehaviorSubject<Array<Line>> = new BehaviorSubject<Array<Line>>([]);
  public header$: BehaviorSubject<Line> = new BehaviorSubject<Line>(new Line());
  public fileName$: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor() {
  }


  public openFile(fileName: string): void {
    this.fileName$.next(fileName)
    const headerLine = new Line()
    headerLine.parts = ["a","b","c"]
    this.header$.next( headerLine )

    const lines = new Array<Line>()
    lines.push( new Line(), new Line());
    this.fileLines$.next(lines)
  }
}
