export interface IUser {
    id: number;               // ID único del usuario
    user: any;             // Nombre de usuario
    email: string;            // Correo electrónico del usuario
    person_id: number;        // Relación con la entidad 'Person'
    person: IPerson;    // Información personal, puede ser null
  }
  
  export interface IPerson {
    id: number;               // ID único de la persona
    ci?: string | null | undefined;       // Cédula de identidad, opcional o null
    name?: string | null | undefined;     // Nombre de la persona, opcional o null
    lastname?: string | null | undefined; // Apellido de la persona, opcional o null
    address?: string | null | undefined;  // Dirección, opcional o null
    phone?: string | null | undefined;    // Teléfono, opcional o null
    photo?: string | null | undefined;    // URL de la foto, opcional o null
  }
  