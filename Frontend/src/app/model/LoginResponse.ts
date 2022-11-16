export class LoginResponse {
    constructor(
        public role: string = '',
        public accessToken: string = '',
        public expiresIn: number = 0,
        public email: string = '',
        public personalId: string = '',
        public name: string = '',
        public surname: string = '',
    ) {}
}
  