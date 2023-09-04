function drawTriangle(size) {
  for (let i = 0; i < size; i++) {
    const rowValues = [];
    for (j = 0; j <= i; j++) {
      rowValues.push("*");
    }

    console.log(rowValues.join(""));
  }
}

console.log(drawTriangle(4));
