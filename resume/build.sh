#!/bin/sh
# Compiles both LaTeX resumes into the PDFs the website serves.
# The public links NEVER change, so anyone with the link (and the website)
# always gets the latest version after you rebuild.
#
#   ./build.sh
#
# Inputs:  resume/hardware.tex, resume/software.tex
# Outputs: public/Waguea_Carine_Fongang_Resume_Hardware.pdf
#          public/Waguea_Carine_Fongang_Resume_Software.pdf
set -e
cd "$(dirname "$0")"
tectonic hardware.tex --outdir ../public
mv -f ../public/hardware.pdf ../public/Waguea_Carine_Fongang_Resume_Hardware.pdf
tectonic software.tex --outdir ../public
mv -f ../public/software.pdf ../public/Waguea_Carine_Fongang_Resume_Software.pdf
echo "Done. PDFs updated in public/ (same links as before)."
