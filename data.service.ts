import {Injectable} from '@angular/core';
// Injectable() dekoratörü, bu servisin Angular'ın bağımlılık enjeksiyon sistemi tarafından kullanılabileceğini belirtir.
// providedIn: 'root' => bu servis tüm uygulamada tek bir instance olarak sağlanır 
// yani uygulamanın herhangi bir yerinde bu servisi kullanabilirsin.
// instance nedir?
// instance, bir sınıfın (class) örneğidir. Yani bir sınıftan oluşturulan nesnedir.
// Örneğin, DataService sınıfından bir instance oluşturduğumuzda, bu sınıfın özelliklerine ve metodlarına erişebiliriz.

@Injectable({ providedIn: 'root'
})
export class DataService {
    getCities() {
        return ['istanbul', 'Ankara', 'İzmir', 'Bursa', 'Adana'];
    }
}

// DataService sınıfı angular data service olarak tanımlanır
//getCities() metodu oluşturukldu daha sonra bu metod sayesinde şehirlein isimlerini dömdürecek .