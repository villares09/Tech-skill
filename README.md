# Tecnica-React
Prueba Técnica para Desarrollador Frontend en React
Introducción
El objetivo de esta prueba es construir una aplicación de lista de tareas (To-Do List) con
características avanzadas. Se evaluarán habilidades en React, manejo de estado, integración
con APIs, buenas prácticas de desarrollo y optimización de rendimiento. El candidato
puede desarrollar el backend y las APIs utilizando la tecnología de su elección.
Requisitos Funcionales
1. Tipos de Usuario:
o Administrador:
 Puede ver, agregar, editar y eliminar cualquier tarea.
 Puede ver y gestionar usuarios (agregar, editar, eliminar usuarios).
o Usuario Regular:
 Puede ver, agregar y editar sus propias tareas.
 No puede eliminar tareas.
 No puede gestionar usuarios.

2. Vista Principal:
o Mostrar una lista de tareas.
o Cada tarea debe mostrar el título, descripción, fecha de creación y estado
(completada o pendiente).
o Debe haber una opción para marcar cada tarea como completada o
pendiente.
o Debe haber una opción para eliminar cada tarea (solo administradores).
o Permitir filtrado y búsqueda de tareas (por título, estado, fecha).
3. Agregar Nueva Tarea:
o Formulario para agregar una nueva tarea con campos: título, descripción y
fecha de vencimiento.
o Validación de formulario (todos los campos son obligatorios).
o Notificación de éxito/error al agregar una tarea.
4. Editar Tarea:
o Opción para editar una tarea existente.
o Validación de formulario (todos los campos son obligatorios).
o Notificación de éxito/error al editar una tarea.
5. Integración con API:
o El candidato debe desarrollar una API para gestionar las tareas y usuarios
(puede utilizar cualquier tecnología como Node.js, Python, Java, etc.).
o Debe haber una llamada a la API para obtener, agregar, editar y eliminar
tareas y usuarios.
o Implementar manejo de errores al interactuar con la API (mostrar mensajes
de error al usuario).
6. Estilos y Responsividad:
o Utilizar cualquier método para aplicar estilos (CSS, CSS Modules, Styled
Components, o cualquier otra librería de CSS-in-JS).

o La aplicación debe ser responsiva y verse bien en dispositivos móviles y de
escritorio.
o Implementar un diseño atractivo y moderno (usar librerías como Material-
UI, Bootstrap, etc., es opcional pero recomendable).

7. Optimización de Rendimiento:
o Implementar optimizaciones para evitar renderizados innecesarios.
o Utilizar React.memo y useCallback donde sea adecuado.
o Implementar carga perezosa (lazy loading) para componentes no críticos.
8. Autenticación:
o Implementar un sistema de autenticación simple (login y logout) utilizando
JWT.
o Mostrar la lista de tareas solo si el usuario está autenticado.
o Guardar el token en localStorage y manejar la expiración del token.
o Diferenciar entre administradores y usuarios regulares mediante el token.

Requisitos Técnicos
1. Uso de React:
o Crear componentes funcionales.
o Manejo de estado utilizando useState, useEffect, y useReducer.
2. Manejo de Estado Global:
o Uso de Context API o una librería de manejo de estado como Redux.
o Implementar el manejo de estado global para las tareas y la autenticación.
3. Backend y API:
o El candidato debe desarrollar el backend y las APIs necesarias utilizando la
tecnología que prefiera (Node.js, Python, Java, etc.).
o La API debe gestionar operaciones CRUD para las tareas y usuarios.
o Documentar brevemente cómo desplegar y probar el backend.
4. Buenas Prácticas de Desarrollo:
o Código limpio y modular.
o Comentarios en el código donde sea necesario.
o Buenas prácticas de accesibilidad (usar etiquetas semánticas, aria-labels,
etc.).
Pasos a Seguir
1. Entrega:
o Sube el código a un repositorio de GitHub.
o Despliega el frontend en una plataforma como Vercel o Netlify.
o Proporciona un archivo README con las instrucciones para correr el
proyecto frontend y backend, y cualquier otra información relevante.
o Proporciona la URL del despliegue en Vercel, Netlify, o la plataforma que
prefieras.

Evaluación
Se evaluará lo siguiente:

 Cumplimiento de los requisitos funcionales y técnicos.
 Calidad y claridad del código.
 Manejo adecuado del estado y de las interacciones con la API.
 Buenas prácticas de desarrollo y accesibilidad.
 Estilos y responsividad.
 Implementación de optimizaciones de rendimiento.
 Implementación de autenticación y roles de usuario.
 Calidad y documentación del backend y las APIs.
 Correcto despliegue y funcionamiento del proyecto en la URL proporcionada.
