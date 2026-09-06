# Design System

## Warna

### CSS Variables

| Variable   | Hex       | Kegunaan                     |
| ---------- | --------- | ---------------------------- |
| `--ink`    | `#1a2332` | Warna teks utama             |
| `--navy`   | `#006cb8` | Biru navy (hover, link)      |
| `--blue`   | `#ed1b2f` | **MERAH** (CTA, aksen utama) |
| `--red`    | `#ed1b2f` | Merah (sama dengan --blue)   |
| `--pale`   | `#f9f7f2` | Background terang            |
| `--teal`   | `#8fb82a` | Hijau (akses cepat, badge)   |
| `--line`   | `#e8e2e2` | Border, divider              |
| `--yellow` | `#acc42a` | Kuning (akses cepat)         |
| `--sky`    | `#fde4e6` | Pink muda (background badge) |

### Warna Komponen

| Komponen               | Warna                           |
| ---------------------- | ------------------------------- |
| Service Icon (default) | `#fde4e6` bg, `#c4172a` text    |
| Service Icon (teal)    | `#e1f5f5` bg, `#0d9488` text    |
| Service Icon (violet)  | `#f0e8f7` bg, `#573ed7` text    |
| Service Icon (orange)  | `#f0f9e0` bg, `#8fb82a` text    |
| Service Icon (green)   | `#f0f9e0` bg, `#6a9e1a` text    |
| Quick Icon (red)       | `#fde4e6` bg, `var(--red)` text |
| Quick Icon (blue)      | `#e1eff8` bg, `#1972b5` text    |
| Quick Icon (yellow)    | `#fcf1d9` bg, `#d69c2d` text    |
| Quick Icon (green)     | `#f0f9e0` bg, `#8fb82a` text    |
| Karir Badge (default)  | `#fde4e6` bg, `#c4172a` text    |
| Karir Badge (green)    | `#f0f9e0` bg, `#6a9e1a` text    |

## Tipografi

### Font Family

| Font              | Weight             | Kegunaan  |
| ----------------- | ------------------ | --------- |
| DM Sans           | 400, 500, 600, 700 | Body text |
| Plus Jakarta Sans | 600, 700, 800      | Heading   |

### Font Sizes

| Elemen       | Size | Weight |
| ------------ | ---- | ------ |
| h1 (Hero)    | 56px | 800    |
| h2 (Section) | 42px | 800    |
| h3 (Card)    | 20px | 700    |
| Body         | 15px | 400    |
| Small        | 13px | 400    |
| Eyebrow      | 11px | 700    |

## Spacing

| Token           | Value                            |
| --------------- | -------------------------------- |
| Section padding | 92px 0                           |
| Container width | `min(1160px, calc(100% - 48px))` |
| Card padding    | 28px 26px                        |
| Grid gap        | 24px                             |

## Border Radius

| Elemen | Radius |
| ------ | ------ |
| Card   | 12px   |
| Button | 50px   |
| Badge  | 4px    |
| Icon   | 12px   |

## Shadows

| Elemen          | Shadow                               |
| --------------- | ------------------------------------ |
| Card hover      | `0 14px 34px rgba(154, 27, 46, 0.1)` |
| Header scrolled | `0 4px 20px rgba(0, 0, 0, 0.06)`     |
| Floating card   | `0 8px 24px rgba(0, 0, 0, 0.08)`     |

## Animasi

| Elemen         | Transisi                            |
| -------------- | ----------------------------------- |
| Card hover     | `transform 0.25s, box-shadow 0.25s` |
| Link underline | `transform 0.2s`                    |
| Nav toggle     | `transform 0.2s, opacity 0.2s`      |
