"use strict";

// Задача 1
function parseCount(value) {
    let result = Number.parseInt(value);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result;
}

function validateCount(value) {
    try {
        return parseCount(value)
    } catch (error) {
        return error;
    }
}
// Задача 2
class Triangle {
    constructor(a, b, c) {
        if (a + b < c || a + c < b || b + c < a) {
            throw new Error("Треугольник с такими сторонами не существует");
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getPerimeter() {
        let perimeter = this.a + this.b + this.c;
        return perimeter;
    }
    getArea() {
        let halfPerimetr = this.getPerimeter() * 0.5;
        let area = Math.sqrt(
            halfPerimetr * (halfPerimetr - this.a) * (halfPerimetr - this.b) * (halfPerimetr - this.c)
        );
        return Number(area.toFixed(3));
    }
}
function getTriangle(a, b, c) {
    let triangle = {};
    try {
        triangle = new Triangle(a, b, c);
    } catch (error) {
        triangle.getPerimeter = function () {
            return "Ошибка! Треугольник не существует"
        };
        triangle.getArea = function () {
            return "Ошибка! Треугольник не существует"
        }
    }
    return triangle;
}
