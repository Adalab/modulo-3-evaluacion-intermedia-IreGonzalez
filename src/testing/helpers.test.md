import { suma } from "./helpers";
//esta primera línea te ayuda simplemente a saber qué testeamos, a leer la descripción concreta del test
describe('test suma', () => {
    test('suma dos numeros positivos', () => {
        suma(2, 3);
        expect(resultado).toBe(5);
    });
});