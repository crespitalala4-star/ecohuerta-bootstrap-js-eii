# EcoHuerta - PF02 Lab1 Fundamentos JS
**Estudiante:** crespitalala4-star - Ficha 3478076

## Instrucciones para ejecutar
1. Clonar repo
2. Abrir index.html con Live Server o doble click
3. F12 para ver consola de fundamentos.js

## Funcionalidades implementadas
- Mostrar dinámicamente cultivos con for y DOM
- Registrar cultivos con formulario + push
- Validar nombre >=3 y fecha no futura
- Buscar por nombre con filter + includes
- Filtrar por estado
- Indicadores automáticos
- Mensaje sin resultados con if length==0

## Casos de prueba
1. Registro valido: Fresa, Fruta, 2026-10-01, crecimiento -> Se agrega, total 3 a 4. Resultado OK
2. Validacion: Nombre "A" -> alerta "min 3 letras". Resultado OK
3. Busqueda: Escribir "tomate" muestra solo Tomate Cherry, escribir "xyz" muestra mensaje No hay cultivos. Resultado OK

## Problema encontrado y solucion
Problema: Indicadores se ponian en 0 al filtrar.
Solucion: Separe conteo del arreglo original cultivos, no de la lista filtrada. Use classList.toggle para mensaje sin resultados.
