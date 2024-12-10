// LISTA DE PRODUTOS

import imageProduct1 from "./assets/images/sabrina-c-snw.png"
import imageProduct2 from "./assets/images/banks-c-sptna.png"
import imageProduct3 from "./assets/images/ariana-es.png"
import imageProduct4 from "./assets/images/billie-hte.png"
import imageProduct5 from "./assets/images/brat-target.png"
import imageProduct6 from "./assets/images/chappel.png"
import imageProduct7 from "./assets/images/lorde-melo.png"
import imageProduct8 from "./assets/images/rosalia-motomami.png"
import imageProduct9 from "./assets/images/taylor-s-midnights.png"
export const products = [
    {
       id: 1, //valor para o produto não ser duplicado
       name: "Sabrina Carpenter - Short n' Sweet", //nome do produto
       price: 205, //preço
       image: imageProduct1,
       description: ["Taste", "Please Please Please", "Good Graces", "Sharpest Tool", "Coincidence", "Bed Chem", "Espresso", "Dumb & Poetic", "Slim Pickins", "Juno", "Lie To Girls", "Don't Smile" ],
       slug: "sabrina-carpenter-short-n-sweet" //valor pra ir pra página com mais detalhes
    },

    {
        id: 2, 
        name: "Banks - Serpentina", 
        price: 175, 
        image: imageProduct2,
        description: ["Misunderstood", "Meteorite", "Fuck Love", 	"Deadend", "Holding Back", 	"The Devil", "Skinnydipped", 	"Burn", "Birds by the Sea", "Spirit(featuring Samoht)", 	"Anything 4 U", "Unleavable", "I Still Love You" ],
        slug: "banks-serpentina"
     },

     {
        id: 3, 
        name: "Ariana Grande - Eternal Sunshine", 
        price: 165, 
        image: imageProduct3,
        description: [	"Intro (End of the World)", 	"Bye", 	"Don't Wanna Break Up Again", 	"Saturn Returns Interlude", 	"Eternal Sunshine", 	"Supernatural", 	"True Story", "The Boy Is Mine", 	"Yes, And?", 	"We Can't Be Friends (Wait for Your Love)", "I Wish I Hated You", "Imperfect for You", 	"Ordinary Things (featuring Nonna)"],
        slug: "ariana-grande-eternal-sunshine"
     },

     {
        id: 4,
        name: "Billie Eilish - Happier Than Ever", 
        price: 160, 
        image: imageProduct4,
        description: [	"Getting Older", 	"I Didn't Change My Number", 	"Billie Bossa Nova", 	"My Future", 	"Oxytocin", "Goldwing", 	"Lost Cause", 	"Halley's Comet", 	"Not My Responsibility", 	"Overheated", "Everybody Dies", 	"Your Power", "NDA", "Therefore I Am", 	"Happier Than Ever", 	"Male Fantasy"],
        slug: "billie-eilish-happier-than-ever"
     },

     {
        id: 5,
        name: "Charli XCX - brat", 
        price: 500, 
        image: imageProduct5,
        description: [	"360", 	"Club Classics", 	"Sympathy Is a Knife", "I Might Say Something Stupid", "Talk Talk", 	"Von Dutch", "Everything Is Romantic", "Rewind", "So I", 	"Girl, So Confusing", "Apple", 	"B2B", "Mean Girls", 	"I Think About It All the Time", "365"],
        slug: "charli-xcx-brat"
     },

     {
        id: 6,
        name: "Chappell Roan - The Rise and Fall of a Midwest Princess", 
        price: 600, 
        image: imageProduct6,
        description: ["Femininomenon", 	"Red Wine Supernova", 	"After Midnight",	"Coffee","Casual",	"Super Graphic Ultra Modern Girl",	"Hot to Go!",	"My Kink Is Karma","Picture You",	"Kaleidoscope" ,"Pink Pony Club", 	"Naked in Manhattan", 	"California", 	"Guilty Pleasure"],
        slug: "chappell-roan"
     },

     {
        id: 7,
        name: "Lorde - Melodrama", 
        price: 490, 
        image: imageProduct7,
        description: ["Green Light",	"Sober",	"Homemade Dynamite",	"The Louvre",	"Liability","Hard Feelings/Loveless",	"Sober II (Melodrama)",	"Writer in the Dark","Supercut","Liability (Reprise)","Perfect Places"],
        slug: "lorde-melodrama"
     },

     {
        id: 8,
        name: "Rosalia - Motomami", 
        price: 150, 
        image: imageProduct8,
        description:  ["Saoko","Candy", "La Fama (part. The Weeknd)", "Bulerías", "Chicken Teriyaki", "Hentai", "Bizcochito", "G3 N15", "Motomami", "Diablo",  	"Delirios de Grandeza"  ,  	"Cuuuuuuuute"  ,  	"Como un G"  ,  	"Abcdefg" ,  	"La Combi Versace (part. Tokischa)"   ,  	"Sakura"   ],
        slug: "rosalia-motomami"
     },
     
     {
      id: 9,
      name: "Taylor Swift - Midnights", 
      price: 130, 
      image: imageProduct9,
      description: [	"Lavender Haze",	"Maroon" ,	"Anti-Hero",	"Snow on the Beach (featuring Lana Del Rey)",	"You're on Your Own, Kid","Midnight Rain",	"Question...?","Vigilante Shit",	"Bejeweled",	"Labyrinth",	"Karma",	"Sweet Nothing",	"Mastermind"],
      slug: "taylor-swft-midnights"
   }
 ]