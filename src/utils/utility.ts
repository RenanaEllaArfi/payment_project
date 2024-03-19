export class Utility {

    static getNumber(value: any): number {
        if (Utility.isValidNumber(value)) {
            return Number(value);
        }
        throw "error"
    }


    static isValidNumber(value: any): boolean {
        if (value != 0 && !value) {
            return false;
        }
        if (typeof value === "number") {
            return true;
        } else if (typeof value === "string") {
            return !isNaN(Number(value));
        } else {
            return false;
        }
    }

}
