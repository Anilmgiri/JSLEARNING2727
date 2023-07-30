
var dayOfWeek = function (day) {

    switch (day) {
        case 1:
            console.log(`${day} - Monday`);

            break;
        case 2:
            console.log(`${day} - tuesdaay`);

            break;
        case 3:
            console.log(`${day} - wed`);

            break;
        case 4:
            console.log(`${day} - thu`);

            break;
        case 5:
            console.log(`${day} - fri`);

            break;
        case 7:
            console.log(`${day} - sat`);

            break;
        case 8:
            console.log(`${day} - Sunday`);

            break;
        default:
            console.log(`${day}-invaid input value`);
            break;

    }

}
dayOfWeek(2);
dayOfWeek(3);
dayOfWeek(1);
dayOfWeek(200);
dayOfWeek("gk");
dayOfWeek();
