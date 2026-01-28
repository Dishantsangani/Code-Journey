class student {
  constructor(name) {
    this.name = name;
    this._marks = 0;
  }
  setMarks(marks) {
    this._marks = marks;
  }
  getMarks() {
    return this._marks;
  }
}

const s1 = new student("Dishant");
s1.setMarks(99);
console.log(s1.getMarks());

// _marks is hidden inside the class → can’t change directly.

// setMarks() → safely updates marks.

// getMarks() → safely reads marks.
