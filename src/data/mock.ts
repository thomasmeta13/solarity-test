import { Post } from "modal/post";

export const POSTS: Post[] = [
  {
    title: "Money Boys: Whitelist Giveaway!",
    subtitle: `Do you like what I just created?</br>You can now add it your room, just but ut here!`,
    likes: 19,
    type: "featured",
    vr: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
  {
    title: "☭ Solarity Announcements: Token Burning",
    subtitle: `After the discussion we had with our team members, we choose to propose the burn of 2% of the total supply to implement..`,
    likes: 19,
    type: "announcement",
    tags: [
      {
        title: "Vote",
        type: "secondary",
      },
      {
        title: "Core",
        type: "error",
      },
    ],
    
  },  
  {
    title: "Money Boys: Whitelist Giveaway!",
    subtitle: `Do you like what I just created?</br>You can now add it your room, just but ut here!`,
    likes: 19,
    type: "featured",
    vr: {
      featured: true,
      imageUrl: "/images/placeholder/post/post_one.png",
      price: 5,
    },
  },
  {
    title: "tMΞTA just minted 5 Solana Money Boys",
    subtitle: `Minted token n. 19040124241 using Magic Eden, contract n. 1u4910i40129124`,
    likes: 19,
    type: "normal",
    tags: [
      {
        title: "Mint",
        type: "secondary",
      },
      {
        title: "Magic Eden",
        type: "error",
      },
    ],
  },
  {
    title: "Come Visit my place at <span class='text-secondary'> London</span>",
    subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
    likes: 19,
    type: "normal",
    tags: [
      {
        title: "London",
        type: "secondary",
      },
      {
        title: "Important",
        type: "error",
      },
    ],
  },
  {
    title: "Tech Sub-DAO decisions",
    subtitle: `Energistically utilize resource maximizing functionalities without business initiatives. Enthusiastically unleash professional solutions vis-a-vis high-quality schemas. Holisticly transform premium synergy before seamless deliverables. Monotonectally maintain compelling materials without virtual testing procedures. Dramatically deploy sticky collaboration and idea-sharing without open-source materials.</br></br>
    Quickly restore accurate metrics through corporate customer service. Energistically synthesize enterprise outsourcing rather than competitive infrastructures. Appropriately target timely e-business through covalent alignments. `,
    likes: 19,
    type: "normal",
    tags: [
      {
        title: "London",
        type: "secondary",
      },
      {
        title: "Technical",
        type: "warning",
      },
    ],
  },
];

export const TAGS = [
  "All",
  "Blockchain",
  "Tweets",
  "Your DAOs",
  "Mints",
  "Votes",
  "Proposals",
];

export const MY_DAOS = [
  {
    title: "Solarity",
    imageUrl: "/images/placeholder/your-dao/logotondo.png",
    link: "/dao/club-noriega",
  },
  {
    title: "Money Boys",
    imageUrl: "/images/placeholder/your-dao/moneyboys.png",
    link: "/dao/taraval-lounge",
  },
  {
    title: "Sol Gods",
    imageUrl: "/images/placeholder/your-dao/solgods.png",
    link: "/dao/pacheco-crew",
  },
  {
    title: "De Gods",
    imageUrl: "/images/placeholder/your-dao/degods.png",
    link: "/dao/club-noriega",
  },
];
