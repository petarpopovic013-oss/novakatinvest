# Demo routes specification

## Rute

- `/o-nama`
- `/ponuda`
- `/ponuda/[projekat]`
- `/ponuda/[projekat]/[stan]`
- `/reference`
- `/reference/[projekat]`
- `/kontakt`

## Pravila

- sve rute su funkcionalne i vizuelno usklađene sa početnom;
- demo oznaka jasno kaže da se sadržaj i statusi dopunjavaju;
- projektne i unit rute koriste centralne TypeScript podatke;
- ne prikazuje se numerička cena;
- status stana nije prikazan samo bojom;
- nepoznat slug vraća srpsku 404 stranicu;
- detalj projekta bez jedinica prikazuje poruku da ponuda stiže nakon potvrde;
- stranice projekta i stana imaju mobilni prodajni action bar.
