//Una interficie define la estructura de un objeto
//CUALQUIER OBJETO de tipo producto tiene que tener estos campos

export interface Producte {
    id number;
    nom: string;
    preu: number;
    disponible: boolean;
    descripcio?: string; //el ? indica que es opcional
}