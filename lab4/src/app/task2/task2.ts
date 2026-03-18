import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Category {
  id: number;
  name: string;
}


interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  likes: number;
  categoryId: number;
  rating: number;
  image: string;
  images: string[];
  link: string;
}

@Component({
  selector: 'app-task2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task2.html',
  styleUrl: './task2.css'
})

export class Task2 {

  selectedCategoryId: number | null = null;


  categories: Category[] = [
    { id: 1, name: 'Smartphones' },
    { id: 2, name: 'Laptops' },
    { id: 3, name: 'Tablets' },
    { id: 4, name: 'Accessories' }
  ];

  products: Product[] = [

    {
      id: 1,
      name: 'iPhone 12 128GB',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 1,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h17/hae/63953033330718.jpg?format=preview-large',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-12-256gb-nanosim-esim-sinii-100657053/?c=750000000'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 2020 13.3',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 2,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h06/h08/64213171568670.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000'
    },
    {
      id: 3,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 3,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    },
    {
      id: 4,
      name: 'Чехол для Apple iPhone 13 прозрачный',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 4,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/he3/86370186952734.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-13-prozrachnyi-120762119/?c=750000000'
    },
    {
      id: 5,
      name: 'iPhone 17 Pro Max 128GB',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 1,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-nanosim-esim-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 6,
      name: 'Ноутбук Apple MacBook Pro 16 2021 16.2',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 2,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc1/p7c/36863341.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2021-16-2-32-gb-ssd-512-gb-macos-z14v0008d-138158355/?c=750000000'
    },
    {
      id: 7,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб синий',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 3,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p2d/37019409.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-sinii-138202165/?c=750000000'
    },
    {
      id: 8,
      name: 'Чехол для Apple iPhone 15 Pro Max прозрачный',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 4,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h7c/83768947474462.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/chehol-dlja-apple-iphone-15-pro-max-prozrachnyi-113308490/?c=750000000'
    },
    {
      id: 9,
      name: 'iPhone 15 128GB',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 1,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-max-256gb-nanosim-esim-serebristyi-145468150/?srsltid=AfmBOoqKimtVjevcIFMSoobkPvDO-riZ_dKdNLM6LK1VS76NZ2hdP2yH'
    },
    {
      id: 10,
      name: 'Ноутбук Apple MacBook Air 13 2022 13.6',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 2,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p3c/p38/16711028.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4ru-a-132428983/?c=750000000'
    },
    {
      id: 11,
      name: 'iPhone 13 128GB',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 1,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-nanosim-esim-chernyi-102298404/?c=750000000'
    },
    {
      id: 12,
      name: 'iPhone 16 128GB',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 1,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf3/h65/87295470731294.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-nanosim-esim-chernyi-123713453/?c=750000000'
    },
    {
      id: 13,
      name: 'Ноутбук Apple MacBook Pro 16 2024 16.2',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 2,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa1/pce/15484955.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-2024-16-2-24-gb-ssd-512-gb-macos-mx2x3-137245155/?c=750000000'
    },
    {
      id: 14,
      name: 'Ноутбук Apple MacBook Air 13 2025 / 16 Гб',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 2,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p31/p2a/36789431.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2025-16-gb-ssd-256-gb-macos-mw0y3ru-a-138137409/?c=750000000'
    },
    {
      id: 15,
      name: 'Планшет Xiaomi Redmi Pad 2 11 дюйм 8 Гб/256 Гб фиолетовый',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 3,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pcf/pcc/81439394.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-11-djuim-8-gb-256-gb-fioletovyi-140639755/?c=750000000'
    },
    {
      id: 16,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб розовый',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 3,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pce/p96/37011919.png?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-rozovyi-138199640/?c=750000000'
    },
    {
      id: 17,
      name: 'Чехол JASPER для Apple iPhone 17 Pro прозрачный',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 4,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9d/p93/67520454.jpeg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/chehol-jasper-dlja-apple-iphone-17-pro-prozrachnyi-146498145/?c=750000000'
    },
    {
      id: 18,
      name: 'Кабель VARIUM USB 4 Type-C (M), 1 м, VTT03 белый',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 4,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc0/p33/58883993.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/kabel-varium-usb-4-type-c-m-1-m-vtt03-belyi-144182006/?c=750000000'
    },
    {
      id: 19,
      name: 'Ремешок для Apple Watch SE, Watch SE 2nd Gen бежевый',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 4,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h75/86113661911070.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/remeshok-dlja-apple-watch-se-watch-se-2nd-gen-bezhevyi-119797876/?c=750000000'
    },
    {
      id: 20,
      name: 'Планшет Xiaomi Redmi Pad 2 4G 11 дюйм 8 Гб/256 Гб серый',
      description: 'Latest Apple smartphone with powerful A18 chip and improved camera system.',
      price: 499990,
      likes: 0,
      categoryId: 3,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p34/pcd/81439931.jpg?format=gallery-medium',
      images: [],
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-pad-2-4g-11-djuim-8-gb-256-gb-seryi-138200730/?c=750000000'
    }

  ];

  selectCategory(id: number) {
    this.selectedCategoryId = id;
  }

  getFilteredProducts(): Product[] {
    if (!this.selectedCategoryId) return [];
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  like(product: Product) {
    product.likes += 1;
  }

  delete(product: Product) {
  const confirmed = confirm(`Delete "${product.name}"?`);
  if (confirmed) {
    this.products = this.products.filter(p => p.id !== product.id);
  }
}

  

  shareWhatsApp(product: Product) {
    const url = `https://wa.me/?text=${encodeURIComponent('Check out this product: ' + product.link)}`;
    window.open(url);
  }

  shareTelegram(product: Product) {
    const url = `https://t.me/share/url?url=${encodeURIComponent(product.link)}&text=${'Check out this product: ' + encodeURIComponent(product.name)}`;
    window.open(url);
  }

  getStars(rating: number): Array<number> {
    return Array(Math.floor(rating)).fill('star');
  }
}