export class Items {
    id!: number;
    titre!: string;
    categorie!: string;
    prix!: number;
    description!: string;
    constructor(id:number, titre:string,categorie:string,prix:number, description:string ){
        this.id=id;
        this.titre=titre;
        this.categorie=categorie;
        this.prix=prix;
        this.description=description;

    }
}
