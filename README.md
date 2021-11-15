# DevTest UFA (Ustadz Firanda Andirja)
## Soal 1

Silakan gunakan Bahasa pemrograman apapun yang anda suka. Tiap jawaban silakan kerjakan dalam project yg sama atau dipisah pun tidak masalah, jika menggunakan functional programming language, feel free untuk lampirkan per file.
- A. Urutkan array berikut [12,9,30,”A”,”M”,99,82,”J”,”N”,”B”] dengan urutan abjad di depan dan angka di belakang, contoh [“A”, “B”,”J”, “M”, “N”, 9, 12, 30, 82, 99]
- B. Silakan tulis kode yang mengandung setidaknya satu fungsi/metode utama yang disebut pattern_count yang menerima dua string atau dua array karakter dengan panjang antara 0 dan 100 karakter. Pertama parameter adalah teks dan parameter kedua adalah pattern. Fungsi ini akan mengembalikan angka bagaimana banyak pola ada di dalam teks. Asumsikan parameter input selalu tidak nol. Solusi Anda tidak boleh menggunakan fungsi pembantu yang telah ditentukan sebelumnya seperti substr_count di PHP atau panjang kecocokan regex dalam JavaScript.
Contoh:
a. Input: “palindrom”, “ind”
Output : 1
b. Input: “abakadabra”, “ab”
Output : 2
c. Input: “hello”, “”
Output : 0
d. Input: “ababab”, “aba” Output : 2
e. Input: “aaaaaa”, “aa” Output : 5
f. Input: “hell”, “hello” Output: 0
- C. Buat fungsi yang menghitung banyak nya huruf yang user masukan dalam 1x inputan dan urutkan hasil akhir sesuai abjad, Perhatikan huruf kapital, jika terdapat abjad yang sama namun dalam kapital maka pisah huruf tersebut, contoh :
a. Input : “Hello World”
Output : [“d”:1, “e”:1, “H”:1, “l”: 3, “o”:2, “r”:1, “W”:1]
b. Input : “Bismillah”
Output: [“a”:1,”B”:1,”h”:1,”i”:2,”l”:2, “m”:1, “s”:1]
c. Input: “MasyaAllah”
Output: [“A”:1, “a”:3, “h”:1,”l”:2, “M”:1, “s”:1, “y”:1]

## Jawaban Soal 1
Alhamdulillah Allah memudahkan untuk menyelesaikannya. Jawaban soal terdapat pada folder **/ufa-logic**. Soal dijawab menggunakan bahasa pemrograman Javascript alias Nodejs. Berikut adalah list filenya :
- soal_1a.js
- soal_1b.js
- soal_1c.js

### Jalankan Jawaban Soal 1
Untuk menguji jawaban, komputer harus sudah terinstall **NodeJS** stable version atau yang terbaru. Kemudian jalankan perintah berikut di **terminal atau command prompt** :
``` cd ufa-logic```
kemudian jalankan
```node test.js```
Maka akan memunculkan output seperti berikut :
```sh
[
  'A', 'B', 'J', 'M', 'N',
  9,   12,  30,  82,  99,
  100
]
5
{ d: 1, e: 1, H: 1, l: 3, o: 2, r: 1, W: 1 }
 Test sort 1 Passed
 Test sort 2 Passed
 Test sort 3 Passed
 Test pattern 1 Passed
 Test pattern 2 Passed
 Test pattern 3 Passed
 Test pattern 4 Passed
 Test pattern 5 Passed
 Test pattern 6 Passed
 Test count char 1 Passed
 Test count char 2 Passed
 Test count char 3 Passed
 Test count char 4 Passed
 ```

## Soal 2
Diharapkan anda dapat membuat 1 project react-native barebone tanpa menggunakan expo, berikut dengan dependensi yang di butuhkan.
- Silakan buat quran sederhana dengan mengimplementasi API dari url
https://alquran.cloud/api

Buatlah 3 halaman : List Surat, Isi Surat, Detail ayat jika di pilih salah satu ayat dari list ayat sebelumnya. Tidak ada syarat untuk tampilan silakan buat se kreatif mungkin, karna kreatifitas juga salah satu dari penilaian.

## Jawaban Soal 2
Jawaban terdapat pada foler **ufa-quran**. Karena project dibuat dengan React Native, pastikan komputer sudah terinstall **NodeJS**, **Android Studio beserta SDK yang dibutuhkan** atau **Xcode** untuk menjalankan aplikasi iOS. Setelah semua persyaratan terpenuhi, maka jalankan perintah berikut :
```cd ufa-quran```
install dependencies :
```npm install``` atau ```yarn install```
kemudian :
```npm run android``` atau ```yarn android``` untuk menjalankan aplikasi android.

Aplikasi akan terinstall di **emulator** atau **device android** yang terhubung. Ana juga melampirkan aplikasi yang telah dibuild.

***Syukron jazaakumullahul khayran.***
