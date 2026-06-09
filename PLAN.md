# Implementation Plan: Premium MVP Upgrade Portfolio

## Summary
Upgrade difokuskan ke interaktivitas dan responsif yang paling berdampak: Project carousel menjadi lebih profesional dengan filter, progress indicator, dan modal detail; Hero dibuat lebih stabil di desktop/mobile; tanpa menambah dependency baru. Stack tetap React + Tailwind + Framer Motion.

## Key Changes
- **Projects upgrade**
  - Tambahkan filter kategori di atas carousel: `All`, `AI`, `Dashboard`, `Automation`, `Workflow`, `Computer Vision`.
  - Filter membaca `project.tags` dari data `translations.js`.
  - Saat filter berubah, carousel reset ke posisi awal.
  - Tambahkan progress bar horizontal kecil di bawah carousel untuk menunjukkan posisi scroll.
  - Pertahankan drag horizontal dengan cursor, tombol kiri/kanan, snap scroll, dan hover motion.

- **Project detail modal**
  - Klik card project membuka modal/drawer detail.
  - Isi modal: project name, category, description, problem, solution, impact, stack, dan action links jika tersedia.
  - Modal bisa ditutup dengan tombol close, klik overlay, dan tombol `Escape`.
  - Jika data detail belum tersedia, fallback memakai `description` dan teks `Case study available on request`.

- **Data structure**
  - Update project object di `src/i18n/translations.js`:
    - `tags: ['AI', 'Automation']`
    - `problem`
    - `solution`
    - `impact`
    - `role`
  - Terapkan struktur yang sama untuk `en` dan `id`.
  - Existing 5 projects diisi dulu dengan detail ringkas dari data yang sudah ada; 10+ project tambahan tinggal ditambahkan mengikuti schema yang sama.

- **Hero responsive cleanup**
  - Desktop: pertahankan layout 3 area, kiri identitas, tengah ruang visual/foto, kanan role + deskripsi + CTA.
  - Tablet/mobile: ubah menjadi satu kolom rapi dengan urutan `Available`, `Hi I’m`, nama, statement, badges, role, deskripsi, CTA.
  - Pastikan nama tidak overlap dengan foto/background dan tidak terpotong di viewport sempit.
  - Kurangi spacing vertikal mobile supaya hero tidak terasa terlalu panjang.

- **CSS polish**
  - Tambahkan utility CSS untuk modal backdrop, carousel progress, dan responsive text clamp jika diperlukan.
  - Pertahankan scrollbar carousel tersembunyi.
  - Tambahkan focus state yang jelas untuk filter button, project card, arrow button, dan modal close.

## Implementation Targets
- `src/components/ProjectsSection.jsx`
  - Tambah state filter, selected project, modal open/close, scroll progress.
  - Pecah logic kecil: `ProjectCard`, `ProjectModal`, `ProjectFilters`, `CarouselProgress`.
- `src/i18n/translations.js`
  - Tambah label UI untuk filter/modal.
  - Tambah metadata detail project di EN dan ID.
- `src/components/HeroSection.jsx`
  - Rapikan responsive layout dan ukuran typography.
- `src/index.css`
  - Tambah style kecil untuk carousel progress, modal body lock jika dibutuhkan, dan line clamp/focus polish.

## Test Plan
- Jalankan `npm run build` dan pastikan production build sukses.
- Manual desktop QA di `localhost:5173`:
  - Hero tidak overlap dengan foto.
  - Nama tidak terpotong.
  - Project filter bekerja.
  - Carousel bisa digeser dengan cursor dan tombol.
  - Progress bar berubah saat carousel discroll.
  - Modal terbuka/tertutup dengan click, overlay, dan Escape.
- Manual responsive QA:
  - Mobile 375px: Hero satu kolom, CTA tidak pecah buruk, card carousel swipe natural.
  - Tablet 768px: Hero tidak tabrakan, project card tetap proporsional.
  - Desktop 1366px dan 1920px: layout tetap seimbang.
- Accessibility check:
  - Semua tombol punya label/focus visible.
  - Modal tidak membuat user kehilangan konteks.
  - Interaksi utama tidak bergantung pada hover saja.

## Assumptions
- Dipilih scope **Premium MVP**.
- Project detail memakai **modal**, bukan halaman route terpisah.
- Tidak menambah dependency baru.
- Konten detail untuk 10+ project belum tersedia, jadi implementasi akan menyiapkan schema dan mengisi project yang sudah ada terlebih dahulu.
