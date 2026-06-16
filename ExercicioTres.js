/*
 * EXERCÍCIO 3 - BeeCrowd
 * --------------------------------------------------------
 * DESCRIÇÃO
 * Calcule a área de uma circunferência dado o raio.
 * Fórmula: area = π * raio²  (π = 3.14159)
 *
 * --------------------------------------------------------
 * ENTRADA
 * Um valor de ponto flutuante (dupla precisão) = raio.
 *
 * --------------------------------------------------------
 * SAÍDA
 * Imprima "A=" seguido pelo valor da área com 4 casas
 * decimais após o ponto. Sem espaços, sem mensagem extra.
 *
 * --------------------------------------------------------
 * EXEMPLOS
 * Entrada : 2.00    Saída: A=12.5664
 * Entrada : 100.64  Saída: A=31819.3103
 * Entrada : 150.00  Saída: A=70685.7750
 * --------------------------------------------------------
 */

const prompt = require('prompt-sync')();

const pi = 3.14159;

const raio = parseFloat(prompt("Digite o valor do raio: "));
const area = pi * Math.pow(raio, 2);

console.log("A=" + area.toFixed(4));