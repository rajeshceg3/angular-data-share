# Verify angular-data-share
Angular Data Share - RxJS shared data service tutorial app (Angular CLI project in myapp/).
## Launch
cd myapp && npm install, then npx ng serve or npx ng build.
## Doctor
`python3 .cursor/skills/verify-angular-data-share/verify.py`
## Drive
Builds the app in myapp/ with the Angular CLI and renders the built app in headless Chromium asserting the boot marker and zero JS console errors.
## Evidence
`.cursor/skills/verify-angular-data-share/evidence.json`
## Cleanup
Static server terminated after the render.
## Known boundaries
Render smoke only; e2e suites (playwright/karma) not exercised here.
