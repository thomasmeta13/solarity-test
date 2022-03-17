import { HeroProps } from "components/Hero";
import { TagsLinkCollectionProps } from "components/TagsCollection/Link";
import { Gallery, GalleryLand } from "modal/Gallery";
import { Post } from "modal/post";
import { MembersListProps } from "components/MembersList";
import { TokenBalancesProps } from "components/TokenBalances";
import { TransferTableProps } from "components/Tables/Transfer";
import { ContractProps } from "components/Contracts";

export const HERO_DATA: HeroProps = {
  vrdao: {
    featured: true,
    imageUrl: "/images/placeholder/post/post_one.png",
    price: 5,
  },
  content: {
    title: "Money Boy Verse",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, eget quisque pharetra, nisl. Nisl a proin a commodo libero purus duis. Leo, condimentum viverra mattis feugiat egestas est at nec. Praesent vitae fames feugiat diam mauris. Fringilla posuere quam enim id urna. Arcu, ut magna cursus pharetra semper a.",
    buttonText: "Join Now",
    buttonLink: "/join-now",
  },
};

export const TAGS: TagsLinkCollectionProps = {
  tags: [
    {
      label: "Home",
      link: "/daos",
    },
    {
      label: "Marketplace",
      link: "/daos/market",
    },
    {
      label: "Voting",
      link: "/daos/voting",
    },
    {
      label: "Roles",
      link: "/daos/members",
    },
    {
      label: "World",
      link: "/daos/world",
    },
    {
      label: "Vault",
      link: "/daos/vault",
    },
    {
      label: "Infra",
      link: "/daos/infra",
    },
  ],
};

export const GALLERY: Gallery = {
  rows: [
    {
      title: "Mansions",
      items: [
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/one.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/two.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/three.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Avatars",
      items: [
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/daos/gallery/avatar_one.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/daos/gallery/avatar_two.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/daos/gallery/avatar_three.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
    {
      title: "Apps",
      items: [
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/seven.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/eight.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
        {
          title: "7 X 7 Size #1231",
          decentraland: true,
          imageUrl: "/images/placeholder/marketplace/gallery/nine.png",
          currentBid: 10,
          endingIn: "12h  43m  27s",
        },
      ],
    },
  ],
};

export const POSTS: Post[] = [
  {
    title: "Announcements: We are partnering with Solarity",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
  {
    title: "Alpha Polls: Which NFT should we buy?",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Community",
        type: "error",
      },
    ],
  },
  {
    title: "Developers: Raise pay of Front End by 10%",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Developer",
        type: "error",
      },
    ],
  },
  {
    title: "Funding Request: A better index",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Artist",
        type: "warning",
      },
    ],
  },
  {
    title: "Investment Proposal: Solarity",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Community",
        type: "warning",
      },
    ],
  },
  {
    title: "Elections: Which Money Boy is the best?",
    subtitle: `4,444 Money Boys Building the metaverse. For the best insights and NFT analytic tools visit our platform`,
    likes: 19,
    type: "announcement",
    progress: 85,
    tags: [
      {
        title: "Core",
        type: "secondary",
      },
      {
        title: "Important",
        type: "error",
      },
    ],
  },
];

export const Members: MembersListProps[] = [
  {
    title: "C-Suite",
    members: [
      {
        name: "MoneyBoy 0x",
        post: "Artist & Dev",
        imageUrl: "/images/placeholder/daos/memebrs/1.jpeg",
      },
      {
        name: "MoneyBoy Briggs",
        post: "COO",
        imageUrl: "/images/placeholder/daos/memebrs/2.jpeg",
      },
      {
        name: "MoneyBoy tMETA",
        post: "Meta Officer",
        imageUrl: "/images/placeholder/daos/memebrs/3.jpeg",
      },
    ],
  },
  {
    title: "Devs",
    members: [
      {
        name: "MoneyBoy 0x",
        post: "Artist & Dev",
        imageUrl: "/images/placeholder/daos/memebrs/1.jpeg",
        points: "+ 124",
      },
      {
        name: "MoneyBoy Briggs",
        post: "COO",
        imageUrl: "/images/placeholder/daos/memebrs/2.jpeg",
        points: "+ 652",
      },
      {
        name: "MoneyBoy tMETA",
        post: "Meta Officer",
        imageUrl: "/images/placeholder/daos/memebrs/3.jpeg",
        points: "+ 145",
      },
    ],
  },
  {
    title: "Most Active Money Boys",
    vote: true,
    members: [
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/4.jpeg",
        points: "+ 145",
        votes: "100",
        voteColor: "warning",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/5.jpeg",
        points: "+ 652",
        votes: "70",
        voteColor: "info",
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/6.jpeg",
        points: "+ 652",
        votes: "50",
        voteColor: "general",
      },
      {
        name: "DODO Minions",
        post: "Website Creator",
        imageUrl: "/images/placeholder/daos/memebrs/7.jpeg",
        points: "+ 145",
        votes: "45",
        voteColor: "general",
      },
      {
        name: "DODO Minions",
        post: "UI UX designer",
        imageUrl: "/images/placeholder/daos/memebrs/1.jpeg",
        points: "+ 652",
        votes: "40",
        voteColor: "general",
      },
      {
        name: "DODO Minions",
        post: "Marketing Head",
        imageUrl: "/images/placeholder/daos/memebrs/2.jpeg",
        points: "+ 652",
        votes: "30",
        voteColor: "general",
      },
    ],
  },
];

export const WORLD_GALLERY: GalleryLand = {
  rows: [
    {
      title: "Highlighted Lands:",
      items: [
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/one.png",
        },
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/two.png",
        },
        {
          title: "Poker w/ the boys",
          date: "19:30 CET, 21 MAR",
          likes: 239,
          invites: 420,
          imageUrl: "/images/placeholder/daos/world/three.png",
        },
      ],
    },
  ],
};

export const TOKEN_BALANCES: TokenBalancesProps = {
  title: "Treasury Token Balances \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0  124414414 USD",
  tokens: [
    {
      title: "SOL",
      imageUrl: "/images/icons/tokens/solana.png",
      volume: "1052.96",
      amount: "$351420.22",
    },
    {
      title: "$MB",
      imageUrl: "/images/icons/tokens/moneycoin.png",
      volume: "400000.1",
      amount: "$637053.22",
    },
    {
      title: "VERSE",
      imageUrl: "/images/icons/solarityround.png",
      volume: "555000.96",
      amount: "$484716.16",
    },
    {
      title: "DUST",
      imageUrl: "/images/icons/tokens/degodsss.png",
      volume: "768870.8",
      amount: "$771184.35",
    },
    {
      title: "ZION",
      imageUrl: "/images/icons/tokens/zion.png",
      volume: "2983.96",
      amount: "$637053.22",
    },
    {
      title: "ETH",
      imageUrl: "/images/icons/tokens/eth.png",
      volume: "2983.96",
      amount: "$637053.22",
    },
    {
      title: "ANJ",
      imageUrl: "/images/icons/tokens/anj.png",
      volume: "400000.1",
    },
    {
      title: "ANT",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "555000.96",
      amount: "$484716.16",
    },
    {
      title: "DAI",
      imageUrl: "/images/icons/tokens/ant.png",
      volume: "768870.8",
      amount: "$771184.35",
    },
    {
      title: "SOL",
      imageUrl: "/images/icons/tokens/sol.png",
      volume: "1052.96",
      amount: "$351420.22",
    },
  ],
};

export const TRANSFER_TABLE_PROPS: TransferTableProps = {
  rows: [
    {
      date: "04/02/20",
      source: "@Monke13 ( Art DAU ...)",
      reference: "Devs subDAO : KYC Deposit for Kyber fees",
      amount: "+10585.73003 $MB",
      type: "plus",
    },
    {
      date: "04/02/20",
      source: "0xffd0456704...10.....",
      reference: "Art subDAO : Weekly compensation ($MB)",
      amount: "-670 $VERSE",
      type: "minus",
    },
    {
      date: "04/02/20",
      source: "Luise ( Association ...)",
      reference: "DAO payout : KYC Deposit for Kyber fees",
      amount: "+10585.73003 KNC",
      type: "plus",
    },
    {
      date: "04/02/20",
      source: "0xffd0456704...10.....",
      reference: "Solarity : Contribution to the Open Metaverse",
      amount: "-670 ETH",
      type: "minus",
    },
  ],
};

export const INFRA_CONTRACTS: ContractProps[] = [
  {
    avatartImage: "/images/placeholder/avatars/solboys.png",
    title: "Build the Smart Contracts for infra-DAO payment",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
  {
    avatartImage: "/images/placeholder/your-dao/degods.png",
    title: "Code Audit of Solarity",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
];


export const INFRA_CONTRACTS1: ContractProps[] = [
  {
    avatartImage: "/images/placeholder/avatars/solboys.png",
    title: "Build the Smart Contracts for infra-DAO payment",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
  {
    avatartImage: "/images/placeholder/your-dao/degods.png",
    title: "Code Audit of Solarity",
    subtitle:
      "Looking for an experienced designer to make ONE eye catching thumbnail for YouTube! Will provide design brief and assets upon application. Looking to build a long term relationship with a designer as I will be making a lot more videos in the future!",
    likes: 19,
    price: "Fixed-Price",
    experience: "Expert",
    budget: "250 SOL",
    deadline: "08-13-23",
  },
];

