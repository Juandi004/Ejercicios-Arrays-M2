'use strict'

//De la siguiente lista de 50 libros de la biblioteca buscar si existe un titulo ingresado
//por prompt.

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

   let book=prompt("Ingese el nombre del libro a colocar");
   if(`${programmingBooks.find(item=>item==book)}`){
    alert("Si se encuentra el libro: "+book)
   }else{
    alert("No se encuentra el libro")
   }

   /*En este caso utilizamos el método find, igual que en el primer ejercicio, para buscar
   si existe un prompt en el array, en caso de ser verdadero, nos devolverá "Si se encuentra",
   caso contrario nos devolverá "No se encuentra"*/