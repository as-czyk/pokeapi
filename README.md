### Wichtige Verzeichnisse und Dateien

- [`app`](app): Enthält die Hauptanwendungsdateien und Bildschirme.

  - [`app/(tabs)/index.tsx`](<app/(tabs)/index.tsx>): Hauptbildschirm, der die Liste der Pokémon anzeigt.
  - [`app/(tabs)/two.tsx`](<app/(tabs)/two.tsx>): Platzhalter für einen zweiten Tab.
  - [`app/_layout.tsx`](app/_layout.tsx): Layout-Konfiguration für die Anwendung.
  - [`app/+html.tsx`](app/+html.tsx): Web-spezifische Konfiguration.
  - [`app/+not-found.tsx`](app/+not-found.tsx): Bildschirm, der für nicht vorhandene Routen angezeigt wird.

- [`assets`](assets): Enthält Schriftarten und Bilder, die in der Anwendung verwendet werden.

- [`components`](components): Enthält wiederverwendbare Komponenten.

  - [`components/Loader.tsx`](components/Loader.tsx): Eine Lade-Spinner-Komponente.
  - [`components/PokemonCard.tsx`](components/PokemonCard.tsx): Eine Komponente zur Anzeige einzelner Pokémon-Details.

- [`constants`](constants): Enthält Konstanten, die in der gesamten Anwendung verwendet werden.

  - [`constants/Colors.ts`](constants/Colors.ts): Farbschemadefinitionen.
  - [`constants/PokeApiEndpoint.ts`](constants/PokeApiEndpoint.ts): API-Endpunktdefinitionen.

- [`hooks`](hooks): Enthält benutzerdefinierte Hooks.

  - [`hooks/useColorScheme.ts`](hooks/useColorScheme.ts): Hook zur Bestimmung des aktuellen Farbschemas.

- [`server`](server): Enthält die Logik zur Interaktion mit der API.

  - [`server/PokeApi.ts`](server/PokeApi.ts): Funktionen zur Interaktion mit der PokeAPI.
  - [`server/ServerApi.ts`](server/ServerApi.ts): Aggregiert API-Funktionen.

- [`types`](types): Enthält TypeScript-Typdefinitionen.
  - [`types/PokemonTypes.ts`](types/PokemonTypes.ts): Typdefinitionen für Pokémon-Daten.
  - [`types/ErrorType.ts`](types/ErrorType.ts): Typdefinition für Fehlerbehandlung.

## Erste Schritte

### Voraussetzungen

- Node.js
- Expo CLI

### Installation

1. Klone das Repository:

   ```sh
   git clone https://github.com/your-username/pokeapi.git
   cd pokeapi
   ```

2. Abhängigkeiten installieren

   ```sh
   npm install
   ```

3. Anwendung starten

   ```sh
   npm start
   ```

### Verwendung

- Der Hauptbildschirm zeigt eine Liste von Pokémon an.
- Klicke auf ein Pokémon, um dessen Details anzuzeigen.
