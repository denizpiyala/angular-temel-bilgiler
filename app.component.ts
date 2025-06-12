import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

/*
 * selector: HTML içinde bu component'i çağırmak için kullanılır.
 * Örn: <app-root></app-root>
 * CSS selector'larına benzer ama burada Angular, DOM'a bu component'i eklemek için kullanır.
 */

/*
 * standalone: true → Bu bileşenin bağımsız olduğunu gösterir.
 * Yani bir Angular module’e (NgModule) eklenmeden çalışabilir.
 * Bu yeni Angular yaklaşımı, modül karmaşasını azaltır.
 */
/*
 * imports: Bu bileşenin kullanacağı modülleri belirtir.
 * CommonModule sayesinde *ngIf, *ngFor gibi yapılar kullanılabilir.
 */

@Component({
    selector: 'app-root',
    standalone: true,
     imports: [CommonModule],
    template: `
    //template, bileşenin HTML içeriğini tanımlar
    //bu içerik, bileşenin nasıl görüneceğini ve nasıl davranacağını belirler

    <h1>merhaba angular</h1>
    <p>Counter: {{ count }}</p>
    <button (click) = "count = count + 1">Arttır</button>
     `,

     //counter adında bir değişken tanımladık
     //count adında property tanımladık
     //bu property, bileşenin HTML içeriğinde gösterilecek sayıyı tutar
     //bu sayıyı arttırmak için bir buton ekledik
     //butona tıklandığında count değişkeninin değerini 1 arttırıyoruz
   
})

export class AppComponent {
    count = 0;
}

//count : sayacın değerini tutan property