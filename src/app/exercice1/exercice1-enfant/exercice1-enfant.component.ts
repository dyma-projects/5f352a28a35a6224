import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  valeurCompteur: number =0;
  @Output("changement") changementCompteur = new EventEmitter();
  @Input() valeur : number;
  constructor() { }

  ngOnInit() {
  }
  public incremente(): void {
    this.valeurCompteur++;
    this.changementCompteur.emit({
      value: this.valeurCompteur
    })
  }
  public decremente(): void {
    this.valeurCompteur--;
    this.changementCompteur.emit({
      value: this.valeurCompteur
    })
  }

}
