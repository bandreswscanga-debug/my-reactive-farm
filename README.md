Actividad 3 – Mejorar el Formulario (README)
✔ Objetivo
Mejorar la experiencia del usuario en el formulario de creación de animales (AnimalForm.jsx).
Realicé dos mejoras enfocadas en usabilidad y claridad.
Mejora 1: Placeholders más claros y descriptivos
Qué cambié
Agregué ejemplos en cada campo del formulario:
<input placeholder="Ej: Lola" />
<input placeholder="Ej: 3" />
<input placeholder="Ej: 250" />
También modifiqué el campo type y status para que sea más evidente que debe seleccionarse una opción.
 Por qué mejora la experiencia
El usuario entiende inmediatamente qué información debe meter.
Evita errores comunes.
Hace el formulario más amigable y rápido de completar.
 Mejora 2: Mensaje de éxito más visible después de crear un animal
Qué cambie
Me aseguré de que el formulario muestre un mensaje verde claro cuando el animal se crea con éxito:
setFormMessage("Animal created successfully 🐄");
Y que aparezca a través del componente <Alert variant="success">.
Por qué mejora la experiencia
nmediata.
Confirma que el formulario sí funcionó.
Transmite claridad y reduce la confusión.
