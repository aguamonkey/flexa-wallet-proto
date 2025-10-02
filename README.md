# Flexa Wallet RN Prototype (Expo → Bare)

**Status:** MVP (MOCK) — Scan + Spend flows, env toggle, and an adapter seam to switch to **LIVE** when credentials are available.

## 🎯 Goal

Deliver a production-lean **reference wallet** that integrates **Flexa Components (Scan + Spend)** in **React Native** (Expo for dev, Bare for prod).  
Primary KPI: **clone → first test payment in < 60 minutes** for a new developer.

---

## 🚀 Quickstart

```bash
npm install
npx expo start          # press i (iOS) / a (Android) or open in Expo Go on your phone
```

- **Scan (MOCK)** uses `expo-camera` — works on a physical device (Expo Go). iOS Simulator has no real camera.
- **Spend (MOCK)** shows a QR payload with mock approve/fail.

---

## ⚙️ Environment

`app.json` → `expo.extra.flexaEnv = "mock" | "live"`

- `mock` (default): Local mock logic via the adapter.
- `live`: Will route through **Flexa Components** once credentials/SDK access are configured.

> The switch is centralized so teams can flip environments without touching UI code.

---

## 🧱 Architecture (SOLID-friendly)

```
src/
  features/
    scan/        # ScanScreen.tsx (CameraView + QR)
    spend/       # SpendScreen.tsx (QR code for present-to-merchant)
  services/
    sdk/
      flexaAdapter.ts  # MOCK now; LIVE calls later (Scan/Spend)
  shared/
    env.ts       # Reads expo.extra.flexaEnv
```

- **UI** (features) is thin, calls **services/sdk**.
- **Adapter** isolates SDK details → easy to replace MOCK with LIVE.
- Expo-managed for dev; documented path to Bare for production builds.

---

## 🧪 What works today (MVP MOCK)

- Home screen with **Scan (MOCK)** and **Spend (MOCK)** + Back button
- Camera permissions + QR scanning (MOCK)
- QR generation for Spend (MOCK)
- Environment toggle via `extra.flexaEnv`

> A short Loom demo accompanies the grant application.

---

## 🔜 Next (toward LIVE)

1. Replace adapter stubs with **Flexa Components** calls (ScanKit/SpendKit).
2. Add robust error states (offline, permission denied, init errors, insufficient balance).
3. Ship **3 short videos**: (1) setup, (2) first payment, (3) mock ↔ live switch.
4. Expo → Bare notes and iOS/Android checklists.

---

## 📈 Milestones & KPIs (grant-aligned)

**M1 — MVP (Weeks 1–4)** → *50% disbursement*  
- Repo scaffold + SOLID structure  
- Scan/Spend (MOCK), device builds  
- Quickstart README + demo video (mock)

**M2 — Completion (Weeks 5–8)** → *50% disbursement*  
- **LIVE** path validated (as permitted)  
- Error states & platform checklists  
- Two more videos; v1.0 release

**KPIs**
- **Time-to-first-payment < 60 minutes** (survey link in README)
- 30–50 stars / 8–10 forks in 90 days
- 100+ test transactions (mock + live)
- 2+ teams adopting patterns or forking

---

## 📝 Scripts

```bash
npm run dev      # expo start
npm run lint     # if configured
npm run format   # if configured
```

---

## 📄 License

Planned: **MIT** at public v1.0.

---

## Contributing

Issues and PRs welcome after v1.0. For early access to LIVE integration notes, open an issue or contact the maintainer.
