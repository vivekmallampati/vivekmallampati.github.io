# Vivek Mallampati

Personal academic site. Static HTML, CSS, and a short menu script, hosted on GitHub Pages.

## Pages

- `index.html` — name, current research, selected work
- `about.html` — biography
- `research.html` — current work, earlier projects, publications
- `resume.html` — education, industry, teaching
- `contact.html` — email and profile links
- `projects.html` — redirects to the research page

`assets/cv/Vivek_Mallampati_CV.pdf` is the one-page CV. Contact is `mallampv@oregonstate.edu`. Graduation on the site is December 2027.

## Custom domain

The site can stay on GitHub Pages and still use a name you buy. Do this only after the pages are the ones you want people to see.

1. Buy the domain from any registrar.
2. In the repository, add a `CNAME` file whose only line is the domain, for example `vivekmallampati.com`.
3. In the repository Settings → Pages, set that domain as the custom domain and wait for the HTTPS certificate.
4. At the registrar, point the domain at GitHub Pages:
   - apex domain: `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `www`: a `CNAME` record to `vivekmallampati.github.io`

No framework, database, or second host is required. This repository does not set a `CNAME` yet, because no domain has been purchased.
