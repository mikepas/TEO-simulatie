# TEO effecten simulatie

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Type water toevoegen / aanpassen
Alle typen wateren staan in de map `types` onder `models`. In deze models kan je de naam, formules, invoerwaardes, uitvoorwaardes, errormessages, referenties, mengzoneresulten en soorten eclologische effecten aangeven.

Zorg ervoor dat deze models `Calculation` implementeren.

#### Toevoegen
Als je een nieuw type wil toevoegen, dan maak je in de hierboven aangegeven map een nieuw model aan. Voer daarna alle gegevens zoals hierboven beschreven in.

Na het aanmaken van de model moet je deze aangeven in het model `Types.ts`.

Nu kan je het nieuwe type gebruiken in de app.

## Ecologisch effect resultaat toevoegen/aanpassen
Als je een nieuwe tabel voor een ander effect wil toevoegen, kun je een component aanmaken in de effectenComponents mapje. Deze component implementeer je in de flowing-water-info component. De flowing-water-simulation component geeft calculcation data door aan de flowing-water-info component. Deze geeft het weer door aan de componenten die hierin geïmplementeerd zijn.

In de flowing-water-component zit ook een ngSwitch. Met deze kun je bepalen wat je wel of niet wil tonen. Dit geldt hetzelfde voor de extra ecologische informatie dat onder de tabellen verschijnt van de koudelozing berekening. De data wort uit een json bestand gelezen dat te vinden is in de assets map.
