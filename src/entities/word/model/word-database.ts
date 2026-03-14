import type { Word } from './types';

export const wordDatabase: Word[] = [
  { 
    id: 1, 
    es: "Amor", 
    category: 'General',
    translations: {
      zh: {w:"爱", p:"ài"}, 
      it: {w:"Amore", p:"a-mo-re"}, 
      de: {w:"Liebe", p:"lee-be"}, 
      ja: {w:"愛", p:"ai"}, 
      ar: {w:"حب", p:"hub"}, 
      pt: {w:"Amor", p:"a-mor"}, 
      en: {w:"Love", p:"lov"}, 
      fr: {w:"Amour", p:"a-mur"} 
    } 
  },
  { 
    id: 2, 
    es: "Agua", 
    category: 'General',
    translations: {
      zh: {w:"水", p:"shuǐ"}, 
      it: {w:"Acqua", p:"ak-ua"}, 
      de: {w:"Wasser", p:"vas-er"}, 
      ja: {w:"水", p:"mizu"}, 
      ar: {w:"ماء", p:"ma'"}, 
      pt: {w:"Água", p:"a-gua"}, 
      en: {w:"Water", p:"wa-ter"}, 
      fr: {w:"Eau", p:"o"} 
    } 
  },
  { 
    id: 3, 
    es: "Amigo", 
    category: 'General', 
    translations: { 
        zh: {w:"朋友", p:"péngyǒu"}, 
        it: {w:"Amico", p:"a-mi-ko"}, 
        de: {w:"Freund", p:"froind"}, 
        ja: {w:"友達", p:"tomodachi"}, 
        ar: {w:"صديق", p:"sa-diq"}, 
        pt: {w:"Amigo", p:"a-mi-go"}, 
        en: {w:"Friend", p:"frend"}, 
        fr: {w:"Ami", p:"a-mi"} 
      }
    },
  { 
    id: 4, 
    es: "Hijo", 
    category: 'General', 
    translations: { 
      zh: {w:"儿子", p:"érzi"}, 
      it: {w:"Figlio", p:"fi-lio"}, 
      de: {w:"Sohn", p:"zoon"}, 
      ja: {w:"息子", p:"musuko"}, 
      ar: {w:"ابن", p:"ibn"}, 
      pt: {w:"Filho", p:"fi-liu"}, 
      en: {w:"Son", p:"san"}, 
      fr: {w:"Fils", p:"fis"} 
    } 
  },
  { 
    id: 5, 
    es: "Llamada", 
    category: 'General', 
    translations: { 
      zh: {w:"通话", p:"tōnghuà"}, 
      it: {w:"Chiamata", p:"kia-ma-ta"}, 
      de: {w:"Anruf", p:"an-ruf"}, 
      ja: {w:"電話", p:"den-wa"}, 
      ar: {w:"مكالمة", p:"mu-ka-la-ma"}, 
      pt: {w:"Chamada", p:"sha-ma-da"}, 
      en: {w:"Call", p:"kol"}, 
      fr: {w:"Appel", p:"a-pel"} 
    } 
  }
];