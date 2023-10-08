// Contoh penggunaan if, else, nested if

let score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
  if (score >= 85) {
    console.log("Hampir mendapat A!");
  }
} else {
  console.log("C");
}

// Contoh penggunaan switch case

let day = 5;
switch (day) {
  case 1:
    console.log("Senin");
    break;
  case 2:
    console.log("Selasa");
    break;
  case 3:
    console.log("Rabu");
    break;
  case 4:
    console.log("Kamis");
    break;
  case 5:
    console.log("Jumat");
    break;
  default:
    console.log("Bukan hari valid");
}

// Contoh penggunaan for statement

for (let i = 1; i <= 5; i++) {
  console.log("Angka: " + i);
}

// Contoh penggunaan while, do while

let j = 0;

while (j < 3) {
  console.log("Angka menggunakan while: " + j);
  j++;
}

let k = 0;
do {
  console.log("Angka menggunakan do-while: " + k);
  k++;
} while (k < 3);

// Contoh penggunaan function

function tambah(a, b) {
  return a + b;
}

console.log(tambah(10, 3));
