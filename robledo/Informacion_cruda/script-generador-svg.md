# PDF a SVG (Filminas vectoriales)

Este proyecto permite convertir todas las páginas de un archivo **PDF** en imágenes **SVG** (manteniendo el contenido vectorial).
Es útil cuando tenés presentaciones o filminas y querés cada página como un archivo de imagen independiente.

---

## 📦 Requisitos

Antes de usar el script, instalá las siguientes herramientas en Linux:

```bash
sudo apt update
sudo apt install pdf2svg poppler-utils
```

* `pdf2svg` → convierte páginas PDF en SVG.
* `poppler-utils` → provee el comando `pdfinfo`, usado para contar páginas del PDF.

---

## ⚙️ Instalación del script

1. Guardá el script en un archivo llamado `pdf2svgs.sh`:

   ```bash
   nvim pdf2svgs.sh
   ```

   Contenido del script:

   ```bash
   #!/bin/bash
   # Uso: ./pdf2svgs.sh archivo.pdf carpeta_salida
   #
   # Convierte todas las páginas de un PDF en archivos SVG dentro de una carpeta.

   pdf="$1"
   outdir="$2"

   if [ -z "$pdf" ] || [ -z "$outdir" ]; then
       echo "❌ Uso: ./pdf2svgs.sh archivo.pdf carpeta_salida"
       exit 1
   fi

   # crear carpeta de salida si no existe
   mkdir -p "$outdir"

   # contar páginas del PDF
   pages=$(pdfinfo "$pdf" | grep Pages | awk '{print $2}')

   # convertir cada página
   for i in $(seq 1 $pages); do
       pdf2svg "$pdf" "$outdir/pagina_$i.svg" $i
   done

   echo "✅ Listo! Se generaron $pages SVGs en $outdir/"
   ```

2. Dale permisos de ejecución:

   ```bash
   chmod +x pdf2svgs.sh
   ```

---

## 🚀 Uso

Desde el directorio donde está el script y tus PDFs:

```bash
./pdf2svgs.sh archivo.pdf carpeta_salida
```

### Ejemplo 1: convertir filmina 4

```bash
./pdf2svgs.sh _4_SoftwareClasif.pdf filmina4
```

Salida:

```
filmina4/pagina_1.svg
filmina4/pagina_2.svg
filmina4/pagina_3.svg
...
```

### Ejemplo 2: convertir filmina 5

```bash
./pdf2svgs.sh _5_IngSoftware_CV.pdf filmina5
```

Salida:

```
filmina5/pagina_1.svg
filmina5/pagina_2.svg
...
```

---

## 📝 Notas

* Cada página del PDF se convierte en un archivo SVG separado.
* Los SVG mantienen el contenido vectorial, por lo que se pueden escalar sin perder calidad.
* Si la carpeta de salida no existe, el script la crea automáticamente.
