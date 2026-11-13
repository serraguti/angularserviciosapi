import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Hospital } from '../../models/hospital';
import { ServiceHospitales } from '../../services/service.hospitales';

@Component({
  selector: 'app-hospitales-api-component',
  standalone: false,
  styleUrl: './hospitales-api-component.css',
  templateUrl: './hospitales-api-component.html',
})
export class HospitalesApiComponent implements OnInit {
  arrayhospitales: Hospital[] = []

  constructor(
    private _service: ServiceHospitales,
    private _cdr: ChangeDetectorRef
  ){}

  async ngOnInit(): Promise<void> {
    this.arrayhospitales = await this._service.getHospitalesAsync();
    this._cdr.detectChanges();
  }
}
