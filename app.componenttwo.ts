// Gerekli Angular bileşenlerini içe aktarıyoruz
import { Component, OnInit } from '@angular/core';
// DataService adlı servis dosyasını içe aktarıyoruz
import { DataService } from './data.service';
// Angular’ın ortak yapıları (ngIf, ngFor vb.) için CommonModule ekleniyor
import { CommonModule } from '@angular/common';

@Component({
  // Bu bileşenin HTML'de kullanılacak etiketi (selector)
  selector: 'app-root',

  // Bu bileşenin bağımsız (standalone) olduğunu belirtiyoruz
  standalone: true,

  // Bu bileşende kullanılacak modüller burada tanımlanır
  imports: [CommonModule],

  // Bileşenin HTML içeriği (şablonu)
  template: `
    <p>Şehirler:</p>

    <ul>
      <!-- *ngFor, cities dizisi içinde döner -->
      <!-- Her bir city için bir <li> oluşturur -->
      <li *ngFor="let city of cities">{{ city }}</li>
    </ul>
  `,
})
export class AppComponent implements OnInit {
  // cities adında bir string dizisi tanımladık
  cities: string[] = [];

  // DataService servisini constructor'da kullanıma alıyoruz
  constructor(private dataService: DataService) {}

  // Bileşen ilk yüklendiğinde çalışan method
  ngOnInit() {
    // Servisten şehir verilerini alıp cities dizisine aktarıyoruz
    this.cities = this.dataService.getCities();
  }
}
