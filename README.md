ACTIVIDAD#1
# My Reactive Farm

My Reactive Farm es una plantilla base construida con **React y Vite**, diseñada como punto de partida para desarrollar una aplicación web reactiva. El proyecto actualmente contiene la estructura inicial necesaria para comenzar a implementar manejo de estado, consumo de APIs, formularios, efectos y estilos modernos.

---

##  Estructura del Proyecto

my-reactive-farm/
│
├── src/ # Carpeta principal del código fuente (actualmente vacía)
│
├── .env # Variables de entorno
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js # Configuración del servidor y bundler Vite
├── eslint.config.js # Reglas y configuración de ESLint
└── folder-structure.txt # Propuesta de estructura interna del proyecto

---

##  Tecnologías Utilizadas

- **React** para la construcción de la UI.
- **Vite** para el entorno de desarrollo rápido.
- **ESLint** para mantener el código limpio y ordenado.

---

##  Análisis del Proyecto

### 1. Manejo del estado (`useState`)
El repositorio aún no implementa componentes ni lógica que utilice `useState`.  
El proyecto está listo para integrar este hook en futuros módulos o componentes.

### 2. Efectos (`useEffect`)
No se encuentran implementaciones de `useEffect`, ya que no existe lógica de ciclo de vida todavía.  
Se encuentra preparado para integrarlo en la fase de consumo de API u operaciones asíncronas.

### 3. Consumo de API (Axios / MockAPI)
No hay archivos de servicios ni importaciones de Axios en la plantilla actual.  
Este paso está pendiente para la integración con servidores externos o endpoints de prueba en MockAPI.

### 4. Manejo de formularios y validaciones
El repositorio aún no incluye formularios, lógica de validación o librerías relacionadas como `react-hook-form` o `yup`.  
Es un punto clave para desarrollo futuro.

### 5. Uso de Tailwind CSS
El proyecto no tiene Tailwind configurado.  
No existe un archivo `tailwind.config.js` ni dependencias en `package.json`.

---

ACTIVIDAD#2

1. ¿Cuál es la diferencia entre un componente presentacional y un componente de página en React? Da ejemplos usando archivos del proyecto.

Un componente presentacional solo muestra información (como una tarjeta).
Un componente de página maneja la pantalla completa y su lógica (como cargar datos).

2. 2. ¿Para qué se utiliza useState en el proyecto? Menciona dos estados distintos y su función

Sirve para guardar datos que cambian.
Ejemplos típicos:

const [animals, setAnimals] = useState([]);
Sirve para almacenar los animales obtenidos de MockAPI
Estado de carga (loading)
const [loading, setLoading] = useState(true);
Indica si la aplicación está esperando una respuesta del servidor.

3. ¿Cómo se usa useEffect para cargar datos desde MockAPI al inicio? Explica el flujo.

El componente de página se renderiza por primera vez.
useEffect se ejecuta automáticamente al cargar la página.
Dentro del efecto se hace una petición con Axios hacia MockAPI.
Cuando llega la respuesta:
Se actualiza el estado animals con los datos.
Se marca loading como false.
React vuelve a renderizar la UI con los datos ya cargados.
ejemplo:
useEffect(() => {
  setLoading(true);
  getAnimals().then(res => {
    setAnimals(res.data);
    setLoading(false);
  });
}, []);


4.¿Cómo maneja el proyecto los estados de loading, error y lista vacía? ¿Qué se muestra al usuario en cada caso?

loading:
Se muestra un mensaje como “Cargando…” o un spinner.
error:
Se muestra “Ocurrió un error al cargar los datos”.
lista vacía:
Se muestra “No hay animales registrados”.
Este patrón es usado en la mayoría de proyectos React que consumen API.

5.¿Qué significa que un formulario sea controlado en React? ¿Cómo se relaciona con el formulario del proyecto?

Un formulario controlado significa que cada campo del formulario usa un estado de React para almacenar su valor. El input no maneja su valor por sí mismo; React controla todo
Ejemplo:
const [name, setName] = useState("");
<input value={name} onChange={(e) => setName(e.target.value)} />


6. ¿Por qué es buena práctica separar la lógica de datos en archivos como animalsApi.js en vez de hacer peticiones dentro de los componentes?

Porque mejora la arquitectura del proyecto:
Evita duplicar código en varios componentes.
Mantiene los componentes más limpios y fáciles de leer.
Permite probar la lógica de API de forma independiente.
Facilita cambiar la URL o el servicio sin modificar toda la app.
Sigue el principio de “responsabilidad única”.
Así, los componentes solo usan funciones como:

7. ¿Qué hace que AnimalCard sea un componente reutilizable? ¿Cómo se podría usar una tarjeta similar en otro contexto?

Es reutilizable porque:
Solo recibe props (por ejemplo: nombre, tipo, imagen).
No depende del estado del componente padre.
No está ligado a una página específica.
Podría usarse para:
Mostrar tarjetas de productos.
Mostrar usuarios de una red social.
Mostrar tarjetas de cursos.
Mostrar publicaciones de un blog.
Solo se cambian los datos enviados por props.

8.¿Qué elementos del proyecto contribuyen a la accesibilidad? Menciona tres y explica su importancia.

    1. role="status
    Ayuda a que los lectores de pantalla sepan que es un mensaje de estado.

    2. aria-live="polite"
    Permite que el mensaje del loader se lea automáticamente sin interrumpir al usuario.

    3. Mensaje en texto (<p>{message}</p>)
    Asegura que no solo haya un spinner visual, sino también una explicación clara para usuarios con dificultades de visión.

9. Antes de agregar una funcionalidad nueva, ¿qué pasos debes pensar según la filosofía de React?

Antes de crear algo nuevo debes analizar:
Qué datos necesitas (ej: nombre, tipo, imagen del animal).
Dónde debe vivir el estado:
En un componente padre
O en un componente local
Cómo fluye la información (de padres a hijos con props).
Qué partes deben tener lógica y qué partes solo visual.
Qué efecto debe ejecutarse (si necesitas cargar datos).
Cómo manejarás errores, loading y vacíos.
React siempre busca: simplicidad, componentes pequeños y datos unidireccionales.

10.¿Qué conceptos de React aprendidos en este proyecto podrías reutilizar en otro tipo de aplicación? Da al menos cuatro ejemplos

useState
Para manejar datos dinámicos como formularios, contadores o listas.

useEffect
Para cargar datos al inicio o escuchar cambios.

Componentes reutilizables
Como tarjetas, botones o formularios.

Consumo de API con Axios
Para obtener o enviar datos en cualquier aplicación.

Manejo de estados de UI (loading, error, vacío)
Usado en cualquier app que cargue datos externos.
