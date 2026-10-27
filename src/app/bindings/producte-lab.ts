//model i dades de prova per la sessió 7- PROPERTY AND BIDING 




export interface ProducteLab{
    id: number;
    nom: string;
    preu: number;
    estoc: number;
    categoria: string;
    imatgeUrl :string;
}


export const PRODUCTES_LAB: ProducteLab[] = [
    { id: 1,
        nom: 'Portàtil ProBook 21', 
        preu: 899,
        estoc: 3,
        categoria: 'Informatica',
        imatgeUrl: 'https://fastly.picsum.photos/id/913/200/300.jpg?hmac=DjpzGA27POHBn03vW7UxM5gI9phMxuAZ4hSKcRfJD9Y'
    },

        { id: 2,
        nom: 'Ratolí sense fil', 
        preu: 24.9,
        estoc: 6,
        categoria: 'Perifèrics',
        imatgeUrl: 'https://picsum.photos/id/1084/536/354?grayscale'
    },


    { id: 3,
        nom: 'Monitor 27', 
        preu: 89.99,
        estoc: 0,
        categoria: 'Pantalles',
        imatgeUrl: 'https://picsum.photos/id/1084/536/354?grayscale'
    },

    { id: 4,
        nom: 'auriculars', 
        preu: 19.99,
        estoc: 8,
        categoria: 'Audio',
        imatgeUrl: 'https://picsum.photos/id/1084/536/354?grayscale'
    },

{ id: 5,
        nom: 'teclat rgb', 
        preu: 39.99,
        estoc: 0,
        categoria: 'Perifèric',
        imatgeUrl: ''
    }



]  