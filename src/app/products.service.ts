import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './dati/product.data';
import { Review } from './dati/review.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products :Product[] = [
    {code:"001", name:"Iphone XR 64GB", category:"smartphone", description:"The iPhone XR is a strong contender if you're looking for an affordable iPhone, boasting the latest software, enough power and surprisingly good battery life... for an iPhone. With the introduction of the iPhone 11, the XR price has dropped further, making it great value for money.", slug:"iphone-xr", photo:"iphoneXr.png", price:"500.50", stock:3, reviews:4, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"002", name:"MacBook Pro 2021", category:"laptop", description:"The blazing-fast M1 Pro or M1 max chip for groundbreaking performance and amazing battery life. A Stunning Liquid Retina XDR display and all the ports you need. This is the notebook you've been waiting for.", slug:"macbookpro-2021", photo:"macbookpro.png", price:"2549.00", stock:7, reviews:5, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"003", name:"Sennheiser HD 450BT", category:"headphones", description:"Step up to great wireless sound with the HD 450BT from Sennheiser. Whether relaxing at home or on the go, they offer an exceptional combination of versatility and superior sound. Created by audio specialist Sennheiser to deliver a superior sound experience with deep dynamic bass, they feature active noise cancellation to ensure enjoyment without distraction.", slug:"sennheiser-hd-450bt", photo:"sennheiserhd450bt.png", price:"199.99", stock:26, reviews:3, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"004", name:"Xiaomi Redmi Note 11 Pro 5G", category:"smartphone", description:"108MP Powerhous 120Hz FHD+ AMOLED DotDisplay 67W turbo charging. Smoother, faster and more efficient. For those who want the ultimate experience，Snapdragon® 695 5G processor is ready.", slug:"redmi-note-11-pro-5g", photo:"xiaomiredminote11pro.png", price:"376.97", stock:12, reviews:5, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"005", name:"Apple AirPods Pro 2", category:"headphones", description:"Dual beamforming microphones, Inward-facing microphone, Skin-detect sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Touch control.", slug:"airpods-2", photo:"airpods2.png", price:"269.99", stock:2, reviews:5, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"006", name:"ASUS ProArt Display 27", category:"monitor", description:"The ProArt display delivers industry-standard 100% sRGB and 100% Rec. 709 color for rich, vivid reproduction that ensures every detail of your photos is clear and lifelike.", slug:"asus-proart", photo:"asusproart.png", price:"319.00", stock:40, reviews:4, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"007", name:"MSI Summit E13 Flip Evo", category:"laptop", description:"For professionals who desire maximum productivity. Verified by Intel Evo platform to provide expecptional performance that keep you going forward. Featuring the latest 11th Gen. Intel Core i7 processor & Intel Iris Xe graphics. ", slug:"msi-summit-e13", photo:"msisummite13.png", price:"1329.99", stock:7, reviews:5, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"008", name:"Iphone 13 Pro 128 GB", category:"smartphone", description:"For professionals who desire maximum productivity. Verified by Intel Evo platform to provide expecptional performance that keep you going forward. Featuring the latest 11th Gen. Intel Core i7 processor & Intel Iris Xe graphics. ", slug:"iphone13pro", photo:"iphone13pro.png", price:"800.00", stock:2, reviews:4, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"010", name:"Samsung Galaxy S22 Ultra", category:"smartphone", description:"For Gen Z, video isn’t just video. They think of it as a lifestyle – a universal language for how they learn, grow, express, talk, shop, connect, create, and fight boredom with their friends in real time. That’s why they’re demanding a mobile device that finally breaks all the rules of video and makes their everyday more epic than ever.", slug:"samsunggalaxys22ultra", photo:"samsungs22ultra.png", price:"809.99", stock:7, reviews:3, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"011", name:"Nokia 3.4", category:"smartphone", description:"Get up to 70% better performance compared to previous generations, thanks to the newest Qualcomm Snapdragon 460 mobile platform. Enjoy all your favorite entertainment in 6.39-inch immersive HD+ with punch hole display for maximized screen real estate.", slug:"nokia3.4", photo:"nokia3.4.png", price:"143.74", stock:42, reviews:2, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"012", name:"Sony MDR-XB650BT", category:"headphones", description:"Connect and stream music easily with Bluetooth and NFC.Connectivity Technology: Wireless. Feel the powerful, clear sound of EXTRA BASS. Frequency Response: 20 Hz–20,000 Hz. Keep the music pumping with up to 30 hours of battery life.", slug:"sony-mdr-xb650-bt", photo:"sonymdr-xb650bt.png", price:"69.99", stock:144, reviews:3, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"013", name:"Z-Edge U27P4K 27", category:"monitor", description:"With the 4K(3840*2160)resolution, the monitor has great color accuracy out of box, delivering the vibrant and impressive images with more details. Built-in high end IPS panel, the display provides the panoramic viewing angle, preserves the color performance ability and high fidelity of image color from every viewing angle.", slug:"z-edge-u27p4k-27", photo:"z-edge-u27p4k-27.png", price:"209.99", stock:19, reviews:4, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"014", name:"MacBook Air 2022", category:"laptop", description:"Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power effeciency whthin its durable all-aluminum enclosure. It's the ultraportable, ultracapable laptop that lets you work, play, or create just about anything - anywhere.", slug:"macbook-air-2022", photo:"macbookair2022.png", price:"1165.93", stock:2, reviews:5, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
    {code:"015", name:"MacBook Pro 2019", category:"laptop", description:"Designed for those who defy limits and change the world, the ne MacBook Pro is by far the most powerful notebook Apple has ever made. With an immersive 16-inch Retina display, superfast processors, netx-generation graphics, the largest battery capacity ever in a MacBook Pro.", slug:"macbook-pro-2019", photo:"macbookpro2019.png", price:"2099.99", stock:5, reviews:4, reviewsList:[
      {code: 1, username: 'paolodalex', userimage: 'user1.jpg', score: 4, text: 'Il prodotto è arrivato il giorno previsto in perfette condizioni, la qualità del suono è davvero il massimo per questo prezzo. Comode e isolano bene si nota subito i materiali di alta qualità.'},
      {code: 2, username: 'susan', userimage: 'user2.jpg', score: 3, text: 'Cuffie di buona fattura, sono comode e leggere, il pacco è arrivato leggermente danneggiato e il corriere è stato abbastanza scortese.'},
      {code: 3, username: 'juan', userimage: 'user3.jpg', score: 5, text: 'Credo che siano le migliori cuffie acquistabili a questo prezzo, davvero fenomenali! Il pacco è arrivato come sempre il giorno prestabilito.'},
    ]},
  ]

  private _cart :Product[] = []


  constructor() {
  }

  addToCart(product:Product) {
    let productInCart = this.searchProductInCart(product.slug)
    if(productInCart != undefined) {
      productInCart.stock = Number(productInCart.stock) + Number(product.stock)
    }
    else {
      this._cart.push(product)
    }
  }

  removeFromCart(product:Product) {
    this._cart = this._cart.filter(p => p !== product)
  }

  cleanCart() {
    this._cart = []
  }

  searchProductInCart(slug: String) {
    return this._cart.find(p => p.slug === slug)
  }

  searchByCategoryProduct(category: String, name: String) {
    return this._products.filter(p => p.category === category && p.name !== name)
  }

  searchProduct(slug: String) {
    return this._products.find(p => p.slug === slug)
  }

  get products() {
    return [...this._products]
  }

  get cart() {
    return [...this._cart]
  }
}
