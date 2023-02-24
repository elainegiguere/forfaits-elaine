import { Forfait } from "./forfait";

export const FORFAITS: Forfait[] = [
    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'Las Vegas',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.',
        code: 5437,
        // categories: ['plein-air', 'détente'],
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
        // avis:[ {
        //     note: 4,
        //     commentaires:'On gagne à y aller souvent',
        //  },
        // ],
    },
    
    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'Los Angeles',
        description: ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.',
        code: 5438,
        // categories: ['sport', 'plein-air', 'détente'],
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
        // avis:[ {
        //     note: 4,
        //     commentaires:'On gagne à y aller souvent',
        //  },
        // ],
    },

    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'Miami',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.',
        code: 5439,
        // categories: ['sport', 'plein-air', 'détente'],
        statut:'premium',
        etablissement: 
        { nom:'Chateau Cash',      
            coordonnees: 
                {
                adresse: '4332',
                ville: 'Miami',
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
        // avis:[ {
        //     note: 4,
        //     commentaires:'On gagne à y aller souvent',
        //  },
        // ],
    },

    {
        urlImage:'https://picsum.photos/200/200',
        nom: 'New York',
        description: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem.',
        code: 5440,
        // categories: ['sport', 'plein-air', 'détente'],
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
            description: ' Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem',
        },

        dateDeDebut: '10 mars 2022',
        dateDeFin: '12 mars 2022',
        prix:700,
        nouveauPrix: 700,
        // avis:[ {
        //     note: 4,
        //     commentaires:'On gagne à y aller souvent',
        //  },
        // ],
    },
]
