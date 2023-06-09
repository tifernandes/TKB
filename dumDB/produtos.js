const produtos = [
{
    Id: 'TKB-0002',
    produto: 'Case 1:64',
    descricao: 'Um case para proteção e exposição de miniaturas 1:64. Ideal para miniaturas customizadas ou sem embalagem.',
    medidas: '5,3x5,7x10,6 cm',
    cores: 'Base e suporte preto, tampa transparente',
    itens: '',
    imgs: ['IMG_0008.png', 'IMG_0073.png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0003-1',
    produto: 'Expositor Modular com Divisórias',
    descricao: 'Um expositor com tampa para proteção e exposição de miniaturas 1:64, que é modular pois possui encaixes na lateral esquerda e na parte superior para montar uma peça na outra, e pode ser utilizado para organização em geral. O produto possui 05 nichos (cabem até 05 miniaturas 1:64 por produto). Este produto possui também 01 alojamento para parafusos que permite a fixação em paredes. OBS: não acompanha parafuso e bucha.',
    medidas: '4,7x10,1x22,8 cm',
    cores: 'Transparente',
    itens: '',
    imgs: ['IMG_0052-(2).png', 'IMG_0070 (2).png'],
    variacao: ['TKB-0003-2'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0003-2',
    produto: 'Expositor Modular com Divisórias com base',
    descricao: 'Um expositor com tampa para proteção e exposição de miniaturas 1:64, que é modular pois possui encaixes na lateral esquerda e na parte superior para montar uma peça na outra, e pode ser utilizado para organização em geral. O produto possui 05 nichos (cabem até 05 miniaturas 1:64 por produto). Este produto acompanha uma base para encaixar em baixo do expositor, podendo assim deixar em cima de superficies planas.',
    medidas: 'Expositor: 4,7x10,1x22,8 cm; Base: 1,2x7,4x7,1 cm',
    cores: 'Transparente',
    itens: '',
    imgs: ['IMG_0047-(2).png', 'IMG_0043semtrava.png'],
    variacao: ['TKB-0003-1'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0005',
    produto: 'Expositor com divisórias para miniaturas 1:64',
    descricao: 'Um expositor com tampa e divisórias moveis para proteção e exposição de até 18 miniaturas 1:64. Este produto possui alojamentos para parafusos o que permite a fixação do mesmo em paredes. OBS: Não acompanha parafuso e bucha. Ele também pode ser utilizado para organização em geral.',
    medidas: '8,5x16,8x30,8 cm',
    cores: 'Transparente',
    itens: '',
    imgs: ['IMG_0029.png', 'IMG_0043-(2).png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0006',
    produto: 'Expositor com divisórias',
    descricao: 'Um expositor com tampa e divisórias moveis para proteção e exposição de miniaturas 1:64, miniaturas 1:43, Funko Pop, entre outros. Este produto possui alojamentos para parafusos o que permite a fixação do mesmo em paredes. OBS: Não acompanha parafuso e bucha. Ele também pode ser utilizado para organização em geral.',
    medidas: '8,5x16,8x30,8 cm',
    cores: 'Transparente',
    itens: '',
    imgs: ['IMG_0058.png', 'IMG_0058-(2).png', 'IMG_0045.png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0007',
    produto: 'Rampa para miniaturas 1:64',
    descricao: 'Rampa para exposição de miniaturas 1:64. Cada embalagem vem com 04 unidades.',
    medidas: '1,9x3,4x8,0 cm',
    cores: 'Preto',
    itens: 'Não informado',
    imgs: ['IMG_0018.png', 'IMG_0112.png'],
    categoria: ['Expositor', 'Acessorios']
},
{
    Id: 'TKB-0008',
    produto: 'Caixa com tampa articulada',
    descricao: 'Uma caixa para organização ou embalagem de itens pequenos.',
    medidas: '2,0x5,5x5,7 cm',
    cores: 'Translucido',
    itens: 'Não informado',
    imgs: ['IMG_0082-(2).png', 'IMG_0081.jpg'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0009',
    produto: 'Elevador para miniaturas 1:64',
    descricao: 'Elevador para exposição de miniaturas 1:64 em dioramas e maquetes.',
    medidas: '5,1x5,3x8,4 cm',
    cores: ['Preto', 'Vermelho'],
    itens: 'Não informado',
    imgs: ['IMG_0075.png', 'IMG_0145.png'],
    categoria: ['Expositor', 'Acessorios']
},
{
    Id: 'TKB-0010',
    produto: 'Prateleira arquibancada com 5 andares',
    descricao: 'Expositor prateleira arquibancada com 05 andares. O produto é enviado desmontado. Os parafusos acompanham na embalagem.',
    medidas: '16,4x33,1x32,8 cm',
    cores: 'Laterais transparentes e prateleiras em preto',
    itens: 'Não informado',
    imgs: ['IMG_0002.png', 'IMG_0001.png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0011',
    produto: 'Prateleira arquibancada com 4 andares',
    descricao: 'Expositor prateleira arquibancada com 04 andares. O produto é enviado desmontado. Os parafusos acompanham na embalagem.',
    medidas: '12,6x33,1x26,3 cm',
    cores: 'Laterais transparentes e prateleiras em preto',
    itens: 'Não informado',
    imgs: ['IMG_0003.png', 'IMG_0004-(2).png'],
    categoria: ['Expositor']
},
{    
    Id: 'TKB-0012',    
    produto: 'Prateleira arquibancada com 3 andares',    
    descricao: 'Expositor prateleira arquibancada com 03 andares. O produto é enviado desmontado. Os parafusos acompanham na embalagem.',    
    medidas: '8,9x33,1x19,8 cm',    
    cores: 'As laterais são transparentes e as prateleiras em preto.',    
    itens: '',
    imgs: ['IMG_0005.png', 'IMG_0006.png'],
    categoria: ['Expositor']
},
{    
    Id: 'TKB-0013',    
    produto: 'Cone',    
    descricao: 'Cone para miniaturas, dioramas e maquetes. Cada embalagem vem com 10 unidades.',   
    medidas: '1,2x1,2x1,2 cm',    
    cores: 'Laranja.',    
    itens: '',
    imgs: ['IMG_0100.png', 'IMG_0148-(2).png'],
    categoria: ['Acessorios']
}, 
{    
    Id: 'TKB-0014',    
    produto: 'Prancha de Surf',    
    descricao: 'Prancha de surf para miniaturas, dioramas e maquetes. Cada embalagem vem com 06 unidades, sendo 02 de cada tamanho.',    
    medidas: [      
        { tamanho: 'P', medida: '0,4x0,7x3,2 cm' },     
        { tamanho: 'M', medida: '0,5x0,8x4,0 cm' },      
        { tamanho: 'G', medida: '0,7x1,2x5,5 cm' }    
    ],
    cores: ['Preto', 'Branco', 'Laranja'],
    itens: '',
    imgs: ['IMG_0031.png', 'IMG_0210.jpg'],
    categoria: ['Acessorios']
},
{
    Id: 'TKB-0015',
    produto: 'Rodas para Customização de miniaturas 1:64',
    descricao: 'Rodas com pneus em borracha para customização de miniaturas 1:64.',
    medidas: 'Ø 1,1 cm',
    cores: '',
    itens: '',
    imgs: ['IMG-4987.jpg', 'TKB-0015-2.png'],
    categoria: ['Acessorios']
},
{
    Id: 'TKB-0016',
    produto: 'Case 1:64 Premium',
    descricao: 'Case para exposição e proteção de miniaturas 1:64.',
    medidas: {
        externas: { altura: 8.6, largura: 11.1, comprimento: 5.5 },
        internas: { altura: 8.0, largura: 10.5, comprimento: 4.5 },
    },
    cores: ['Transparente'],
    itens: [],
    imgs: ['IMG_0060-(2).png', 'IMG_0027.png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0017',
    produto: 'Case Porta Cartela Premium',
    descricao:
        'Case para exposição e proteção de cartelas de miniaturas 1:64 premium. Pode ser usado em diversas marcas como: M2,Hotwheels premium, Schuco, Green Light, Mini GT, entre outros.',
    medidas: {
        externas: { altura: 20.2, largura: 14.9, comprimento: 6.7 },
        internas: { altura: 19.6, largura: 14.3, comprimento: 5.7 },
    },
    cores: ['Transparente'],
    itens: [],
    imgs: ['IMG_0072.png', 'IMG_0044.png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0018',
    produto: 'Case 1:24',
    descricao: 'Case para exposição e proteção de miniaturas 1:24 e dioramas.',
    medidas: {
        externas: { altura: 12.9, largura: 15.6, comprimento: 26.6 },
        internas: { altura: 12.0, largura: 14.0, comprimento: 25.0 },
    },
    cores: ['Transparente', 'Preta'],
    itens: ['Base com furações'],
    imgs: ['IMG_0030-(2).png', 'IMG_0029-(2).png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0019',
    produto: 'Case 1:18',
    descricao: 'Case para exposição e proteção de miniaturas 1:18 e dioramas.',
    medidas: {
        externas: { altura: 13.9, largura: 17.6, comprimento: 34.6 },
        internas: { altura: 13.0, largura: 16.0, comprimento: 33.0 },
    },
    cores: ['Transparente', 'Preta'],
    itens: ['Base com furações'],
    imgs: ['IMG_0032-(2).png', 'IMG_0035-(2).png'],
    categoria: ['Expositor']
},
{
    Id: 'TKB-0020',
    produto: 'Case para Caixa de Funko POP',
    descricao: 'Case para exposição e proteção da caixa de Funko Pop.',
    medidas: {
        externas: { altura: 17.0, largura: 12.6, comprimento: 10.2 },
        internas: { altura: 16.4, largura: 12.0, comprimento: 9.2 },
    },
    cores: ['Transparente'],
    itens: [],
    imgs: ['IMG_0109.png', 'IMG_0035.png'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0021",
    produto: "Protetor de Cartela 1:64",
    descricao: "Um protetor de cartelas para miniaturas 1:64 para as marcas: Hotwheels, Matchbox e California minis",
    medidas: "19,8x 11,8x4,5 cm",
    cores: "Transparente",
    itensInclusos: "",
    imgs: ['IMG_0040.png', 'IMG_0004.png'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0022",
    produto: "Case com Pendurador",
    descricao: "Um case para proteção e exposição de miniaturas 1:64. Ideal para miniaturas customizadas ou sem embalagem. Este produto pode ser utilizado também para organização e embalagem de peças pequenas.",
    medidas: "Com o pendurador aberto (AxLxC): 3,3x4,3x9,9 cm / Com o pendurador dobrado (AxLxC): 3,3x4,3x8,7 cm",
    cores: "Translucido",
    itensInclusos: "",
    imgs: ['tkb-0022a.png', 'tkb-0022.png'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0023-1",
    produto: "Expositor com 30 nichos Fechados",
    descricao: "Um expositor com 30 nichos fechados e individuais",
    medidas: "46,3x31,0x4,6 cm",
    cores: "O nicho é transparente e o porta nicho é branco",
    itensInclusos: "",
    imgs: ['TKB-0023-1.png', 'TKB-0023-1t.png'],
    variacao: ['TKB-0023-2'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0023-2",
    produto: "Expositor com 30 nichos Abertos",
    descricao: "Um expositor com 30 nichos abertos e individuais",
    medidas: "46,3x31,0x5,4 cm",
    cores: "O nicho é preto e o porta nicho é branco",
    itensInclusos: "",
    imgs: ['TKB-0023-2.png', 'TKB-0023-2p.png'],
    variacao: ['TKB-0023-1'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0024",
    produto: "Case para 1:43 e 1:32",
    descricao: "Um case para proteção e exposição de miniaturas 1/43 e 1/32. Ideal para miniaturas customizadas ou sem embalagem.",
    medidas: "7,1x7,9x15,4 cm",
    cores: "A base e os suportes da miniatura são em preto e a tampa é transparente",
    itensInclusos: "",
    imgs: ['IMG_0064.png', 'IMG_0059.png'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0025",
    produto: "Case para action figures",
    descricao: "Case para exposição e proteção de Action figures e dioramas.",
    medidas: "Medidas externas 38,9x22,0x21,6 cm. Medidas internas 38,0x20,0x20,0 cm.",
    cores: "A tampa é transparente e a base é preta.",
    itensInclusos: "",
    imgs: ['IMG_0003.png', 'IMG_0012 - Copia.png', 'IMG_0019 - Copia.png'],
    categoria: ['Expositor']
},
{
    Id: "TKB-0026",
    produto: "Case para RLC",
    descricao: "Case para exposição e proteção de Hot Wheels RLC e outros colecionáveis.",
    medidas: "Medidas externas 6,7 x 13,0 x 15,8 cm.",
    cores: "Transparente",
    itensInclusos: "",
    imgs: ['IMG_0037.jpg', 'IMG_0008.jpg'],
    categoria: ['Expositor']
}
];

export default produtos;