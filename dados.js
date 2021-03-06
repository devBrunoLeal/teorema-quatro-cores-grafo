var cores = ["#50baf1", "#36e21d", "#ec4a5d", "#ffec00"];

var vertices = [
    { id: 0, estado: "MG", x: 571, y: 484, vizinhos: new Array(), cor: "" },
    { id: 1, estado: "AM", x: 175, y: 206, vizinhos: new Array(), cor: "" },
    { id: 2, estado: "RR", x: 258, y: 87, vizinhos: new Array(), cor: "" },
    { id: 3, estado: "AP", x: 438, y: 96, vizinhos: new Array(), cor: "" },
    { id: 4, estado: "PA", x: 414, y: 207, vizinhos: new Array(), cor: "" },
    { id: 5, estado: "AC", x: 75, y: 299, vizinhos: new Array(), cor: "" },
    { id: 6, estado: "RO", x: 225, y: 336, vizinhos: new Array(), cor: "" },
    { id: 7, estado: "MT", x: 357, y: 370, vizinhos: new Array(), cor: "" },
    { id: 8, estado: "MA", x: 563, y: 224, vizinhos: new Array(), cor: "" },
    { id: 9, estado: "TO", x: 503, y: 322, vizinhos: new Array(), cor: "" },
    { id: 10, estado: "GO", x: 469, y: 432, vizinhos: new Array(), cor: "" },
    { id: 11, estado: "DF", x: 515, y: 423, vizinhos: new Array(), cor: "" },
    { id: 12, estado: "MS", x: 379, y: 515, vizinhos: new Array(), cor: "" },
    { id: 13, estado: "RS", x: 414, y: 693, vizinhos: new Array(), cor: "" },
    { id: 14, estado: "SC", x: 464, y: 642, vizinhos: new Array(), cor: "" },
    { id: 15, estado: "PR", x: 439, y: 589, vizinhos: new Array(), cor: "" },
    { id: 16, estado: "SP", x: 493, y: 550, vizinhos: new Array(), cor: "" },
    { id: 17, estado: "RJ", x: 605, y: 555, vizinhos: new Array(), cor: "" },
    { id: 18, estado: "ES", x: 643, y: 505, vizinhos: new Array(), cor: "" },
    { id: 19, estado: "BA", x: 625, y: 363, vizinhos: new Array(), cor: "" },
    { id: 20, estado: "PI", x: 614, y: 276, vizinhos: new Array(), cor: "" },
    { id: 21, estado: "CE", x: 670, y: 223, vizinhos: new Array(), cor: "" },
    { id: 22, estado: "RN", x: 725, y: 235, vizinhos: new Array(), cor: "" },
    { id: 23, estado: "PB", x: 739, y: 262, vizinhos: new Array(), cor: "" },
    { id: 24, estado: "PE", x: 698, y: 280, vizinhos: new Array(), cor: "" },
    { id: 25, estado: "AL", x: 729, y: 313, vizinhos: new Array(), cor: "" },
    { id: 26, estado: "SE", x: 709, y: 335, vizinhos: new Array(), cor: "" },
  ],
  arestas = [
    { fonte: vertices[0], alvo: vertices[10] },
    { fonte: vertices[0], alvo: vertices[19] },
    { fonte: vertices[0], alvo: vertices[18] },
    { fonte: vertices[0], alvo: vertices[16] },
    { fonte: vertices[0], alvo: vertices[17] },
    { fonte: vertices[1], alvo: vertices[2] },
    { fonte: vertices[1], alvo: vertices[6] },
    { fonte: vertices[1], alvo: vertices[5] },
    { fonte: vertices[1], alvo: vertices[4] },
    { fonte: vertices[2], alvo: vertices[1] },
    { fonte: vertices[2], alvo: vertices[4] },
    { fonte: vertices[3], alvo: vertices[4] },
    { fonte: vertices[4], alvo: vertices[2] },
    { fonte: vertices[4], alvo: vertices[1] },
    { fonte: vertices[4], alvo: vertices[7] },
    { fonte: vertices[4], alvo: vertices[3] },
    { fonte: vertices[4], alvo: vertices[9] },
    { fonte: vertices[4], alvo: vertices[8] },
    { fonte: vertices[5], alvo: vertices[1] },
    { fonte: vertices[6], alvo: vertices[7] },
    { fonte: vertices[6], alvo: vertices[1] },
    { fonte: vertices[7], alvo: vertices[6] },
    { fonte: vertices[7], alvo: vertices[12] },
    { fonte: vertices[7], alvo: vertices[10] },
    { fonte: vertices[7], alvo: vertices[9] },
    { fonte: vertices[7], alvo: vertices[4] },
    { fonte: vertices[7], alvo: vertices[1] },
    { fonte: vertices[8], alvo: vertices[4] },
    { fonte: vertices[8], alvo: vertices[9] },
    { fonte: vertices[8], alvo: vertices[20] },
    { fonte: vertices[9], alvo: vertices[4] },
    { fonte: vertices[9], alvo: vertices[7] },
    { fonte: vertices[9], alvo: vertices[10] },
    { fonte: vertices[9], alvo: vertices[19] },
    { fonte: vertices[9], alvo: vertices[8] },
    { fonte: vertices[9], alvo: vertices[20] },
    { fonte: vertices[10], alvo: vertices[12] },
    { fonte: vertices[10], alvo: vertices[0] },
    { fonte: vertices[10], alvo: vertices[19] },
    { fonte: vertices[10], alvo: vertices[9] },
    { fonte: vertices[10], alvo: vertices[7] },
    { fonte: vertices[11], alvo: vertices[10] },
    { fonte: vertices[11], alvo: vertices[0] },
    { fonte: vertices[12], alvo: vertices[15] },
    { fonte: vertices[12], alvo: vertices[16] },
    { fonte: vertices[12], alvo: vertices[0] },
    { fonte: vertices[12], alvo: vertices[10] },
    { fonte: vertices[12], alvo: vertices[7] },
    { fonte: vertices[13], alvo: vertices[14] },
    { fonte: vertices[14], alvo: vertices[13] },
    { fonte: vertices[14], alvo: vertices[15] },
    { fonte: vertices[15], alvo: vertices[14] },
    { fonte: vertices[15], alvo: vertices[12] },
    { fonte: vertices[15], alvo: vertices[16] },
    { fonte: vertices[16], alvo: vertices[15] },
    { fonte: vertices[16], alvo: vertices[17] },
    { fonte: vertices[16], alvo: vertices[10] },
    { fonte: vertices[16], alvo: vertices[0] },
    { fonte: vertices[16], alvo: vertices[12] },
    { fonte: vertices[17], alvo: vertices[16] },
    { fonte: vertices[17], alvo: vertices[0] },
    { fonte: vertices[17], alvo: vertices[18] },
    { fonte: vertices[18], alvo: vertices[19] },
    { fonte: vertices[18], alvo: vertices[0] },
    { fonte: vertices[18], alvo: vertices[17] },
    { fonte: vertices[19], alvo: vertices[18] },
    { fonte: vertices[19], alvo: vertices[0] },
    { fonte: vertices[19], alvo: vertices[10] },
    { fonte: vertices[19], alvo: vertices[9] },
    { fonte: vertices[19], alvo: vertices[20] },
    { fonte: vertices[19], alvo: vertices[24] },
    { fonte: vertices[19], alvo: vertices[25] },
    { fonte: vertices[19], alvo: vertices[26] },
    { fonte: vertices[20], alvo: vertices[21] },
    { fonte: vertices[20], alvo: vertices[24] },
    { fonte: vertices[20], alvo: vertices[19] },
    { fonte: vertices[20], alvo: vertices[8] },
    { fonte: vertices[20], alvo: vertices[9] },
    { fonte: vertices[21], alvo: vertices[22] },
    { fonte: vertices[21], alvo: vertices[23] },
    { fonte: vertices[21], alvo: vertices[24] },
    { fonte: vertices[21], alvo: vertices[20] },
    { fonte: vertices[22], alvo: vertices[23] },
    { fonte: vertices[22], alvo: vertices[21] },
    { fonte: vertices[23], alvo: vertices[24] },
    { fonte: vertices[23], alvo: vertices[22] },
    { fonte: vertices[23], alvo: vertices[21] },
    { fonte: vertices[24], alvo: vertices[19] },
    { fonte: vertices[24], alvo: vertices[23] },
    { fonte: vertices[24], alvo: vertices[25] },
    { fonte: vertices[24], alvo: vertices[21] },
    { fonte: vertices[24], alvo: vertices[20] },
    { fonte: vertices[25], alvo: vertices[24] },
    { fonte: vertices[25], alvo: vertices[19] },
    { fonte: vertices[25], alvo: vertices[26] },
    { fonte: vertices[26], alvo: vertices[19] },
    { fonte: vertices[26], alvo: vertices[25] },
  ]

  
