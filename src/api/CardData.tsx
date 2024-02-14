const CardData = [
  // {
  //   id: 1,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1653408400816-af6dba0c9432?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1653312727964-736f11663ef6?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1629447236132-22c57cd0f0bf?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Gardon Reveira, Italy",
  //   days: "Oct 2-9",
  //   price: "$14,999 night",
  //   isNew: true,
  //   rating: 4.5,
  // },
  // {
  //   id: 2,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Joshua tree, USA",
  //   days: "Sep 2-11",
  //   price: "$3000 night",
  //   isNew: false,
  //   rating: 4.99,
  // },
  // {
  //   id: 3,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1426604966848-d7adac402bff?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Uvita rosa, Costa Rica",
  //   days: "Nov 19-22",
  //   price: "$1,129 night",
  //   isNew: true,
  //   rating: 4.6,
  // },
  // {
  //   id: 4,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1475113548554-5a36f1f523d6?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Navidad, Chile",
  //   days: "Sep 13-18",
  //   price: "$208 night",
  //   isNew: false,
  //   rating: 4.2,
  // },
  // {
  //   id: 5,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1647891940243-77a6483a152e?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1587502537104-aac10f5fb6f7?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1587502537815-0c8b5c9ba39a?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Paraty, Brazil",
  //   days: "Aug 1-6",
  //   price: "$243 night",
  //   isNew: true,
  //   rating: 4.1,
  // },
  // {
  //   id: 6,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1505765050516-f72dcac9c60e?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Raelington, Norway",
  //   days: "Oct 9-15",
  //   price: "$698 night",
  //   isNew: false,
  //   rating: 4.6,
  // },
  // {
  //   id: 7,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1504567961542-e24d9439a724?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1499002238440-d264edd596ec?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1462216589242-9e3e00a47a48?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Terrasini, Italy",
  //   days: "June 7-12",
  //   price: "$467 night",
  //   isNew: true,
  //   rating: 4.7,
  // },
  // {
  //   id: 8,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1523528283115-9bf9b1699245?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1496256654245-8f3d0ef3bebe?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1504392022767-a8fc0771f239?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "San Jose, Mexico",
  //   days: "Jun 11-16",
  //   price: "$1,767 night",
  //   isNew: false,
  //   rating: 4.8,
  // },
  // {
  //   id: 9,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1600240644455-3edc55c375fe?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/reserve/bOvf94dPRxWu0u3QsPjF_tree.jpg?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1486912500284-6f2462ba07ea?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Tulum, Mexico",
  //   days: "Jul 1-6",
  //   price: "$910 night",
  //   isNew: true,
  //   rating: 4.3,
  // },
  // {
  //   id: 10,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1518593929011-2b5ef6be57c7?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1444464666168-49d633b86797?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1526137844794-45f1041f397a?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1476209446441-5ad72f223207?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Inglis, Canada",
  //   days: "Jun 12-18",
  //   price: "$629 night",
  //   isNew: false,
  //   rating: 4.6,
  // },
  // {
  //   id: 11,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1458966480358-a0ac42de0a7a?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1531756716853-09a60d38d820?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Jenner, California",
  //   days: "Nov 2-7",
  //   price: "$2,595 night",
  //   isNew: false,
  //   rating: 4.1,
  // },
  // {
  //   id: 12,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1526336179256-1347bdb255ee?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1477511801984-4ad318ed9846?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1564574662330-73fb2940ff5d?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1564415637254-92c66292cd64?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Malibu, US",
  //   days: "Jun 3-4",
  //   price: "$4,467 night",
  //   isNew: false,
  //   rating: 4.2,
  // },
  // {
  //   id: 13,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1470240731273-7821a6eeb6bd?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1517639493569-5666a7b2f494?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1605708896118-957f660c1555?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1497449493050-aad1e7cad165?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Bolzano, Italy",
  //   days: "Sep 22-25",
  //   price: "$358 night",
  //   isNew: true,
  //   rating: 4.5,
  // },
  // {
  //   id: 14,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1494548162494-384bba4ab999?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1533387520709-752d83de3630?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Hawaii, US",
  //   days: "Nov 4-10",
  //   price: "$777 night",
  //   isNew: true,
  //   rating: 4.8,
  // },
  // {
  //   id: 15,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1544892504-5a42d285ab6f?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Lagos, Portugal",
  //   days: "Sep 25-Oct 2",
  //   price: "$2,999 night",
  //   isNew: true,
  //   rating: 4.88,
  // },
  // {
  //   id: 16,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1504870712357-65ea720d6078?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1535463731090-e34f4b5098c5?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1495571758719-6ec1e876d6ae?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "LunenBurg, Canada",
  //   days: "Oct 4-9",
  //   price: "$500 night",
  //   isNew: false,
  //   rating: 4.2,
  // },
  // {
  //   id: 17,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1503435824048-a799a3a84bf7?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1446034295857-c39f8844fad4?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1504803900752-c2051699d0e8?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1528184039930-bd03972bd974?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Santa Rosa, US",
  //   days: "Jun 2-9",
  //   price: "$3,369 night",
  //   isNew: false,
  //   rating: 4.1,
  // },
  // {
  //   id: 18,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1465147264724-326b45c3c59b?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1519821172144-4f87d85de2a1?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1562095241-8c6714fd4178?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Carlux, France",
  //   days: "Oct 28-Nov 4",
  //   price: "$2511 night",
  //   isNew: true,
  //   rating: 4.5,
  // },
  // {
  //   id: 19,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1501786223405-6d024d7c3b8d?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1510525009512-ad7fc13eefab?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1485067801970-70573e3f77d0?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Palm desert, US",
  //   days: "Jun 11-16",
  //   price: "$3200 night",
  //   isNew: true,
  //   rating: 4.7,
  // },
  // {
  //   id: 20,
  //   locationImages: [
  //     {
  //       id: 1,
  //       url: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 2,
  //       url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 3,
  //       url: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?auto=format&fit=crop&w=400&h=250&q=80",
  //     },
  //     {
  //       id: 4,
  //       url: "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 5,
  //       url: "https://images.unsplash.com/photo-1519117576932-ffd1d4f1c720?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 6,
  //       url: "https://images.unsplash.com/photo-1471864190281-a93a3070bf72?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 7,
  //       url: "https://images.unsplash.com/photo-1483736250477-1a13bf489dfe?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 8,
  //       url: "https://images.unsplash.com/photo-1475252526808-bbf1ecf5fe20?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 9,
  //       url: "https://images.unsplash.com/photo-1495704909832-a14b9f6b53c1?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //     {
  //       id: 10,
  //       url: "https://images.unsplash.com/photo-1497015289637-5461ce801370?auto=format&fit=crop&w=400&h=250&q=60",
  //     },
  //   ],
  //   location: "Ressaca, Brazil",
  //   days: "Oct 2-9",
  //   price: "$14,999 night",
  //   isNew: false,
  //   rating: 4.5,
  // },
  {
    id: 21,
    locationImages: [
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/438ef89e-7fd2-41b6-a052-cdfd499ef8f1.jpeg?im_w=720",
      },
      {
        id: 2,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/ba9b4a4c-5771-4295-a789-1c9519b29513.jpeg?im_w=720",
      },
      {
        id: 3,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/8f18de9c-6de4-4dc9-af38-785bea2d4c73.jpeg?im_w=720",
      },
      {
        id: 4,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/002aeae9-324d-41f7-bc9b-24b1205b4936.jpeg?im_w=720",
      },
      {
        id: 5,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/e6bb878c-769a-45cf-9011-e11e6597fcfc.jpeg?im_w=720",
      },
      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/2807fbac-bed7-4738-b15a-c3bf622494df.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/8b5f8322-f70f-4139-98cd-6b5a821fff9d.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/159d298a-81fb-4b9b-9dde-daa660858cf6.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/ebf166bf-6441-4a96-9dd6-5e3d20ba332b.jpeg?im_w=720",
      },
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/65f286a0-2113-4086-aa1a-011f07feacc6.jpeg?im_w=720",
      },
      {
        id: 11,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-45680466/original/16aa95bf-02c8-44e0-be67-102716e1948a.jpeg?im_w=720",
      },
    ],
    location: "Cais do Sodre,Portugal",
    days: "Oct 2-9",
    price: "60 night",
    isNew: false,
    rating: 3,
  },

  {
    id: 23,
    locationImages: [
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/da18489a-1dd9-490a-8e1d-c6e809ee08a8.jpeg?im_w=720",
      },
      {
        id: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/f82ddbec-57d0-42bc-9f6a-4348cd3b196b.jpeg?im_w=720",
      },
      {
        id: 3,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/4cd8da92-9971-40db-a290-fcd863562447.jpeg?im_w=720",
      },
      {
        id: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/236a5c3e-40dc-47a6-ba1a-aabfb09c84ea.jpeg?im_w=720",
      },
      {
        id: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/1e6e054a-1745-4538-a822-475a4c7e90a1.jpeg?im_w=720",
      },
      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/1814721d-540e-4d3d-bdc7-ed48ed64a9bb.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/a657db92-70f1-46ca-a5a3-dc9d66a3dc5e.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/263e3550-5c02-44ff-a4d3-dc4e08a02152.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/606eee6e-4edd-453a-ad2c-2fef1dcfccfb.jpeg?im_w=720",
      },
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-53975448/original/cadb783c-69a8-445b-ab76-ea928264ac81.jpeg?im_w=720",
      },
    ],
    location: "Belem, Portugal",
    days: "Jan 12-29",
    price: "37 night",
    isNew: true,
    rating: 3,
  },

  {
    id: 25,
    locationImages: [
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/3f959850-830e-4ac6-93f5-22d55de204a6.jpeg?im_w=720",
      },
      {
        id: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/a0ab8fe1-aac2-4998-85dd-b045c5ad73de.jpeg?im_w=720",
      },
      {
        id: 3,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/808bb7cf-6cf0-4323-be21-1b443f5476eb.jpeg?im_w=720",
      },
      {
        id: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/82124df9-61a7-41c3-be31-c186eed8aac0.jpeg?im_w=720",
      },
      {
        id: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/e6825c2d-13b6-462b-9c5f-d467d6432f84.jpeg?im_w=720",
      },
      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/8abc8f00-2d2b-4471-81fd-e2572afda427.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/806c0b3c-cc2d-45c5-9bb5-2154f1ed7622.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/0e969d2e-f4ac-4732-9493-d01d19c96a55.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/4b5e45ad-06d2-41fb-8961-c1b024cafe32.jpeg?im_w=720",
      },
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-1019414435415599557/original/31f702e5-60b3-469a-a000-ba1f25c86947.jpeg?im_w=720",
      },
    ],
    location: "Oriente,Portugal",
    days: "March 11-16",
    price: "50 night",
    isNew: true,
    rating: 4,
  },

  {
    id: 30,
    locationImages: [
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-889831564170554023/original/f51080d9-2eb8-4ca7-b561-67c83edcf6d7.jpeg?im_w=720",
      },
      {
        id: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-889831564170554023/original/d49f671b-c4cd-4260-8724-b6fb2d35c408.jpeg?im_w=720",
      },
      {
        id: 3,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-889831564170554023/original/be351ede-ed2b-4793-87fd-ce4442e9d979.jpeg?im_w=720",
      },
      {
        id: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-889831564170554023/original/20db9632-af3f-415b-8a40-f7befb3920b3.jpeg?im_w=720",
      },

      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-889831564170554023/original/d315debc-1c7c-42e9-953a-0b2f96862b40.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-889831564170554023/original/2fbc62a4-c0ab-4052-8032-aa3b99a90a67.jpeg?im_w=720",
      },
    ],
    location: "Cascais, Portugal",
    days: "Nov 1-5",
    price: "45 night",
    isNew: false,
    rating: 4,
  },
  {
    id: 31,
    locationImages: [
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/2837d7e6-9dd9-4f0e-9b16-eaf2c55d69b1.jpeg?im_w=720",
      },
      {
        id: 2,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/857d8efa-3661-4d19-9a5c-ac0919bdc448.jpeg?im_w=720",
      },
      {
        id: 3,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/640110e8-bb29-4857-815c-eef9c19f9e45.jpeg?im_w=720",
      },
      {
        id: 4,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/831ad3b3-7a59-40ed-9edf-2eb3f7e059e4.jpeg?im_w=720",
      },
      {
        id: 5,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/c835ca5c-5ad9-4f7a-b919-4577e7367e73.jpeg?im_w=720",
      },
      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/c2b9a575-46b6-4cca-9cec-4ad2c8c05212.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/8224c1e7-e323-47bb-acf1-a307b73c4b40.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/b13432d7-2d09-44c0-a06d-eded63670d7c.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/355120f1-049c-465d-8715-ac4861ae160c.jpeg?im_w=720",
      },
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/ac970c17-71c7-41ea-b841-bb74bc1832a3.jpeg?im_w=720",
      },
    ],
    location: "Rossio , Portugal",
    days: "Oct 20-29",
    price: "65 night",
    isNew: false,
    rating: 4,
  },
  {
    id: 32,
    locationImages: [
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/c3f284d6-644e-40f9-b49f-88cec28b9102.jpg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/c2b9a575-46b6-4cca-9cec-4ad2c8c05212.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-904323814488010024/original/8224c1e7-e323-47bb-acf1-a307b73c4b40.jpeg?im_w=720",
      },
    ],
    location: "Marques de Pombal, Portugal",
    days: "Sep 13-29",
    price: "65 night",
    isNew: false,
    rating: 3,
  },
  {
    id: 33,
    locationImages: [
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/b3b16ee3-a518-4485-b37f-3b3f1d149ae6.jpg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/cb9d9be7-9ccf-4070-8450-a4acf0b83830.jpg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/7fbe961e-a335-4991-853e-4f72525776cf.jpg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1015877079279905793/original/50f1ce1a-8027-4523-b638-fdb6f701b26a.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1015877079279905793/original/344ddf43-f6a9-421d-97e7-fb1939bf6da6.jpeg?im_w=720",
      },
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1015877079279905793/original/5f4da1f1-33d4-41f7-8deb-b3db3173bdbc.jpeg?im_w=720",
      },
    ],
    location: "Oriente, Portugal",
    days: "Dec 12-18",
    price: "55 night",
    isNew: false,
    rating: 3,
  },
  {
    id: 34,
    locationImages: [
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/30415694/6e6dc56f_original.jpg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/30415743/31212470_original.jpg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/30743507/0442cb8b_original.jpg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/30415860/8fc53d68_original.jpg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/30415831/405c769b_original.jpg?im_w=720",
      },
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/30415919/9156a140_original.jpg?im_w=720",
      },
    ],
    location: "Rossio, Portugal",
    days: "Oct 2-9",
    price: "35 night",
    isNew: false,
    rating: 4,
  },
  {
    id: 35,
    locationImages: [
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53635152/original/b5c87d80-98f5-44d5-a8e1-e875b4d64909.jpeg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53635152/original/c62b6649-aeea-4ded-8169-e1e98a151c59.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53635152/original/9dac23c8-7e25-4bd4-abe1-b050c8327f14.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53635152/original/b739a673-50d4-4ce6-b339-0e4968176499.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53635152/original/6937b889-8e17-430f-9bd1-dc477b80b567.jpeg?im_w=720",
      },
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-53635152/original/829048c0-e830-4426-869e-a7afba326f63.jpeg?im_w=720",
      },
    ],
    location: "Arrabida, Portugal",
    days: "Oct 12-19",
    price: "60 night",
    isNew: false,
    rating: 4,
  },
  {
    id: 36,
    locationImages: [
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46074720/original/6bafecc6-890d-48f5-a3f5-2ab84bd2c81a.jpeg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46074720/original/9bfd9c7f-8862-4468-b73c-cf1ce29e89ee.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46074720/original/bbb4cc0c-6752-4ddd-a379-c88dd11835c0.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46074720/original/9f8e712f-3142-491f-900d-9b87b899f1c2.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46074720/original/517a1d51-a3da-420f-b39f-3d576a0aa73f.jpeg?im_w=720",
      },
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-46074720/original/ba1aa997-70fe-44e2-be2d-9b8d749b03c6.jpeg?im_w=720",
      },
    ],
    location: "Intedente, Portugal",
    days: "March 2-8",
    price: "30 night",
    isNew: false,
    rating: 2,
  },
  {
    id: 37,
    locationImages: [
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-999765076728755844/original/2bb16be1-07fa-407b-a5b4-a51d4f2202ad.jpeg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-999765076728755844/original/37d3bb6b-0dd5-43a4-b110-77ee9df14b42.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-999765076728755844/original/913c5a98-99a0-466d-9ae1-705740c2c233.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-999765076728755844/original/278f3a44-a460-4af6-9ecb-3f352711d7b8.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-999765076728755844/original/db6e0acd-6e41-4977-8002-b708643d755e.jpeg?im_w=720",
      },
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/prohost-api/Hosting-999765076728755844/original/ec32d0de-338a-4c62-a8da-f1cbb4eced8e.jpeg?im_w=720",
      },
    ],
    location: "Saldanha, Portugal",
    days: "Nov 12-20",
    price: "45 night",
    isNew: false,
    rating: 4,
  },
  {
    id: 38,
    locationImages: [
      {
        id: 10,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-963130602921164659/original/89015f71-3445-4edb-afe2-3da757c6a9ea.jpeg?im_w=720",
      },

      {
        id: 6,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-963130602921164659/original/823472bf-b2ba-48fc-9194-cf0f7564e1d4.jpeg?im_w=720",
      },
      {
        id: 7,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-963130602921164659/original/1d6a8390-81d2-426b-b85f-c141e451e239.jpeg?im_w=720",
      },
      {
        id: 8,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-963130602921164659/original/3da41a30-f73a-43d9-8e13-ce5744afb6c1.jpeg?im_w=720",
      },
      {
        id: 9,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-963130602921164659/original/9c66f2f2-6c26-40e3-9f0e-358f1c9d0db6.jpeg?im_w=720",
      },
      {
        id: 1,
        url: "https://a0.muscache.com/im/pictures/miso/Hosting-963130602921164659/original/d795401f-b457-431b-91b0-2018648a8272.jpeg?im_w=720",
      },
    ],
    location: "Alameda, Portugal",
    days: "Dec 2-9",
    price: "40 night",
    isNew: false,
    rating: 5,
  },
];
export default CardData;
