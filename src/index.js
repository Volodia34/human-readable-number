module.exports = function toReadable (number) {
    function getUnitName(n) {
        switch (n) {
            case 0: return "zero";
            case 1: return "one";
            case 2: return "two";
            case 3: return "three";
            case 4: return "four";
            case 5: return "five";
            case 6: return "six";
            case 7: return "seven";
            case 8: return "eight";
            case 9: return "nine";
            default: return "";
        }
    }

    function getTeenName(n) {
        switch (n) {
            case 10: return "ten";
            case 11: return "eleven";
            case 12: return "twelve";
            case 13: return "thirteen";
            case 14: return "fourteen";
            case 15: return "fifteen";
            case 16: return "sixteen";
            case 17: return "seventeen";
            case 18: return "eighteen";
            case 19: return "nineteen";
            default: return "";
        }
    }

    function getTensName(n) {
        switch (n) {
            case 2: return "twenty";
            case 3: return "thirty";
            case 4: return "forty";
            case 5: return "fifty";
            case 6: return "sixty";
            case 7: return "seventy";
            case 8: return "eighty";
            case 9: return "ninety";
            default: return "";
        }
    }

    function getHundredsName(n) {
        switch (n) {
            case 1: return "one hundred";
            case 2: return "two hundred";
            case 3: return "three hundred";
            case 4: return "four hundred";
            case 5: return "five hundred";
            case 6: return "six hundred";
            case 7: return "seven hundred";
            case 8: return "eight hundred";
            case 9: return "nine hundred";
            default: return "";
        }
    }

    if (number < 10) {
        return getUnitName(number);
    } else if (number < 20) {
        return getTeenName(number);
    } else if (number < 100) {
        const ten = Math.floor(number / 10);
        const unit = number % 10;
        return getTensName(ten) + (unit > 0 ? " " + getUnitName(unit) : "");
    } else {
        const hundred = Math.floor(number / 100);
        const remainder = number % 100;
        if (remainder === 0) {
            return getHundredsName(hundred);
        } else {
            return getHundredsName(hundred) + " " + toReadable(remainder);
        }
    }
}
