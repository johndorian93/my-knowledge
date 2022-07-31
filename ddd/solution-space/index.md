Bounded context

Model to odzwierciedlenie pewnego wycinka rzeczywistosci. Nie całości.

Z wydzielonych subdomen tworzymy modele. Model per subdomena. Wtedy mamy pewność, że odpowiedzialności są dobrze oddelegowane.
Przykład złego użycia zbyt ogólnego modelu to sytuacja, gdzie mamy BookService, który ma w sobie funkcje: sell, changePrice, relocateTo. Taki serwis na podstawie zbyt duzego modelu bedzie sie rozrastal i stanie sie nieczytelny i nieutrzymywalny.
Zamiast tego powinny byc trzy klasy, kazda z nich z inna odpowiedzialnoscia, poniewaz maja inny model.

```js
// orders
class Book {
  sell() {
    // own set of data
  }
}

// catalogue
class Book {
  changePrice() {
    // own set of data
  }
}

// shop
class Book {
  relocateTo() {
    // own set of data
  }
}
```

Bounded context to "podsystem" (np. ksiegowosc, dostawa, katalog, zamowienia, zwroty)
Bounded context to nie subdomena. Subdomeny "nachodzą" na siebie. Bounded contexty nie. Np. w subdomenie "prognozowanie" wie cos o "zamowieniach" i "magazynie"
Bounded contexts moga sie ze soba komunikowac, ale odbywa sie to przez jasno ustalony kontrakt (interfejs w kodzie czy API w mikroserwisach)
Bounded context ma w sobie jasno zdefiniowany i wydzielony model. Nie wspoldzielu danych modelu z innymi kontekstami. Komunikacja odbywa sie za pomoca API czy interfejsów
Każdy bounded context ma swój wszechobecny język (ubiquitous language). Język ten oczywiście jest w granicach podsystemu. Używany jest w kodzie, dokumentacji, marketingu itd.
W definicji modelu raczej unikamy zagadnien technicznych: BookService, BookHelper, BookUtils. Oczywiscie czasem nie da sie tego uniknac, ale raczej uzywa sie tego do niskopoziomowego detalu, a nie definiowania kontraktu
W ramach jednego bounded context byt "Book" oznacza cos innego. Np. w magazynie książka to rzecz do przeniesienia/ułożenia. W katalogu to definicja posiadajaca autora, liczbe stron i cene. W czytelnika zaś kluczowa jest jej treść.
Granice konkretnego bounded context sa granicami ligwistycznymi. Jest to coś ustalonego przez język.


Subdomena to nie Bounded context!
W subdomenie odkrywamy problem.
W bounded context definiujemy rozwiązanie

Przykład pokoju gdzie trzeba wyłożyć wykładzine.
Idealnie (subdomena pokrywa sie z bounded context): Jest podłoga (subdomena) i wykładzina (bounded context). Problemem jest to ze na podlodze (subdomena) nie ma żadnej warstwy. Ta podłoga (subdomena) jest ograniczona ścianami, wiec ma swoja granice. Obliczamy powierzchnie podlogi (odkrywamy problem). Idziemy do sklepu, przycinamy (definiujemy) wykladzine (rozwiazanie) i ta wykladzina jest bounded contextem (rozwiazaniem) subdomeny (problemu)
Czesta sytuacja (subdomena jest rozwiazywana przez wiele bounded context): Wykladzina jednak jest droga. Czasem lepiej polozyc dwa dywany i skrawek podlogi przykryc szafa. Dlatego jedna subdomene mozna rozwiazac wieloma bounded contextami.


Granice bounded contextów okreslamy za pomoca heurestyk.
1. Autonomia kontekstu.
    
    Katalog, kilent, cennik. Dla roznych grup klientow (firmy, osoby prywatne) sa rozne ceny. Ceny chcemy przechowywac w wewnetrznym cenniku, ale wyswietlac w katalogu doestepnym dla wszystkich. Katalog powinien miec odpwoiedzialnosc odpytywania klienta o jego informacje, odpytywania cennika na podstawie tych informacji i wyswietlania w kataglogu dla konkretnego klienta

2. Liczba bounded contextów w procesie biznesowym

    Jesli w ramach jednego bounded context komunikujemy sie z innym kilkukrotnie to coś jest nie tam. Wtedy trzeba zastanowic sie nad granicami i przedefiniowac bounded contexts.
    
3. Szukanie informacji zmieniajacych sie razem
    
    Jesli jakas dana zmienia sie jednoczesnie w wiecej niz jedynm kontekscie to trzeba zgrupowac te konteksty. Np. jesli jest wymaganie, ze cena w katalogu i cenniku MUSZA byc ZAWSZE zsynchronizowane to powinien byc jeden bounded context: katalog, w ktorym zdefiniowany jest cennik
    
4. Szukanie informacji używanych razem

    Przyklad z ubezpieczeniem. Zly podzial to subdomena sprzedazy polis i obslugi szkod. Zdefiniowane w tych subdomenach bounded contexty musza sie caly czas ze soba komunikowac. Lepiej podzielic ten system na subdomeny: ubezpieczenia komunikacyjne i ubezpieczenia nieruchomosci. Wtedy bounded contexty tych subdomen nie musza sie ze soba wgl komunikowac.
    
5. Zadaj sobie pytanie

    O odpwiedzialnosci kontekstu - jesli zbyt duza to powinien nastapic podzial.
    Ile integracji ma kontekst - jesli jest ich zbyt wiele to powinien nastapic podzial.
    Czy jest jedno zrodlo prawdy - jesli nie ma jasno powiedziane, ktory context przechowuje cene ksiazki to brakuje jakiegos kontekstu
    Czy istnieje "schizofreniczny kontekst" - jesli jest duzo ifów w kodzie to powinien nastapic podzial kontekstów. Np w klasie Faktura/Payment jest funkcja repay/cancel i tam sa if czy mamy do czynienia z firma czy osoba inddywidualna.

6. Szukanie antywymagan

    Jesli biznesowe reguly nie maja sensu nie ma sensu tego implementowac a wiec nie ma sensu miec bounded context.
    
    
Process Level Event Storming
Obracamy sie w ramach konkretnego problemu zdefiniowanego na BPES. Na podstawie tego wydarzenia okreslamy bounded contexts konkretnej subdomeny

Przykladowe nazwy bounded contexts: "Przygotowanie video", "Publikacja kursu", "Płatnosci", "Subskrypcja indywidualna", "Subskrypcja firmowa", "Fakturowanie", "Dostepnosc"*

* Ciekawy przyklad, dostepnosc jest uzyta w wielu miejscach ale nie ma jednego zrodla prawdy. W tym przypadku nalezy wydzielic jeden bounded context wlasnie "Dostepnosc" i uzyc go w tych miejscach.

Bywa tak, ze cos nie wchodzi do bounded context a jest czescia subdomeny. Bounded context przeklada sie na rozwiazania, wiec na kod. Jesli cos juz jest gotowe, albo nietechniczne to nie ma sensu robic dla tej części bounded context.


Moduly w kodzie nie musza odpowiadac bounded context.
- Jeden bounded context moze zawierac wiele modulow
- Jeden modul moze zawierac wiele bounded context
- Jeden modul moze zawierac jeden bounded context