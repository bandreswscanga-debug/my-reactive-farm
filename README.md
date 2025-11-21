Cambie esta linea 
const [statusFilter, setStatusFilter] = useState("all");
por esta :
const [statusFilter, setStatusFilter] = useState("healthy");


La página mostraba todos los animales al cargar la aplicación, sin importar su estado (healthy, sick, review).
Después del cambio:
Ahora, al cargar la página, solo se muestran los animales con estado "healthy" (saludables).
Es decir, el filtro de estado ya no inicia en “All”, sino automáticamente en “Healthy”.


El filtro de estado se aplica automáticamente al iniciar la página.
La lista de animales aparece filtrada desde el principio.
El usuario solo verá animales en buen estado (“healthy”) a menos que cambie el filtro manualmente desde el select.
El comportamiento de búsqueda y otros filtros sigue funcionando igual, solo que ahora el estado inicial no es “all”.
