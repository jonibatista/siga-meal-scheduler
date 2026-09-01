# SIGA Meal Scheduler

SIGA Meal Scheduler is a Chrome extension that helps parents select every
unscheduled meal day shown in the SIGA calendar, then use SIGA's own submit
action to confirm the changes.

## What it does

On the SIGA schedule page, the extension adds a **Confirmar todos** button.
When selected, it clicks only the days that are not already marked as
scheduled and then activates the page's existing confirmation button.

## Install locally

1. Clone or download this repository.
2. Open `chrome://extensions` in Chrome and enable **Developer mode**.
3. Choose **Load unpacked** and select this repository folder.
4. Open the SIGA schedule page and use **Confirmar todos**.

## Development

```sh
npm ci
npm run lint
npm test
```

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
