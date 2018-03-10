

const baseURI =   JSON.stringify('<%- BASE_URL %>');
console.log(baseURI);

var ttipo = "municipio";
var iindicativo = "iegm";
var card_position;
var pp = {"educ": 9, "saud": 10, "plan": 11, "fisc": 12, "ambi": 13, "cida": 14, "govt": 15, "iegm": 16};
var displayedColumns = [0, 1, 2, 3, 4, 5, 6];
var selecionado_aux;

let dataTestVazio = "Nota;Selecione alguma região\nEducação;0\nSaúde;0\nPlanejamento;0\nFiscal;0\nAmbiental;0\nCidade;0\nTI;0\nIEGM;0\nEducação-f;C+\nSaúde-f;C+\nPlanejamento-f;C+\nFiscal-f;C+\nAmbiental-f;C+\nCidade-f;C+\nTI-f;C+\nIEGM-f;C+\nid;1\n";
let dataTestMunicipio = "Nota;Água Branca;Aguiar;Alagoa Grande;Alagoa Nova;Alagoinha;Alcantil;Algodão de Jandaíra;Alhandra;Amparo;Aparecida;Araçagi;Arara;Araruna;Areia;Areia de Baraúnas;Areial;Aroeiras;Assunção;Baía da Traição;Bananeiras;Baraúna;Barra de Santa Rosa;Barra de Santana;Barra de São Miguel;Bayeux;Belém;Belém do Brejo do Cruz;Bernardino Batista;Boa Ventura;Boa Vista;Bom Jesus;Bom Sucesso;Bonito de Santa Fé;Boqueirão;Borborema;Brejo do Cruz;Brejo dos Santos;Caaporã;Cabaceiras;Cabedelo;Cachoeira dos Índios;Cacimba de Areia;Cacimba de Dentro;Cacimbas;Caiçara;Cajazeiras;Cajazeirinhas;Caldas Brandão;Camalaú;Campina Grande;Capim;Caraúbas;Carrapateira;Casserengue;Catingueira;Catolé do Rocha;Caturité;Conceição;Condado;Conde;Congo;Coremas;Coxixola;Cruz do Espírito Santo;Cubati;Cuité;Cuité de Mamanguape;Cuitegi;Curral de Cima;Curral Velho;Damião;Desterro;Diamante;Dona Inês;Duas Estradas;Emas;Esperança;Fagundes;Frei Martinho;Gado Bravo;Guarabira;Gurinhém;Gurjão;Ibiara;Igaracy;Imaculada;Ingá;Itabaiana;Itaporanga;Itapororoca;Itatuba;Jacaraú;Jericó;João Pessoa;Joca Claudino;Juarez Távora;Juazeirinho;Junco do Seridó;Juripiranga;Juru;Lagoa;Lagoa de Dentro;Lagoa Seca;Lastro;Livramento;Logradouro;Lucena;Mãe d Água;Malta;Mamanguape;Manaíra;Marcação;Mari;Marizópolis;Massaranduba;Mataraca;Matinhas;Mato Grosso;Maturéia;Mogeiro;Montadas;Monte Horebe;Monteiro;Mulungu;Natuba;Nazarezinho;Nova Floresta;Nova Olinda;Nova Palmeira;Olho d Água;Olivedos;Ouro Velho;Parari;Passagem;Patos;Paulista;Pedra Branca;Pedra Lavrada;Pedras de Fogo;Pedro Régis;Piancó;Picuí;Pilar;Pilões;Pilõezinhos;Pirpirituba;Pitimbu;Pocinhos;Poço Dantas;Poço de José de Moura;Pombal;Prata;Princesa Isabel;Puxinanã;Queimadas;Quixaba;Remígio;Riachão;Riachão do Bacamarte;Riachão do Poço;Riacho de Santo Antônio;Riacho dos Cavalos;Rio Tinto;Salgadinho;Salgado de São Félix;Santa Cecília;Santa Cruz;Santa Helena;Santa Inês;Santa Luzia;Santa Rita;Santa Teresinha;Santana de Mangueira;Santana dos Garrotes;Santo André;São Bentinho;São Bento;São Domingos;São Domingos do Cariri;São Francisco;São João do Cariri;São João do Rio do Peixe;São João do Tigre;São José da Lagoa Tapada;São José de Caiana;São José de Espinharas;São José de Piranhas;São José de Princesa;São José do Bonfim;São José do Brejo do Cruz;São José do Sabugi;São José dos Cordeiros;São José dos Ramos;São Mamede;São Miguel de Taipu;São Sebastião de Lagoa de Roça;São Sebastião do Umbuzeiro;São Vicente do Seridó;Sapé;Serra Branca;Serra da Raiz;Serra Grande;Serra Redonda;Serraria;Sertãozinho;Sobrado;Solânea;Soledade;Sossêgo;Sousa;Sumé;Tacima;Taperoá;Tavares;Teixeira;Tenório;Triunfo;Uiraúna;Umbuzeiro;Várzea;Vieirópolis;Vista Serrana;Zabelê\nEducação; 0.47;0.83;0.50;0.67;0.72;0.49;0.63;0.58;0.58;0.67;0.58;0.54;0.70;0.30;0.61;0.60;0.49;0.68;0.75;0.42;0.57;0.47;0.53;0.54;0.63;0.37;0.68;0.71;0.72;0.65;0.55;0.57;0.49;0.85;0.70;0.48;0.53;0.74;0.67;0.57;0.69;0.29;0.78;0.48;0.56;0.62;0.73;0.84;0.51;0.65;0.72;0.65;0.84;0.48;0.54;0.65;0.57;0.55;0.65;0.51;0.72;0.63;0.77;0.43;0.55;0.52;0.48;0.73;0.43;0.59;0.62;0.50;0.50;0.79;0.73;0.59;0.77;0.48;0.82;0.78;0.81;0.48;0.72;0.67;0.59;0.41;0.44;0.60;0.47;0.66;0.77;0.44;0.51;0.74;0.76;0.62;0.47;0.62;0.57;0.43;0.50;0.53;0.68;0.69;0.74;0.57;0.68;0.89;0.62;0.42;0.63;0.60;0.70;0.50;0.63;0.67;0.38;0.67;0.41;0.59;0.75;0.71;0.70;0.51;0.75;0.56;0.76;0.74;0.57;0.49;0.59;0.58;0.67;0.45;0.78;0.70;0.42;0.69;0.54;0.72;0.51;0.79;0.66;0.70;0.54;0.57;0.42;0.60;0.46;0.65;0.77;0.45;0.48;0.81;0.58;0.77;0.54;0.60;0.69;0.58;0.87;0.57;0.69;0.76;0.74;0.53;0.62;0.51;0.47;0.64;0.61;0.56;0.46;0.59;0.59;0.83;0.69;0.59;0.49;0.79;0.46;0.54;0.84;0.52;0.42;0.61;0.31;0.67;0.54;0.67;0.74;0.71;0.44;0.75;0.50;0.65;0.47;0.49;0.59;0.45;0.70;0.77;0.52;0.55;0.95;0.60;0.59;0.72;0.62;0.68;0.65;0.47;0.67;0.54;0.45;0.74;0.55;0.71;0.62;0.80;0.70;0.55;0.80\nSaúde;0.70;0.55;0.75;0.83;0.85;0.68;0.62;0.53;0.73;0.81;0.53;0.92;0.71;0.88;0.60;0.68;0.57;0.57;0.57;0.77;0.76;0.67;0.72;0.80;0.87;0.76;0.56;0.76;0.68;0.41;0.67;0.74;0.73;0.68;0.53;0.66;0.67;0.72;0.63;0.77;0.70;0.81;0.70;0.81;0.61;0.90;0.81;0.79;0.55;0.56;0.79;0.62;0.54;0.61;0.90;0.49;0.63;0.64;0.79;0.55;0.64;0.75;0.70;0.46;0.63;0.71;0.78;0.65;0.56;0.79;0.55;0.57;0.53;0.94;0.65;0.65;0.78;0.70;0.61;0.78;0.68;0.85;0.76;0.65;0.69;0.67;0.66;0.74;0.61;0.85;0.74;0.48;0.74;0.82;0.82;0.73;0.57;0.83;0.74;0.93;0.53;0.81;0.63;0.63;0.58;0.71;0.85;0.87;0.77;0.48;0.81;0.60;0.78;0.66;0.71;0.61;0.57;0.67;0.74;0.88;0.80;0.70;0.82;0.47;0.72;0.72;0.71;0.68;0.69;0.78;0.49;0.85;0.68;0.76;0.82;0.81;0.66;0.65;0.81;0.72;0.92;0.50;0.53;0.80;0.70;0.60;0.82;0.55;0.55;0.90;0.64;0.67;0.58;0.58;0.70;0.87;0.75;0.56;0.85;0.65;0.72;0.75;0.50;0.70;0.89;0.69;0.76;0.60;0.62;0.52;0.53;0.83;0.65;0.68;0.84;0.92;0.71;0.73;0.73;0.91;0.79;0.77;0.82;0.78;0.73;0.82;0.58;0.50;0.86;0.57;0.40;0.73;0.49;0.78;0.72;0.77;0.76;0.61;0.89;0.81;0.62;0.80;0.62;0.83;0.90;0.60;0.80;0.58;0.68;0.64;0.85;0.92;0.73;0.55;0.77;0.89;0.77;0.60;0.82;0.90;0.80;0.66;0.68\nPlanejamento;0.50;0.49;0.26;0.28;1.00;0.32;0.31;0.33;0.63;0.25;0.27;0.33;0.30;0.59;0.34;0.50;0.38;0.31;0.41;0.39;0.27;0.25;0.25;0.25;0.50;0.28;0.37;0.46;0.34;0.29;0.27;0.09;0.28;0.38;0.31;0.25;0.28;0.25;0.28;0.26;0.46;0.26;0.38;0.27;0.26;0.25;0.30;0.38;0.36;0.30;0.34;0.26;0.27;0.50;0.37;0.41;0.31;0.33;0.31;0.37;0.25;0.03;0.30;0.50;0.50;0.35;0.25;0.28;0.25;0.26;0.29;0.29;0.28;0.31;0.35;0.25;0.28;0.27;0.30;0.25;0.31;0.34;0.25;0.42;0.31;0.05;0.40;0.26;0.30;0.29;0.82;0.26;0.43;0.29;0.50;0.75;0.00;0.25;0.25;0.29;0.32;0.42;0.28;0.50;0.33;0.30;0.33;0.26;0.22;0.25;0.42;0.25;0.29;0.34;0.25;0.26;0.27;0.32;0.25;0.28;0.35;0.32;0.39;0.36;0.33;0.50;0.26;0.29;0.25;0.37;0.15;0.28;0.25;0.38;0.33;0.42;0.25;0.49;0.77;0.26;0.28;0.30;0.25;0.26;0.25;0.27;0.26;0.30;0.40;0.26;0.35;0.29;0.31;0.25;0.34;0.27;0.29;0.26;0.29;0.26;0.33;0.31;0.30;0.28;0.31;0.30;0.33;0.50;0.37;0.25;0.32;0.07;0.29;0.37;0.28;0.25;0.35;0.38;0.14;0.26;0.28;0.50;0.37;0.45;0.32;0.34;0.34;0.25;0.07;0.40;0.29;0.50;0.32;0.49;0.28;0.30;0.25;0.32;0.30;0.26;0.58;0.32;0.25;0.26;0.30;0.16;0.28;0.26;0.35;0.27;0.36;0.35;0.05;0.38;0.29;0.50;0.27;0.47;0.31;0.27;0.36;0.09;0.79\nFiscal;0.59;0.60;0.69;0.62;0.87;0.87;0.60;0.68;0.58;0.73;0.58;0.69;0.70;0.70;0.71;0.84;0.64;0.70;0.70;0.51;0.79;0.66;0.59;0.69;0.70;0.60;0.62;0.65;0.32;0.61;0.89;0.74;0.47;0.60;0.70;0.42;0.88;0.68;0.71;0.59;0.74;0.50;0.70;0.59;0.68;0.52;0.65;0.74;0.83;0.64;0.66;0.62;0.59;0.70;0.55;0.70;0.69;0.53;0.62;0.53;0.63;0.82;0.69;0.50;0.54;0.60;0.54;0.70;0.64;0.54;0.71;0.52;0.51;0.54;0.72;0.51;0.60;0.71;0.59;0.87;0.70;0.69;0.70;0.40;0.41;0.65;0.61;0.42;0.55;0.70;0.60;0.59;0.49;0.56;0.53;0.80;0.72;0.64;0.66;0.40;0.66;0.78;0.61;0.60;0.63;0.76;0.53;0.53;0.57;0.74;0.68;0.66;0.73;0.62;0.64;0.60;0.60;0.71;0.63;0.70;0.64;0.66;0.50;0.53;0.57;0.50;0.59;0.70;0.44;0.66;0.85;0.57;0.70;0.80;0.47;0.77;0.60;0.66;0.67;0.69;0.39;0.75;0.40;0.70;0.57;0.67;0.60;0.65;0.73;0.70;0.51;0.47;0.59;0.61;0.79;0.80;0.85;0.68;0.64;0.70;0.70;0.74;0.60;0.62;0.60;0.70;0.73;0.69;0.60;0.52;0.78;0.63;0.56;0.50;0.70;0.51;0.79;0.69;0.59;0.62;0.70;0.62;0.57;0.64;0.54;0.50;0.80;0.55;0.71;0.64;0.73;0.61;0.70;0.94;0.79;0.77;0.41;0.54;0.59;0.73;0.76;0.62;0.72;0.57;0.81;0.82;0.68;0.74;0.63;0.59;0.70;0.81;0.58;0.75;0.48;0.80;0.67;0.78;0.54;0.63;0.77;0.73;0.70\nAmbiental;0.07;0.34;0.60;0.19;0.14;0.38;0.28;0.19;0.15;0.27;0.28;0.29;0.42;0.39;0.33;0.28;0.02;0.22;0.47;0.71;0.26;0.24;0.44;0.25;0.32;0.34;0.08;0.39;0.38;0.12;0.18;0.27;0.38;0.76;0.13;0.18;0.12;0.16;0.18;0.41;0.02;0.22;0.22;0.14;0.15;0.38;0.53;0.41;0.53;0.62;0.49;0.39;0.22;0.05;0.14;0.29;0.41;0.14;0.09;0.34;0.26;0.21;0.11;0.14;0.19;0.15;0.26;0.34;0.02;0.38;0.16;0.53;0.51;0.87;0.14;0.36;0.48;0.40;0.46;0.15;0.60;0.39;0.14;0.07;0.14;0.38;0.02;0.39;0.52;0.46;0.09;0.14;0.16;0.64;0.33;0.38;0.29;0.24;0.46;0.47;0.19;0.12;0.34;0.13;0.19;0.02;0.29;0.38;0.19;0.64;0.44;0.27;0.14;0.26;0.56;0.09;0.04;0.16;0.18;0.40;0.24;0.54;0.76;0.42;0.02;0.42;0.02;0.31;0.07;0.51;0.07;0.36;0.12;0.09;0.64;0.67;0.24;0.27;0.38;0.45;0.13;0.75;0.32;0.34;0.13;0.55;0.68;0.58;0.60;0.24;0.52;0.21;0.40;0.27;0.33;0.15;0.39;0.07;0.09;0.07;0.45;0.02;0.14;0.25;0.41;0.42;0.19;0.45;0.55;0.24;0.22;0.41;0.52;0.56;0.38;0.14;0.54;0.59;0.31;0.05;0.02;0.46;0.21;0.07;0.12;0.32;0.07;0.14;0.53;0.19;0.11;0.60;0.14;0.62;0.14;0.29;0.07;0.07;0.41;0.15;0.33;0.14;0.15;0.39;0.66;0.07;0.18;0.35;0.34;0.02;0.21;0.35;0.45;0.14;0.61;0.26;0.34;0.48;0.19;0.27;0.27;0.29;0.14\nCidade;0.00;0.00;0.50;0.30;0.00;0.45;0.00;0.53;0.25;0.00;0.00;0.30;0.00;0.30;0.05;0.20;0.00;0.00;0.30;0.60;0.35;0.50;0.30;0.70;0.87;0.30;0.30;0.00;0.30;0.30;0.00;0.33;0.30;0.18;0.18;0.00;0.00;0.05;0.30;0.45;0.70;0.00;0.10;0.00;0.30;0.00;0.00;0.00;0.00;0.77;0.00;0.45;0.70;0.00;0.30;0.00;0.30;0.00;0.30;0.30;0.80;0.00;0.00;0.10;0.00;0.65;0.00;0.25;0.00;0.00;0.00;0.10;0.00;0.55;0.60;0.45;0.52;0.00;0.80;0.30;0.20;0.48;0.20;0.00;0.00;0.00;0.90;0.00;0.80;0.60;0.00;0.03;0.00;1.00;0.30;0.35;0.00;0.30;0.23;0.70;0.20;0.00;0.73;0.05;0.33;0.00;0.25;0.05;0.20;0.30;0.55;0.00;0.00;0.00;0.85;0.00;0.20;0.00;0.75;0.35;0.00;0.70;0.15;0.30;0.80;0.05;0.80;0.55;0.00;0.50;0.00;0.45;0.00;0.60;0.23;0.30;0.28;0.00;0.30;0.25;0.00;0.47;0.40;0.03;0.00;0.60;0.40;0.00;0.63;0.00;0.72;0.30;0.87;0.33;0.10;0.48;0.75;0.20;0.10;0.20;0.30;0.00;0.30;0.30;0.30;0.15;0.15;0.10;0.08;0.00;0.50;0.00;0.30;0.45;0.00;0.80;0.37;0.00;0.00;0.00;0.00;0.00;0.37;0.80;0.80;0.57;0.00;0.00;0.40;0.00;0.00;0.00;0.00;0.90;0.05;0.70;0.00;0.00;0.75;0.50;0.55;0.00;0.25;0.00;0.00;0.00;0.20;0.30;0.00;0.70;0.45;0.50;0.53;0.00;0.00;0.48;0.47;0.50;0.43;0.30;0.45;0.00;0.05\nTI;0.27;0.26;0.31;0.38;0.45;0.24;0.18;0.45;0.41;0.23;0.63;0.44;0.18;0.43;0.38;0.54;0.11;0.20;0.34;0.39;0.36;0.32;0.37;0.23;0.48;0.44;0.45;0.21;0.42;0.43;0.49;0.28;0.43;0.28;0.18;0.15;0.42;0.54;0.48;0.56;0.26;0.32;0.17;0.23;0.27;0.73;0.38;0.27;0.36;0.59;0.35;0.18;0.30;0.18;0.52;0.42;0.29;0.34;0.42;0.50;0.39;0.44;0.31;0.05;0.32;0.53;0.11;0.18;0.18;0.44;0.32;0.25;0.08;0.60;0.25;0.25;0.50;0.27;0.26;0.28;0.63;0.31;0.36;0.25;0.18;0.21;0.35;0.34;0.56;0.56;0.30;0.33;0.20;0.88;0.18;0.37;0.45;0.16;0.56;0.34;0.18;0.36;0.51;0.23;0.28;0.05;0.30;0.42;0.23;0.38;0.44;0.20;0.18;0.31;0.29;0.32;0.55;0.20;0.40;0.45;0.24;0.34;0.56;0.43;0.43;0.29;0.48;0.23;0.32;0.24;0.05;0.31;0.18;0.34;0.49;0.46;0.52;0.29;0.31;0.37;0.26;0.59;0.47;0.22;0.42;0.36;0.42;0.27;0.26;0.32;0.65;0.31;0.31;0.30;0.56;0.41;0.39;0.43;0.31;0.26;0.33;0.11;0.51;0.29;0.21;0.51;0.48;0.45;0.31;0.46;0.36;0.16;0.18;0.34;0.23;0.46;0.28;0.31;0.13;0.39;0.16;0.51;0.32;0.25;0.29;0.53;0.36;0.18;0.29;0.37;0.36;0.39;0.08;0.59;0.29;0.38;0.44;0.24;0.34;0.23;0.34;0.43;0.18;0.33;0.38;0.31;0.43;0.42;0.14;0.39;0.36;0.26;0.21;0.23;0.43;0.35;0.29;0.40;0.26;0.37;0.36;0.21;0.28\nIEGM;0.47;0.54;0.54;0.53;0.72;0.54;0.47;0.49;0.55;0.53;0.45;0.56;0.53;0.49;0.51;0.59;0.42;0.48;0.57;0.54;0.54;0.48;0.50;0.53;0.64;0.47;0.49;0.57;0.49;0.44;0.52;0.49;0.47;0.60;0.48;0.39;0.51;0.52;0.52;0.53;0.57;0.41;0.55;0.46;0.47;0.53;0.57;0.60;0.52;0.56;0.57;0.50;0.52;0.47;0.53;0.50;0.51;0.44;0.52;0.47;0.53;0.49;0.52;0.40;0.48;0.51;0.44;0.53;0.39;0.50;0.47;0.45;0.42;0.66;0.55;0.47;0.59;0.49;0.56;0.58;0.60;0.55;0.49;0.45;0.42;0.40;0.49;0.46;0.51;0.60;0.61;0.39;0.46;0.64;0.58;0.65;0.40;0.52;0.53;0.49;0.44;0.54;0.54;0.51;0.51;0.47;0.53;0.57;0.48;0.48;0.60;0.46;0.52;0.47;0.56;0.45;0.41;0.50;0.48;0.57;0.54;0.58;0.59;0.45;0.54;0.52;0.53;0.55;0.41;0.55;0.43;0.53;0.48;0.53;0.58;0.65;0.45;0.54;0.63;0.55;0.45;0.60;0.44;0.54;0.45;0.53;0.49;0.49;0.53;0.54;0.57;0.43;0.49;0.49;0.55;0.60;0.58;0.46;0.52;0.47;0.60;0.48;0.47;0.53;0.57;0.52;0.54;0.53;0.49;0.43;0.51;0.47;0.47;0.52;0.53;0.58;0.59;0.55;0.43;0.54;0.46;0.56;0.58;0.54;0.47;0.54;0.43;0.42;0.52;0.49;0.46;0.59;0.41;0.73;0.49;0.58;0.41;0.41;0.57;0.50;0.61;0.54;0.46;0.50;0.68;0.46;0.52;0.53;0.50;0.49;0.57;0.58;0.49;0.47;0.48;0.65;0.52;0.61;0.51;0.58;0.59;0.45;0.62\nEducação-f;C;B+;C+;B;B;C;B;C+;C+;B;C+;C+;B;C;B;B;C;B;B+;C;C+;C;C+;C+;B;C;B;B;B;B;C+;C+;C;B+;B;C;C+;B;B;C+;B;C;B+;C;C+;B;B;B+;C+;B;B;B;B+;C;C+;B;C+;C+;B;C+;B;B;B+;C;C+;C+;C;B;C;C+;B;C+;C+;B+;B;C+;B+;C;B+;B+;B+;C;B;B;C+;C;C;B;C;B;B+;C;C+;B;B+;B;C;B;C+;C;C+;C+;B;B;B;C+;B;B+;B;C;B;B;B;C+;B;B;C;B;C;C+;B+;B;B;C+;B+;C+;B+;B;C+;C;C+;C+;B;C;B+;B;C;B;C+;B;C+;B+;B;B;C+;C+;C;B;C;B;B+;C;C;B+;C+;B+;C+;B;B;C+;B+;C+;B;B+;B;C+;B;C+;C;B;B;C+;C;C+;C+;B+;B;C+;C;B+;C;C+;B+;C+;C;B;C;B;C+;B;B;B;C;B+;C+;B;C;C;C+;C;B;B+;C+;C+;A;B;C+;B;B;B;B;C;B;C+;C;B;C+;B;B;B+;B;C+;B+\nSaúde-f;B;C+;B+;B+;B+;B;B;C+;B;B+;C+;A;B;B+;B;B;C+;C+;C+;B+;B+;B;B;B+;B+;B+;C+;B+;B;C;B;B;B;B;C+;B;B;B;B;B+;B;B+;B;B+;B;A;B+;B+;C+;C+;B+;B;C+;B;A;C;B;B;B+;C+;B;B+;B;C;B;B;B+;B;C+;B+;C+;C+;C+;A;B;B;B+;B;B;B+;B;B+;B+;B;B;B;B;B;B;B+;B;C;B;B+;B+;B;C+;B+;B;A;C+;B+;B;B;C+;B;B+;B+;B+;C;B+;B;B+;B;B;B;C+;B;B;B+;B+;B;B+;C;B;B;B;B;B;B+;C;B+;B;B+;B+;B+;B;B;B+;B;A;C+;C+;B+;B;B;B+;C+;C+;A;B;B;C+;C+;B;B+;B+;C+;B+;B;B;B+;C+;B;B+;B;B+;B;B;C+;C+;B+;B;B;B+;A;B;B;B;A;B+;B+;B+;B+;B;B+;C+;C+;B+;C+;C;B;C;B+;B;B+;B+;B;B+;B+;B;B+;B;B+;A;B;B+;C+;B;B;B+;A;B;C+;B+;B+;B+;B;B+;A;B+;B;B\nPlanejamento-f;C+;C;C;C;A;C;C;C;B;C;C;C;C;C+;C;C+;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C+;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;B+;C;C;C;C+;B+;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;B+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;B+\nFiscal-f;C+;B;B;B;B+;B+;B;B;C+;B;C+;B;B;B;B;B+;B;B;B;C+;B+;B;C+;B;B;B;B;B;C;B;B+;B;C;B;B;C;B+;B;B;C+;B;C+;B;C+;B;C+;B;B;B+;B;B;B;C+;B;C+;B;B;C+;B;C+;B;B+;B;C+;C+;B;C+;B;B;C+;B;C+;C+;C+;B;C+;B;B;C+;B+;B;B;B;C;C;B;B;C;C+;B;B;C+;C;C+;C+;B+;B;B;B;C;B;B+;B;B;B;B+;C+;C+;C+;B;B;B;B;B;B;B;B;B;B;B;B;B;C+;C+;C+;C+;C+;B;C;B;B+;C+;B;B+;C;B+;B;B;B;B;C;B+;C;B;C+;B;B;B;B;B;C+;C;C+;B;B+;B+;B+;B;B;B;B;B;B;B;B;B;B;B;B;C+;B+;B;C+;C+;B;C+;B+;B;C+;B;B;B;C+;B;C+;C+;B+;C+;B;B;B;B;B;A;B+;B+;C;C+;C+;B;B+;B;B;C+;B+;B+;B;B;B;C+;B;B+;C+;B+;C;B+;B;B+;C+;B;B+;B;B\nAmbiental-f;C;C;B;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;B;C;C;C;C;C;C;C;C;C;C;C;C;C;B+;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C+;B;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C+;B+;C;C;C;C;C;C;B;C;C;C;C;C;C;C;C+;C;C;C;C;B;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;B;C;C;C;C;C+;C;C;C;C;C;C;C+;B+;C;C;C;C;C;C;C+;C;C;C;C;B;B;C;C;C;C;C;B+;C;C;C;C+;B;C+;B;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C+;C+;C;C;C+;C+;C;C;C;C;C;C;C;C;C;C;C+;C;C;B;C;B;C;C;C;C;C;C;C;C;C;C;B;C;C;C;C;C;C;C;C;C;B;C;C;C;C;C;C;C;C\nCidade-f;C;C;C+;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;B;C;C+;C;B;B+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;B;C;C;C;C;C;C;C;C;B+;C;C;B;C;C;C;C;C;C;C;B+;C;C;C;C;B;C;C;C;C;C;C;C;C+;B;C;C+;C;B+;C;C;C;C;C;C;C;A;C;B+;B;C;C;C;A;C;C;C;C;C;B;C;C;B;C;C;C;C;C;C;C;C+;C;C;C;B+;C;C;C;B+;C;C;B;C;C;B+;C;B+;C+;C;C+;C;C;C;B;C;C;C;C;C;C;C;C;C;C;C;B;C;C;B;C;B;C;B+;C;C;C;B+;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;B+;C;C;C;C;C;C;C;B+;B+;C+;C;C;C;C;C;C;C;A;C;B;C;C;B+;C+;C+;C;C;C;C;C;C;C;C;B;C;C+;C+;C;C;C;C;C+;C;C;C;C;C\nTI-f;C;C;C;C;C;C;C;C;C;C;B;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C+;C;C;C;C;C;B;C;C;C;C+;C;C;C;C;C+;C;C;C;C;C+;C;C;C;C;C;C+;C;C;C;C;C;C;C;B;C;C;C+;C;C;C;B;C;C;C;C;C;C;C;C+;C+;C;C;C;B+;C;C;C;C;C+;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C;C+;C;C;C;C;C;C;C;C;B;C;C;C;C+;C;C;C;C;C;C;C;C+;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C+;C;C;C;C+;C;C;C;C;C;C;C;C+;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C;C\nIEGM-f;C;C+;C+;C+;B;C+;C;C;C+;C+;C;C+;C+;C;C+;C+;C;C;C+;C+;C+;C;C+;C+;B;C;C;C+;C;C;C+;C;C;B;C;C;C+;C+;C+;C+;C+;C;C+;C;C;C+;C+;B;C+;C+;C+;C+;C+;C;C+;C+;C+;C;C+;C;C+;C;C+;C;C;C+;C;C+;C;C+;C;C;C;B;C+;C;C+;C;C+;C+;B;C+;C;C;C;C;C;C;C+;B;B;C;C;B;C+;B;C;C+;C+;C;C;C+;C+;C+;C+;C;C+;C+;C;C;B;C;C+;C;C+;C;C;C+;C;C+;C+;C+;C+;C;C+;C+;C+;C+;C;C+;C;C+;C;C+;C+;B;C;C+;B;C+;C;B;C;C+;C;C+;C;C;C+;C+;C+;C;C;C;C+;B;C+;C;C+;C;B;C;C;C+;C+;C+;C+;C+;C;C;C+;C;C;C+;C+;C+;C+;C+;C;C+;C;C+;C+;C+;C;C+;C;C;C+;C;C;C+;C;B;C;C+;C;C;C+;C+;B;C+;C;C+;B;C;C+;C+;C+;C;C+;C+;C;C;C;B;C+;B;C+;C+;C+;C;B\nid;2500106;2500205;2500304;2500403;2500502;2500536;2500577;2500601;2500734;2500775;2500809;2500908;2501005;2501104;2501153;2501203;2501302;2501351;2501401;2501500;2501534;2501609;2501575;2501708;2501807;2501906;2502003;2502052;2502102;2502151;2502201;2502300;2502409;2502508;2502706;2502805;2502904;2503001;2503100;2503209;2503308;2503407;2503506;2503555;2503605;2503704;2503753;2503803;2503902;2504009;2504033;2504074;2504108;2504157;2504207;2504306;2504355;2504405;2504504;2504603;2504702;2504801;2504850;2504900;2505006;2505105;2505238;2505204;2505279;2505303;2505352;2505402;2505600;2505709;2505808;2505907;2506004;2506103;2506202;2506251;2506301;2506400;2506509;2506608;2502607;2506707;2506806;2506905;2507002;2507101;2507200;2507309;2507408;2507507;2513653;2507606;2507705;2507804;2507903;2508000;2508109;2508208;2508307;2508406;2508505;2508554;2508604;2508703;2508802;2508901;2509008;2509057;2509107;2509156;2509206;2509305;2509339;2509370;2509396;2509404;2509503;2509602;2509701;2509800;2509909;2510006;2510105;2510204;2510303;2510402;2510501;2510600;2510659;2510709;2510808;2510907;2511004;2511103;2511202;2512721;2511301;2511400;2511509;2511608;2511707;2511806;2511905;2512002;2512036;2512077;2512101;2512200;2512309;2512408;2512507;2512606;2512705;2512747;2512754;2512762;2512788;2512804;2512903;2513000;2513109;2513158;2513208;2513307;2513356;2513406;2513703;2513802;2513505;2513604;2513851;2513927;2513901;2513968;2513943;2513984;2514008;2500700;2514107;2514206;2514305;2514404;2514503;2514552;2514602;2514651;2514701;2514800;2514453;2514909;2515005;2515104;2515203;2515401;2515302;2515500;2515609;2515708;2515807;2515906;2515930;2515971;2516003;2516102;2516151;2516201;2516300;2516409;2516508;2516607;2516706;2516755;2516805;2516904;2517001;2517100;2517209;2505501;2517407\n";
                                
var dataArrayVazio = parser(dataTestVazio);
var dataArrayMunicipio = parser(dataTestMunicipio);

for (var i = 1; i < dataArrayMunicipio[0].length; i++)
    $("#sel-municipio").append('<option value="' + dataArrayMunicipio[17][i] + '" >' + dataArrayMunicipio[0][i] + '</option>');

$("#indicadores-sel").on('click', function() {
    drawChart(ttipo);
});

$("#sel-municipio").on('change', function() {
    drawChart("municipio");
    displaySelected("municipio", dataArrayMunicipio);
});


function drawChart(tipo) {
    ttipo = tipo;

    var dataArray = dataArrayVazio;
    var cityChosenNumber = [];

    if (tipo === "municipio"){
        dataArray = dataArrayMunicipio;
        var tempCityChosenNumber = $('#sel-municipio').val();
        if(tempCityChosenNumber !== null && tempCityChosenNumber.length > 0) {
            cityChosenNumber = [];

            for(var i of tempCityChosenNumber) {
                var num = idToPosition(Number(i), dataArrayMunicipio);
                cityChosenNumber.push(num);
            }
        } else {
            drawXart();
            return;
        }
    } else {
        drawXart();
        return;
    }
    if (cityChosenNumber === null || cityChosenNumber.length < 1) {
        drawXart();
        return;
    }

    var partialDataArray = [];
    var dataArrayToDataTable = [];

    var row = [];
    row.push(dataArray[0][0]);
    for(var i = 0; i < cityChosenNumber.length; i++){
        row.push(dataArray[0][cityChosenNumber[i]]);
        row.push({role: "style"});
        row.push({type: 'string', role: 'tooltip'});
    }
    partialDataArray.push(row);

    for(var i = 1; i < 8; i++){
        row = [];
        row.push(dataArray[i][0]);
        for(var j = 0; j < cityChosenNumber.length; j++){
            row.push(dataArray[i][cityChosenNumber[j]]);
            row.push(chooseColor(dataArray[i+8][cityChosenNumber[j]]));
            var tooltip = dataArray[0][cityChosenNumber[j]] + "\n\ni-" + dataArray[i][0] + ": " + dataArray[i][cityChosenNumber[j]] + "\nFaixa: " + dataArray[i+8][cityChosenNumber[j]];
            row.push(tooltip);
        }
        partialDataArray.push(row);
    }

    var partialData = new google.visualization.arrayToDataTable(partialDataArray);

    var options = {
        animation: {
            startup: true,
            duration: 500,
            easing: 'out',
        },
        vAxis: {
            viewWindow: {
                min: 0,
                max: 1,
            }
        },
        chartArea: {
            right: 0,
            left: 75,
        },
        backgroundColor: '#ffffff',
        legend: 'none',
    };

    var viewData = new google.visualization.DataView(partialData);

    viewData.setRows(displayedColumns);
}

$(document).ready(function() {
    $('select').material_select();
    $("path").click( function() {
        var tab;
        var id = $(this).attr("id");
        var data;

       if (id.includes("municipio-")) {
            id = idToPosition(Number(id.replace("municipio-", "")), dataArrayMunicipio);
            data = dataArrayMunicipio;
            tab = "municipio";
        }

        if (selecionado_aux !== null) {
            console.log("Entrou 1 "+$(selecionado_aux).attr("id"));
            $(selecionado_aux).removeClass("selecionado");
            $(selecionado_aux).addClass("naoselecionado");
            console.log("Entrou 1.2");
        }

        console.log("Entrou 2");
        selecionado_aux = this;
       
        $(this).removeClass("naoselecionado");
        $(this).addClass("selecionado");

        var temp = $("#sel-" + tab).val();
        temp = [];
        temp.push("" + data[17][id]);
        $("#sel-" + tab).val(temp);
        drawChart(tab);
        
        $('select').material_select();
        setCardInfo(id, data);
    });
});

$(window).resize(function(){
    drawChart(ttipo);
});


function setCardInfo (position, data) {
    card_position = position;
    $("#card-nome").html(data[0][position]);
    $("#card-educ").html(data[1][position]);
    $("#card-saud").html(data[2][position]);
    $("#card-plan").html(data[3][position]);
    $("#card-fisc").html(data[4][position]);
    $("#card-ambi").html(data[5][position]);
    $("#card-cida").html(data[6][position]);
    $("#card-govt").html(data[7][position]);
    $("#card-iegm").html(data[8][position]);

    $("#rect-iegm").css("fill", chooseColor(data[pp[iindicativo]][position]));
    $("#text-iegm").html(data[pp[iindicativo]][position]);
}

function displaySelected(regiaoTipo, data) {
    var allChosenArea = $("#sel-" + regiaoTipo).val();

    $('path', '#' + regiaoTipo + '-svg').each(function(){
        $(this).removeClass("selecionado");
        $(this).addClass("naoselecionado");
    });

}

function idToPosition(id, data) {
    for (var i in data[17]) {
        if (data[17][i] === id) {
            return Number(i);
        }
    }
}

function chooseColor (grade) {
    if(grade == "A") return "#70AD47";
    else if (grade == "B+") return "#5B9BD5";
    else if (grade == "B") return "#BFBFBF";
    else if (grade == "C+") return "#FFD966";
    else if (grade == "C") return "#F19455";
    else return "#000000";
}

function iegmClass (cl) {
    if(cl == "A") return "iegmA";
    else if (cl == "B+") return "iegmA";
    else if (cl == "B") return "iegmA";
    else if (cl == "C+") return "iegmA";
    else if (cl == "C") return "iegmA";
    else return "none";
}

function changeMapColor(regiaoTipo, data, all, ind){
    var allChosenArea =  new Array();
    if (all){
        allChosenArea = new Array();
        for(var i = 1; i < data[17].length; i++)
            allChosenArea.push(data[17][i]);
    } else {
        allChosenArea = $('#sel-' + regiaoTipo).val();
    }

    var indnum = 16;
    indnum = pp[ind];

    $('path', '#' + regiaoTipo + '-svg').each(function(){
        $(this).removeClass("iegmA");
        $(this).removeClass("iegmBM");
        $(this).removeClass("iegmB");
        $(this).removeClass("iegmCM");
        $(this).removeClass("iegmC");
        $(this).addClass("naoselecionado");
    });

    for (var i of allChosenArea) {
        var pos = idToPosition(Number(i), data)
        var tempStr = data[17][pos];

        if (regiaoTipo === "micro") tempStr = padZeros(tempStr, 2);

        $("#" + regiaoTipo + "-" + tempStr).addClass(iegmClass(data[indnum][pos]));
    }
}

function parser(str) {
    var arrayOfArray = new Array();
    for (var i of str.split("\n")) {
        array = new Array();
        for (var j of i.split(";")) {
            if (isNaN(j)) array.push(j);
            else array.push(parseFloat(j));
        }
        arrayOfArray.push(array);
    }
    return arrayOfArray;
}

function padZeros (num, size) {
    var s = "00000000000000" + num;
    return s.substr(s.length-size);
}

function drawXart() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Nota');
  data.addColumn('number', 'Selecione ao menos uma região');
  data.addRows([
      ['Educação',0.00],
      ['Saúde',0.00],
      ['Planejamento',0.00],
      ['Fiscal',0.00],
      ['Ambiental',0.00],
      ['Cidade',0.00],
      ['TI',0.00],
  ]);

  var options = {
      animation: {
          startup: true,
          duration: 500,
          easing: 'out',
      },
      vAxis: {
          viewWindow: {
              min: 0,
              max: 1,
          }
      },
      chartArea: {
          right: 0,
          left: 75,
      },
      backgroundColor: '#ffffff',
      legend: 'none',
  };
}

google.charts.load('current', {'packages':['corechart']});

google.charts.setOnLoadCallback(drawXart);
changeMapColor("municipio", dataArrayMunicipio, true, "iegm");


var config = {
  host:"localhost",
  port: 5432,
  user: "postgres", // name of the user account
  password:"agua",
  database: "agua_doce", // name of the database
  max: 10, // max number of clients in the pool
  idleTimeoutMillis: 30000 // how long a client is allowed to remain idle before being closed
};


