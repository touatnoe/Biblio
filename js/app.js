let currentBook = null;
let currentGenre = "Tous";
let currentQuizIndex = 0;
let quizScore = 0;

let currentChapterIndex = 0;
let currentBookChapters = [];

// ==========================================
// INITIALISATION
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    populateFilters();

    displayBooks(livres);

});


// ==========================================
// AFFICHAGE DES LIVRES
// ==========================================

function displayBooks(list) {

    const grid = document.getElementById("bookGrid");

    grid.innerHTML = "";

    if (list.length === 0) {

        grid.innerHTML = `
            <p class="no-results">
                Aucun livre ne correspond à votre recherche.
            </p>
        `;

        return;
    }

    list.forEach(book => {

        const card = document.createElement("article");

        card.className = "book-card";

        card.innerHTML = `

            <div
                class="book-cover"
                onclick="openBook('${book.id}')"
            >

                <img
                    src="${book.image}"
                    alt="Couverture de ${book.titre}"
                >

            </div>


            <div class="book-card-info">

                <h3
                    class="book-card-title"
                    onclick="openBook('${book.id}')"
                >
                    ${book.titre}
                </h3>

                <p class="book-card-author">
                    ${book.auteur}
                </p>

                <span class="book-card-year">
                    ${book.annee}
                </span>

            </div>

        `;

        grid.appendChild(card);

    });

}

// ==========================================
// NORMALISATION DES TEXTES
// ==========================================

function normalizeText(text) {

    return String(text || "")
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim();

}


// ==========================================
// FILTRE GENRE — BOUTONS ACCUEIL
// ==========================================

function filterGenre(genre, button) {

    currentGenre = genre;


    document
        .querySelectorAll(".category")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    const genreFilter =
        document.getElementById("genreFilter");

    if (genreFilter) {
        genreFilter.value = genre;
    }


    applyFilters();

    goToLibrary();

}


// ==========================================
// FILTRE GENRE — SELECT EXPLORER
// ==========================================

function changeGenreFilter(genre) {

    currentGenre = genre;

    applyFilters();

}


// ==========================================
// RECHERCHE
// ==========================================

function searchLibrary() {

    applyFilters();

}


function searchFromHero() {

    const value =
        document.getElementById("heroSearch").value;


    document.getElementById("librarySearch").value =
        value;


    applyFilters();


    if (value.length > 0) {

        goToLibrary();

    }

}


// ==========================================
// FILTRES
// ==========================================

function applyFilters() {

    const search =
        normalizeText(
            document.getElementById("librarySearch").value
        );


    const author =
        document.getElementById("authorFilter").value;


    const era =
        document.getElementById("eraFilter").value;


    const filtered = livres.filter(book => {

        const searchable = normalizeText(
            [
                book.titre,
                book.auteur,
                ...(book.genres || [])
            ].join(" ")
        );


        const matchesSearch =
            searchable.includes(search);


        const matchesGenre =
            currentGenre === "Tous" ||
            book.genres.includes(currentGenre);


        const matchesAuthor =
            author === "Tous" ||
            book.auteur === author;


        const matchesEra =
            era === "Tous" ||
            book.epoque === era;


        return (
            matchesSearch &&
            matchesGenre &&
            matchesAuthor &&
            matchesEra
        );

    });


    displayBooks(filtered);

}


// ==========================================
// FILTRES DYNAMIQUES
// ==========================================

function populateFilters() {

    const genreSelect =
        document.getElementById("genreFilter");


    const authorSelect =
        document.getElementById("authorFilter");


    const eraSelect =
        document.getElementById("eraFilter");


    // GENRES

    const genres =
        [...new Set(
            livres.flatMap(book => book.genres || [])
        )].sort((a, b) =>
            a.localeCompare(b, "fr")
        );


    genres.forEach(genre => {

        const option =
            document.createElement("option");

        option.value = genre;

        option.textContent = genre;

        genreSelect.appendChild(option);

    });


    // AUTEURS

    const authors =
        [...new Set(
            livres.map(book => book.auteur)
        )].sort((a, b) =>
            a.localeCompare(b, "fr")
        );


    authors.forEach(author => {

        const option =
            document.createElement("option");

        option.value = author;

        option.textContent = author;

        authorSelect.appendChild(option);

    });


    // ÉPOQUES

    const eras =
        [...new Set(
            livres.map(book => book.epoque)
        )].sort((a, b) =>
            a.localeCompare(b, "fr")
        );


    eras.forEach(era => {

        const option =
            document.createElement("option");

        option.value = era;

        option.textContent = era;

        eraSelect.appendChild(option);

    });

}


// ==========================================
// FILTRES ACTIFS
// ==========================================

function updateActiveFilters() {

    const container =
        document.getElementById("activeFilters");

    if (!container) return;


    const search =
        document.getElementById("librarySearch").value.trim();


    const author =
        document.getElementById("authorFilter").value;


    const era =
        document.getElementById("eraFilter").value;


    const filters = [];


    if (search) {

        filters.push(
            `Recherche : "${search}"`
        );

    }


    if (currentGenre !== "Tous") {

        filters.push(
            `Genre : ${currentGenre}`
        );

    }


    if (author !== "Tous") {

        filters.push(
            `Auteur : ${author}`
        );

    }


    if (era !== "Tous") {

        filters.push(
            `Époque : ${era}`
        );

    }


    if (filters.length === 0) {

        container.innerHTML = "";

        container.classList.add("hidden");

        return;
    }


    container.innerHTML =
        filters
            .map(filter =>
                `<span>${filter}</span>`
            )
            .join("");


    container.classList.remove("hidden");

}


// ==========================================
// RÉINITIALISATION
// ==========================================

function resetFilters() {

    currentGenre = "Tous";


    document.getElementById("librarySearch").value = "";

    document.getElementById("heroSearch").value = "";

    document.getElementById("genreFilter").value = "Tous";

    document.getElementById("authorFilter").value = "Tous";

    document.getElementById("eraFilter").value = "Tous";


    document
        .querySelectorAll(".category")
        .forEach(button =>
            button.classList.remove("active")
        );


    const allButton =
        document.querySelector(
            ".category[onclick*=\"'Tous'\"]"
        );


    if (allButton) {

        allButton.classList.add("active");

    }


    applyFilters();

}


// ==========================================
// PAGE LIVRE
// ==========================================

function openBook(id) {

    const book = livres.find(b => b.id === id);

    if (!book) return;

    currentBook = book;

    document.getElementById("bookTitle").textContent =
        book.titre;

    document.getElementById("bookAuthor").textContent =
        book.auteur;


    /* =========================
       COUVERTURE
    ========================= */

    const cover = document.getElementById("bookCover");

if (book.image) {

    cover.src = book.image;
    cover.alt = `Couverture de ${book.titre}`;
    cover.style.display = "block";

} else {

    cover.removeAttribute("src");
    cover.alt = `Couverture de ${book.titre}`;
    cover.style.display = "none";

}


    /* =========================
       DESCRIPTION
    ========================= */

    document.getElementById("bookDescription").textContent =
        book.description || "";


    /* =========================
       GENRES
    ========================= */

    const tags = document.getElementById("bookTags");

    tags.innerHTML = "";

    if (book.genres && book.genres.length) {

        book.genres.forEach(genre => {

            const tag = document.createElement("span");

            tag.className = "book-tag";

            tag.textContent = genre;

            tags.appendChild(tag);

        });

    }


    /* =========================
       MÉTADONNÉES
    ========================= */

    const meta = document.getElementById("bookMeta");

    meta.innerHTML = "";


    if (book.annee) {

        meta.innerHTML += `
            <div class="book-meta-item">
                <span>📅</span>
                <div>
                    <small>Publication</small>
                    <strong>${book.annee}</strong>
                </div>
            </div>
        `;

    }


    if (book.epoque) {

        meta.innerHTML += `
            <div class="book-meta-item">
                <span>🏛️</span>
                <div>
                    <small>Époque</small>
                    <strong>${book.epoque}</strong>
                </div>
            </div>
        `;

    }


    if (book.genres && book.genres.length) {

        meta.innerHTML += `
            <div class="book-meta-item">
                <span>🏷️</span>
                <div>
                    <small>Genre</small>
                    <strong>${book.genres.join(" · ")}</strong>
                </div>
            </div>
        `;

    }


    /* =========================
       POURQUOI CETTE ŒUVRE ?
    ========================= */

    const why = document.getElementById("bookWhy");

    why.textContent =
        book.pourquoi ||
        `Une œuvre majeure de ${book.auteur}, à découvrir à travers son histoire, ses personnages et ses grands thèmes.`;


    /* =========================
       RÉSUMÉ
    ========================= */

    document.getElementById("summaryTitle").textContent =
        book.titre;

    document.getElementById("shortSummary").textContent =
        book.resumeCourt || "";


    /* =========================
       PERSONNAGES
    ========================= */

    const charactersList =
        document.getElementById("charactersList");

    charactersList.innerHTML = "";

    if (book.personnages) {

        book.personnages.forEach(personnage => {

            const li = document.createElement("li");

            li.innerHTML = `
                <strong>${personnage.nom}</strong>
                ${personnage.role ? ` — ${personnage.role}` : ""}
                ${personnage.description
                    ? `<br><span>${personnage.description}</span>`
                    : ""}
            `;

            charactersList.appendChild(li);

        });

    }


    /* =========================
       THÈMES
    ========================= */

    const themesList =
        document.getElementById("themesList");

    themesList.innerHTML = "";

    if (book.themes) {

        book.themes.forEach(theme => {

            const span = document.createElement("span");

            span.className = "theme";

            span.textContent = theme;

            themesList.appendChild(span);

        });

    }


    /* =========================
       RELATIONS
    ========================= */

    const relationsList =
        document.getElementById("relationsList");

    relationsList.innerHTML = "";

    if (book.relations) {

        book.relations.forEach(relation => {

            const li = document.createElement("li");

            li.textContent = relation;

            relationsList.appendChild(li);

        });

    }


    /* =========================
       CHRONOLOGIE
    ========================= */

    const timelineList =
        document.getElementById("timelineList");

    timelineList.innerHTML = "";

    if (book.chronologie) {

        book.chronologie.forEach(event => {

            const li = document.createElement("li");

            li.textContent = event;

            timelineList.appendChild(li);

        });

    }


    /* =========================
       ANALYSE
    ========================= */

    document.getElementById("bookAnalysis").textContent =
        book.analyse || "";


       /* =========================
   	AFFICHAGE DE LA PAGE LIVRE
	========================= */

	const main = document.querySelector("main");
	const bookPage = document.getElementById("bookPage");

	if (!bookPage) {
    	console.error("Erreur : #bookPage est introuvable.");
    	return;
	}


	/* Passage en mode "page livre" */

	main.classList.add("book-open");


	/* Cacher la page d'accueil */

	document
    	.querySelector(".hero")
    	.classList.add("hidden");

	document
    	.querySelector(".quick-section")
    	.classList.add("hidden");

	document
    	.querySelector(".library-section")
    	.classList.add("hidden");

	document
    	.querySelector(".understand-section")
    	.classList.add("hidden");


	/* Afficher la fiche */

	bookPage.classList.remove("hidden");


	/* Afficher le résumé */

	const summarySection =
    	document.getElementById("summarySection");

	if (summarySection) {
    	summarySection.classList.remove("hidden");
	}


	/* Retour en haut de la fiche */

	window.scrollTo({
    	top: 0,
    	behavior: "auto"
	});

}


// ==========================================
// RETOUR
// ==========================================

function showHome() {

    /* =========================
       FERMER LA PAGE LIVRE
    ========================= */

    const main = document.querySelector("main");

    const bookPage =
        document.getElementById("bookPage");

    const reader =
        document.getElementById("tenMinuteReader");


    /* =========================
       MODE ACCUEIL
    ========================= */

    if (main) {
        main.classList.remove("book-open");
    }


    /* =========================
       CACHER LA FICHE LIVRE
    ========================= */

    if (bookPage) {
        bookPage.classList.add("hidden");
    }


    /* =========================
       FERMER LE LECTEUR
    ========================= */

    if (reader) {
        reader.classList.add("hidden");
    }


    /* =========================
       RÉAFFICHER L'ACCUEIL
    ========================= */

    const hero =
        document.querySelector(".hero");

    const quickSection =
        document.querySelector(".quick-section");

    const librarySection =
        document.querySelector(".library-section");

    const understandSection =
        document.querySelector(".understand-section");


    if (hero) {
        hero.classList.remove("hidden");
    }

    if (quickSection) {
        quickSection.classList.remove("hidden");
    }

    if (librarySection) {
        librarySection.classList.remove("hidden");
    }

    if (understandSection) {
        understandSection.classList.remove("hidden");
    }


    /* =========================
       RETOUR EN HAUT
    ========================= */

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


// ==========================================
// BIBLIOTHÈQUE
// ==========================================

function goToLibrary() {

    document
        .getElementById("library")
        .scrollIntoView({
            behavior: "smooth"
        });

}


// ==========================================
// SECTIONS
// ==========================================

function showSummary() {

    document
        .getElementById("summarySection")
        .scrollIntoView({
            behavior: "smooth"
        });

}


function readBook() {

    if (!currentBook) return;

    if (
    currentBook.id !== "monte-cristo" &&
    currentBook.id !== "trois-mousquetaires" &&
    currentBook.id !== "vingt-mille-lieues"
) {

        alert(
            "La lecture de cette œuvre sera bientôt disponible dans Biblio."
        );

        return;
    }

    openBookReader();

}

// ==========================================
// LECTEUR D'ŒUVRE — BIBLIO
// ==========================================

function openBookReader() {

    if (!currentBook) return;


    const bookPage =
        document.getElementById("bookPage");

    const reader =
        document.getElementById("bookReader");


    if (!reader) {

        console.error(
            "Erreur : #bookReader est introuvable."
        );

        return;

    }


    /*
     * Réinitialisation
     */

    currentChapterIndex = 0;
    currentBookChapters = [];


    /*
     * ==========================================
     * LE COMTE DE MONTE-CRISTO
     * ==========================================
     */

    if (currentBook.id === "monte-cristo") {

        const tomesMonteCristo = [

            {
                numero: 1,
                tome: "Tome I",
                chapitres: [
                    "Marseille. — L’arrivée",
                    "Le père et le fils",
                    "Les Catalans",
                    "Complot",
                    "Le repas des fiançailles",
                    "Le substitut du procureur du roi",
                    "L’interrogatoire",
                    "Le château d’If",
                    "Le soir des fiançailles",
                    "Le petit cabinet des Tuileries",
                    "L’ogre de Corse",
                    "Le père et le fils",
                    "Les Cent-jours",
                    "Le prisonnier furieux et le prisonnier fou",
                    "Le numéro 34 et le numéro 27",
                    "Un savant italien",
                    "La chambre de l’abbé",
                    "Le trésor",
                    "Le troisième accès",
                    "Le cimetière du château d’If",
                    "L’île de Tiboulen"
                ]
            },

            {
                numero: 2,
                tome: "Tome II",
                chapitres: [
                    "Les contrebandiers",
                    "L’île de Monte-Cristo",
                    "Éblouissement",
                    "L’inconnu",
                    "L’auberge du pont du Gard",
                    "Le récit",
                    "Les registres des prisons",
                    "La maison Morrel",
                    "Le 5 septembre",
                    "Italie. — Simbad le marin",
                    "Réveil",
                    "Bandits romains",
                    "Apparition",
                    "La mazzolata",
                    "Le carnaval de Rome",
                    "Les catacombes de Saint-Sébastien",
                    "Le rendez-vous"
                ]
            },

            {
                numero: 3,
                tome: "Tome III",
                chapitres: [
                    "Les convives",
                    "Le déjeuner",
                    "La présentation",
                    "Monsieur Bertuccio",
                    "La maison d’Auteuil",
                    "La vendetta",
                    "La pluie de sang",
                    "Le crédit illimité",
                    "L’attelage gris-pommelé",
                    "Idéologie",
                    "Haydée",
                    "La famille Morrel",
                    "Pyrame et Thysbé",
                    "Toxicologie",
                    "Robert-le-Diable",
                    "La hausse et la baisse",
                    "Le major Cavalcanti",
                    "Andrea Cavalcanti",
                    "L’enclos à la luzerne"
                ]
            },

            {
                numero: 4,
                tome: "Tome IV",
                chapitres: [
                    "M. Noirtier de Villefort",
                    "Le testament",
                    "Le télégraphe",
                    "Le moyen de délivrer un jardinier des loirs qui mangent ses pêches",
                    "Les fantômes",
                    "Le dîner",
                    "Le mendiant",
                    "Scène conjugale",
                    "Projets de mariage",
                    "Le cabinet du procureur du roi",
                    "Un bal d’été",
                    "Les informations",
                    "Le bal",
                    "Le pain et le sel",
                    "Madame de Saint-Méran",
                    "La promesse",
                    "Le caveau de la famille Villefort",
                    "Le procès-verbal",
                    "Les progrès de Cavalcanti fils",
                    "Haydée"
                ]
            },

            {
                numero: 5,
                tome: "Tome V",
                chapitres: [
                    "On nous écrit de Janina",
                    "La limonade",
                    "L’accusation",
                    "La chambre du boulanger retiré",
                    "L’effraction",
                    "La main de Dieu",
                    "Beauchamp",
                    "Le voyage",
                    "Le jugement",
                    "La provocation",
                    "L’insulte",
                    "La nuit",
                    "La rencontre",
                    "La mère et le fils",
                    "Le suicide",
                    "Valentine",
                    "L’aveu",
                    "Le père et la fille",
                    "Le contrat",
                    "La route de Belgique"
                ]
            },

            {
                numero: 6,
                tome: "Tome VI",
                chapitres: [
                    "L’auberge de la Cloche et de la Bouteille",
                    "La loi",
                    "L’apparition",
                    "Locuste",
                    "Valentine",
                    "Maximilien",
                    "La signature Danglars",
                    "Le cimetière du Père-Lachaise",
                    "Le partage",
                    "La fosse aux Lions",
                    "Le juge",
                    "Les assises",
                    "L’acte d’accusation",
                    "Expiation",
                    "Le départ",
                    "Le passé",
                    "Peppino",
                    "La carte de Luigi Vampa",
                    "Le pardon",
                    "Le 5 octobre"
                ]
            }

        ];


        tomesMonteCristo.forEach(tome => {

            tome.chapitres.forEach(
                (titre, index) => {

                    const numero =
                        String(index + 1).padStart(2, "0");


                    currentBookChapters.push({

                        tome: tome.tome,

                        titre:
                            `Chapitre ${numero} — ${titre}`,

                        fichier:
                            `livres/monte-cristo/tome-${tome.numero}/chapitre-${numero}.html`

                    });

                }
            );

        });

    }


    /*
     * ==========================================
     * LES TROIS MOUSQUETAIRES
     * ==========================================
     */

    else if (currentBook.id === "trois-mousquetaires") {

        const chapitresTroisMousquetaires = [

            "Les trois présents de M. d’Artagnan père",
            "L’antichambre de M. de Tréville",
            "L’audience",
            "L’épaule d’Athos, le baudrier de Porthos et le mouchoir d’Aramis",
            "Les Mousquetaires du Roi et les Gardes de M. le Cardinal",
            "Sa Majesté le Roi Louis treizième",
            "L’intérieur des mousquetaires",
            "Une intrigue de cour",
            "D’Artagnan se dessine",
            "Une Souricière au dix-septième siècle",
            "L’intrigue se noue",
            "George Villiers, duc de Buckingham",
            "M. Bonacieux",
            "L’homme de Meung",
            "Gens de robe et gens d’épée",
            "Où monsieur le garde des sceaux Séguier chercha plus d’une fois la cloche pour la sonner, comme il le faisait autrefois",
            "Le ménage Bonacieux",
            "L’amant et le mari",
            "Plan de campagne",
            "Voyage",
            "La comtesse de Winter",
            "Le Ballet de la Merlaison",
            "Le rendez-vous",
            "Le pavillon",
            "La maîtresse de Porthos",
            "La thèse d’Aramis",
            "La femme d’Athos",
            "Retour",
            "La chasse à l’équipement",
            "Milady",
            "Anglais et Français",
            "Un dîner de procureur",
            "Soubrette et maîtresse",
            "Où il est traité de l’équipement d’Aramis et de Porthos",
            "La nuit tous les chats sont gris",
            "Rêve de vengeance",
            "Le secret de Milady",
            "Comment, sans se déranger, Athos trouva son équipement",
            "Une vision",
            "Le Cardinal",
            "Le siège de la Rochelle",
            "Le vin d’Anjou",
            "L’auberge du Colombier-Rouge",
            "De l’utilité des tuyaux de poêle",
            "Scène conjugale",
            "Le bastion Saint-Gervais",
            "Le conseil des Mousquetaires",
            "Affaire de famille",
            "Fatalité",
            "Causerie d’un frère avec sa sœur",
            "Officier",
            "Première journée de captivité",
            "Deuxième journée de captivité",
            "Troisième journée de captivité",
            "Quatrième journée de captivité",
            "Cinquième journée de captivité",
            "Un moyen de tragédie classique",
            "Évasion",
            "Ce qui se passait à Portsmouth le 23 août 1628",
            "En France",
            "Le couvent des Carmélites de Béthune",
            "Deux variétés de démons",
            "Une goutte d’eau",
            "L’homme au manteau rouge",
            "Le jugement",
            "L’exécution",
            "Un messager du Cardinal"

        ];


        chapitresTroisMousquetaires.forEach(
            (titre, index) => {

                const numero =
                    String(index + 1).padStart(2, "0");


                currentBookChapters.push({

                    tome: "Les Trois Mousquetaires",

                    titre:
                        `Chapitre ${numero} — ${titre}`,

                    fichier:
                        `livres/trois-mousquetaires/tome-1/chapitre-${numero}.html`

                });

            }
        );


        /*
         * ÉPILOGUE
         */

        currentBookChapters.push({

            tome: "Les Trois Mousquetaires",

            titre: "Épilogue",

            fichier:
                "livres/trois-mousquetaires/tome-1/epilogue.html",

            epilogue: true

        });

    }

    /*
     * ==========================================
     * VINGT MILLE LIEUES SOUS LA MER
     * ==========================================
     */


else if (currentBook.id === "vingt-mille-lieues") {

    const chapitresPartie1 = [
        "Un écueil fuyant",
        "Le pour et le contre",
        "Comme il plaira à monsieur",
        "Ned Land",
        "À l’aventure !",
        "À toute vapeur",
        "Une baleine d’espèce inconnue",
        "Mobilis in mobile",
        "Les colères de Ned Land",
        "L’homme des eaux",
        "Le Nautilus",
        "Tout par l’électricité",
        "Quelques chiffres",
        "Le Fleuve-Noir",
        "Une invitation par lettre",
        "Promenade en plaine",
        "Une forêt sous-marine",
        "Quatre mille lieues sous le Pacifique",
        "Vanikoro",
        "Le détroit de Torrès",
        "Quelques jours à terre",
        "La foudre du capitaine Nemo",
        "Ægri somnia",
        "Le royaume du corail"
    ];

    const chapitresPartie2 = [
        "L’Océan Indien",
        "Une nouvelle proposition du capitaine Nemo",
        "Une Perle de dix millions",
        "La Mer Rouge",
        "Arabian-Tunnel",
        "L’Archipel grec",
        "La Méditerranée en quarante-huit heures",
        "La Baie de Vigo",
        "Un Continent disparu",
        "Les Houillères sous-marines",
        "La Mer de Sargasses",
        "Cachalots et Baleines",
        "La Banquise",
        "Le Pôle Sud",
        "Accident ou Incident",
        "Faute d’air",
        "Du Cap Horn à l’Amazone",
        "Les Poulpes",
        "Le Gulf-Stream",
        "Par 47° 24′ de latitude et de 17° 28′ de longitude",
        "Une Hécatombe",
        "Les dernières paroles du capitaine Nemo",
        "Conclusion"
    ];


    chapitresPartie1.forEach(
        (titre, index) => {

            const numero =
                String(index + 1).padStart(2, "0");

            currentBookChapters.push({

                tome: "Partie I",

                titre:
                    `Chapitre ${numero} — ${titre}`,

                fichier:
                    `livres/vingt-mille-lieues/partie-1/chapitre-${numero}.html`

            });

        }
    );


    chapitresPartie2.forEach(
        (titre, index) => {

            const numero =
                String(index + 1).padStart(2, "0");

            currentBookChapters.push({

                tome: "Partie II",

                titre:
                    `Chapitre ${numero} — ${titre}`,

                fichier:
                    `livres/vingt-mille-lieues/partie-2/chapitre-${numero}.html`

            });

        }
    );

}


    /*
     * ==========================================
     * LIVRE NON ENCORE DISPONIBLE
     * ==========================================
     */

    else {

        alert(
            "La lecture de cette œuvre sera bientôt disponible dans Biblio."
        );

        return;

    }


    /*
     * ==========================================
     * INITIALISATION DU LECTEUR
     * ==========================================
     */

    document.getElementById("bookReaderTitle").textContent =
        currentBook.titre;

    document.getElementById("bookReaderAuthor").textContent =
        currentBook.auteur;


    buildReaderChapters();


    loadChapter(0);


    if (bookPage) {
        bookPage.classList.add("hidden");
    }


    reader.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });


    updateBookReaderProgress();

}

// ==========================================
// SOMMAIRE DU LECTEUR
// ==========================================

function buildReaderChapters() {

    const container =
        document.getElementById("bookReaderChapters");


    if (!container) return;


    container.innerHTML = "";


    let currentTome = null;


    currentBookChapters.forEach(
        (chapter, index) => {

            /*
             * Créer un titre lorsqu'on
             * commence un nouveau tome.
             */

            if (chapter.tome !== currentTome) {

                currentTome = chapter.tome;


                const tomeTitle =
                    document.createElement("div");


                tomeTitle.className =
                    "reader-tome-title";


                tomeTitle.textContent =
                    currentTome;


                container.appendChild(tomeTitle);

            }


            const button =
                document.createElement("button");


            button.className =
                "reader-chapter-button";


            button.textContent =
                chapter.titre;


            button.onclick = () => {

                loadChapter(index);

            };


            container.appendChild(button);

        }
    );

}

// ==========================================
// CHARGEMENT D'UN CHAPITRE
// ==========================================

function loadChapter(index) {

    if (
        index < 0 ||
        index >= currentBookChapters.length
    ) {
        return;
    }

    currentChapterIndex = index;

    const chapter =
        currentBookChapters[index];

    document
        .getElementById("bookReaderVolume")
        .textContent =
            chapter.tome || "";

    document
        .getElementById("bookReaderChapterTitle")
        .textContent =
            chapter.titre;

    const textContainer =
        document.getElementById("bookReaderText");

    textContainer.innerHTML = `
        <p>Chargement du chapitre...</p>
    `;

    fetch(chapter.fichier)
        .then(response => {

            if (!response.ok) {

                throw new Error(
                    `Impossible de charger ${chapter.fichier}`
                );

            }

            return response.text();

        })
        .then(html => {

            textContainer.innerHTML = html;

            updateReaderNavigation();
            updateActiveChapter();

            window.scrollTo({
                top: 0,
                behavior: "auto"
            });

            updateBookReaderProgress();

        })
        .catch(error => {

            console.error(error);

            textContainer.innerHTML = `
                <div class="reader-empty">

                    <h2>Chapitre indisponible</h2>

                    <p>
                        Le texte de ce chapitre n'a pas encore
                        été ajouté à Biblio.
                    </p>

                </div>
            `;

            updateReaderNavigation();
            updateActiveChapter();

        });

}

// ==========================================
// CHAPITRE PRÉCÉDENT
// ==========================================

function previousChapter() {

    if (currentChapterIndex <= 0) {
        return;
    }


    loadChapter(
        currentChapterIndex - 1
    );

}


// ==========================================
// CHAPITRE SUIVANT
// ==========================================

function nextChapter() {

    if (
        currentChapterIndex >=
        currentBookChapters.length - 1
    ) {
        return;
    }


    loadChapter(
        currentChapterIndex + 1
    );

}


// ==========================================
// NAVIGATION DU LECTEUR
// ==========================================

function updateReaderNavigation() {

    const previous =
        document.getElementById("readerPrevious");

    const next =
        document.getElementById("readerNext");


    if (!previous || !next) return;


    previous.disabled =
        currentChapterIndex === 0;


    next.disabled =
        currentChapterIndex ===
        currentBookChapters.length - 1;


    if (
        currentChapterIndex ===
        currentBookChapters.length - 1
    ) {

        next.textContent =
            "Fin de l'œuvre";

    } else {

        next.textContent =
            "Chapitre suivant →";

    }

}


// ==========================================
// CHAPITRE ACTIF
// ==========================================

function updateActiveChapter() {

    document
        .querySelectorAll(".reader-chapter-button")
        .forEach((button, index) => {

            button.classList.toggle(
                "active",
                index === currentChapterIndex
            );

        });

}


// ==========================================
// PROGRESSION DU LECTEUR
// ==========================================

function updateBookReaderProgress() {

    const reader =
        document.getElementById("bookReader");


    if (
        !reader ||
        reader.classList.contains("hidden")
    ) {
        return;
    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {

        document
            .getElementById("bookReaderProgress")
            .style.width = "0%";

        return;

    }


    const progress =
        Math.min(
            100,
            Math.max(
                0,
                (scrollTop / documentHeight) * 100
            )
        );


    document
        .getElementById("bookReaderProgress")
        .style.width =
            `${progress}%`;

}


// ==========================================
// FERMER LE LECTEUR
// ==========================================

function closeBookReader() {

    const reader =
        document.getElementById("bookReader");

    const bookPage =
        document.getElementById("bookPage");


    if (reader) {
        reader.classList.add("hidden");
    }


    if (bookPage) {
        bookPage.classList.remove("hidden");
    }


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


// ==========================================
// QUIZ
// ==========================================

function startQuiz() {

    if (!currentBook || !currentBook.quiz) {
        return;
    }


    currentQuizIndex = 0;

    quizScore = 0;


    document
        .getElementById("quizModal")
        .classList.remove("hidden");


    displayQuestion();

}


function displayQuestion() {

    const quiz =
        currentBook.quiz;


    if (currentQuizIndex >= quiz.length) {

        showQuizResult();

        return;
    }


    const question =
        quiz[currentQuizIndex];


    document.getElementById("quizProgress").textContent =
        `Question ${currentQuizIndex + 1} / ${quiz.length}`;


    document.getElementById("quizQuestion").textContent =
        question.question;


    document.getElementById("quizAnswer").value = "";


    document
        .getElementById("quizAnswer")
        .classList.remove("hidden");


    document
        .querySelector(".quiz-submit")
        .classList.remove("hidden");


    document
        .getElementById("quizFeedback")
        .textContent = "";

}


function submitAnswer() {

    const input =
        document.getElementById("quizAnswer");


    const userAnswer =
        normalizeText(input.value);


    if (!userAnswer) {
        return;
    }


    const correctAnswer =
        normalizeText(
            currentBook
                .quiz[currentQuizIndex]
                .answer
        );


    const feedback =
        document.getElementById("quizFeedback");


    if (
        userAnswer.includes(correctAnswer) ||
        correctAnswer.includes(userAnswer)
    ) {

        quizScore++;

        feedback.textContent =
            "✓ Bonne réponse !";

        feedback.className =
            "quiz-feedback correct";

    } else {

        feedback.textContent =
            `✗ Réponse attendue : ${currentBook.quiz[currentQuizIndex].answer}`;

        feedback.className =
            "quiz-feedback incorrect";

    }


    currentQuizIndex++;


    setTimeout(
        displayQuestion,
        1200
    );

}


function showQuizResult() {

    document.getElementById("quizProgress").textContent =
        "Quiz terminé";


    document.getElementById("quizQuestion").textContent =
        `Score : ${quizScore} / ${currentBook.quiz.length}`;


    document.getElementById("quizAnswer")
        .classList.add("hidden");


    document
        .querySelector(".quiz-submit")
        .classList.add("hidden");


    document.getElementById("quizFeedback").textContent =
        "Bravo ! Vous venez de tester votre compréhension de l'œuvre.";


    document
        .getElementById("quizFeedback")
        .className =
            "quiz-feedback";

}


function closeQuiz() {

    document
        .getElementById("quizModal")
        .classList.add("hidden");


    document
        .getElementById("quizAnswer")
        .classList.remove("hidden");


    document
        .querySelector(".quiz-submit")
        .classList.remove("hidden");

}


// ==========================================
// MENU MOBILE
// ==========================================

function toggleMenu() {

    document
        .querySelector(".header nav")
        .classList.toggle("mobile-visible");

}


// ==========================================
// RÉSUMÉ 10 MINUTES
// ==========================================

function openTenMinuteSummary() {

    if (!currentBook) return;


    const reader =
        document.getElementById("tenMinuteReader");


    const bookPage =
        document.getElementById("bookPage");


    document.getElementById("readerTitle").textContent =
        currentBook.titre;


    const content =
        document.getElementById("tenMinuteContent");


    const toc =
        document.getElementById("readerToc");


    content.innerHTML = "";

    toc.innerHTML = "";


    if (
        !currentBook.resume10min ||
        currentBook.resume10min.length === 0
    ) {

        content.innerHTML = `

            <div class="reader-empty">

                <h2>Résumé en préparation</h2>

                <p>
                    Le résumé complet de cette œuvre est actuellement
                    en cours de préparation.
                </p>

            </div>

        `;

    } else {

        let completeText = "";


        currentBook.resume10min.forEach(
            (section, index) => {

                const sectionId =
                    `reader-section-${index}`;


                const tocButton =
                    document.createElement("button");


                tocButton.textContent =
                    `${index + 1}. ${section.titre}`;


                tocButton.onclick = () => {

                    document
                        .getElementById(sectionId)
                        .scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                };


                toc.appendChild(tocButton);


                const article =
                    document.createElement("section");


                article.className =
                    "reader-chapter";


                article.id =
                    sectionId;


                const paragraphs =
                    section.texte
                        .split(/\n\s*\n/)
                        .filter(
                            p => p.trim() !== ""
                        );


                let html = `

                    <div class="reader-chapter-number">
                        ${String(index + 1).padStart(2, "0")}
                    </div>

                    <h2>${section.titre}</h2>

                `;


                paragraphs.forEach(
                    paragraph => {

                        html +=
                            `<p>${paragraph.trim()}</p>`;

                        completeText +=
                            " " + paragraph.trim();

                    }
                );


                article.innerHTML =
                    html;


                content.appendChild(article);

            }
        );


        const words =
            completeText
                .trim()
                .split(/\s+/)
                .filter(Boolean)
                .length;


        const minutes =
            Math.max(
                1,
                Math.round(words / 160)
            );


        document
            .getElementById("readerMeta")
            .textContent =
                `≈ ${minutes} min de lecture · ${words.toLocaleString("fr-FR")} mots`;


        document
            .getElementById("readerEndMeta")
            .textContent =
                `Résumé complet · ${words.toLocaleString("fr-FR")} mots · environ ${minutes} min de lecture`;

    }


    bookPage.classList.add("hidden");

    reader.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });


    updateReaderProgress();

}


// ==========================================
// FERMER LE RÉSUMÉ 10 MINUTES
// ==========================================

function closeTenMinuteSummary() {

    const reader =
        document.getElementById("tenMinuteReader");


    const bookPage =
        document.getElementById("bookPage");


    reader.classList.add("hidden");

    bookPage.classList.remove("hidden");


    window.scrollTo({
        top: 0,
        behavior: "auto"
    });

}


// ==========================================
// PROGRESSION DU LECTEUR
// ==========================================

function updateReaderProgress() {

    const reader =
        document.getElementById("tenMinuteReader");


    if (
        !reader ||
        reader.classList.contains("hidden")
    ) {
        return;
    }


    const scrollTop =
        window.scrollY;


    const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;


    if (documentHeight <= 0) {
        return;
    }


    const progress =
        Math.min(
            100,
            Math.max(
                0,
                (scrollTop / documentHeight) * 100
            )
        );


    document
        .getElementById("readerProgress")
        .style.width =
            `${progress}%`;

}


window.addEventListener(
    "scroll",
    updateReaderProgress
);

window.addEventListener(
    "scroll",
    updateBookReaderProgress
);


// ==========================================
// RÉSUMÉ COURT
// ==========================================

function showShortSummary() {

    document
        .getElementById("summarySection")
        .scrollIntoView({
            behavior: "smooth"
        });

    document
        .querySelectorAll(".summary-mode")
        .forEach(button =>
            button.classList.remove("active")
        );

    document
        .querySelectorAll(".summary-mode")[0]
        .classList.add("active");

    document
        .getElementById("shortSummary")
        .parentElement
        .classList.remove("hidden");

    document
        .getElementById("studySheet")
        .classList.add("hidden");
}

// ==========================================
// FICHE DE RÉVISION
// ==========================================

function showStudySheet() {

    document
        .getElementById("summarySection")
        .scrollIntoView({
            behavior: "smooth"
        });

    document
        .querySelectorAll(".summary-mode")
        .forEach(button =>
            button.classList.remove("active")
        );

    document
        .querySelectorAll(".summary-mode")[2]
        .classList.add("active");

    document
        .getElementById("shortSummary")
        .parentElement
        .classList.add("hidden");

    document
        .getElementById("studySheet")
        .classList.remove("hidden");
}

// ==========================================
// QUIZ DEPUIS LE LECTEUR
// ==========================================

function startQuizFromReader() {

    closeTenMinuteSummary();


    setTimeout(() => {

        startQuiz();

    }, 300);

}
