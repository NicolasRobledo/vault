```
pandoc *.md -o fisica.epub \
  --from=markdown+tex_math_dollars \
  --metadata title="Notas de Física Aplicada" \
  --metadata language="es" \
  --mathml \
  --toc \
  --standalone
  ```
  