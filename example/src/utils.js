
export const DATA = {
    cpf: '156.631.881-50',
    cnpj: '40.841.253/0001-02',
    cep: '31.234-567',
    rg: 'MG-10.123.456',
    telefone: '(31) 99999-9998',
    inscricaoestadual: {
        ac: '01.004.823/001-12',
        al: '240000048',
        am: '04.145.871-0',
        ap: '240000048',
        ba: '123456-63',
        ce: '06.000001-5',
        df: '06 000001 123-55',
        es: '082.560.67-6',
        go: '06.000.001-5',
        ma: '12.104.376-2',
        mg: '001.819.263/0048',
        ms: '001819263',
        mt: '0018192630-1',
        pa: '06-000001-5',
        pb: '06000001-5',
        pe: '0192310-24',
        pi: '19.301.656-7',
        pr: '19301656-78',
        rj: '20.040.04-1',
        rn: '20.040.040-1',
        ro: '101.62521-3',
        rr: '24006628-1',
        rs: '024/0440013',
        sc: '271.234.563',
        se: '27123456-3',
        sp: '114.814.878.119',
        to: '11 81 4878119',
    },
    currency: 'R$ 1.234,56',
    number: '1.234,56',
    time: '06:33',
    placa: 'ADJ-5468',
    renavam: '12345678900',
    titulo: '123456780698',
    pispasep: '12345678919'
}

export const DATARAW = {
    cpf: '15663188150',
    cnpj: '40841253000102',
    cep: '31234567',
    rg: 'MG10123456',
    telefone: '3199999998',
    inscricaoestadual: {
        ac: '0100482300112',
        al: '240000048',
        am: '041458710',
        ap: '240000048',
        ba: '12345663',
        ce: '060000015',
        df: '0600000112355',
        es: '082560676',
        go: '060000015',
        ma: '121043762',
        mg: '0018192630048',
        ms: '001819263',
        mt: '00181926301',
        pa: '060000015',
        pb: '060000015',
        pe: '019231024',
        pi: '193016567',
        pr: '1930165678',
        rj: '20040041',
        rn: '200400401',
        ro: '101625213',
        rr: '240066281',
        rs: '0240440013',
        sc: '271234563',
        se: '271234563',
        sp: '114814878119',
        to: '11814878119'
    },
    currency: '1234,56',
    currencyNumber: 1234.56,
    number: '1234,56',
    time: '0633',
    placa: 'ADJ5468',
    renavam: '12345678900',
    titulo: '123456780698',
    pispasep: '12345678919'
}


export const DATAERROR = {
    cpf: '15663188151',
    cnpj: '40841253000101',
    cep: '3123456',
    rg: 'ZZ-10.123.456',
    telefone: '319999999',
    inscricaoestadual: {
        ac: '01004823001126',
        al: '2400000486',
        am: '0414587106',
        ap: '2400000486',
        ba: '123456636',
        ce: '0600000156',
        df: '06000001123556',
        es: '0825606766',
        go: '0600000156',
        ma: '1210437626',
        mg: '00181926300486',
        ms: '0018192636',
        mt: '001819263016',
        pa: '0600000156',
        pb: '0600000156',
        pe: '0192310246',
        pi: '1930165676',
        pr: '19301656786',
        rj: '200400416',
        rn: '20040040166',
        ro: '1016252136',
        rr: '2400662816',
        rs: '02404400136',
        sc: '2712345636',
        se: '2712345636',
        sp: '1148148781196',
        to: '118148781196'
    },
    currency: 'R$1000.10',
    number: '1000.10',
    time: '0633',
    placa: 'AEJ123',
    renavam: '12345678901',
    titulo: '123456780699',
    pispasep: '12345678918'
}


export const estados = ['ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma',
    'mg', 'ms', 'mt', 'pa', 'pb', 'pe', 'pi', 'pr', 'rj', 'rn', 'ro', 'rr', 'rs',
    'sc', 'se', 'sp', 'to'
];

// ── Random valid-value generators ────────────────────────────────────────────

function rndDigits(n) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * 10)).join('');
}

function modulo11Custom(str, size, maxMult) {
    for (let n = 0; n < size; n++) {
        let soma = 0, mult = 2;
        for (let i = str.length - 1; i >= 0; i--) {
            soma += mult * parseInt(str[i]);
            mult = mult >= maxMult ? 2 : mult + 1;
        }
        str += ((soma * 10) % 11) % 10;
    }
    return str;
}

export const GENERATORS = {
    cpf() {
        return modulo11Custom(rndDigits(9), 2, 12);
    },
    cnpj() {
        const base = rndDigits(8) + '0001';
        function check(s) {
            let soma = 0, pos = s.length - 7;
            for (let i = s.length; i >= 1; i--) {
                soma += parseInt(s[s.length - i]) * pos--;
                if (pos < 2) pos = 9;
            }
            return soma % 11 < 2 ? 0 : 11 - soma % 11;
        }
        const d1 = check(base);
        return base + d1 + check(base + d1);
    },
    cep() {
        return rndDigits(8);
    },
    rg() {
        const states = ['MG', 'SP', 'RJ', 'RS', 'PR', 'SC', 'BA', 'GO'];
        const state = states[Math.floor(Math.random() * states.length)];
        return state + rndDigits(8);
    },
    telefone() {
        const ddds = ['11', '21', '31', '41', '51', '61', '71', '81', '85', '91'];
        const ddd = ddds[Math.floor(Math.random() * ddds.length)];
        return ddd + '9' + rndDigits(8);
    },
    placa() {
        const L = () => String.fromCharCode(65 + Math.floor(Math.random() * 26));
        return L() + L() + L() + rndDigits(4);
    },
    renavam() {
        const base = rndDigits(10);
        const weights = [3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        let sum = 0;
        for (let i = 0; i < 10; i++) sum += parseInt(base[i]) * weights[i];
        sum *= 10;
        const dv = sum % 11 === 10 ? 0 : sum % 11;
        return base + dv;
    },
    titulo() {
        const seq = rndDigits(8);
        const estado = String(1 + Math.floor(Math.random() * 27)).padStart(2, '0');
        const padded = ('0' + seq + estado).split('').map(Number);
        const exce = parseInt(estado) <= 2;
        let dig1 = (padded[0]*2 + padded[1]*9 + padded[2]*8 + padded[3]*7 + padded[4]*6 +
                    padded[5]*5 + padded[6]*4 + padded[7]*3 + padded[8]*2) % 11;
        if (dig1 === 0) dig1 = exce ? 1 : 0;
        else if (dig1 === 1) dig1 = 0;
        else dig1 = 11 - dig1;
        let dig2 = (padded[9]*4 + padded[10]*3 + dig1*2) % 11;
        if (dig2 === 0) dig2 = exce ? 1 : 0;
        else if (dig2 === 1) dig2 = 0;
        else dig2 = 11 - dig2;
        return seq + estado + dig1 + dig2;
    },
    time() {
        return String(Math.floor(Math.random() * 24)).padStart(2, '0') +
               String(Math.floor(Math.random() * 60)).padStart(2, '0');
    },
    currency() {
        const intPart = Math.floor(Math.random() * 99999) + 1;
        const decPart = Math.floor(Math.random() * 100);
        return intPart + ',' + String(decPart).padStart(2, '0');
    },
    pispasep() {
        const base = rndDigits(10);
        let d = 0, p = 2;
        for (let c = 9; c >= 0; c--) {
            d += parseInt(base[c]) * p;
            p = p < 9 ? p + 1 : 2;
        }
        return base + ((10 * d) % 11) % 10;
    },
};
