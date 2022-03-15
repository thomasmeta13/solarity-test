import { Gallery } from "modal/Gallery";
import { HeroProps } from "components/Hero";

export const TAGS = ["All", "Land", "3D Models", "Avatars", "Your Assets"];

export const HERO_DATA: HeroProps = {
  vr: {
    featured: true,
    imageUrl: "/images/placeholder/post/post_one.png",
    price: 5,
  },
  content: {
    title: "Land # 1414, Solarity",
    description:
      "  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi,eget quisque pharetra, nisl. Nisl a proin a commodo libero purusduis. Leo, condimentum viverra mattis feugiat egestas est at nec.Praesent vitae fames feugiat diam mauris. Fringilla posuere quamenim id urna. Arcu, ut magna cursus pharetra semper a.",
    buttonText: "Buy Now",
    buttonLink: "/buy-now",
  },
};

export const GALLERY: Gallery = {
  rows: [
    {
      title: "Raising Verses",
      items: [
        {
          title: "Tier 1 Hex",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/boh1.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/boh2.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/boh3.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Avatars",
      items: [
        {
          title: "Money Boys",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/moneygirl.jpeg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "SolGods",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/solgods.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "DeGods",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/degods.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "3D Assets",
      items: [
        {
          title: "Crypto VR Headset",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/tuma.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "Jelly Gun",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/raygun.jpeg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "MoneyBoy Mansion",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/mansion.jpg",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Apps & Widgets",
      items: [
        {
          title: "Money Boy Machine",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/ten.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "DyApps",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/eleven.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "Blockchain API",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/twelve.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
  ],
};