// ==========================================
// BANQUES DE QUESTIONS — QUIZ BIBLIO
// ==========================================

function creerQuiz(questions) {
    return questions.map(([question, answer]) => ({
        question,
        answer
    }));
}


// ==========================================
// LE COMTE DE MONTE-CRISTO — 30 QUESTIONS
// ==========================================

const quizMonteCristo = creerQuiz([

    ["Quel est le métier d'Edmond Dantès au début du roman ?", "Marin"],
    ["Sur quel navire Edmond Dantès travaille-t-il ?", "Le Pharaon"],
    ["Qui est la fiancée d'Edmond Dantès ?", "Mercédès"],
    ["Où Edmond est-il emprisonné ?", "Au château d'If"],
    ["Qui organise le complot contre Edmond ?", "Danglars, Fernand et Caderousse"],
    ["Quel personnage devient le mentor d'Edmond ?", "L'abbé Faria"],
    ["Combien d'années Edmond passe-t-il environ en prison ?", "Quatorze ans"],
    ["Quel trésor Faria révèle-t-il à Edmond ?", "Le trésor de l'île de Monte-Cristo"],
    ["Comment Edmond s'évade-t-il du château d'If ?", "En prenant la place du cadavre de Faria dans un sac"],
    ["Sur quelle île Edmond découvre-t-il le trésor ?", "L'île de Monte-Cristo"],
    ["Quelle identité principale Edmond utilise-t-il après sa transformation ?", "Le comte de Monte-Cristo"],
    ["Quelle est la véritable identité du comte de Monte-Cristo ?", "Edmond Dantès"],
    ["Quel homme devient comte de Morcerf ?", "Fernand Mondego"],
    ["Quel homme devient banquier ?", "Danglars"],
    ["Quel est le métier de Villefort ?", "Procureur du roi"],
    ["Pourquoi Villefort fait-il emprisonner Edmond ?", "Pour protéger la carrière de son père bonapartiste"],
    ["Quel est le nom du père d'Edmond ?", "Louis Dantès"],
    ["Quel personnage est associé à la famille Morrel ?", "Maximilien Morrel"],
    ["Qui est Valentine de Villefort ?", "La fille de Villefort"],
    ["Qui aime Valentine ?", "Maximilien Morrel"],
    ["Quel personnage est la fille d'Ali Pacha de Janina ?", "Haydée"],
    ["Quel adversaire Edmond affronte-t-il notamment à travers Haydée ?", "Fernand Mondego"],
    ["Quel personnage est le fils de Mercédès et Fernand ?", "Albert de Morcerf"],
    ["Quel est le nom du criminel devenu Andrea Cavalcanti ?", "Benedetto"],
    ["Quel personnage empoisonne plusieurs membres de sa famille ?", "Madame de Villefort"],
    ["Qui est victime des manigances de Madame de Villefort ?", "Valentine"],
    ["Quel personnage aide Edmond à sauver Valentine ?", "Noirtier, avec l'aide d'Edmond"],
    ["Quel thème oppose constamment justice et vengeance ?", "La vengeance"],
    ["Que comprend progressivement Edmond à la fin du roman ?", "Les limites et les conséquences de sa vengeance"],
    ["Avec qui Edmond quitte-t-il finalement l'île de Monte-Cristo ?", "Haydée"]
]);


// ==========================================
// LES TROIS MOUSQUETAIRES — 30 QUESTIONS
// ==========================================

const quizTroisMousquetaires = creerQuiz([

    ["Comment s'appelle le héros principal ?", "D'Artagnan"],
    ["De quelle région d'Artagnan est-il originaire ?", "La Gascogne"],
    ["Quel est le rêve de d'Artagnan ?", "Devenir mousquetaire du roi"],
    ["Quels sont les trois mousquetaires ?", "Athos, Porthos et Aramis"],
    ["Quel roi règne en France dans le roman ?", "Louis XIII"],
    ["Quel cardinal joue un rôle majeur dans l'intrigue ?", "Richelieu"],
    ["Qui est la reine de France ?", "Anne d'Autriche"],
    ["Qui est l'amant de la reine Anne d'Autriche ?", "Le duc de Buckingham"],
    ["Comment s'appelle la femme de Bonacieux ?", "Constance Bonacieux"],
    ["Quel métier exerce monsieur Bonacieux ?", "Mercier"],
    ["Quel mousquetaire est connu pour sa noblesse et son passé mystérieux ?", "Athos"],
    ["Quel mousquetaire aime particulièrement les apparences et le luxe ?", "Porthos"],
    ["Quel mousquetaire hésite entre la vie religieuse et militaire ?", "Aramis"],
    ["Quelle devise célèbre unit les quatre compagnons ?", "Tous pour un, un pour tous"],
    ["Qui commande les mousquetaires du roi ?", "Monsieur de Tréville"],
    ["Quel groupe s'oppose souvent aux mousquetaires ?", "Les gardes du cardinal"],
    ["Quel est le véritable nom de Milady ?", "Milady de Winter"],
    ["Quel signe permet de reconnaître Milady dans son passé ?", "La fleur de lys marquée sur son épaule"],
    ["Quel personnage est l'ennemie principale des héros ?", "Milady"],
    ["Quel siège militaire occupe une partie importante du roman ?", "Le siège de La Rochelle"],
    ["Quel mousquetaire tue Milady ?", "Le bourreau de Lille, avec la participation des mousquetaires"],
    ["Dans quelle ville Milady est-elle exécutée ?", "Béthune"],
    ["Quel personnage est amoureux de Constance Bonacieux ?", "D'Artagnan"],
    ["Quel objet la reine doit-elle récupérer pour éviter le scandale ?", "Les ferrets de diamants"],
    ["Qui donne les ferrets au duc de Buckingham ?", "La reine Anne d'Autriche"],
    ["Quel personnage est également appelé Rochefort ?", "Le comte de Rochefort"],
    ["Quel adversaire d'Artagnan affronte-t-il régulièrement ?", "Rochefort"],
    ["Quel est le principal thème de la relation entre les quatre héros ?", "L'amitié et la loyauté"],
    ["Quel grade d'Artagnan obtient-il à la fin du roman ?", "Lieutenant des mousquetaires"]
]);


// ==========================================
// VINGT MILLE LIEUES SOUS LES MERS — 30 QUESTIONS
// ==========================================

const quizVingtMilleLieues = creerQuiz([

    ["Qui raconte principalement l'histoire ?", "Pierre Aronnax"],
    ["Quel est le métier d'Aronnax ?", "Professeur et scientifique"],
    ["Comment s'appelle le serviteur d'Aronnax ?", "Conseil"],
    ["Quel est le métier de Ned Land ?", "Harponneur"],
    ["Comment s'appelle le sous-marin du capitaine Nemo ?", "Le Nautilus"],
    ["Qui commande le Nautilus ?", "Le capitaine Nemo"],
    ["Quelle mystérieuse créature est recherchée au début du roman ?", "Un monstre marin"],
    ["Comment Aronnax arrive-t-il à bord du Nautilus ?", "Après le naufrage de l'Abraham Lincoln"],
    ["Quel navire participe à la chasse au monstre marin ?", "L'Abraham Lincoln"],
    ["Pourquoi Ned Land veut-il quitter le Nautilus ?", "Parce qu'il souhaite retrouver sa liberté"],
    ["Que signifie la devise du Nautilus ?", "Mobilis in mobile"],
    ["Quelle énergie alimente principalement le Nautilus ?", "L'électricité"],
    ["Quel continent sous-marin est découvert dans le roman ?", "L'Atlantide"],
    ["Quel animal marin attaque les personnages dans un épisode célèbre ?", "Des poulpes géants"],
    ["Quel phénomène géographique empêche le Nautilus de progresser ?", "La banquise"],
    ["Quel lieu Nemo cherche-t-il à atteindre ?", "Le pôle Sud"],
    ["Quel personnage est le plus attaché à la classification scientifique ?", "Aronnax"],
    ["Quel personnage est pragmatique et souvent méfiant ?", "Ned Land"],
    ["Quel personnage est calme, méthodique et fidèle ?", "Conseil"],
    ["Quel est le caractère général du capitaine Nemo ?", "Mystérieux et indépendant"],
    ["Pourquoi Nemo refuse-t-il la société terrestre ?", "Parce qu'il rejette le monde et ses injustices"],
    ["Quel moyen de transport permet aux héros d'explorer les fonds marins ?", "Le Nautilus"],
    ["Quel élément naturel menace le sous-marin près du pôle Sud ?", "La glace"],
    ["Dans quelle mer les personnages découvrent-ils des perles ?", "La mer des Indes"],
    ["Quel animal Nemo chasse-t-il parfois pour se nourrir ?", "Des animaux marins"],
    ["Quel personnage souhaite régulièrement organiser une évasion ?", "Ned Land"],
    ["Quel thème est associé au personnage de Nemo ?", "La liberté"],
    ["Quel thème scientifique domine le roman ?", "L'exploration des océans"],
    ["Que représente le Nautilus pour Nemo ?", "Un refuge et un instrument de liberté"],
    ["Comment se termine le voyage d'Aronnax ?", "Il s'échappe du Nautilus avec Conseil et Ned Land"]
]);


// ==========================================
// DRACULA — 30 QUESTIONS
// ==========================================

const quizDracula = creerQuiz([

    ["Comment s'appelle le jeune avocat envoyé en Transylvanie ?", "Jonathan Harker"],
    ["Qui accueille Jonathan Harker en Transylvanie ?", "Le comte Dracula"],
    ["Dans quelle région Dracula possède-t-il son château ?", "La Transylvanie"],
    ["Quelle est la véritable nature de Dracula ?", "Un vampire"],
    ["Comment s'appelle la fiancée puis épouse de Jonathan ?", "Mina Murray, puis Mina Harker"],
    ["Quel est le nom de l'amie de Mina ?", "Lucy Westenra"],
    ["Quel professeur devient spécialiste des vampires ?", "Van Helsing"],
    ["Dans quelle ville Dracula étend-il son influence ?", "Londres"],
    ["Quel moyen de transport Dracula utilise-t-il pour rejoindre l'Angleterre ?", "Un navire"],
    ["Quel navire transporte les caisses de Dracula ?", "Le Demeter"],
    ["Quel personnage est le fiancé de Lucy ?", "Arthur Holmwood"],
    ["Quel médecin soigne Lucy ?", "Le docteur Seward"],
    ["Quel personnage est amoureux de Lucy ?", "Quincey Morris"],
    ["Quel est le métier du docteur Seward ?", "Médecin"],
    ["Quel lieu Jonathan découvre-t-il au début du roman ?", "Le château de Dracula"],
    ["Pourquoi Jonathan comprend-il qu'il est prisonnier ?", "Parce qu'il ne peut pas quitter le château"],
    ["Quel objet protège traditionnellement contre les vampires ?", "L'ail"],
    ["Quel objet religieux est utilisé contre Dracula ?", "Le crucifix"],
    ["Quel élément peut repousser Dracula ?", "L'ail"],
    ["Quel personnage joue un rôle essentiel dans la traque ?", "Van Helsing"],
    ["Quelle transformation subit Lucy ?", "Elle devient vampire"],
    ["Quel lien surnaturel Dracula impose-t-il à Mina ?", "Un lien vampirique"],
    ["Quel moyen moderne est utilisé pour communiquer dans le roman ?", "La machine à écrire"],
    ["Sous quelles formes Dracula peut-il apparaître ?", "Notamment en chauve-souris et en brume"],
    ["Quel est le thème central du roman ?", "La confrontation entre le bien et le mal"],
    ["Quel autre thème important le roman explore-t-il ?", "La peur de l'inconnu"],
    ["Quel personnage est chargé de consigner les événements ?", "Jonathan Harker et plusieurs autres narrateurs"],
    ["Quel groupe se forme pour combattre Dracula ?", "Le groupe réuni autour de Van Helsing"],
    ["Où le groupe poursuit-il Dracula vers la fin ?", "En Transylvanie"],
    ["Quel est l'objectif final du groupe ?", "Détruire Dracula"]
]);

const livres = [

    {
        id: "monte-cristo",
        titre: "Le Comte de Monte-Cristo",
        auteur: "Alexandre Dumas",
        annee: 1844,
        epoque: "XIXe siècle",
        genres: ["Roman", "Aventure"],
	image: "images/monte-cristo.jpg",

        description:
            "Edmond Dantès est injustement emprisonné alors qu'il était sur le point de connaître le bonheur. Après des années de captivité, une rencontre va bouleverser son destin.",

        resumeCourt:
            "Edmond Dantès est victime d'un complot et emprisonné au château d'If. Après son évasion, il devient le mystérieux comte de Monte-Cristo et entreprend de se venger de ceux qui l'ont trahi.",

        resumeLong:
            "Edmond Dantès, jeune marin promis à un avenir heureux, est arrêté le jour de ses fiançailles à la suite d'une machination. Il est enfermé au château d'If, où il rencontre l'abbé Faria. Celui-ci lui révèle l'existence d'un immense trésor et lui transmet son savoir. Après la mort de Faria, Dantès parvient à s'évader et découvre le trésor. Devenu extrêmement riche, il prend l'identité du comte de Monte-Cristo et revient dans la société sous plusieurs identités. Il retrouve progressivement les hommes responsables de sa chute et construit une vengeance complexe.",

	resume10min: resumes10min["comte-monte-cristo"],

        analyse:
            "L'œuvre interroge la frontière entre justice et vengeance. Edmond Dantès croit pouvoir agir comme un instrument de justice, mais sa transformation en Monte-Cristo montre progressivement les dangers d'une personne qui s'arroge le droit de décider du destin des autres.",

        personnages: [
            {
                nom: "Edmond Dantès",
                role: "Personnage principal",
                description: "Jeune marin innocent devenu le mystérieux comte de Monte-Cristo.",
                evolution: "Il passe de la naïveté à la vengeance, puis découvre progressivement les limites de son propre projet."
            },
            {
                nom: "Mercédès",
                role: "Ancienne fiancée d'Edmond",
                description: "Elle aime Edmond mais croit pendant longtemps qu'il est mort.",
                evolution: "Elle devient une figure importante des conséquences humaines de la vengeance d'Edmond."
            },
            {
                nom: "L'abbé Faria",
                role: "Mentor",
                description: "Prisonnier érudit qui rencontre Edmond au château d'If.",
                evolution: "Il transforme intellectuellement Edmond et lui révèle l'existence du trésor."
            },
            {
                nom: "Fernand Mondego",
                role: "Adversaire",
                description: "Rival amoureux d'Edmond qui participe à son malheur.",
                evolution: "Sa réussite sociale est progressivement détruite par le retour d'Edmond."
            },
            {
                nom: "Danglars",
                role: "Adversaire",
                description: "Homme ambitieux impliqué dans le complot contre Edmond.",
                evolution: "Il devient extrêmement riche avant de subir les conséquences de ses actes."
            },
            {
                nom: "Villefort",
                role: "Adversaire",
                description: "Magistrat qui contribue à l'emprisonnement d'Edmond.",
                evolution: "Son ascension sociale contraste avec les conséquences de ses décisions passées."
            }
        ],

        relations: [
            "Edmond Dantès ↔ Mercédès : amour puis séparation",
            "Edmond Dantès ↔ Faria : relation de mentor et d'élève",
            "Edmond Dantès ↔ Fernand : rivalité et vengeance",
            "Edmond Dantès ↔ Danglars : victime et conspirateur",
            "Edmond Dantès ↔ Villefort : victime et responsable de son emprisonnement"
        ],

        chronologie: [
            "Edmond Dantès revient à Marseille et doit épouser Mercédès.",
            "Il est victime d'un complot et arrêté.",
            "Il est emprisonné au château d'If.",
            "Il rencontre l'abbé Faria.",
            "Faria lui révèle l'existence d'un immense trésor.",
            "Edmond s'évade et découvre le trésor.",
            "Il devient le comte de Monte-Cristo.",
            "Il retrouve les responsables de sa chute.",
            "Il organise progressivement sa vengeance.",
            "Il comprend finalement que la vengeance a des conséquences qui dépassent ses intentions."
        ],

        themes: [
            "Vengeance",
            "Justice",
            "Trahison",
            "Identité",
            "Destin",
            "Pouvoir"
        ],

        quiz: quizMonteCristo,

        lecture: null
    },


    {
        id: "trois-mousquetaires",
        titre: "Les Trois Mousquetaires",
        auteur: "Alexandre Dumas",
        annee: 1844,
        epoque: "XIXe siècle",
        genres: ["Roman", "Aventure"],
	image: "images/trois-mousquetaires.jpg",

        description:
            "Le jeune d'Artagnan quitte sa province pour rejoindre les mousquetaires du roi et se retrouve au cœur des intrigues politiques de la cour.",

        resumeCourt:
            "D'Artagnan arrive à Paris avec le rêve de devenir mousquetaire. Il rencontre Athos, Porthos et Aramis et forme avec eux un groupe inséparable.",


	resume10min: resumes10min["trois-mousquetaires"],

        analyse:
            "L'œuvre repose largement sur le contraste entre les ambitions individuelles et la solidarité du groupe. L'amitié entre les quatre héros devient le moteur de nombreuses aventures.",

        personnages: [
            {
                nom: "D'Artagnan",
                role: "Personnage principal",
                description: "Jeune Gascon ambitieux qui rêve de devenir mousquetaire.",
                evolution: "Il passe progressivement du statut de jeune provincial à celui de véritable homme d'action."
            },
            {
                nom: "Athos",
                role: "Mousquetaire",
                description: "Noble mystérieux et expérimenté.",
                evolution: "Son passé révèle progressivement une personnalité beaucoup plus complexe."
            },
            {
                nom: "Porthos",
                role: "Mousquetaire",
                description: "Personnage puissant, extravagant et attaché aux apparences.",
                evolution: "Il reste principalement fidèle à son caractère flamboyant."
            },
            {
                nom: "Aramis",
                role: "Mousquetaire",
                description: "Mousquetaire partagé entre la vie militaire et ses aspirations religieuses.",
                evolution: "Ses ambitions personnelles deviennent progressivement importantes."
            }
        ],

        relations: [
            "D'Artagnan ↔ Athos : amitié",
            "D'Artagnan ↔ Porthos : amitié",
            "D'Artagnan ↔ Aramis : amitié",
            "Les quatre mousquetaires : solidarité et loyauté"
        ],

        chronologie: [
            "D'Artagnan quitte sa province.",
            "Il arrive à Paris.",
            "Il rencontre Athos, Porthos et Aramis.",
            "Les quatre hommes deviennent compagnons.",
            "Ils affrontent les hommes du cardinal.",
            "Les intrigues de la cour les entraînent dans de nouvelles aventures."
        ],

        themes: [
            "Amitié",
            "Loyauté",
            "Aventure",
            "Pouvoir",
            "Honneur"
        ],

        quiz: quizTroisMousquetaires,

        lecture: null
    },


    {
        id: "vingt-mille-lieues",
        titre: "Vingt mille lieues sous les mers",
        auteur: "Jules Verne",
        annee: 1870,
        epoque: "XIXe siècle",
        genres: ["Roman", "Aventure", "Science-fiction"],
	image: "images/vingt-mille-lieues.jpg",

        description:
            "Le professeur Aronnax embarque à bord du Nautilus et découvre les profondeurs mystérieuses des océans sous le commandement du capitaine Nemo.",

        resumeCourt:
            "Le professeur Aronnax, Conseil et Ned Land sont capturés par le capitaine Nemo et embarqués à bord du Nautilus.",

        resume10min: resumes10min["vingt-mille-lieues"],

        analyse:
            "Jules Verne utilise l'exploration scientifique pour confronter ses personnages à l'immensité de la nature. Le capitaine Nemo représente également une figure ambiguë : il recherche la liberté tout en vivant volontairement isolé du monde.",

        personnages: [
            {
                nom: "Pierre Aronnax",
                role: "Narrateur et scientifique",
                description: "Professeur passionné par les sciences naturelles.",
                evolution: "Sa curiosité scientifique l'emporte souvent sur son désir de retrouver la liberté."
            },
            {
                nom: "Capitaine Nemo",
                role: "Commandant du Nautilus",
                description: "Inventeur mystérieux qui vit sous les mers.",
                evolution: "Sa personnalité et son passé deviennent progressivement plus complexes."
            },
            {
                nom: "Ned Land",
                role: "Harponneur",
                description: "Homme d'action qui supporte difficilement sa captivité.",
                evolution: "Il conserve constamment son désir de liberté."
            },
            {
                nom: "Conseil",
                role: "Serviteur d'Aronnax",
                description: "Compagnon fidèle et méthodique.",
                evolution: "Il accompagne Aronnax dans toutes les étapes du voyage."
            }
        ],

        relations: [
            "Aronnax ↔ Nemo : fascination scientifique et méfiance",
            "Aronnax ↔ Conseil : relation de maître et serviteur",
            "Aronnax ↔ Ned Land : compagnons de captivité",
            "Nemo ↔ Ned Land : opposition autour de la liberté"
        ],

        chronologie: [
            "Une mystérieuse créature est signalée dans les océans.",
            "Aronnax participe à une expédition.",
            "Il découvre le Nautilus.",
            "Nemo capture Aronnax, Conseil et Ned Land.",
            "Ils explorent les fonds marins.",
            "Aronnax découvre progressivement la personnalité de Nemo.",
            "Ned Land cherche constamment un moyen de s'échapper."
        ],

        themes: [
            "Exploration",
            "Science",
            "Liberté",
            "Nature",
            "Isolement"
        ],

        quiz: quizVingtMilleLieues,

        lecture: null
    },


    {
        id: "dracula",
        titre: "Dracula",
        auteur: "Bram Stoker",
        annee: 1897,
        epoque: "XIXe siècle",
        genres: ["Roman", "Fantastique"],
	image: "images/dracula.jpg",

        description:
            "Jonathan Harker se rend en Transylvanie pour rencontrer le mystérieux comte Dracula. Il découvre rapidement qu'il est prisonnier d'une créature surnaturelle.",

        resumeCourt:
            "Jonathan Harker découvre que le comte Dracula est un vampire. Après son arrivée en Angleterre, Dracula commence à étendre son influence.",

        resume10min: resumes10min["dracula"],

        analyse:
            "Le roman exploite la peur de l'inconnu et la confrontation entre modernité et croyances surnaturelles. Dracula représente une menace qui franchit les frontières géographiques et culturelles.",

        personnages: [
            {
                nom: "Jonathan Harker",
                role: "Personnage principal",
                description: "Jeune avocat envoyé en Transylvanie.",
                evolution: "Son voyage transforme progressivement sa perception du monde."
            },
            {
                nom: "Comte Dracula",
                role: "Antagoniste",
                description: "Vampire ancien vivant en Transylvanie.",
                evolution: "Il passe d'une présence mystérieuse à une menace directement combattue."
            },
            {
                nom: "Mina Harker",
                role: "Personnage central",
                description: "Femme intelligente et déterminée liée à Jonathan.",
                evolution: "Elle joue un rôle essentiel dans la compréhension et la lutte contre Dracula."
            },
            {
                nom: "Van Helsing",
                role: "Chasseur de vampires",
                description: "Professeur qui comprend la nature surnaturelle de Dracula.",
                evolution: "Il devient le principal organisateur de la lutte contre Dracula."
            }
        ],

        relations: [
            "Jonathan Harker ↔ Mina Harker : couple",
            "Van Helsing ↔ Dracula : confrontation",
            "Jonathan Harker ↔ Dracula : victime et prédateur",
            "Mina Harker ↔ Dracula : relation surnaturelle imposée"
        ],

        chronologie: [
            "Jonathan Harker arrive au château de Dracula.",
            "Il comprend progressivement qu'il est prisonnier.",
            "Dracula part pour l'Angleterre.",
            "Lucy Westenra tombe sous son influence.",
            "Van Helsing identifie la menace.",
            "Le groupe organise la traque de Dracula."
        ],

        themes: [
            "Peur",
            "Mort",
            "Surnaturel",
            "Amour",
            "Modernité"
        ],

        quiz: quizDracula,

        lecture: null
    }

];
