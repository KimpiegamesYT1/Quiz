
# QuizIt — Dynamisch Quiz Platform

Oefenquizzes voor schoolvakken (o.a. Virtualisatie, Computernetwerken en IT Fundamentals), plus een indicatieve IQ-test. Volledig statisch (geen backend nodig): elke quiz is gewoon een JSON-bestand, dus je voegt zelf makkelijk een nieuw vak toe.

Live op: https://kimpiegamesyt1.github.io/Quiz/

**Ondersteunde quiztypes:**
- Meerkeuzevragen (multiple choice)
- Gestructureerd per onderwerp/categorie

**Hoe werkt het?**

1. Voeg een quiz toe aan `quizzes/quizzes.json`. Verplicht: `id`, `title`, `file` (pad naar het `meta.json` van de quiz), `description`. Optioneel: `subtitle` (badge op de startpagina), `year` + `quarter` (volgorde binnen een groep) en `group` (kopje op de startpagina; zonder `group` valt de quiz onder "Examens oefenen").
2. Maak een map aan onder `quizzes/<quiz-id>/` met een `meta.json` (titel + lijst van categorieën, elk met `id`, `name` en `file`) en per categorie een eigen JSON-bestand met de vragen (zie de mappen in `quizzes/` als voorbeeld). De vragen van een categorie worden pas opgehaald zodra iemand die categorie aanklikt.

**Oefentoets/examenmodus:**
Wil je een oefentoets (examenmodus) toevoegen? Maak een categorie aan met "examen" in de id (bijv. `"id": "examen"`). In deze modus krijg je géén directe feedback, maar zie je pas na afloop je score en uitleg per vraag. Handig om jezelf te testen alsof het een echte toets is!

**Bijdragen?**
Heb je een idee of wil je een bug fixen? Pull requests zijn altijd welkom!
