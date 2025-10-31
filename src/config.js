const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmh336v58001n01qyg30n72p1',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Shifting Sands',
    subtitle:
      'Kerala’s 2016 ban on river sand mining was meant to save its waterways and lifelines. However, it had an unintended consequence.',
    date: 'October 10 2025',
    social: [
      {
        name: 'X',
        src: 'x.svg',
        href: 'https://x.com/mongabayindia',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/mongabayindia/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://india.mongabay.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Andrés Alegría | Edited by Kartik Chandramouli',
 



  chapters: [
    {
      id: 'first chapter',
      alignment: 'left',
      hidden: false,
      title: ' ',
      description:
        'The construction industry is Kerala’s largest consumer of river sand. After the ban on river sand mining, miners turned to the hills of the Western Ghats, crushing quarried hard rock to produce manufactured sand, also known as <b>m-sand</b>.',
      legend: [
       {
          title: 'Western Ghats',
          fromLayer: 'Western Ghats Solid',
        },
        {
          title: 'Kerala state',
          fromLayer: 'kerala-solid',
        },
      ],
      location: {
        center: [75.0, 13.0],
        zoom: 6.0,
        pitch: 0.0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
          opacity: 0.5,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'peruvian-amazon-20241002t1750-dlalbv copy',
          opacity: 0,
        },
      ],
    },
    {
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          icon: 'coca',
        },
      ],
      sources: "Placeholder text",
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 40.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 1,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
    {
      id: 'third-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      description:
          'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          color: '#de6363',
          pattern: 'LINEPATTERN',
        },
      ],
      sources: 'Placeholder text',
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 20.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0.75,
        },
      ],
    },
    {
      id: 'fourth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          color: '#ccefb8',
        },
      ],
      sources: 'Placeholder text',
      location: {
        center: [77.20, 10.75],
        zoom: 7.5,
        pitch: 30.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0.5,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'fifth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 60.0,
        bearing: 50,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: .5,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
    {
      id: 'sixth-chapter',
      alignment: 'left',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 6.5,
        pitch: 30.0,
        bearing: 50,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'seventh-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'APlaceholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 4.5,
        pitch: 30.0,
        bearing: 60,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 1,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0,
        }
      ],
      onChapterExit: [
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
    },
    {
      id: 'eighth-chapter',
      alignment: 'fully',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      legend: [
        {
          title: 'Placeholder text',
          color: '#66f7ff',
        },
      ],
      sources: "Placeholder text",
      location: {
        center: [77.20, 10.75],
        zoom: 4.5,
        pitch: 60.0,
        bearing: 30,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'ninth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Placeholder text',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.75],
        zoom: 5.5,
        pitch: 20.0,
        bearing: 40,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'deforestationthreeregions-dcthbg',
          opacity: 0,
        },
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 0,
        },
      ],
      onChapterExit: [],
    },
    {
      id: 'tenth-identifier',
      alignment: 'fully',
      hidden: false,
      title: 'Rivers and roads',
      images: [
        {
          src: 'photo1.jpg',
          position: 'top',
          title: 'Placeholder text',
          author: 'Placeholder text',
        },
      ],
      description:
        'Placeholder text.',
      location: {
        center: [77.20, 10.15],
        zoom: 6.5,
        pitch: 20.0,
        bearing: 30,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 1,
        },
        {
          layer: 'airstrips-10224-dozgmq',
          opacity: 1,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 2',
          opacity: 0.75,
        },
        {
          layer: 'concesiones-forestales-10-432-dulhn7 copy 1',
          opacity: 0.75,
        },
        {
          layer: 'territorios-indigenas-0lu5ni copy',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'coca-crops-density-20241002t1-55l40t',
          opacity: 0,
        },
      ],
    },
  ],
};
