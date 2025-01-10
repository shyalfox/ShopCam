import canon6d from '../assets/6d.webp'; 
import d850 from '../assets/d850.jpg';
import a73 from '../assets/a73.jpg';
import fuji from '../assets/fuji.webp';
import ef50 from '../assets/ef50.jpg';
import nikkor85 from '../assets/nikkor85.webp';
import fe24 from '../assets/fe24.webp';
import sigma18 from '../assets/sigma18.webp';

export const products = [
    {
      id: 1,
      name: "Canon 6d Mark II",
      description: `Excellent Entry level
        26.2 Megapixel full frame CMOS sensor
        Optical viewfinder with a 45 point all cross type AF system. Compatible lenses: Canon EF lenses (excluding EF S and EF M lenses)`,
      price: "200",
      image: canon6d,
      rating: 4,
    },
    {
      id: 2,
      name: "Nikon D850",
      description: `High resolution DSLR camera
        45.7 Megapixel full-frame CMOS sensor
        153-point autofocus system for fast and precise focusing
        4K UHD video recording and 8K time-lapse
        7 fps continuous shooting speed`,
      price: "2500",
      image: d850,
      rating: 5,
    },
    {
      id: 3,
      name: "Sony A7 III",
      description: `Full-frame mirrorless camera
        24.2 Megapixel back-illuminated Exmor R CMOS sensor
        693 phase detection AF points
        4K HDR video recording
        10 fps continuous shooting`,
      price: "1999",
      image: a73,
      rating: 4,
    },
    {
      id: 4,
      name: "Fujifilm X-T4",
      description: `Compact mirrorless camera with excellent video features
        26.1 Megapixel X-Trans CMOS 4 sensor
        5-axis in-body image stabilization
        4K 60p video recording
        15 fps continuous shooting with electronic shutter`,
      price: "1699",
      image: fuji,
      rating: 4,
    },
    {
        id: 5,
        name: "Canon EF 50mm f/1.8 STM",
        description: `Affordable prime lens with a wide aperture
          Fast f/1.8 maximum aperture
          STM autofocus motor for smooth, silent focusing
          Ideal for portraits and low-light photography`,
        price: "125",
        image: ef50,
        rating: 4,
      },
      {
        id: 6,
        name: "AF-S Nikkor 85mm f/1.4G",
        description: `Professional portrait lens
          Fast f/1.4 maximum aperture for beautiful bokeh
          Silent Wave Motor for fast, quiet autofocus
          High-quality glass construction for sharpness`,
        price: "1600",
        image: nikkor85,
        rating: 5,
      },
      {
        id: 7,
        name: "Sony FE 24-70mm f/2.8 GM",
        description: `Standard zoom lens for full-frame Sony cameras
          Constant f/2.8 aperture throughout the zoom range
          Fast and accurate autofocus system
          Excellent image quality with minimal distortion`,
        price: "2299",
        image: fe24,
        rating: 5,
      },
      {
        id: 8,
        name: "Sigma 18-50mm f/2.8 DC DN",
        description: `Compact standard zoom lens for mirrorless cameras
          Bright f/2.8 aperture
          Ideal for travel and everyday photography
          Excellent image quality with minimal aberrations`,
        price: "549",
        image: sigma18,
        rating: 4,
      }
  ];
  