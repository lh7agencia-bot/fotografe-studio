export type GalleryCategory = 'todas' | 'ensaios' | 'estudio';

export interface StudioPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  category: Exclude<GalleryCategory, 'todas'>;
  width: number;
  height: number;
  aspectLabel: string;
}

export interface StudioService {
  number: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  sessionType: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const STUDIO_INFO = {
  name: 'Fotografe Studio',
  slogan: 'Momentos eternizados em arte',
  niche: 'Fotógrafo',
  address: 'Rua 71 Quadra 106 Lote 18 - loja 01 - Jardim Ceu Azul, Valparaíso de Goiás - GO, 72871-071',
  shortAddress: 'Jardim Céu Azul, Valparaíso de Goiás - GO',
  landmark: 'Próximo ao Hospital do Céu Azul',
  phoneDisplay: '(61) 98530-5443',
  whatsappDigits: '5561985305443',
  email: 'contato@fotografestudio.com.br',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Rua+71+Quadra+106+Lote+18+loja+01+Jardim+Ceu+Azul+Valparaiso+de+Goias+GO+72871-071',
} as const;

export const GALLERY_PHOTOS: StudioPhoto[] = [
  {
    id: 'newborn-cenario',
    src: '/images/studio-01.jpg',
    alt: 'Ensaio newborn no Fotografe Studio com bebê dormindo em miniatura de sofá branco e cenário temático',
    title: 'Ensaio Newborn & Infantil',
    caption: 'Produção em estúdio climatizado com cenários exclusivos e conforto total para o bebê.',
    category: 'ensaios',
    width: 1024,
    height: 688,
    aspectLabel: '3:2',
  },
  {
    id: 'retrato-fotografo',
    src: '/images/studio-02.jpg',
    alt: 'Retrato artístico em preto e branco do fotógrafo do Fotografe Studio com câmera profissional',
    title: 'Direção Fotográfica & Retratos',
    caption: 'Olhar autoral e edição artística fina para eternizar expressões com personalidade.',
    category: 'estudio',
    width: 640,
    height: 640,
    aspectLabel: '1:1',
  },
  {
    id: 'endereco-estudio',
    src: '/images/studio-03.jpg',
    alt: 'Comunicado oficial de localização do Fotografe Studio na Rua 71 Quadra 106 Lote 18 Loja 01 no Jardim Céu Azul',
    title: 'Nosso Novo Espaço no Jardim Céu Azul',
    caption: 'Atendimento na Rua 71, Quadra 106, Lote 18 - Loja 01, próximo ao Hospital do Céu Azul.',
    category: 'estudio',
    width: 720,
    height: 1280,
    aspectLabel: '9:16',
  },
];

export const STUDIO_SERVICES: StudioService[] = [
  {
    number: '01',
    title: 'Ensaios Newborn e Acompanhamento',
    description:
      'Sessões acolhedoras com iluminação suave, cenários montados no estúdio e respeito absoluto ao ritmo do recém-nascido.',
  },
  {
    number: '02',
    title: 'Retratos Pessoais e Corporativos',
    description:
      'Direção de pose natural e tratamento editorial para destacar sua melhor imagem com autenticidade.',
  },
  {
    number: '03',
    title: 'Ensaios em Família e Gestante',
    description:
      'Registros afetivos pensados para preservar conexões reais, gestos espontâneos e memórias duradouras.',
  },
  {
    number: '04',
    title: 'Edição Artística e Entrega Digital',
    description:
      'Curadoria cuidadosa, tratamento de cor calibrado e entrega em alta resolução pronta para impressão ou redes sociais.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'depoimento-1',
    name: 'Mariana Almeida',
    sessionType: 'Ensaio Newborn',
    rating: 5,
    text: 'Fomos recebidos com muita paciência e cuidado no estúdio do Jardim Céu Azul. O cenário ficou impecável e as fotos do nosso filho superaram todas as expectativas.',
  },
  {
    id: 'depoimento-2',
    name: 'Rafael Oliveira',
    sessionType: 'Retrato Profissional',
    rating: 5,
    text: 'Eu tinha receio de travar na frente da câmera, mas a direção foi muito tranquila e objetiva. Recebi as fotos tratadas no prazo combinado e com ótima definição.',
  },
  {
    id: 'depoimento-3',
    name: 'Camila & Lucas Ferreira',
    sessionType: 'Ensaio em Família',
    rating: 5,
    text: 'Ambiente confortável, atendimento pontual pelo WhatsApp e um resultado cheio de sensibilidade. Recomendo o Fotografe Studio para quem busca qualidade real.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-agendamento',
    question: 'Como faço para agendar um ensaio no Fotografe Studio?',
    answer:
      'O agendamento é feito diretamente pelo WhatsApp (61) 98530-5443 ou pelo formulário desta página. Conversamos sobre o estilo de ensaio desejado, verificamos as datas disponíveis e reservamos o seu horário.',
  },
  {
    id: 'faq-prazo',
    question: 'Qual é o prazo de entrega das fotografias editadas?',
    answer:
      'Após a seleção das imagens favoritas, o tratamento artístico e a entrega digital em alta resolução ocorrem em média entre 7 e 12 dias úteis, conforme a complexidade do pacote escolhido.',
  },
  {
    id: 'faq-newborn',
    question: 'Qual a melhor época para fazer o ensaio newborn?',
    answer:
      'O período ideal é entre 5 e 15 dias de vida, quando o bebê dorme com mais facilidade e mantém a flexibilidade natural. Nosso estúdio é preparado para receber a família com tranquilidade e conforto.',
  },
  {
    id: 'faq-figurino',
    question: 'O estúdio orienta sobre roupas e preparação antes da sessão?',
    answer:
      'Sim. Assim que a reserva é confirmada, enviamos orientações práticas sobre paleta de cores, combinações sem estampas carregadas e itens que harmonizam com os cenários do estúdio.',
  },
  {
    id: 'faq-localizacao',
    question: 'Onde fica localizado o estúdio e como chegar?',
    answer:
      'Estamos na Rua 71, Quadra 106, Lote 18 - Loja 01, no Jardim Céu Azul, em Valparaíso de Goiás - GO (CEP 72871-071), bem próximo ao Hospital do Céu Azul.',
  },
];
