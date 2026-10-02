# Resumes — LaTeX sources, stable links

Two resumes live here as LaTeX: `hardware.tex` and `software.tex`.
The website (`/resume` page) links to the compiled PDFs:

- `/Waguea_Carine_Fongang_Resume_Hardware.pdf`
- `/Waguea_Carine_Fongang_Resume_Software.pdf`

## Updating (links stay the same)

1. Edit `hardware.tex` or `software.tex`.
2. Run `./build.sh` (needs `tectonic` — `brew install tectonic`).
3. The PDFs in `public/` are overwritten **at the same URLs**, so everyone
   with the old link — and the website — instantly serves the new version.
   No link changes, no code changes, no redeploy of URLs needed.
