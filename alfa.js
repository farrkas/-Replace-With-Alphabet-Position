https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

function alphabetPosition(text) {
    text = text.toLowerCase();
    const alfabet = `abcdefghijklmnopqrstuwxyz`;

    var liczby = ""
    for (let i = 0; i <= text.length; i++) {
        if (alfabet.indexOf(text[i]) >= 0) {
            liczby = liczby + (1+alfabet.indexOf(text[i])+" ");
        }
    }
    console.log(liczby)
}

alphabetPosition("The sunset sets at twelve o' clock.");// "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11")
alphabetPosition("The narwhal bacons at midnight."); //"20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20")