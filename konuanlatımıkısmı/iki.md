// --- componentler
component nasıl oluşturulur?
ng generate component 'component-adı'
veya ng g c 'component adı'

component oluşturduktan sonra nagular CLI otomatik olarak ilgili dosyaları klasörleri oluşturacaktır.
işte mesela 
=>c-a.css
=>c-a.html
=>c-a.spec.ts
=>c-a.ts

Component class: componentin mantığnı ve davranışını tanımlar. bu sınıf ts kodunnu içerir ve bileşenin fonksiyonelliğini kontrol eder 
örn : import { component} from 'angular/core'


@component ({
    selector:'app-bileşen adı', bu component etiketi oluyor
    temlateUrl:'./bileşeninadı.component.html' //HTML dosyasının yolu
    styleUrls: ['./bileşenin adı.css] //css dosya yolu

})

export class bileşenadı 
komponent sınıfı burda


Template (Şablon): Kullanıcı arayüzünün HTML temsilini içerir. Bu dosya, componentin görüntüsünü tanımlar.

Örnek bir component şablonu (bileşen-adı.component.html):

<div>
  <h1>Merhaba, ben bir componentim!</h1>
</div>

Styles (Stiller): Componentin CSS veya SCSS dosyasıdır. Bu dosya, componentin görüntüsünün stiline ilişkin tanımlamaları içerir.

Örnek bir component stil dosyası (bileşen-adı.component.css):

div {
  border: 1px solid #ccc;
  padding: 10px;
}
Metadata (Meta Bilgiler): Componentin davranışını ve yapılandırmasını tanımlar. Bu kısım, @Component dekoratörü içinde bulunur ve bileşenin seçici (selector), şablon ve stil dosyası gibi bilgilerini içerir.

Örneğin:

@Component({
  selector: 'app-bileşen-adı',
  templateUrl: './bileşen-adı.component.html',
  styleUrls: ['./bileşen-adı.component.css']
})

 — Component Kullanımı
Componentler, diğer componentler bir araya getirilerek de kullanılabilir. Bir componenti kullanmak için, componentin seçicisini (selector) kullanarak ilgili yerde eklemek yeterlidir.

Örneğin, app.component.html dosyasında app-bileşen-adı componentini kullanma:

<app-bileşen-adı></app-bileşen-adı>
Bu şekilde, componentler arasında ilişki kurarak ve componentlerin tekrar kullanılabilirliğini sağlayarak karmaşık uygulamalar geliştirebilirsiniz.