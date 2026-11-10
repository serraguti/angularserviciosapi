import { Component, OnInit } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  mensaje!: string;

  constructor(
    private _service: ServiceComics
  ){}

  ngOnInit(): void {
    this.mensaje = this._service.getSaludo();
  }
}
