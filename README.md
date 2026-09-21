# 🎓 Tutedude EdTech Platform Redesign — Hackathon Working Prototype

A modern, high-conversion, and data-driven working prototype for **Tutedude** built with standard **HTML5, CSS3, and JavaScript**. 

This project reimagines career upskilling around Tutedude's unique **100% Course Fee Refund on Completion** model, designed to solve the industry-wide 95% dropout rate by turning student commitment into verified opportunity.

---

## 🚀 Live Prototype Surfaces

| Page | File | Description |
|---|---|---|
| **Modern Homepage** | [`index.html`](index.html) | Conversion-focused landing page with 3-step refund card, course discovery filters, career paths, and live mentorship desk. |
| **Universal Course Template** | [`course.html`](course.html) | Data-driven template dynamically populating 6+ courses with interactive curriculum accordion and visitor vs. student LMS toggle. |
| **Student LMS & Refund Desk** | [`dashboard.html`](dashboard.html) | Active 100% refund challenge countdown, milestone checklist, and instant UPI/Bank refund payout simulator. |
| **Admin CMS & Ops Desk** | [`admin.html`](admin.html) | Global catalog director, pricing controls (₹699 flat model), and 100% refund approval desk. |
| **Pick 4 Pack Builder** | [`pack-builder.html`](pack-builder.html) | Interactive 4-course bundle selector with real-time discount calculations (Save 46%). |

---

## 💡 Key Design Highlights & Psychology

1. **The "Commitment Device" Refund Model**:
   - The ₹699 fee creates psychological skin-in-the-game to prevent course abandonment.
   - **Formula**: `COMMIT (₹699) → LEARN (Modules + Capstones) → COMPLETE (Pass ≥ 80%) → GET 100% REFUNDED`.
   - **Unconditional Lifetime Access**: Access to lectures, code repositories, and certificates remains active even after refund disbursal.

2. **Universal CMS Template System**:
   - Built on a structured data schema (`js/courses-data.js`).
   - One universal layout dynamically powers 50+ courses across Full Stack Web Development, AI & Machine Learning, Data Science, UI/UX Design, DSA, and DevOps without redesigning page markup.

3. **Modern EdTech Mastery Design System**:
   - **Colors**: Electric Blue (`#004ac6`), Emerald Refund Accent (`#059669`), Amber Highlights (`#d97706`).
   - **Typography**: `Plus Jakarta Sans` for bold headlines, `Inter` for crisp body copy.
   - **Dark / Light Theme Toggle**: Persistent across all pages.

---

## 🛠️ Getting Started Locally

No installation or build tools required. Run with any static HTTP server:

```bash
# Using Python
python -m http.server 8080

# Or using Node.js / npx
npx serve .
```

Then open `http://localhost:8080/` in your browser.

---

## 🌐 Deploy to Vercel

```bash
npx vercel --prod
```

Or connect this repository directly to [Vercel](https://vercel.com) for automatic CI/CD.
