Strategic DDD

Subdomains categories:
- Core domain - something that differs a given company from others. In a library it could be a service with an advanced algorithm for books ordering implemented.
- Supportive domain - a specific part of system that is company specific. Enrich the core domain. For example service that prepares orders.
- Generic domain - a part of system that could be reused (so bought) from open-source projects. For example an application for calculating invoices.

---

Big Picture Event Storming - a meeting with internal stakeholders and team where we agree on common actions and resources in our system. Everything needs to be clear.

Faza 1. (definiowanie zdarzen biznesowych)
Zaczynamy od poproszenia stakeholders o napisanie na karteczce ważnego zdarzenia biznesowego. Co ważne, w czasie dokonanym (np. wystawiono fakture). Co ważne jednym kolorem karteczki dla wszystkich.
Na poczatku kazdy pracuje osobno, aby kazdy myslal out-of-the-box, a nie w grupie - aby nie sugerowac toru myslenia, czy tez waznym czlowiekiem w firmie (np. prezes).

Faza 2. (grupowanie zdarzen biznesowych)
Usunięcie duplikatów, uporządkowanie i dostosowanie do lini czasu - ktore zdarzenie jest nastepuje po ktorym.
Hotspot. Karteczka innego koloru. Jesli dyskusja np. na temat tego jak nazwac dane zdarzenie biznesowe nie moze zostac rozstrzygnieta to przyklejamy na taka grupe hotspot. Temat zostanie poruszony pozniej.

Faza 3. (opowiesc od konca)
Zdarzenia sa uporzadkowane w lini (lub liniach) czasu. Faza ta polega na znalezieniu brakujacych elementow.
Dodawanie nowych, brakujacych zdzrzen. Poprawki instniejacych. Wprowadzanie rozgalezien.
Karteczki lub grupy karteczek analizujemy od konca. Pomaga to w znalezieniu brakujacych elementow.

Faza 4. (ludzie i systemy)
Przypisywanie do konkretnych karteczek lub grupy karteczek nazwy systemu (ogolnie, moze to byc np. dzial w firmie) i aktorów (ludzi), którzy się zajmuja konkretnym zdarzeniem lub grupą zdarzen biznesowych.
Nie kazdy zdarzenie (event) musi miec aktora. Oczywiscie system i aktor to inny kolor karteczki.

Faza 5. Problemy i okazje
Formuowanie problemow i okazji na podstawie eventow. Formułowanie odbywa sie na podstawie faktów nie domysłów. 
Tak jak powyzej problemy i okazje to inny kolor karteczki. 
Glosowanie nad problemami i okazjami odbywa sie poprzez stawianie kropek lub strzalek przez uczestnikow Event Stormingu.

---

Na podstawie skonczonego ES wyszukujemy sub domeny. Czyli konkretne, oddzielne czesci systemu (np, Księgowość, Reklamacje, Katalog kursów). Robimy to na podstawie heurestyk:
- H1 - struktura organizacji (np. działy: księgowość, mareting)
- H2 - eksperci domenowi (organizowanie subdomen tam gdzie sa skupieni eksperci, np. jesli ktos ma wiedze o przeplywie subskrypcji to warto rozwazyc tam stworzenie subdomeny)
- H3 - język ekspertów (np. subskrypcja jest czyms innym dla BiuraObsługiKlienta a czym innym dla samego klienta. BOK definiuje subskrypcje a klient ja kupuje, jest do niej przypisany i ja oplaca)
- H4 - wartość biznesowa (typowo co jest wazne dla biznesu, np. subskrypcje = pieniadze - wiec bedzie spriorytyzowana)
- H5 - kroki procesu (np. kurs, katalog kursow jest wspolny dla wszysykich - kazdy ma jedna liste kursów. Jednak z perspektywy ogladania tego kursu sytuacja wyglada tak, ze kazdy oglada w swoim tempie czy oglada tylko wybrane materialy - to juz jest kwestia indywidualna)

