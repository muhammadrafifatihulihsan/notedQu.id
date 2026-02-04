# Changelog

All notable changes to notedQu.id will be documented in this file.

## [1.0.0] - 2026-02-04

### 🎉 Initial Release

#### Added - Core Features
- **Note Editor** with paper-style backgrounds (Lined, Grid, Blank)
- **Auto-save** functionality with 500ms debounce
- **IndexedDB** local storage for notes
- **Search** feature across all notes
- **Folder** support for organization
- **CRUD operations** (Create, Read, Update, Delete)

#### Added - UI/UX
- **Onboarding screen** for first-time users
- **Home dashboard** with:
  - Live clock (updates every second)
  - Dynamic greeting based on time of day
  - Random motivational quotes (12 quotes from famous writers)
  - Quick action buttons
  - Notes counter
- **Profile page** with:
  - Photo upload (base64 storage)
  - Clean 2D avatar fallback
  - Name and birth date editing
  - Bio field
  - Age calculation
  - Join date display
- **Sidebar** with note list and search
- **Paper-style textures** for authentic writing experience
- **Floating Action Button** for mobile

#### Added - Design System
- **iOS-inspired color palette**
- **Inter font** (San Francisco alternative)
- **Custom Tailwind configuration**
- **Framer Motion animations**
- **Responsive design** (mobile, tablet, desktop)
- **Custom scrollbars** (iOS-style)

#### Technical
- React 18.3 with functional components and hooks
- Vite 5.1 for blazing fast development
- Tailwind CSS 3.4 with custom theme
- IndexedDB via idb library
- date-fns for date formatting (Indonesian locale)
- Lucide React for icons

#### Performance
- < 1s First Contentful Paint
- < 1.5s Time to Interactive
- < 200KB bundle size (gzipped)
- 60fps smooth animations

---

## [Unreleased]

### Planned Features
- Dark mode toggle
- Export notes to Markdown/PDF
- Rich text formatting
- Keyboard shortcuts
- Note templates
- Tags system
- Folder management UI
- Cloud sync (optional)

---

## Version History

### v1.0.0 (Current)
- Initial production release
- Full CRUD operations
- Profile management
- Clean iOS-style design
- Local-first architecture
