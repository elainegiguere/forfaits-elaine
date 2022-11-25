import { Forfaits } from "./forfaits";

export const FORFAITS: Forfaits[] = [
    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'Las Vegas',
        description: 'Est nemo quasi non sunt doloribus aut tempora quaerat rem aspernatur modi',
        code: 5437,
        categories: ['sport', 'plein-air', 'détente'],
        statut:'premium',
        etablissement: 
        { 
          nom:'Chateau Cash',      
          coordonnees: 
                {
                adresse: '4332 rue Broadway',
                ville: 'Las Vegas',
                telephone: '276-585-3333', 
                courriel: 'me@vegas.com',
                siteWeb: 'vegas.com',
            },
            description: 'Est nemo quasi non sunt doloribus aut tempora',
        },

        dateDeDebut: '10 mars 2022',
        dateDeFin: '12 mars 2022',
        prix:899,
        nouveauPrix: 799,
        avis:[ {
            note: 4,
            commentaires:'On gagne à y aller souvent',
         },
        ],
    },
    
    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'Los Angeles',
        description: 'Est nemo quasi non sunt doloribus aut tempora quaerat rem aspernatur modi',
        code: 5438,
        categories: ['sport', 'plein-air', 'détente'],
        statut:'premium',
        etablissement: 
        { nom:'Chateau Cash',      
            coordonnees: 
                {
                adresse: '4332',
                ville: 'Las Vegas',
                telephone: '276-585-3333', 
                courriel: 'me@vegas.com',
                siteWeb: 'vegas.com',
            },
            description: 'Est nemo quasi non sunt doloribus aut tempora',
        },

        dateDeDebut: '10 mars 2022',
        dateDeFin: '12 mars 2022',
        prix: 1200,
        nouveauPrix: 1100,
        avis:[ {
            note: 4,
            commentaires:'On gagne à y aller souvent',
         },
        ],
    },

    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'Miami',
        description: 'Est nemo quasi non sunt doloribus aut tempora quaerat rem aspernatur modi',
        code: 5439,
        categories: ['sport', 'plein-air', 'détente'],
        statut:'premium',
        etablissement: 
        { nom:'Chateau Cash',      
            coordonnees: 
                {
                adresse: '4332',
                ville: 'Las Vegas',
                telephone: '276-585-3333', 
                courriel: 'me@vegas.com',
                siteWeb: 'vegas.com',
            },
            description: 'Est nemo quasi non sunt doloribus aut tempora',
        },

        dateDeDebut: '10 mars 2022',
        dateDeFin: '12 mars 2022',
        prix:1100,
        nouveauPrix: 1000,
        avis:[ {
            note: 4,
            commentaires:'On gagne à y aller souvent',
         },
        ],
    },

    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'New York',
        description: 'Est nemo quasi non sunt doloribus aut tempora quaerat rem aspernatur modi',
        code: 5440,
        categories: ['sport', 'plein-air', 'détente'],
        statut:'',
        etablissement: 
        { nom:'Chateau Cash',      
            coordonnees: 
                {
                adresse: '4332',
                ville: 'Las Vegas',
                telephone: '276-585-3333', 
                courriel: 'me@vegas.com',
                siteWeb: 'vegas.com',
            },
            description: 'Est nemo quasi non sunt doloribus aut tempora',
        },

        dateDeDebut: '10 mars 2022',
        dateDeFin: '12 mars 2022',
        prix:700,
        nouveauPrix: 700,
        avis:[ {
            note: 4,
            commentaires:'On gagne à y aller souvent',
         },
        ],
    },
]
