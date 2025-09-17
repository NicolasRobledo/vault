#!/bin/bash
# Uso: ./pdf2svgs.sh archivo.pdf carpeta_salida

pdf="$1"
outdir="$2"

# crear carpeta de salida si no existe
mkdir -p "$outdir"

# contar páginas
pages=$(pdfinfo "$pdf" | grep Pages | awk '{print $2}')

# convertir cada página
for i in $(seq 1 $pages); do
    pdf2svg "$pdf" "$outdir/pagina_$i.svg" $i
done

echo "✅ Listo! Se generaron $pages SVGs en $outdir/"

