import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ServiceHospitales } from '../../services/service.hospitales';
import { Hospital } from '../../models/hospital';

@Component({
  selector: 'app-menu-hospitales-component',
  standalone: false,
  styleUrl: './menu-hospitales-component.css',
  templateUrl: './menu-hospitales-component.html',
})
export class MenuHospitalesComponent implements OnInit {
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
