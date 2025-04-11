
// Crear la clase Person, con propiedades name, age y genre, y el método obtDetails(), que muestra por consola las propiedades de la persona.

// Crear la clase Student, que hereda de Person, e incluye las propiedades course y group y el método register(), que muestre por consola el resultado.

// Crear la clase Teacher, que hereda de Person, e incluye las propiedades asignatura y level y el método assign(), que muestre por consola el resultado.

class Person {
    constructor(name, age, genre) {
        this.name = name;
        this.age = age;
        this.genre = genre;
    }

    obtDetails = () => {
        console.log('Name:', this.name, 'Age:', this.age, 'Genre:', this.genre);
    }
}

class Student extends Person {
    constructor(name, age, genre, course, group){
        super(name, age, genre)
        this.course = course
        this.group = group
    }
    register = () => {
        console.log('Student registered:', this.name, this.age, this.genre, 'Course:', this.course, 'Group:', this.group);
    }
}

class Teacher extends Person {
    constructor(name, age, genre, subject, level){
        super(name, age, genre)
        this.subject = subject
        this.level = level
    }
    assign = () => {
        console.log('Teacher assigned:', this.name, this.age, this.genre, 'Subject:', this.subject, 'Level:', this.level);
    }
}

const nay = new Person ('Nay', '35', 'Female')
nay.obtDetails()

const mai = new Student ('Mai', '20', 'NonBinary', 'Web Development', 'A')
mai.register()

const karmele = new Teacher ('Karmele', '54', 'Female', 'Math', 'High School')
karmele.assign()

// Construye las siguientes clases:

// Warrior:

// constructor(life, power): Establece el valor de las propiedades life y power

// attack: Devuelve el valor de power del guerrero

// defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.

// Maya: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero.

// drinkColaCao: Suma 10 al poder.

// Aztec: extiende de la clase Warrior

// constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.

// drinkNesquik: Suma 10 a la vida.

// Realiza la siguiente cadena de intercambio de golpes.

// Azteca bebe nesquik

// Maya bebe Cola Cao

// Maya ataca a azteca. Azteca defiende.

// Azteca ataca a maya. Maya defiende.


class Warrior {
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }

    attack = () => {
        return this.power;
    }

    defend = (damage) => {
        this.life -= damage;
    }
}

class Maya extends Warrior {
    constructor(life, power) {
        super(life, power);
    }

    drinkColaCao = () => {
        this.power += 10;
    }  
}

class Aztec extends Warrior{
    constructor(life, power) {
        super(life, power);
    }

    drinkNesquik = () => {
        this.life += 10;
    }  
}

const quetzacoatl = new Aztec(100, 20);
const chichenitza = new Maya(100, 20);

quetzacoatl.drinkNesquik()
console.log('Quetzacoatl drinks Nesquik:', quetzacoatl.life);

chichenitza.drinkColaCao()
console.log('Chichenitza drinks Cola Cao:', chichenitza.power);

const mayaAttack = chichenitza.attack()
const aztecDefend = quetzacoatl.defend(mayaAttack)
console.log('Quetzacoatl life after chichenitza attack :', quetzacoatl.life);

const aztecAttack = quetzacoatl.attack()
const mayaDefend = chichenitza.defend(aztecAttack)
console.log('Chinchenitza life after Quetzacoatl attack:', chichenitza.life);