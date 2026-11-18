# Relax Saloon · relaxsaloon.vercel.app

Website for Relax Saloon (صالون الإسترخاء للرجال), men's barber in Al Ghubra, Muscat.
Next.js (App Router), statically rendered, English at `/` and Arabic (right-to-left) at `/ar`.

## Edit the content

Everything about the shop lives in two files:

- `lib/salon.ts`: phone, WhatsApp, hours, address, map, reviews, gallery photos, and the services list.
  Add a price to any service, e.g. `{ id: "fade", price: "4 OMR" }`, and it appears on the site and in booking messages.
- `lib/dict.ts`: all English and Arabic text.

Photos are in `public/img/`. Replace a file with the same name to swap a photo.

## Booking

The booking form (services, day, time, name) builds a WhatsApp message to the shop in the visitor's language.
Days and time slots follow the opening hours in `lib/salon.ts`, in Muscat time, and past times are hidden.

## Run locally

```bash
npm install
npm run dev
```

Pushing to `main` redeploys on Vercel.
