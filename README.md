# MeaningSpace

Website edukasi psikologi kerja yang membantu pekerja mengenali diri, menemukan makna dalam pekerjaan, dan menjaga kesejahteraan mental.

## Menjalankan

Buka `index.html` langsung di browser, tanpa instalasi atau proses build.

Untuk pratinjau melalui HTTP, jalankan:

```sh
node server.cjs
```

Lalu buka http://127.0.0.1:4173. Server ini hanya menyajikan file statis.

## Fitur

- Check-in suasana hati dan pelacakan energi harian.
- Refleksi kelelahan, nilai kerja, dan kompas makna pekerjaan.
- Evaluasi keseimbangan kerja dan kehidupan.
- Obrolan Meja Kerja dengan catatan refleksi pribadi.
- Ruang Cerita dengan pencarian, kategori, reaksi, dan komentar.
- Simulasi pengajuan konsultasi dan tiket konfirmasi.
- Rencana aksi mingguan dengan checklist dan progress.
- Artikel edukasi psikologi kerja.

## Teknologi dan tampilan

HTML, CSS, Tailwind CSS via CDN, dan JavaScript tanpa framework. Tampilan responsif menggunakan DM Sans, Nunito Sans, warna sage, dan animasi ringan yang mendukung pengaturan reduced motion.

## Deployment

Unggah file berikut ke hosting statis seperti GitHub Pages, Netlify, atau Vercel:

- `index.html`
- `styles.css`
- `refresh.css`
- `app.js`
- Folder `assets/`

Tidak perlu menjalankan `server.cjs` di hosting statis. Google Fonts dan Tailwind CDN membutuhkan internet; CSS utama tersedia lokal dan font memiliki fallback.

## Data dan batasan

Data pengguna disimpan di `localStorage` browser dengan key `meaningspace-v1`. Tidak ada backend, database eksternal, atau sinkronisasi antarpengguna. Tombol **Reset Data Demo** mengembalikan data awal setelah konfirmasi.

Cerita, reaksi awal, artikel, dan pilihan layanan merupakan konten demo. Pengajuan sesi adalah simulasi dan tidak menghubungi profesional. Hasil refleksi bukan instrumen klinis tervalidasi atau diagnosis. Data lokal dapat diakses orang yang menggunakan profil browser yang sama.

## Kredit foto

Foto ilustrasi percakapan: [Christina @ wocintechchat.com / Unsplash](https://unsplash.com/@wocintechchat), digunakan berdasarkan [Lisensi Unsplash](https://unsplash.com/license). Kredit juga ditampilkan di footer website.
