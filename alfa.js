https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript

unction alphabetPosition(text) {
    const alfabet=[`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`r`,`s`,`t`,`u`,`w`,`v`,`x`,`y`,`z`];
    
    var liczby=text.map((el,i)=> {if (el=alfabet[i]) {return i+1;}})
    
    console.log(liczby);
      //return liczby;
    }

alphabetPosition("The sunset sets at twelve o' clock."), "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11");
alphabetPosition("The narwhal bacons at midnight."), "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20");