const players = [
  {
    id: 1,
    displayName: "Melly",
    email: "eoingmelly@gmail.com",
    password: "eoinspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 13,
    image:
      "https://www.liveabout.com/thmb/y-l3mXsMIfKgxEByDO48QE23qIA=/4805x2703/smart/filters:no_upscale()/mcilroy-rory-18-5acd04aca474be0036f0d0d7.jpg",
  },
  {
    id: 2,
    displayName: "Alan",
    email: "almoynihan@gmail.com",
    password: "alanspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 23,
    image: "https://s.hdnux.com/photos/01/15/07/00/20213801/7/1200x0.jpg",
  },
  {
    id: 3,
    displayName: "Bridgeman",
    email: "paul.bridgeman@gmail.com",
    password: "paulspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 16,
    image:
      "https://e0.365dm.com/21/01/2048x1152/skysports-justin-thomas-golf_5233864.jpg",
  },
  {
    id: 4,
    displayName: "Murtagh",
    email: "ci.murt@gmail.com",
    password: "ciaranspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 18,
    image:
      "https://golf.com/wp-content/uploads/2021/01/GettyImages-1292253394.jpg",
  },
  {
    id: 5,
    displayName: "Heggo",
    email: "diarmuidHegarty@gmail.com",
    password: "diarmuidspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 12,
    image:
      "https://keyassets.timeincuk.net/inspirewp/live/wp-content/uploads/sites/5/2020/07/bryson-food-630x473.jpg",
  },
  {
    id: 6,
    displayName: "Comerford",
    email: "eoin.comerford@gmail.com",
    password: "eoinspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 18,
    image:
      "https://www.golfdigest.com/content/dam/images/golfdigest/fullset/2020/08/Jon%20Rahm%202021%20Sentry.jpg",
  },
  {
    id: 7,
    displayName: "Twig",
    email: "niallsherlock@gmail.com",
    password: "niallspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 16,
    image:
      "https://pga-tour-res.cloudinary.com/image/upload/c_fill,dpr_1.5,f_auto,g_face:center,h_439,q_auto,w_439/v1/pgatour/editorial/2020/09/15/JimFuryk847.jpg",
  },
  {
    id: 8,
    displayName: "Thomas",
    email: "thomassherlock@gmail.com",
    password: "thomasspw",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut sem porta, efficitur lacus et, eleifend justo. Duis eget urna suscipit, efficitur massa nec, interdum risus. Pellentesque cursus euismod nisi, eu fermentum leo luctus id. Donec facilisis mauris eu laoreet euismod. Suspendisse vel finibus ex. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at tincidunt nisl. Vestibulum et sollicitudin elit, id eleifend risus.",
    handicap: 23,
    image:
      "https://golf.com/wp-content/uploads/2020/08/brooks-koepka-walks.jpg",
  },
];

export default players;
