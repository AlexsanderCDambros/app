import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _showHeader: boolean = false;

  constructor() { }

  get showHeader(): boolean {
    return this._showHeader;
  }

  public setShowHeader(showHeader: boolean): void {
    this._showHeader = showHeader;
  }
  
}
