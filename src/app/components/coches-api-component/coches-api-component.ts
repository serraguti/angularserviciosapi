import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCoches } from '../../services/service.coches';
import { Coche } from '../../models/coche';

@Component({
  selector: 'app-coches-api-component',
  standalone: false,
  styleUrl: './coches-api-component.css',
  templateUrl: './coches-api-component.html',
})
export class CochesApiComponent implements OnInit {
  @ViewChild("cajaid") cajaid!: ElementRef
  car!: Coche
  arraycoches: Coche[] = []

  async buscarCoche(): Promise<void> {
    let idcoche = parseInt(this.cajaid.nativeElement.value);
    this.car = await this._service.findCocheAsync(idcoche);
    this._cdr.detectChanges();
  }

  constructor(
    private _service: ServiceCoches,
    private _cdr: ChangeDetectorRef
  ) {}

  async ngOnInit(): Promise<void> {
    this.arraycoches = await this._service.getCochesAsync();
    this._cdr.detectChanges();
  }
}
