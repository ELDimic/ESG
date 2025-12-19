Descrizione del progetto

ESGFabbri è una web application sviluppata in Angular con l’obiettivo di supportare la trasparenza e la comunicazione della sostenibilità d’impresa, consentendo la consultazione e il download dei report di sostenibilità (bilanci ESG) dell’azienda Fabbri 1905, operante nel settore alimentare e manifatturiero.

Il progetto è stato realizzato come Project Work / elaborato universitario nell’ambito del corso di laurea triennale in Informatica per le Aziende Digitali (L-31), con particolare attenzione all’uso delle tecnologie web come strumenti abilitanti per la Responsabilità Sociale d’Impresa (RSI).

Obiettivi

  -Sviluppare una Single Page Application (SPA) moderna e responsive

  -Favorire l’accesso pubblico ai report di sostenibilità aziendali

  -Applicare competenze di sviluppo frontend, routing e deployment cloud

  -Dimostrare l’integrazione tra informatica e sostenibilità d’impresa

Funzionalità principali

  -Home page informativa sull’azienda e sul concetto di sostenibilità

Sezione dedicata ai report di sostenibilità con:

  -elenco per anno

  -descrizione sintetica
  
  -download diretto dei PDF

Navigazione tramite Angular Router

Layout responsive e accessibile

Tecnologie utilizzate

  -Angular (framework frontend, SPA)
  
  -TypeScript
  
  -HTML5 / CSS3
  
  -Node.js / npm
  
  -Git & GitHub (versionamento e CI/CD)
  
  -GitHub Actions (build e deploy automatico)

  -Microsoft Azure App Service (Windows) per l’hosting

  -IIS + web.config per il routing SPA

Deployment su Azure App Service

Il progetto viene distribuito automaticamente tramite GitHub Actions:

  -build dell’applicazione Angular

  -creazione di un pacchetto ZIP con l’output frontend

  -deploy su Azure App Service (Windows)

Il routing SPA è gestito tramite un file web.config che reindirizza tutte le richieste a index.html.

Accesso all’applicazione

L’applicazione è accessibile pubblicamente all’indirizzo:

https://esgfabbri-erghc5fnhyana2a6.italynorth-01.azurewebsites.net/
