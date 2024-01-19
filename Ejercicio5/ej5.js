'use strict'

/*Cada libro del ejercicio anterior se encuentra ubicado en una estantería diferente
dentro de una biblioteca, el índice del vector indica el numero de la estantería.
Mostrar el numero de la estantería donde se encuentra el libro “You Don’t Know JS”*/

const programmingBooks = [
    "JavaScript: The Good Parts",
    "Clean Code: A Handbook of Agile Software Craftsmanship",
    "Code Complete: A Practical Handbook of Software Construction",
    "Design Patterns: Elements of Reusable Object-Oriented Soft",
    "The Pragmatic Programmer: Your Journey to Mastery",
    "Eloquent JavaScript: A Modern Introduction to Programming",
    "You Don't Know JS",
    "Python Crash Course",
    "Learning Python",
    "Java: The Complete Reference",
    "Head First Java",
    "C# in Depth",
    "The Go Programming Language",
    "Programming in Scala",
    "Effective Java",
    "Ruby on Rails Tutorial: Learn Web Development with Rails",
    "Node.js Design Patterns",
    "Angular Up and Running",
    "React: Up and Running",
    "Vue.js: Up and Running",
    "Django for Beginners",
    "Flask Web Development",
    "Full Stack Development with Spring Boot and React",
    "Machine Learning Yearning",
    "Data Science for Business",
    "Artificial Intelligence: A Modern Approach",
    "Introduction to Algorithms",
    "Clean Architecture: A Craftsman's Guide to Software Structucture",
    "Domain-Driven Design: Tackling Complexity in the Heart of",
    "Continuous Delivery: Reliable Software Releases through Bu",
    "Refactoring: Improving the Design of Existing Code",
    "The Mythical Man-Month: Essays on Software Engineering",
    "DevOps Handbook",
    "Git Pro",
    "The Docker Book: Containerization is the New Virtualization",
    "Site Reliability Engineering: How Google Runs Production",
    "The Phoenix Project: A Novel About IT, DevOps, and Helpinging",
    "Accelerate: The Science of Lean Software and DevOps",
    "Code: The Hidden Language of Computer Hardware and Softwarare",
    "The C Programming Language",
    "Effective Python: 90 Specific Ways to Write Better Python",
    "Programming Rust",
    "Rust in Action",
    "Go in Practice",
    "Pro Git",
    "Java Concurrency in Practice",
    "The Rust Programming Language",
   ];

   alert("El libro You Don't Know JS se encuentra en la estantería N"+programmingBooks.indexOf("You Don't Know JS"));

   /*En este caso utilizamos el método indexOf, para que nos indique la posición en la que se encuentra
   el ítem o elemento a buscar, sabiendo que, en este caso, el índice de cada elemento del Array
   nos indica en qué estantería se encuentra cada libro*/