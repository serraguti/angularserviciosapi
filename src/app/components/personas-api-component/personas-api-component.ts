import { ChangeDetectorRef, Component } from '@angular/core';
import { Persona } from '../../models/persona';
import { ServicePersonas } from '../../services/service.personas';

@Component({
  selector: 'app-personas-api-component',
  standalone: false,
  styleUrl: './personas-api-component.css',
  templateUrl: './personas-api-component.html',
})
export class PersonasApiComponent {
  arraypersonas: Persona[] = []

  constructor(
    private _service: ServicePersonas,
    private _cdr: ChangeDetectorRef
  ) {}

  async cargarPersonas(): Promise<void> {
    this.arraypersonas = await this._service.getPersonasAsync();
    this._cdr.detectChanges();
  }
}
