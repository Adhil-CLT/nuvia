<div align="center">

<img src="newlogo/appicon.png" alt="NUViA App Icon" width="140" style="border-radius: 28px;" />

# NUViA

### Aesthetic, Modern & Lossless YouTube Music Experience
**Android Mobile · Android TV · Web**

<br/>

[![Platform](https://img.shields.io/badge/Platform-Android%20%7C%20Android%20TV%20%7C%20Web-blue.svg?style=for-the-badge&color=2196F3)](https://github.com/Adhil-CLT/aadhil06dev)
[![Kotlin](https://img.shields.io/badge/Kotlin-2.0-purple.svg?style=for-the-badge&logo=kotlin)](https://kotlinlang.org)
[![Compose](https://img.shields.io/badge/Jetpack%20Compose-Material%203-green.svg?style=for-the-badge&logo=android)](https://developer.android.com/jetpack/compose)
[![License](https://img.shields.io/badge/License-GPLv3-orange.svg?style=for-the-badge)](LICENSE)

<br/>

[**Features**](#-features) · [**Platforms**](#-platforms) · [**Building from Source**](#-building-from-source) · [**Architecture**](#-architecture) · [**Developer**](#-developer) · [**Disclaimer**](#-disclaimer)

</div>

<br/>

> [!IMPORTANT]
> **NUViA** is an independent, community-driven audio client designed for personal use and research. It is not affiliated with, endorsed by, or connected to Google LLC or YouTube Music.

---

## ✨ Features

<table>
  <tr>
    <td width="50%" valign="top">

### 🎵 High-Fidelity Audio & Playback
- **Universal Catalog** — Search, browse, and stream the entire YouTube Music catalog.
- **Hi-Res Lossless Audio** — FLAC / ALAC playback via pluggable module sources with YouTube Music fallback.
- **Bit-Perfect USB Output** — Direct USB DAC exclusive mode preserving native bit depth and sampling rates without Android resampler interference.
- **True Gapless & Crossfade** — Smooth transition between tracks with configurable duration (0–12s).
- **Automix Transitions** — Intelligent beat-matching and tempo-stretching between tracks.
- **Offline Library** — Download tracks with embedded metadata, high-resolution artwork, and synced lyrics.
- **Local Audio Integration** — Scan and seamlessly play files from your device storage.

    </td>
    <td width="50%" valign="top">

### 🎨 Visuals & Immersion
- **Liquid Glass Interface** — Real-time frosted glass UI, dynamic blur powered by Haze, and Material 3 expressiveness.
- **Synchronized Lyrics** — Apple Music-inspired word-by-word and syllable-level animated highlights from multiple lyric providers.
- **Animated Album Canvas** — High-definition motion artwork canvas on the Now Playing view.
- **Dynamic Theming** — Smart palette extraction adapting to each track's album art.
- **Stats for Nerds** — In-depth technical telemetry: real-time audio codec, bitrate, container, buffer health, and sample rate.

    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">

### 🔗 Integrations & Accounts
- **Google Account Login** — Sync library, playlists, subscriptions, and history directly with your account.
- **Spotify Integration** — Import and play your Spotify Liked Songs and personal playlists.
- **Discord Rich Presence** — Displays currently playing track, artist, album art, and live elapsed time on your Discord profile.
- **Scrobbling** — Native background scrobbler support for Last.fm and ListenBrainz.

    </td>
    <td width="50%" valign="top">

### 🎛️ Audio Controls & Customization
- **Network Quality Tiers** — Distinct streaming quality ceilings for Wi-Fi and mobile data networks.
- **System & Custom Equalizer** — Tailor frequency bands with built-in presets and audio tuning.
- **Playback Speed Control** — Granular speed adjustments (0.5×–2.0×) and smart "Skip Silence" feature.
- **Sleep Timer** — Sleep by preset timer or automatically finish the active track before stopping.

    </td>
  </tr>
</table>

---

## 📱 Platforms

### 1. Android Mobile (`:app`)
Built with 100% Jetpack Compose and modern Android architecture. Features edge-to-edge rendering, gesture navigation, background playback via Media3 foreground service, and fluid animations.

### 2. Android TV (`:tv`)
Dedicated 10-foot television interface tailored for remotes and D-pad controllers:
- Fluid Leanback navigation and focus management.
- Dynamic refresh-rate controller (auto-switches display refresh rate to match track rhythm or video content).
- Built-in spatial audio engine and TV-optimized Now Playing backdrop.
- PIN protection for shared living-room profiles.

### 3. Web Client (`web/`)
A fast, modern TypeScript/Vite web application bringing the NUViA interface to desktop browsers and ChromeOS devices.

---

## 🛠 Architecture

The project is structured as a modular multi-platform Kotlin codebase:

```
BitChord-main/
├── app/          # Android Mobile application (Jetpack Compose, Media3, Room)
├── tv/           # Android TV application (Compose for TV, Leanback, Spatial Engine)
├── shared/       # Core business logic, Innertube API, audio pipeline, databases
├── sharedUi/     # Shared Compose UI components, design tokens, resources
├── web/          # Modern Web application (TypeScript, Vite, Web Audio)
├── backend/      # Lightweight auxiliary services
└── newlogo/      # Official brand artwork & launcher assets
```

---

## 🚀 Building from Source

### Prerequisites
- **JDK 17** or **JDK 21**
- **Android SDK** (API 34 / 35 / 36 / 37) with CMake and NDK
- **Node.js 18+** & **pnpm** (for the Web module)

### 1. Build Mobile Release APK
```bash
./gradlew :app:assembleProdRelease "-Pbitchord.bundleWear=false"
```
Outputs:
`app/build/outputs/apk/prod/release/app-prod-arm64-v8a-release.apk`

### 2. Build Android TV Release APK
```bash
./gradlew :tv:assembleProdRelease
```
Outputs:
`tv/build/outputs/apk/prod/release/tv-prod-arm64-v8a-release.apk`

### 3. Build Web Client
```bash
cd web
pnpm install
pnpm build
```

---

## 👨‍💻 Developer

- **Adhil** — [@Adhil-CLT](https://github.com/Adhil-CLT) · [Profile & Projects](https://github.com/Adhil-CLT/aadhil06dev)

---

## 📄 Disclaimer & Legal Notice

NUViA is an independent third-party client and media player.
- **No Hosting:** NUViA does not host, upload, or store copyrighted audio content. All streaming is routed through public or user-authenticated APIs.
- **Fair Use:** This software is provided for personal, educational, and research purposes.
- **Terms:** Users are responsible for complying with local regulations and third-party Terms of Service.

---

## ⚖️ License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**. See the [LICENSE](LICENSE) file for full license terms.
