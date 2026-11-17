import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceHospitales } from '../../services/service.hospitales';
import { Hospital } from '../../models/hospital';

@Component({
  selector: 'app-detalle-hospital-component',
  standalone: false,
  styleUrl: './detalle-hospital-component.css',
  templateUrl: './detalle-hospital-component.html',
})
export class DetalleHospitalComponent implements OnInit {
  mensaje!: string
  hospital!: Hospital

  constructor(
    private _active: ActivatedRoute,
    private _cdr: ChangeDetectorRef,
    private _service: ServiceHospitales
  ){}

  async ngOnInit(): Promise<void> {
    this._active.params.subscribe(async (params: Params) => {
      let idhospital = params['idhospital']
      this.mensaje = "Hospital Id: " + idhospital
      this.hospital = await this._service.findHospitalAsync(idhospital);
      this._cdr.detectChanges();
    })    
  }
}
