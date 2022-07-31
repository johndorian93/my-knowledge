Monolit
+ szyba komunikacja
+ transakcyjnosc
+ bezpieczna komunikacja
+ prosta infra
+ latwy development na start

- kruchy i nieodporny (wyciek pamieci i caly system lezy)
- ograniczona skalowalnosc
- trudny w utrzymaniu
- trudny w zachowaniu infry

Modularny monolit - Zawiera pewną modularnosc (Magazyn, Ksiegowosc, Katalog).
+ lepsza testowalnosc
+ latwa migracja do architektury rozproszonej
+ prostsze utrzymanie

- duplikacja danych
- trudniejsze zachowanie spojnosci
- ograniczone stosowanie kluczy obcych


System rozproszony - zbiór serwisów komunikujący się przez sieć. Serwisy moga byc pisane w innych technologiach
+ skalowalnosc
+ odpornosc
+ hererogenicznosc technologii
+ regulacje i bezpieczenstwo
+ produktywnosc

- wzrost zlozonosci infry
- brak transakcji
- utrudnienia (lokalny develpomnent, bezpieczenstwo, analiza i debugowanie)
- koszty
- opoznienia
- zawodnosc (przy złym projektowaniu)

SOA - service oriented architecture. Często tożsame z ESB (enterprise service bus).
Uslugi sa niezalezne od technologii i dostawcow, sa autonomiczne i zorientowane biznesowo, maja wyrazne granice, wspoldziela kontrakt a nie implementacje. Jest jakis centralny punkt co odroznia ta architekture bardzo wyraznie od mikroserwisow

ESB - enterprise service bus.
Szyna integracyjnia odpowiadajaca za komunikacje we wszystkich serwisach w firmie.
Zapewnia skalowalnosc uslug. Kmpoleksowosc (bezpieczenstwo, audytowosc, logowanie, sledzenie, konfigurowalnosc)
Wady: wysoka cena, szyna jest waskim gardlem


Mikroserwisy
+ Eliminacja punktów cenralnych.
+ Luzne powiazania komponentow.
+ Nacisk na choreografie (wiele osobnych bytow, a nie orkiestracje - jeden punt centralny)
+ Clud native
+ autonomia (wdrozenia)
+ wysoka skalowalnosc

- za duza dowolnosc technologiczna
- zlozonosc technologiczna
- skomplikowana infra
- utrudniona analiza komunikacji

