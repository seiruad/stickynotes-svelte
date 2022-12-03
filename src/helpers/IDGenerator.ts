export class IDGenerator {
    static generateID() {
        const id = crypto.randomUUID() + '-' +  this.generateUID()
        return id
    }

    static generateUID() {
        // I generate the UID from two parts here 
        // to ensure the random number provide enough bits.
        const firstPart = (Math.random() * 46656) | 0;
        const secondPart = (Math.random() * 46656) | 0;
        let first = ("000" + firstPart.toString(36)).slice(-3);
        let second = ("000" + secondPart.toString(36)).slice(-3);
        
        return firstPart + secondPart;
    }
}