export class Member {
    talk: string;

    constructor() {
        this.talk = 'talkだよ'
    }

    public getTalk(): string{
        return this.talk
    }
}
