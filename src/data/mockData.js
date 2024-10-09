// import icons
import {
    IoLogoYoutube,
    IoLogoFacebook,
    IoLogoGithub,
    IoLogoInstagram,
    IoMdAddCircle,
    IoIosCheckmarkCircle,
    IoIosArrowRoundForward,
  } from 'react-icons/io';
  
  // import images
  import HERO1 from '../img/HERO1.jpg';
  import HERO2 from '../img/HERO2.jpg';
  import HERO3 from '../img/HERO3.jpg';
  import PG1 from '../img/productIMG/PG1.jpg';
  import PG2 from '../img/productIMG/PG2.jpg';
  import PD9 from '../img/productIMG/PD9.jpg';
  import P1 from '../img/productIMG/P1.jpg';
  import P2 from '../img/productIMG/P2.jpg';
  import P3 from '../img/productIMG/P3.jpg';
  import P5 from '../img/productIMG/P5.jpg';
  import P6 from '../img/productIMG/P6.jpg';
  import PD1 from '../img/productIMG/PD1.jpg';
  import PD2 from '../img/productIMG/PD2.jpg';
  import PD3 from '../img/productIMG/PD3.jpg';
  import PD4 from '../img/productIMG/PD4.jpg';
  import PD5 from '../img/productIMG/PD5.jpg';
  import PD6 from '../img/productIMG/PD6.jpg';
  import PD7 from '../img/productIMG/PD7.jpg';
  import PD8 from '../img/productIMG/PD8.jpg';
  import PD10 from '../img/productIMG/PD10.jpg';
  import Person1 from '../img/Person1.jpg';
  import Person2 from '../img/Person2.webp';
  import Person3 from '../img/Person3.jpg';
  import Person4 from '../img/Person4.jpg';
  import Person5 from '../img/Person5.png';
  import ROOMDESİGN1 from '../img/ROOMDESİGN1.JPG'

  
  export const navigation = [
    {
      name: 'home',
      href: 'home',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'features',
      href: 'features',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  export const hero = {
    title: 'Creative Home Simpify your Furniture',
    subtitle:
      'Do i have consent to record this meeting gain locaion, root-and-branch, review, nor game plan who’s the goto',
    buttonText: 'Shop Now',
  };
  
  export const stats = [
    {
      value: '7',
      text: 'Year Experience',
    },
    {
      value: '2',
      text: 'Opened in the country',
    },
    {
      value: '10k+',
      text: 'Furniture sold',
    },
    {
      value: '260+',
      text: 'Variant Furniture',
    },
  ];
  
  export const features = {
    
    image: HERO3 ,
    title: 'We Create your home more aesthetic',
    subtitle:
      'Furniture power is a software as services for multipurpose business management system',
    buttonText: 'Show Now',
    items: [
      {
        icon: IoIosCheckmarkCircle,
        title: 'Valuation Services',
        subtitle:
          'Sometimes features require a short description.  This can be detailed description',
      },
      {
        icon: IoIosCheckmarkCircle ,
        title: 'Development of Furniture Models',
        subtitle:
          'Sometimes features require a short description.  This can be detailed description',
      },
    ],
    feature2: {
      image: HERO2 ,
      title: 'The Best Furniture Manufacturer of your choice',
      subtitle:
        'Furnitre power is a software as services for multiperpose business management system, expecially for them who are running two or more business exploree the future Furnitre power is a software as services.',
    },
  };
  
  export const newInStore = {
    title: 'New In Store Now',
    subtitle: 'Get the latest items immediately with promo prices',
    link: 'Check all',
    icon: IoIosArrowRoundForward ,
    products: [
      {
        name: 'chair',
        image: PD1 ,
      },
      {
        name: 'bed',
        image: PD2 ,
      },
      {
        name: 'cupboard',
        image: PD3 ,
      },
      {
        name: 'lighting',
        image: PD5 ,
      },
    ],
  };
  
  export const products = {
    title: 'All Products',
    subtitle:
      'The products we provide only for you as our service are selected from the best products with number 1 quality in the world',
    pages: [
      {
        productList: [
          {
            image: P1 ,
            icon: IoMdAddCircle ,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image: P2 ,
            icon: IoMdAddCircle ,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: P3 ,
            icon: IoMdAddCircle ,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: P5 ,
            icon: IoMdAddCircle ,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
          {
            image: P6 ,
            icon: IoMdAddCircle ,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
          },
          {
            image: PD1 ,
            icon: IoMdAddCircle ,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
          },
          {
            image: PD2 ,
            icon: IoMdAddCircle ,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
          },
          {
            image: PD3,
            icon: IoMdAddCircle ,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
          },
          {
            image: PD8 ,
            icon: IoMdAddCircle ,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: PD5 ,
            icon: IoMdAddCircle ,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
      {
        productList: [
          {
            image: PD6 ,
            icon: IoMdAddCircle ,
            name: 'Ceiling Light',
            price: 75,
            oldPrice: 82,
          },
          {
            image: PD7 ,
            icon: IoMdAddCircle ,
            name: 'Wood Chair',
            price: 50,
            oldPrice: 70,
          },
          {
            image: PD8 ,
            icon: IoMdAddCircle ,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: PD9 ,
            icon: IoMdAddCircle ,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
          {
            image: PD10 ,
            icon: IoMdAddCircle ,
            name: 'Treos Seroes 911',
            price: 200,
            oldPrice: 210,
          },
          {
            image: P1 ,
            icon: IoMdAddCircle ,
            name: 'Multi bilderman slibber',
            price: 45,
            oldPrice: 50,
          },
          {
            image: P2 ,
            icon: IoMdAddCircle ,
            name: 'XORA corner desk',
            price: 320,
            oldPrice: 325,
          },
          {
            image: P3 ,
            icon: IoMdAddCircle ,
            name: 'Black Forest Series Wood',
            price: 225,
            oldPrice: 240,
          },
          {
            image: P6 ,
            icon: IoMdAddCircle ,
            name: 'Papper Cupboard',
            price: 105,
            oldPrice: 120,
          },
          {
            image: P5 ,
            icon: IoMdAddCircle ,
            name: 'Ole Gundorse Spring',
            price: 75,
            oldPrice: 82,
          },
        ],
      },
    ],
  };
  
  export const testimonial = {
    title: 'What people are saying about us',
    image: ROOMDESİGN1 ,
    persons: [
      {
        avatar: Person1 ,
        name: 'Josh Smith',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
      },
      {
        avatar: Person2 ,
        name: 'Brandi Johns',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
      },
      {
        avatar: Person3 ,
        name: 'Paula Pfeffer',
        occupation: 'Manager of The New York Times',
        message:
          '“They are have a perfect touch for make something so professional ,interest and useful for a lot of people .”',
      },
    ],
  };
  
  export const newsletter = {
    title: 'Get more discount Off your order',
    subtitle: 'Join our mailing list',
    placeholder: 'Your email address',
    buttonText: 'Shop Now',
  };
  
  export const footer = {
    social: [
      {
        icon: IoLogoYoutube,
        href: '#',
      },
      {
        icon: IoLogoInstagram ,
        href: '#',
      },
      {
        icon: IoLogoGithub ,
        href: '#',
      },
      {
        icon: IoLogoFacebook ,
        href: '#',
      },
    ],
    copyright: 'FurniShop 2022 - All Rights Reserved.',
  };
  