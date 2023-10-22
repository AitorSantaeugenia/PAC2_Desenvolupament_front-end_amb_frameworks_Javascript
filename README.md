# PAC2 - Desenvolupament front-end amb frameworks Javascript

## Dades del alumne

- asantaeugenia@uoc.edu
- Aitor Javier Santaeugenia Marí
- En aquesta PAC hem realitzat varis exercicis; <br>

    **PEC2_Ej1** |- Aquest va ser el segon exercici a realitzar. <br>
    Tres exercicis sobre promeses amb la sincronia/asincronia i el primer sobre comentar el que succeïa al codi.<br>
    El més complicat de tots va ser el quart, ja que ho vaig voler fer amb un **Promise.all()** i normalment, aquest mètode es un *"all-in"*, o espera que passin totes les promeses o dona error, i en el cas plantejat, on teníem un usuari que es podia trobar, però l'altre no, vaig tenir que plantejar-ho varis cops per tal de que es poguessin fer les promeses al mateix cop (i sobretot els *console.log()* amb l'error o el *"success"*).

    **PEC2_Ej2** |- El tercer exercici que vaig fer i possiblement el més complicat per varis problemes.<br>
    Ja havia treballat amb el *MVC*, tant en *Javascript* (stack *MERN*) com amb *PHP*, per lo que la creació de la estructura no va ser problema. El problema va ser traslladar el codi del *script.js* al *MVC* o als serveis, i sobretot, basar-se amb el *Ejer2-1-TODO* com a referència per certs aspectes, com:
    - Al basar-me amb el *Ejer2-1-TODO*, la *id* era una *string* en lloc de números com fa en el model del *script.js* del *expense-tracker*. Això va fer que molts cops tingués problemes amb *id's* que no existíen i es perquè al fer un **this.expense.id === _id**, una era una *string* i l'altre un número.

    ![string_id](https://user-images.githubusercontent.com/14861253/277155892-0afe72c5-ab05-49f9-b798-baff40a49be8.png)<br>
        - Imatge del *Ejer2-1-TODO* el model amb la *id* com a *string*<br><br>
    ![fail_string](https://user-images.githubusercontent.com/14861253/277156020-5815fb03-595c-45a9-9a09-2e44c6dcac4f.png)<br>
        - Imatge dels meus intents de fer el *edit* on tenía una *id* *string* i altres amb números.<br>
    - La solució al final va ser rellegir el *script.js* i trobar com feia la *id* en el *script.js*, això ho varem agregar al model del nostre treball i solucionat.
    
    ```
    javascript
    return Math.floor(Math.random() * 100000000);
    ```

    A continuació podem veure un *GIF* de tot el funcionament que sens ha demanat en aquest exercici:<br>
    ![all_test_done](https://user-images.githubusercontent.com/14861253/277157121-3a612c4e-df21-4dbf-9f46-870695ab5ac5.gif)
    <br>

    **PEC2_Ej3** |- El primer exercici que vaig començar, normalment mai faig això, però al llegir la *PAC* sabia que amb aquest m'ho passaria bé ja que soc aficionat a *codewars* i/o altres pàgines similars.<br>
    El més **complicat es el de f_zoo**, i en aquest crec que el *animalMap()* juntament amb el *animalPopularity()* son els més complerts; el primer perquè el vaig fer com a sis cops començant des de el principi i quan pensava que ja ho tenia perfecte, el últim test era impossible de passar, al final vaig tenir que demanar ajuda al fòrum per tal de poder fer-ho; el segon em vaig liar varis cops amb com agafar la informació de un objecte o un objecte amb *arrays*, i vaig arribar fins i tot a dubtar de si ho feia bé o no. Al final per sort, **tots els test de tots els exercicis van sortir OK**.<br>
    La resta tenen certes parts que poden ser similars al que ja has fet en els anteriors, especialment els darrers.
    <br><br>
    Aquí podem veure tots els test del *PEC2_Ej3 > f_zoo* que passen correctament: <br>
    ![all_test_done](https://user-images.githubusercontent.com/14861253/277142176-64fca601-068e-4d01-93d1-e1ec2b6516b4.png)