export class JwtUser {
    constructor(nameId: string, role: string) {
        this.nameId = nameId;
        this.role = role;
    }

    nameId: string;
    role: string;
}