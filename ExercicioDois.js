/*
 * EXERCÍCIO 2 - BeeCrowd
 * --------------------------------------------------------
 * DESCRIÇÃO
 * Leia 2 valores inteiros (A e B), some-os e armazene
 * o resultado em X. Imprima X conforme o formato abaixo.
 *
 * --------------------------------------------------------
 * ENTRADA
 * A entrada contém 2 valores inteiros.
 *
 * --------------------------------------------------------
 * SAÍDA
 * Imprima "X = " seguido pelo valor de X e fim de linha.
 * Atenção: há um espaço antes e depois do sinal de igual.
 *
 * --------------------------------------------------------
 * EXEMPLOS
 * Entrada : 10 / 9      Saída: X = 19
 * Entrada : -10 / 4     Saída: X = -6
 * Entrada : 15 / -7     Saída: X = 8
 * --------------------------------------------------------
 */

const prompt = require('prompt-sync')();

let A = parseInt(prompt("Digite o primeiro valor inteiro: "));
let B = parseInt(prompt("Digite o segundo valor inteiro: "));
const X = A + B;

console.log("X = " + X);