# Proje Hakkında

<small>Bu proje Laravel tabanlı basit bir popup form uygulamasıdır.</small>

---
## Proje Görseli
![image](https://github.com/user-attachments/assets/176dcbbf-354e-46be-8e1b-df64353d068f)

---

## Çalışılan Dosyalar ve Klasörler

- **HTML (View):**  
  `resources/views/pop-up/popup.blade.php`  
  → Popup formun görünümü burada bulunuyor.

- **CSS:**  
  `public/css/popup.css`  
  → Popup için özel stiller burada tanımlı.
  
- **JavaScript:**  
  `public/js/popup.js`  
 → Popup'un açılıp kapanma davranışı, form doğrulamaları ve kullanıcı onay kontrolü gibi etkileşimler burada yönetiliyor.

- **Controller:**  
  `app/Http/Controllers/ContactController.php`  
  → Formdan gelen verileri alır, doğrular ve işler.

- **Route:**  
  `routes/web.php`  
  → URL isteklerini ilgili görünüm ve işleyiciye yönlendirir.


---

## Proje Kurulumu

1. Depoyu klonlayın:  
   `git clone https://github.com/kullaniciadi/proje-adi.git`

2. `.env` dosyasını oluşturun ve ayarlayın:  
   `.env.example` dosyasını kopyalayıp kendi ayarlarınızı yapın.

3. Bağımlılıkları yükleyin:  
   `composer install`

4. Uygulama anahtarını oluşturun:  
   `php artisan key:generate`

5. Sunucuyu başlatın:  
   `php artisan serve`

---

## Notlar

- Veritabanı kullanılmamaktadır, oturum dosya tabanlı olarak yönetilmektedir (`SESSION_DRIVER=file`).


