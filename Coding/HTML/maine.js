const  currentNumber  =  dokument . querySelector ( '.bieżącyNumber' ) ;

const  poprzedniNumer  =  dokument . querySelector ( '.previousNumber p' ) ;

const  mathSign  =  dokument . querySelector ( '.mathSign' ) ;

const  numbersPrzyciski  =  dokument . querySelectorAll ( '.number' ) ;

const  operatoryPrzyciski  =  dokument . querySelectorAll ( '.operator' ) ;

const  equalsButton  =  dokument . querySelector ( '.equals' ) ;

const  clearButton  =  dokument . querySelector ( '.clear' ) ;

const  kalkulatorHistoria  =  dokument . querySelector ( '.history' ) ;

const  historyBtn  =  dokument . querySelector ( '.history-btn' ) ;


niech  wynik  =  '' ;






funkcja  displayNumbers  ( )  {
        if ( this .textContent === ' . ' && currentNumber .innerHTML.include ( ' . ' ) ) return ;     
        if ( this .textContent === ' . ' && currentNumber . innerHTML === '' ) return currentNumber . wewnętrzny HTML = '.0'          

        aktualnyNumer . innerHTML  +=  to . tekstZawartość ;
}




funkcja  działa  ( )  {
    if ( currentNumber . innerHTML  ===  ''  &&  this . textContent  === '-' ) {
        aktualnyNumer . wewnętrznyHTML  =  '-' ;
        powrót ;
    }
    

     else  if  ( currentNumber . innerHTML  ===  '' )  {
        powrót ;
     }

     if ( mathSign . innerHTML  !==  '' )  {
         pokażWynik ( ) ;
     }
     poprzedni numer . innerHTML  =  bieżącyNumber . wewnętrzny HTML ;
     matematykaSign . innerHTML  =  to . tekstZawartość ;
     aktualnyNumer . wewnętrznyHTML  = '' ;
}





funkcja  pokażWynik  ( )  {
    if ( poprzedniNumber.wewnętrznyHTML === ' ' || bieżącyNumber.wewnętrznyHTML  === ' ' ) return ; _ _      

    let  a  =  Number ( bieżącyNumber.innerHTML ) ; _ _
    let  b  =  Number ( poprzedniNumber.innerHTML ) ; _ _
    niech  operator  =  mathSign . wewnętrzny HTML ;


    przełącznik ( operator )  {
        przypadek  „+” :
        wynik  =  a  +  b ;
        przerwa ;
        wielkość liter  '-' :
        wynik  =  b  -  a ;
        przerwa ;
        przypadek  „x” :
        wynik  =  a  *  b ;
        przerwa ;
        przypadek  ':' :
        wynik  =  b  /  a ;
        przerwa ;
        przypadek  '2^' :
        wynik  =  b  **  a ;
        przerwa ;
    }

    dodajDoHistorii ( ) ;
    historyBtn.classList.add('active');
    currentNumber.innerHTML = result;
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}

function addToHistory () {
    const newHistoryItem = document.createElement('li');
    newHistoryItem.innerHTML = `${currentNumber.innerHTML} ${mathSign.innerHTML} ${previousNumber.innerHTML} = ${result}`
    newHistoryItem.classList.add('history-item');
    calculatorHistory.appendChild(newHistoryItem);
}


function clearHistory () {
    calculatorHistory.textContent = '';
    if(calculatorHistory.textContent === '') {
        historyBtn.classList.remove('active');
    }
}



function clearScreen () {
    result = '';
    currentNumber.innerHTML = '';
    previousNumber.innerHTML = '';
    mathSign.innerHTML = '';

}








 // Nasluchiwanie przyciskow

 operatorsButtons.forEach((button) => button.addEventListener('click', operate))

 equalsButton.addEventListener('click', showResult);


 clearButton.addEventListener('click', clearScreen);

 numbersButtons.forEach((button) => {
     przycisk . addEventListener ( 'klik' ,  displayNumbers )
 } )


 historiaBtn . addEventListener ( 'klik' ,  clearHistory ) ;
