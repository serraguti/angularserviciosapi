import { Component, OnInit } from '@angular/core';
import { ServiceComics } from '../../services/service.comics';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comics-component',
  standalone: false,
  styleUrl: './comics-component.css',
  templateUrl: './comics-component.html',
})
export class ComicsComponent implements OnInit {
  mensaje!: string;
  comic!: Comic;

  constructor(
    private _service: ServiceComics
  ){}

  ngOnInit(): void {
    this.mensaje = this._service.getSaludo();
    this.comic = this._service.getComic();
  }
}
