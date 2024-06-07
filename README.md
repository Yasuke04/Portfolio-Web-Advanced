# Game Reviews Website

Dit is de repository voor mijn Game Reviews website, een interactief platform waar gebruikers gamebeoordelingen kunnen lezen en hun eigen gegevens kunnen invoeren.

## Inhoud

- Elementen
- Functionaliteiten
- Installatie
- Gebruik
- Bijdragen
- Licentie

## Elementen

De volgende JavaScript- en HTML-elementen zijn geïmplementeerd in het project:

- **Elementen selecteren**: Gebruikt in `script.js` om DOM-elementen te selecteren met methoden zoals `getElementById` en `querySelector`.
- **Elementen manipuleren**: Toegepast in `script.js` om de inhoud van elementen te wijzigen met `textContent` en `innerHTML`.
- **Event aan een element koppelen**: Geïmplementeerd in `script.js` met `addEventListener` om functies uit te voeren bij bepaalde gebruikersacties.
- **Formulier valideren**: Aanwezig in `contact.html` met het `onsubmit` attribuut dat verwijst naar een validatiefunctie in `script.js`.
- **Gebruiken van een constante**: Constanten worden gedefinieerd met `const` in `script.js` voor betere codebeheersing.
- **Gebruiken van template literals**: Template literals worden gebruikt in `script.js` voor het dynamisch genereren van strings.
- **Destructuring**: Toegepast in `script.js` om objecteigenschappen efficiënt uit te pakken.
- **Spread & Rest operator**: Gebruikt in `script.js` om arrays en objecten uit te breiden of samen te voegen.
- **Iteration over een array**: `forEach` wordt gebruikt in `script.js` om over arrays te itereren.
- **Arrow function**: Arrow functions worden gebruikt in `script.js` voor compactere functiedefinities.
- **Callback function**: Callbacks worden gebruikt in `script.js`, vooral in array-methoden zoals `forEach`.
- **Promise**: Promises worden gebruikt in `script.js` voor asynchrone operaties, samen met `async` en `await`.
- **Consumer methods**: `forEach` wordt gebruikt als een consumer method in `script.js`.
- **Async & Await**: Asynchrone functies met `async` en `await` worden gebruikt in `script.js` voor asynchrone operaties zoals data ophalen.
- **Fetch om data op te halen**: De `fetch` API wordt gebruikt in `script.js` om externe data op te halen en te verwerken.
- ## JSON Manipulatie en Weergave

In `script.js`, wordt de `fetch` API gebruikt om game data op te halen van een externe bron. De opgehaalde data, die in JSON-formaat is, wordt vervolgens geparseerd naar een JavaScript-object met `response.json()`. Dit proces illustreert hoe we JSON manipuleren en weergeven binnen de applicatie.

- **Locatie in Code**: `script.js` functie `fetchGameData`.
- **Doel**: Het ophalen van game data in JSON-formaat en het omzetten naar een bruikbaar JavaScript-object.
- **Gebruik**: De opgehaalde en geparseerde data wordt gebruikt om de UI te updaten met de nieuwste gamebeoordelingen.


## Functionaliteiten

De website bevat de volgende functionaliteiten:
- Dynamische weergave van gamebeoordelingen.
- Formuliervalidatie om ervoor te zorgen dat gebruikersinvoer correct is.
- Gebruik van LocalStorage om gebruikersnamen op te slaan en te laden.

## Bronnen
[Changing Desktop Background to GIF.pdf](https://github.com/user-attachments/files/15742894/Changing.Desktop.Background.to.GIF.pdf)

[Verification Request.pdf](https://github.com/user-attachments/files/15742897/Verification.Request.pdf)

[Implementatie van JavaScript en CSS functies in een website.pdf](https://github.com/user-attachments/files/15742901/Implementatie.van.JavaScript.en.CSS.functies.in.een.website.pdf)

https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3UyNTJ1eDV0a3lseDdzamU5Y2J5bnM4ZmF1cjB3aHh1d2RnaXIzdiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VwXcgwGIPyiiY/giphy.gif


## Installatie

Om de website lokaal te draaien, kloon de repository en open `index.html` in uw browser.

```bash
git clone https://github.com/Yasuke04/game-reviews.git
cd game-reviews
