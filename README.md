# Express.0.1

## Om
> Syftet med uppgiften är att:

- kunna skapa och använda enklare RESTbaserade webbtjänster som lösning för kommunikation mellan applikationer
- kunna använda Node.js för att skapa mer interaktiv funktionalitet för serversida och webbplatser
- kunna använda Node.js tillsammans med ramverket Express för att skapa interaktion mot webbplats i form av en enklare REST-baserad webbtjänst

> ### Install:
- nmp i express
- npm i nodemon **run the app** med **npm run dev** kommando
- lägg: "scripts": {
         "dev": "nodemon server.js"
         } i **package.json-fil** för uppladning av sidan
         
- npm i ejs **read HTML**
#### -VIKTIG- 

##### om HTML känner inte **ejs<%%>kod** 
- Av intallera  HTMLhint extension 
- Installera EJS language support
- Lägg till följande kod i setting.jon file:

 > "vsicons.dontShowNewVersionMessage": true,
    "files.associations": {
        "*.ejs": "html"
    },
    "emmet.includeLanguages": {
        "ejs": "html"
    },
    "htmlhint.options": {
        "spec-char-escape": false,
        "doctype-first": false
    }

##### För att kunna använda method= DELELTE
- Installera **npm i method-override** 
- Inkludera **const methodoverride = require('method-override');**
- Använda **app.use(methodOverride('_method'));**
- För HTML Delete knapp använda 
<**form action="/<%= course._id%>?_method=DELETE" method="POST">**
    **<button type="submit" class="btn">RADERA<i class="fas fa-trash"></i><button>**
**</form>**

- Lägg till link till CSS filer **app.use(express.static(path.join(__dirname, 'public')));** HTML link **<link rel="stylesheet" href="/style.css">**

#### För publicering 
- Installera heroku app 
- Loga in i termina via **heroku login**
- Avnvända **heroku create** i terminalen
- Använda **git push heroku master** i terminalen 
- För att PROT ska vara tillgängligt för heroku ikludera **var PORT = process.env.PORT || 5000;**

### KursLista
- Kursen sparas som JS objekt i en modul som döpts till **Courses.js** och anroppas i gällande firl t.e.x.index.js

> ### Att köra 
- npm run dev



 Skapad av: Nick Kushkbaghi



 heroku 
config:set NMP_CONFIG_PRODUCTION=false YARN_PRODUCTION=false

git push heroku heroku-deployment:main