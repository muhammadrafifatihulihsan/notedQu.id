# notedQu.id 📝

![notedQu.id](https://img.shields.io/badge/Status-Production%20Ready-success?style=flat-square)
![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?style=flat-square&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

> **Platform catatan personal modern dengan desain premium**

Platform note-taking yang elegan dan minimalis dengan penyimpanan lokal, tanpa backend. Terinspirasi dari desain yang fokus dengan fokus pada kesederhanaan, kebersihan, dan pengalaman pengguna yang premium.

---

## ✨ Fitur Utama

### 📝 **Paper-Style Editor**

- Tiga pilihan gaya kertas: **Lined**, **Grid**, dan **Blank**
- Auto-save otomatis saat mengetik
- Word counter dan character counter real-time
- Typography yang nyaman untuk menulis panjang

### 🏠 **Dashboard Interaktif**

- **Live Clock** - Jam digital yang berjalan real-time
- **Dynamic Greeting** - Sapaan berdasarkan waktu (Pagi/Siang/Sore/Malam)
- **Motivational Quotes** - 12 kutipan inspiratif dari penulis terkenal
- **Quick Actions** - Akses cepat ke semua fitur

### 👤 **Manajemen Profil**

- Upload foto profil (disimpan lokal sebagai base64)
- Edit nama dan tanggal lahir
- Perhitungan usia otomatis
- Bio/deskripsi personal

### 🔍 **Pencarian & Organisasi**

- Search real-time di semua catatan
- Filter berdasarkan folder
- Sorting otomatis berdasarkan update terbaru

### 💾 **Local-First Storage**

- Semua data tersimpan di perangkat menggunakan **IndexedDB**
- Tidak perlu koneksi internet
- Privacy terjamin - data tidak pernah keluar dari perangkat
- Kapasitas besar untuk ribuan catatan

### 🎨 **Color-Inspired Design**

- Color palette autentik dan simple
- Typography menggunakan Inter (alternative San Francisco)
- Smooth animations dengan Framer Motion
- Responsive design untuk semua ukuran layar
- Custom scrollbar simple style

---

## 🚀 Quick Start

### Prerequisites

- Node.js 16+
- npm atau yarn

### Installation

```bash
# Clone repository
git clone https://github.com/muhammadrafifatihulihsan/notedQu.id.git

# Masuk ke direktori
cd notedQu.id

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Aplikasi akan berjalan di **http://localhost:5173/**

### Build untuk Production

```bash
npm run build
npm run preview
```

---

## 📁 Struktur Project

```
notedQu.id/
├── public/
│   └── favicon.svg              # Brand icon
├── src/
│   ├── components/
│   │   ├── Onboarding.jsx       # First-time user onboarding
│   │   ├── Home.jsx             # Dashboard utama
│   │   ├── Profile.jsx          # Halaman profil
│   │   ├── Sidebar.jsx          # Note list & navigation
│   │   ├── NoteEditor.jsx       # Paper-style editor
│   │   └── FloatingActionButton.jsx  # FAB untuk mobile
│   ├── lib/
│   │   ├── db.js                # IndexedDB wrapper
│   │   ├── utils.js             # Helper functions
│   │   └── quotes.js            # Motivational quotes
│   ├── App.jsx                  # Main app dengan routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles
├── index.html
├── tailwind.config.js           # Custom color theme
├── vite.config.js
├── package.json
└── README.md
```

---

## 🎨 Design System

### Color Palette

```css
/* iOS Colors */
Blue:        #007AFF  /* Primary actions */
Light Blue:  #5AC8FA  /* Accents */
Green:       #34C759  /* Success */
Red:         #FF3B30  /* Danger */
Purple:      #AF52DE  /* Accents */

/* Neutrals */
Background:      #F9F9F9
Paper Cream:     #FFFEF7
Paper Lines:     #E8E5D8
Text Dark:       #3A3A3C
Text Light:      #8E8E93
```

### Typography

- **Font Family**: Inter (Google Fonts) sebagai alternatif San Francisco
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- **Scale**: Mobile-first dengan scaling responsive

### Spacing & Borders

- **Border Radius**: 10px, 16px
- **Shadows**: Multi-layer subtle shadows untuk depth
- **Spacing**: 4px base unit (Tailwind default)

---

## 🛠️ Tech Stack

| Technology              | Purpose                                   |
| ----------------------- | ----------------------------------------- |
| **React 18**            | Modern UI framework dengan hooks          |
| **Vite 5**              | Lightning-fast build tool dan dev server  |
| **Tailwind CSS 3**      | Utility-first CSS dengan custom iOS theme |
| **Framer Motion**       | Smooth animations dengan spring physics   |
| **IndexedDB (via idb)** | Local database untuk storage              |
| **Lucide React**        | Beautiful rounded icon set                |
| **date-fns**            | Lightweight date formatting               |

---

## 📱 Fitur Detail

### 1. Onboarding Flow

Pengalaman pertama yang welcoming:

- Input nama pengguna
- Tanggal lahir untuk personalisasi
- Form validation
- Clean & minimal design

### 2. Home Dashboard

Landing page dengan:

- **Live Clock** yang update setiap detik (HH:mm:ss)
- **Dynamic Greeting** berdasarkan waktu
- **Random Quote** dari 12 kutipan penulis terkenal
- **Stats Card** menampilkan jumlah catatan
- **3 Quick Actions**:
  - Catatan Baru
  - Lihat Semua Catatan
  - Profil Saya

### 3. Note Editor

Editor dengan paper effect:

- **Paper Styles**:
  - **Lined** - Garis horizontal (32px spacing)
  - **Grid** - Pola grid (20x20px)
  - **Blank** - Polos tanpa pattern
- **Auto-save** dengan debounce 500ms
- **Word & Character Counter**
- **Metadata** (tanggal dibuat/diupdate)

### 4. Profile Management

- Upload foto profil (max 2MB)
- Avatar fallback dengan 2D icon clean
- Edit nama, tanggal lahir, bio
- Tampilan usia otomatis
- Info akun (join date)

### 5. Note Operations

- **Create** - Buat catatan baru
- **Read** - Lihat semua catatan
- **Update** - Edit dengan auto-save
- **Delete** - Hapus dengan konfirmasi
- **Search** - Cari berdasarkan judul/konten
- **Filter** - Filter by folder

---

## 🎯 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Opera 76+

> **Note**: Requires IndexedDB support

---

## 🔒 Privacy & Security

- ✅ **100% Local** - Tidak ada data yang dikirim ke server
- ✅ **No Backend** - Tidak memerlukan API atau database cloud
- ✅ **No Analytics** - Tidak ada tracking pengguna
- ✅ **No Cookies** - Hanya localStorage dan IndexedDB
- ✅ **Offline-First** - Bekerja tanpa internet

---

## 🗺️ Roadmap

### v2.0 (Future)

- [ ] Dark mode theme
- [ ] Export notes (Markdown, PDF)
- [ ] Import/Backup functionality
- [ ] Rich text editor (bold, italic, lists)
- [ ] Tags system
- [ ] Folder management UI
- [ ] Keyboard shortcuts
- [ ] Note templates
- [ ] Attachments (images, files)

### v3.0 (Optional)

- [ ] Cloud sync (optional)
- [ ] Collaboration features
- [ ] Mobile app (React Native)
- [ ] Browser extension

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

**Muhammad Rafi Fatihul Ihsan**

- GitHub: [@rafiie](https://github.com/muhammadrafifatihulihsan)
- Linkedln: [@muhammad-rafi-fatihul-ihsan-mrfi](https://www.linkedin.com/in/muhammad-rafi-fatihul-ihsan-mrfi/)

---

## 🙏 Acknowledgments

- Design inspiration: Notes
- Icons: [Lucide Icons](https://lucide.dev/)
- Fonts: [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
- Animations: [Framer Motion](https://www.framer.com/motion/)

---

<div align="center">

Made with ❤️ using React, Vite, and Tailwind CSS

**notedQu.id** - Your Premium Notes, Beautifully Organized.

[⭐ Star this repo](https://github.com/muhammadrafifatihulihsan/notedQu.id.git) if you find it useful!

</div>
