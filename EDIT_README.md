# Vikas K — Portfolio Source

## Edit content
Everything text-based (name, skills, projects, education, certifications,
contact info) lives in **one file**:

    src/data/resume.ts

Open it, edit the arrays/objects, save. No other file needs to change for
content edits (add a certification = add one object to `certifications`).

### Updating certificate images
Certificate images are embedded as base64 so the site works as a single
file. To swap or add one:
1. Drop the new image (PNG/JPG/WEBP) into `src/assets/certificates/`.
2. Regenerate `src/assets/certificates/index.ts`:
   ```bash
   cd src/assets/certificates
   python3 -c "
   import base64
   with open('your-file.webp','rb') as f:
       print('export const yourName = \"data:image/webp;base64,' + base64.b64encode(f.read()).decode() + '\";')
   " >> index.ts
   ```
3. Import the new export in `resume.ts` and reference it in `certifications`.


## Go live with auto-deploy (GitHub Pages) — one-time setup

1. Create a new repo on github.com (any name, public).
2. Upload this whole folder to it — easiest way: on the repo page, click
   **"Add file" → "Upload files"**, drag every file/folder in here except
   `node_modules` and `dist` (already excluded by `.gitignore` if you use
   git instead of the upload UI).
3. Repo → **Settings → Pages → Build and deployment → Source → "GitHub
   Actions"**. That's it — a workflow file is already included at
   `.github/workflows/deploy.yml`; it builds and publishes the site
   automatically on every push.
4. Your live URL appears at **Settings → Pages** a minute after the first
   push: `https://<your-username>.github.io/<repo-name>/`.

## Making future edits (no local setup needed)
On github.com, open `src/data/resume.ts` → click the pencil (edit) icon →
change the content → **Commit changes**. The Actions workflow rebuilds and
redeploys automatically — the live site updates in ~1 minute. This is the
"platform" — GitHub's own web editor plus the included auto-deploy workflow.

## Local preview (optional)
```bash
pnpm install
pnpm dev
```

## Rebuild the single-file .html (for sharing directly in chat, not needed for Pages)
```bash
pnpm exec vite build
rm -rf dist bundle.html .parcel-cache
pnpm exec parcel build index.html --dist-dir dist --no-source-maps
pnpm exec html-inline dist/index.html > bundle.html
```

## Structure
```
src/
  data/resume.ts     ← all content — edit this
  components/        ← page sections (Hero, Skills, Projects, ...)
  hooks/              ← 3D tilt + scroll-reveal helpers
.github/workflows/deploy.yml  ← auto build + deploy to GitHub Pages
```

