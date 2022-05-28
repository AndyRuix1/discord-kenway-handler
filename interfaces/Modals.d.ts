export declare type ModalComponentTypes = 'INPUT';
export declare type ModalComponentStyles = 'PARRAFO' | 'CORTO';
export interface CreateModalInterface {
    titulo: string;
    id: string;
    componentes: ModalComponentsInterface[];
}
export interface ModalComponentsInterface {
    id: string;
    tipo: ModalComponentTypes;
    label: string;
    estilo?: ModalComponentStyles;
    placeholder?: string;
    valorDefecto?: string;
    largoMin?: number;
    largoMax?: number;
    requerido?: boolean;
}
