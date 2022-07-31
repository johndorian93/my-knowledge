Architektura warstwowa
(
DAO - Data Access Object - wartstwa zapewniajaca komunikacje ze zrodlem danych (DB)
DTO - Data Transfer Object - warstwa transferujaca dane na zewnatrz. Np. transferujemy dane z DB do formatu wysylanego z API przez HTTP. Lub "do wewnatrz" aplikacji. Np. dane z body requestu POST transferujemy do obiektu uzywanego w aplikacji (serwis, repository)
Respository - Warstwa powiazana z modelem domenowym. Ogranicza sie do jednego typu danych. DAO jest bardziej powiazane z baza danych (np. odzwierciedla zlozona strukture z wyniku operacji bazodanowej JOIN).
)

3-warstwy. Prezentacja, Logika, Persystencja.
Wszystkie moduly z wyzszej warstwy moga korzystac z modulow z nizszej. Np. Do kontrolera mozemy wstrzyknac kazdy serwis, a do serwisu kazde respzytorium
Ta architekture powinnismy dzielic per modul (Resource.controller, Resource.repository, Resource.service), a nie per system  a nie per system (/controllers/Resource, /services/Resource, /repositories/Resource)
Wspolne moduly powinny znajdowac sie w katalogu /shared, /libs, /utils, etc. Kod tam przechowywany powinien byc generyczny. Nie powinien miec wspolnego nic z logika.
Plusu i minusy
+ powszechnie znana
+ zmniejszenie zlozonosci
+ separacja odpowiedzialnosci (SRP - single responsibility principle), wymiana warstw
- zmiany w wielu warstwach naraz (implementacja endpoint)
- utrudniona testowalnosc - trzeba robic mocks/stubs, tworzyc testowe bazy danych w docker czy pamieci, ciezko o testy jednostkowe


Architektura hexagonalna (onion, screeming)
Polega na odwroceniu zaleznosci w centralnym miejscu aplikacji (zwykle serwisy z logika biznesowa). Majac taki serwis wystawiamy interfejs (port) dla np. repozytorium czy controllers. Taki interfejs (port) jest implementowany przez repozytoria i controllers i takie implementacje nazywamy adapters. Co wazne te interfejsy (porty) przechowywane sa w tym samym miejscy do serwis, nie controller czy repository. To wlasnie odwraca ta zaleznosc i powstaje hexagon. Trzymajac interfejsy w warstwie nizszej (np. repository) konczymy na architekturze warstwowej.
Majac na przyklad repozytorium mozemy stworzyc dwie wersje repozytoriow. Jedno do zarzadzania persystencja w pamieci a drugie do zarzadzania produkcyjna persystencja (baza danych). W testach wstrzykujemy do serwisu repozytorium "inMemory" i mamy prosty test jednostkowy

Częśc logiki takiego serwisu moga zostac nastepnie wydzielona do warstwy domenowej i w taki sposob "sercem" takiego hexagonu jest domena. Czyli DDD. Takze architektura hexagonalna to tak naprawda wariacja architektury warstwowej.

Porty wejsciowe to te interfejsy, ktore implementuje warstwa blizej UI (np. controllers)
Porty wyjsciowe to te interfejsy, ktore implementuje warstwa blizej inncyh serwisow czy bazy danych (np. queue, db);

+ testowalnosc
+ rozwijalnosc i utrzymanie
+ wymiana technologii 
+ I/O na koncu heksagonu
- wiele adapterow = wiele testow
- trudniejsza nawigacja po kodzie zrodlowym

Stosowanie
- projekty o zmiennej zlozonej logice biznesowej
- w boudned context implementujacym core domain
- nie w CRUD (tam warstwowa)


