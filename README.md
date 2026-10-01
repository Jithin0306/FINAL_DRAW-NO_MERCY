<div align="center">

# 🎴 FINAL DRAW — 3D Billiards Edition

**An ultra-sleek, WebRTC multiplayer & AI-powered card game set on an atmospheric 3D emerald billiards table. Call DING! on your final card before victory slips away.**

[![Live Demo](https://img.shields.io/badge/🎮_PLAY_LIVE_NOW-GitHub_Pages-10b981?style=for-the-badge&logo=github)](https://jithin0306.github.io/UNO-/)
[![React 18](https://img.shields.io/badge/React_18-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite_5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![PeerJS WebRTC](https://img.shields.io/badge/PeerJS_WebRTC-Multiplayer-f43f5e?style=for-the-badge)](https://peerjs.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber.svg?style=for-the-badge)](LICENSE)

### 🌐 **Play Instantly in Browser:** [https://jithin0306.github.io/UNO-/](https://jithin0306.github.io/UNO-/)

</div>

---

## 🌟 Overview

**Final Draw** is an original, fast-paced web card game combining the strategic depth of modern card battles with the tactile luxury of an emerald-felt billiards club. Built from the ground up on modern web standards (React 18, TypeScript, and PeerJS WebRTC), Final Draw requires zero backend servers, zero account signups, and delivers instant, synchronized peer-to-peer multiplayer directly in your browser.

---

## ✨ Key Features & Mechanics

### 🔔 1. The Signature "DING!" Callout & Original Card Back
* **Original Card Back**: Every card sports an original, bespoke luxury obsidian card back adorned with gold-ruled foil borders, decorative corner pips (`◆`), and a centered gold plaque displaying strictly **`DING`** (no extraneous logos, subtitles, or legacy marks).
* **The `DING!` Callout**: When a player is down to their **final card**, they must trigger the gold **`DING!`** callout button before discarding.
* **Penalty Rule**: If an opponent catches a player who forgot to call **`DING!`** before ending their turn, that player receives mandatory penalty draws!
* **Acoustic Feedback**: Calling `DING!` triggers an authentic three-note harmonic chime synthesized via the Web Audio API.

### ⚡ 2. Global Online Matchmaking Arena
* **One-Click Public Matchmaking**: Jump into a global queue for **1 vs 1 Duels** or **4-Player Tables** without manually exchanging room codes.
* **Decentralized Peer Broker**: Automatic discovery pairs online players in real time and initializes a direct WebRTC connection with minimal latency.
* **Fallback Options**: Instantly toggle between global matchmaking, creating private custom rooms (`#XXXXX`), or practicing solo against intelligent Cyber-Bots.

### 🔥 3. Ruthless "No Mercy" Mode (168 Cards)
* **25-Card Mercy Rule Knockout**: If your hand swells to **25 or more cards** at any time, you are immediately eliminated from the match (**MERCY KO**). Your cards are recycled beneath the draw pile.
* **Infinite Draw Stacking**: Stack any Draw card of **equal or higher penalty value** (`+2`, `+4`, `+6`, `+10`) onto an incoming attack to redirect and amplify the accumulated penalty toward the next player.
* **Draw Until Playable**: If you cannot play on your turn, you must keep drawing cards until you find a legal move (or reach 25 cards and suffer a Mercy KO).
* **7 Hand Swap & 0 Pass**:
  * **7 Swap**: Choose any active opponent at the table and swap your entire hand with theirs.
  * **0 Pass**: All active players rotate their entire hands in the current direction of play.
* **High-Impact Action & Wild Cards**:
  * **Skip Everyone**: Freezes all other players and grants you an immediate extra turn.
  * **Discard All**: Drop every card in your hand matching the active color in a single turn.
  * **Wild Color Roulette**: Name a target color; the next player draws until they reveal a card of that color and keeps all drawn cards.
  * **Wild Draw 6 & Wild Draw 10**: Devastating wild penalty cards designed to force immediate Mercy knockouts.

### ⏱️ 4. Turn Countdown Clock & Anti-Griefing Engine
* **60-Second (`01:00`) Turn Timer**: Synchronized turn timer with smooth color transitions (Emerald → Amber → Pulsing Crimson) and audio ticks during the final 10 seconds.
* **Auto-Play Fallback**: If a player's timer hits `00:00`, the authoritative engine automatically plays a random valid card (or draws from the deck).
* **3-Round Inactivity Elimination**: Players who run out the clock on 3 consecutive rounds are disqualified (`ELIMINATED: 3 AFK`), keeping games fast and active.

### 💀 5. Cinematic Full-Stage Elimination Showcase
* When a player is knocked out—either via the **25-Card Mercy Rule** or **Inactivity Disqualification**—all players experience a synchronized full-stage cinematic sequence:
  * Crimson shockwave canvas rings & flying card shards
  * Eliminated player's avatar stamped with a bold knockout badge
  * Sub-bass gong audio effect
  * Table seat transforms into an atmospheric tombstone marker (`💀 ELIMINATED`)

### 🌐 6. Private Rooms, Host Migration & AI Takeover
* **Live 4-Seat Lobby Roster**: Host a private room with a clean 5-character room code (`#XXXXX`), monitor seats in real time, and launch when ready.
* **Seamless Host Migration**: If the room host leaves or disconnects, host authority smoothly migrates to the next peer without disrupting the game.
* **AI Bot Takeover**: If any human peer drops out mid-match, an intelligent bot automatically takes over their seat and hand, ensuring the game finishes uninterrupted.
* **Instant Rematch**: Win or lose, any player can request an instant rematch to deal fresh hands immediately within the same room.

### 🎵 7. Polyphonic Web Audio BGM & Soundscapes
* 100% royalty-free, synthesized background music with zero external audio assets:
  1. **Emerald Lounge (92 BPM)** — Smooth jazz-lounge chords & walking bass
  2. **No Mercy Pulse (108 BPM)** — Dynamic synthwave arena groove
  3. **Midnight Lo-Fi (82 BPM)** — Mellow chillhop keys & vinyl warmth
* Independent sound controls for sound effects, ambient volume, and music switching.

### 🛡️ 8. Privacy & SEO Architecture
* **DPDP Act Compliant**: Zero tracking cookies, zero remote data collection. All game data is ephemeral or stored locally in browser storage.
* **Dynamic Search Protection**: Private game rooms and live matches automatically inject `<meta name="robots" content="noindex, nofollow">` to prevent search crawlers from indexing private session URLs.
* **Structured Data**: Validated Schema.org `VideoGame`, `WebSite`, and `FAQPage` JSON-LD markup on public landing pages.

---

## 🕹️ Rules & Comparison Matrix

| Mechanic | Classic Mode (112 Cards) | No Mercy Mode (168 Cards) |
| :--- | :--- | :--- |
| **Card Back** | Bespoke Obsidian **`DING`** | Bespoke Obsidian **`DING`** |
| **Final Card Callout** | Call **`DING!`** before discarding | Call **`DING!`** before discarding |
| **Mercy Rule** | Disabled | **25+ Cards = Instant Elimination** |
| **Draw Stacking** | `+2` / `+4` on equal or greater value | `+2`, `+4`, `+6`, `+10` on $\ge$ value |
| **Draw on No Move** | Draw 1 card and pass | **Draw repeatedly until a playable card is found** |
| **7 Hand Swap** | Regular numbered card | **Swap your entire hand with any active player** |
| **0 Pass All** | Regular numbered card | **All players pass hands in play direction** |
| **Special Wilds** | Wild, Wild Draw 4 | Wild Draw 4, 6, 10, Discard All, Color Roulette, Skip Everyone |
| **Turn Limit** | 60-second timer with auto-play | 60-second timer with auto-play |

---

## 🚀 Getting Started Locally

### Prerequisites
* **Node.js** `v18.0.0` or higher
* **npm** `v9.0.0` or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/Jithin0306/UNO-.git
cd UNO-

# 2. Install dependencies
npm install

# 3. Start local development server
npm run dev
```

Open `http://localhost:5173` in your browser.

### Building for Production

```bash
# Compile and bundle TypeScript & React assets
npm run build

# Preview the production bundle locally
npm run preview
```

---

## 🗂️ Project Architecture

```text
src/
├── components/
│   ├── CardFlightLayer.tsx    # Smooth Bézier curve card flight animations & shockwaves
│   ├── CenterTableArea.tsx    # 3D Draw Pile, Discard Pile & Active Color indicator
│   ├── GameGuideSection.tsx   # Comprehensive SEO game guide, rules & interactive FAQ
│   ├── GameHUD.tsx            # In-game HUD, 60s Turn Timer, Elimination Cinema, DING! button & Rematch
│   ├── HomeScreen.tsx         # Final Draw Console, Global Matchmaking, Avatar Uploader & Lobby Roster
│   ├── MusicControls.tsx      # Web Audio BGM Synthesizer controls & volume slider
│   ├── OpponentSeat.tsx       # Table seats, Robot avatars, AFK indicators & DING! badges
│   ├── PlayerHand.tsx         # Responsive player hand with dynamic color sorting & card fanning
│   ├── PoolTableStage.tsx     # 3D Emerald billiards table cabinet, brass accents & lighting
│   ├── PrivacyLegalHub.tsx    # DPDP Act compliant privacy policy, privacy controls & data export
│   ├── SiteFooter.tsx         # Legal, rules, copyright & navigation footer
│   └── UnoCard.tsx            # Final Draw card renderer with original DING obsidian card back
├── styles/
│   └── billiards.css          # 3D table shaders, gold foil styling, Elimination Cinema & animations
├── types/
│   └── uno.ts                 # TypeScript schemas for game state, cards, peers & network messages
├── utils/
│   ├── avatarImage.ts         # Local avatar cropping & procedural robot avatar generator
│   ├── deckBuilder.ts         # 168-card No Mercy & Classic deck generator + rule verification
│   ├── handSorting.ts         # Color-grouped hand organization algorithms
│   ├── multiplayerManager.ts  # WebRTC peer mesh, matchmaking broker & message protocol
│   └── soundEffects.ts        # Synthesized sound effects: DING chime, elimination gong & BGM
└── App.tsx                    # Game state machine, turn scheduler, AI bots & dynamic SEO headers
```

---

## 🔒 Privacy & Security

Final Draw is engineered for user privacy:
* **No Central Database**: Match data and player identities are exchanged entirely via end-to-end WebRTC data channels.
* **Local Storage Only**: Custom avatars and sound preferences remain strictly within your device's browser `localStorage`.
* **Zero Telemetry**: No third-party trackers, ad scripts, or behavioral analytics.

---

## 📄 License

This project is open-source and licensed under the [MIT License](LICENSE).
