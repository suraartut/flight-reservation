# Havalimanı Uçuş Bilgileri Web Uygulaması

Bu proje, bir havalimanı API'si kullanılarak uçuş bilgilerini listeleyen ve kullanıcıların uçuşlarını kaydedebileceği bir web uygulamasıdır. API aracılığıyla uçuşlar listelenebilir, filtrelenebilir ve kullanıcılar uçuş rezervasyonu yapabilir.

## Özellikler

- API kullanılarak uçuşların listelenmesi (Schiphol Havalimanı Flight V4 API)
- Tarih ve hareket yönüne göre uçuş filtreleme
- Kullanıcı uçuş rezervasyonu yapabilme
- Uçuş bilgilerini MongoDB'ye kaydetme (Node.js ile yazılmış API)
- Kaydedilen uçuşların "Uçuşlarım" sayfasında listelenmesi
- Geçmiş tarihli uçuşlar için rezervasyon yapılmasının engellenmesi

## Gereksinimler

Bu projeyi çalıştırmak için aşağıdaki araçlara ihtiyacınız var:

- [Node.js](https://nodejs.org/) v14+
- [MongoDB](https://www.mongodb.com/) (Veritabanı için)
- [React](https://reactjs.org/) (Frontend için)
- Schiphol API Hesabı ve API Anahtarları (Ücretsiz hesap oluşturmak için [buraya](https://developer.schiphol.nl/))

## Kurulum

Projeyi kurmak için aşağıdaki adımları takip edin:

1. Depoyu klonlayın: `git clone https://github.com/kullanici/proje.git`
2. Proje dizinine gidin: `cd proje`
3. Gerekli bağımlılıkları yükleyin: `npm install`
4. MongoDB'yi başlatın: `mongod --config /usr/local/etc/mongod.conf`
5. Backend’i başlatın: `node server.js`
6. Frontend’i başlatın: `npm start`

## Kullanım

Uygulamanızı nasıl çalıştıracağınıza dair adımlar:

- `npm start` (Geliştirme modu)
- `npm run build` (Üretim için derleme)

## API Kullanımı

API'yi kullanmak için aşağıdaki adımları izleyin:

- Uçuş verilerini almak için `GET` isteği gönderin: `/api/flights`
- Uçuş rezervasyonu yapmak için `POST` isteği gönderin: `/api/reservations`

## Katkıda Bulunma

Projeye katkıda bulunmak için pull request gönderebilirsiniz.

## Ekran Görüntüleri

### Anasayfa

### Uçuşlarım
