// 2️⃣ Calculadora de partidas Rankeadas

saldoVitorias = saldoVitorias( 52, 1)

const patente = parseInt(saldoVitorias)

const {nivel, mensagem } = [
    {min: 0, max: 10, nivel: "Ferro", mensagem: "Continue avançando!"},
    {min: 11, max: 20, nivel: "Bronze", mensagem: "Continue assim!" },
    {min: 21, max: 50, nivel: "Prata", mensagem: "Continue crescendo!"},
    {min: 51, max: 80, nivel: "Ouro", mensagem: "Mantenha o bom trabalho!"},
    {min: 81, max: 90, nivel: "Diamante", mensagem: "Continue aprimorando suas habilidades!"},
    {min: 91, max: 100, nivel: "Lendário", mensagem: "Continue buscando a perfeição!"},
    {min: 101, max: Infinity, nivel: "Imortal", mensagem: "Parabéns, você é o melhor!"}

].find(({min, max}) => patente >= min && patente <= max)



function saldoVitorias(vitorias, derrotas)
{
  return vitorias - derrotas
}

console.log(`O Herói tem de saldo de ${saldoVitorias} vitorias, ele está no nível ${nivel}, ${mensagem}`)