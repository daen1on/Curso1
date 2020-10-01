import {v4 as uuid} from 'uuid';

export class DestinoViaje{
    private selected: boolean;
    public servicios: string[];
    id = uuid();

    constructor( public nombre: string, public url: string){
        this.servicios = ["pileta","desayuno"]; //servicios del destino, ahora ponerlo en la vista de componente viajes
        
    }
    isSelected (): boolean{
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected = s;
    }

}
