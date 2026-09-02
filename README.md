# SIGA Meal Scheduler

SIGA Meal Scheduler is a browser extension that helps parents select every
unscheduled meal day shown in the SIGA calendar, then use SIGA's own submit
action to confirm the changes.

## What it does

On the SIGA schedule page, the extension adds a **Confirmar todos** button.
When selected, it clicks only the days that are not already marked as
scheduled and then activates the page's existing confirmation button.

## Browser support

- Chromium browsers: Google Chrome, Microsoft Edge, Brave, and Opera.
- Firefox desktop 128 or newer.

## Install locally

1. Clone or download this repository.
2. In Chrome, Edge, Brave, or Opera, open the browser's extensions page,
   enable **Developer mode**, and choose **Load unpacked**.
3. In Firefox, open `about:debugging#/runtime/this-firefox`, select **Load
   Temporary Add-on**, and choose `manifest.json`.
4. Open the SIGA schedule page and use **Confirmar todos**.

## Development

```sh
npm ci
npm run lint
npm test
npm run package
```

`npm run package` creates separate ZIP files for Chromium and Firefox in
`dist/`. Submit the Chromium archive to the Chrome Web Store and Microsoft Edge
Add-ons; submit the Firefox archive to Firefox Browser Add-ons.

## Important limitations

- Confirm the selected days in SIGA before relying on the result.
- SIGA can change its page structure; the extension may need an update if its
  selectors stop matching.
- The extension is not affiliated with SIGA or the school-services provider.

## Privacy

The extension runs only on SIGA's schedule page. It does not send schedule
data, account data, or browsing data to the developer or any third party.
See [PRIVACY.md](PRIVACY.md) for the full policy.

## Support

Report a reproducible issue at
https://github.com/jonibatista/siga-meal-scheduler/issues, including the SIGA
page URL path (without personal information), browser version, and steps to
reproduce it.
