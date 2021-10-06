import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-abteilung',
  templateUrl: './abteilung.component.html',
  styleUrls: ['./abteilung.component.scss'],
})
export class AbteilungComponent {
  pages: { title: string; imagePath: string; link: string }[] = [
    { title: 'Nünenen', imagePath: 'organigramm', link: '/abteilung' },
    { title: 'Bieberstufe', imagePath: 'bieber', link: '/bieber' },
    { title: 'Wolfsstufe', imagePath: 'wolfe', link: '/wolf' },
    { title: 'Pfadistufe', imagePath: 'pfadi', link: '/pfadi' },
    { title: 'Piostufe', imagePath: 'pios', link: '/pio' },
    { title: 'Roverstufe', imagePath: 'rover', link: '/rover' },
  ];
}
