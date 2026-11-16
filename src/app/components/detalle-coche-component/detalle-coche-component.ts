import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { Coche } from '../../models/coche';
import { ServiceCoches } from '../../services/service.coches';

@Component({
  selector: 'app-detalle-coche-component',
  standalone: false,
  styleUrl: './detalle-coche-component.css',
  templateUrl: './detalle-coche-component.html',
})
export class DetalleCocheComponent implements OnInit {
  mensaje!: string
  car!: Coche

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: ServiceCoches
  ) {}

  async ngOnInit(): Promise<void> {
    // let params = await firstValueFrom(this._active.params);
    // let idcoche = params['idcoche'];
    // this.mensaje = "Soy el coche " + idcoche
    this._active.params.subscribe(async (params: Params) => {
      let idcoche = params['idcoche'];
      this.mensaje = "Soy el coche " + idcoche
      this.car = await this._service.findCocheAsync(idcoche);
      this._cdr.detectChanges();
    });    
  }
}
