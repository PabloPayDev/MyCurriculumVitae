# Mi Curriculum Vitae
Este repositorio contiene el codigo en **Html**, **Css** y **Js** para generar mi propio **C.V.** en un formato **Pdf**, tambien esta dicho documento ya generado.
Esto con el fin de poder compartir dicho documento junto con su respectivo codigo para que otros desarrolladores puedan consultarlo o incluso poder desarrollar el suyo en base a este.
## Por que en Html y Css?
Primeramente tenia planeado usar un editor de archivos tipo **docx** pero estos suelen ser limitados a la hora de estilizar dichos archivos, asi que lo descarte.
Tambien pense en aplicaciones como **Canvas** o **Photoshop** en las cuales podria estilizarlo a mi gusto, pero pronto vi que no era rapido el poder realizar cambios en la paleta de colores y los margenes.
Pensandolo bien recorde la historia de **Html**, originalmente se usaba para crear documentacion cientifica, tambien recorde que **Html** es el lenguaje preferido a la hora de generar **Pdf's** en aplicaciones o paginas web. Tambien recorde que en este podria estilizar cada pixel si yo quisiera. Todo me apuntaba a usar **Html** y **Css** hasta que un dia dije:
>Soy un programador lo mas profecional seria que lo haga de esa forma.

Y ya no hubo marcha atras, comence a desarrollar mi curriculum de esa forma.
## Built With
Como el propio nombre lo indica utilice principalmente:
1. Html5
2. Css3
3. JavaScript -html2pdf

A futuro quiero probar otras soluciones con Python y WeasyPrint, si es que dichas soluciones no estan ya implementadas, tambien veran un archivo **Json** con la misma informacion que el documento principal, este esta para futuras mejoras en la cual la informacion se pedira desde dicho Json y agregara a un Template vacio con esa misma estructura, eston con el fin de poder agergar y editar mi informacion solo desde dicho archivo.
## Getting Started
Quieres usar este archivo como Template para crear el tuyo? Pues no necesitas nada mas que un Editor de Codigo y un Navegador.
Opcionalmente tambien podrias tener algun servidor en Localhost para evitar ciertos problemas, pero por la sencilles del proyecto no es necesario.
## Installation
Solo necesitara clonar el repositorio de la siguiente forma:
``` git clone https://github.com/pablopaydev/MyCurriculumVitae.git ```
## Usage
En mi caso una vez con el repositorio en mi maquina, abro el proyecto en **VSCode** para el servidor utilizo el modulo **Http** de **Python** con el siguiente codigo:
```python3 -m http.server```
Luego simplemente debia ingresar a un navegador y entrar al localhost, podras ver una vista previa de como se ve el documento.
Para cambiar el contenido solo necesitara editar el archivo **CurriculumVitae.html**.
Para modificar los colores y el estilo del documento simplemente modifica el archivo **styles.css**.
Una vez con el CV modificado en la pantalla del navegador debes abrir las **Herramientas de Desarrollador** con **F12** y dirigete a la consola y ejecuta la siguiente funcion.
```generatePdf();```
Seguidamente deberias poder ver como se descarga el documento desde tu navegador.
Debido a la diferencia de tamaño entre la pantalla y el tipo de hoja carta quizas debas hacer otro tipo de modificaciones en los archivos antes mencionados.
## Common Issuess
La libreria **html2pdf** tiene problemas con ciertos estilos especificos, especialmente con estilos como:
```
.yourParentClass{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: row;
}
.yourChildrenClassOne{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: SomeUnit;
}
.yourChildrenClassTwo{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		margin: SomeUnit;
}
```
En este caso en especifico el **pdf** generado se vera desfazado desproporcionalmente, en mi caso lo arregle simplemente no modificando el **margin** en las ChildrenClass y modificando levemente su **padding**.
Si encuentras otro tipo de error puedes informarmelo.
## Contact
Pablo Javier Becerra Vargas - PabloJBecerraVDev@gmail.com
