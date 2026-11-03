# Ikedi J. Nwogu portfolio

A plain HTML site: no build step needed to host it.

## See it on your computer
Unzip the folder and double-click `index.html`.

## Hosting
The site is hosted on GitHub Pages from this repository (branch `main`, folder `/ (root)`).
The custom domain is set in the `CNAME` file. DNS for ijnwogu.com is managed in Cloudflare:
four A records for the apex (185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153)
and a CNAME `www` → `ikejustis.github.io`, all set to "DNS only".

## Editing
The pages are generated from the scripts in `_source/` (Node.js):
`node build.js` (home), `node projects.js` (case studies), `node pages.js` (About and holding pages).
Copy them next to `index.html` before running. You can also edit the HTML files directly.
