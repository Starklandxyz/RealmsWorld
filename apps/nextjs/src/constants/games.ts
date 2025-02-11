export const games = [
  {
    name: "Realms: Eternum",
    id: "realms-adventurers",
    image: "/backgrounds/dummy_background.png",
    color: "#f5f5f5",
    status: "alpha",
    chains: ["Starknet"],
    description: "Conquer the Realms",
    longform:
      "Eternum is a strategy game that is built on StarkNet. It is a game of management and conquest, where players must build and defend their Realm to thrive. The game is governed by a set of rules that are enforced by the game's smart contracts.",
    links: {
      website: "https://eternum.realms.world/",
      discord: "https://discord.gg/uQnjZhZPfu",
      twitter: "https://twitter.com/LootRealms",
      whitepaper: "https://scroll.bibliothecadao.xyz/",
    },
    compatibleTokens: [
      {
        name: "Realms",
        contract: "realms",
        icon: "realms.png",
        image: "/backgrounds/warRoom.png",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/eternum.png",
        alt: "Realms: Eternum",
      },
    ],
    homepage: "/homepages/realms-adventurers",
  },
  {
    name: "Loot Survivor",
    id: "loot-survivor",
    image: "/backgrounds/dragon.png",
    color: "#f5f5f5",
    status: "beta",
    chains: ["Starknet"],
    description: "Play to Die",
    longform:
      "Survivors is the first Loot adventure game exploring the Play2Die mechanic. It is a game of onchain survival where you must defeat beasts and collect gear in the fight to stay alive and make it to the top of the leaderboard.",
    links: {
      mainnet: "https://survivor.realms.world/",
      testnet: "https://beta-survivor.realms.world/",
      discord: "https://discord.gg/realmsworld",
      twitter: "https://twitter.com/LootRealms",
    },
    compatibleTokens: [
      {
        name: "Golden Token",
        contract: "goldenToken",
        icon: "realms.png",
        image: "/backgrounds/warRoom.png",
      },
    ],
    screenshots: [
      {
        src: "/screenshots/LS.png",
        alt: "Survivors",
      },
      {
        src: "/screenshots/LS3.png",
        alt: "Survivors",
      },
      {
        src: "/screenshots/LS7.png",
        alt: "Survivors",
      },
      {
        src: "/screenshots/LS8.png",
        alt: "Survivors",
      },
    ],
    homepage: "/homepages/realms-adventurers",
  },
];
