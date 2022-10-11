import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from './dati/product.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _products :Product[] = [
    {code:"001", name:"Iphone XR 64GB", category:"smarthphone", description:"", slug:"iphone-xr", photo:"iphonexr.jpg", price:"500.50", stock:3, reviews:4},
    {code:"002", name:"MacBook Pro 2021", category:"laptop", description:"The blazing-fast M1 Pro or M1 max chip for groundbreaking performance and amazing battery life. A Stunning Liquid Retina XDR display and all the ports you need. This is the notebook you've been waiting for.", slug:"macbookpro-2021", photo:"macbookpro.jpeg", price:"2549.00", stock:7, reviews:5},
    {code:"003", name:"Sennheiser HD 450BT", category:"headphone", description:"Step up to great wireless sound with the HD 450BT from Sennheiser. Whether relaxing at home or on the go, they offer an exceptional combination of versatility and superior sound. Created by audio specialist Sennheiser to deliver a superior sound experience with deep dynamic bass, they feature active noise cancellation to ensure enjoyment without distraction.", slug:"sennheiser-hd-450bt", photo:"sennheiserhd450bt.jpeg", price:"199.99", stock:26, reviews:3},
    {code:"004", name:"Xiaomi Redmi Note 11 Pro 5G", category:"smartphone", description:"108MP Powerhous 120Hz FHD+ AMOLED DotDisplay 67W turbo charging. Smoother, faster and more efficient. For those who want the ultimate experience，Snapdragon® 695 5G processor is ready.", slug:"redmi-note-11-pro-5g", photo:"xiaomiredminote11pro.png", price:"376.97", stock:12, reviews:5},
    {code:"005", name:"Apple AirPods Pro 2", category:"headphones", description:"Dual beamforming microphones, Inward-facing microphone, Skin-detect sensor, Motion-detecting accelerometer, Speech-detecting accelerometer, Touch control.", slug:"airpods-2", photo:"airpods2.jpg", price:"269.99", stock:2, reviews:5},
    {code:"006", name:"ASUS ProArt Display 27", category:"monitor", description:"The ProArt display delivers industry-standard 100% sRGB and 100% Rec. 709 color for rich, vivid reproduction that ensures every detail of your photos is clear and lifelike.", slug:"asus-proart", photo:"asusproart.jpg", price:"319.00", stock:40, reviews:4},
    {code:"007", name:"MSI Summit E13 Flip Evo", category:"laptop", description:"For professionals who desire maximum productivity. Verified by Intel Evo platform to provide expecptional performance that keep you going forward. Featuring the latest 11th Gen. Intel Core i7 processor & Intel Iris Xe graphics. ", slug:"msi-summit-e13", photo:"msisummite13.jpg", price:"1329.99", stock:7, reviews:5},
  ]

  public emitter = new Subject<Product[]>()

  private _cart :Product[] = []


  constructor() {
    this._cart.push({code:"002", name:"MacBook Pro 2021", category:"laptop", description:"The blazing-fast M1 Pro or M1 max chip for groundbreaking performance and amazing battery life. A Stunning Liquid Retina XDR display and all the ports you need. This is the notebook you've been waiting for.", slug:"macbookpro-2021", photo:"macbookpro.jpeg", price:"2549.00", stock:7, reviews:5})
  }

  addToCart(product:Product) {
    this._cart.push(product)
  }

  removeFromCart(product:Product) {
    this._cart = this._cart.filter(p => p !== product)
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
