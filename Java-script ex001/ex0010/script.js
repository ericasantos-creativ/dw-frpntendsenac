/* laço de repetição */
/* for/while/do-while */

var i = 0;
for (i = 0; i <= 10; i++) {
    console.log(`FOR - O valor é: ${i}`);
}
i = 0;
while (i <= 10) {

    console.log(`WHILE - O valor de i é: ${i}`);
    i++;
}
var y = 0;
do {
    console.log(`DO-WHILE - O valor de y é: ${y}`);
    y++;
}
while (y <= 10);
for (z = 0; z <= 10; z++) {
    for (j = 0; j <= 10; j++) {

        console.log(`Item ${z}.${j}`);
    }
}