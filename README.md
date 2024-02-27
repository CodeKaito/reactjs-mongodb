# Progetto CRUD con ReactJS e MongoDB

Benvenuto nel progetto CRUD con ReactJS e MongoDB! Questo progetto è stato realizzato utilizzando Express per il backend, Mongoose per la gestione del database MongoDB, e React per la parte frontend. Sono stati integrati anche Axios, React-Icons, Cors e Dotenv per ottimizzare e gestire diverse funzionalità.

## Backend

### Tecnologie Utilizzate
- Express: Framework web per Node.js che semplifica la creazione di API RESTful.
- Mongoose: ODM (Object Data Modeling) per MongoDB, facilita l'interazione con il database.
- Cors: Middleware per Express che consente la gestione delle richieste cross-origin.
- Dotenv: Carica le variabili d'ambiente da un file `.env`.

### Setup del Backend

1. Installa le dipendenze:
    ```bash
    npm install
    ```

2. Configura le variabili d'ambiente:
    Crea un file `.env` nella cartella `backend` con le tue variabili d'ambiente:
    ```env
    PORT=5000
    MONGODB_URI=tuo_mongodb_uri
    ```

3. Avvia il server:
    ```bash
    npm start
    ```

## Frontend

### Tecnologie Utilizzate
- React: Libreria JavaScript per la creazione di interfacce utente.
- Axios: Libreria per effettuare chiamate HTTP.
- React-Icons: Raccolta di icone per React.

### Setup del Frontend

1. Naviga nella cartella `frontend`:
    ```bash
    cd frontend
    ```

2. Installa le dipendenze:
    ```bash
    npm install
    ```

3. Avvia l'applicazione:
    ```bash
    npm start
    ```

## Contributi
Siamo aperti ai contributi! Sentiti libero di aprire un issue o fare una pull request.

## Licenza
Questo progetto è concesso in licenza secondo i termini della licenza [MIT](LICENSE).

Happy coding!
