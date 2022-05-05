const { Post } = require('../models');

// used only for testing to seed Posts

const postdata = [
  {
    title: 'Donec posuere metus vitae ipsum.',
    post_content: 'Cupidatat consequat et sit magna incididunt veniam nostrud. Duis commodo ea commodo irure consequat velit id incididunt cupidatat qui. Ut velit nisi elit veniam do magna dolor nulla pariatur officia et. Officia consectetur commodo magna consequat voluptate elit magna laborum ex eu pariatur exercitation elit.',
    user_id: 10
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Voluptate ipsum culpa quis officia pariatur officia adipisicing. Ipsum aliqua id culpa aliqua proident pariatur proident elit amet. Voluptate enim elit Lorem eiusmod exercitation veniam esse irure veniam ipsum. Voluptate laborum Lorem occaecat ad Lorem do laboris.',
    user_id: 8
  },
  {
    title: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
    post_content: 'Duis in occaecat ex adipisicing mollit exercitation dolore sunt excepteur. Incididunt anim cillum enim deserunt ut dolore proident. Reprehenderit nisi et cillum aliquip. Consequat aliqua elit irure commodo duis dolor. Nisi sunt esse proident commodo fugiat in elit irure quis. Culpa aliquip pariatur consequat dolor reprehenderit laborum in duis. Do elit irure voluptate pariatur aliqua nisi ad do ut exercitation.',
    user_id: 1
  },
  {
    title: 'Nunc purus.',
    post_content: 'Ad mollit cupidatat tempor voluptate adipisicing ut voluptate qui enim voluptate nulla id. Esse ut occaecat minim consequat sit non cillum. Pariatur nulla fugiat officia id exercitation anim occaecat qui mollit commodo. Ullamco irure labore et sunt reprehenderit laboris nulla incididunt. Ut tempor consectetur laboris eu eiusmod dolor cupidatat exercitation proident ad sunt labore. Et ex et aliqua elit excepteur adipisicing cupidatat ullamco est consectetur duis enim et.',
    user_id: 4
  },
  {
    title: 'Pellentesque eget nunc.',
    post_content: 'Amet culpa reprehenderit pariatur mollit nostrud irure culpa occaecat non et officia consectetur ullamco. Tempor consequat officia minim esse reprehenderit non veniam. Labore commodo ut in id commodo cupidatat reprehenderit aliqua tempor proident eiusmod sunt enim. Ullamco in irure occaecat minim excepteur magna minim ut culpa pariatur laborum ut enim veniam. Amet cupidatat consectetur est anim. Minim dolore elit ea est tempor consequat est.',
    user_id: 7
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_content: 'Ea Lorem ut dolor ipsum. Excepteur anim duis incididunt adipisicing. Consectetur sunt mollit pariatur amet anim. Sunt et non id id mollit non duis nisi fugiat duis ad excepteur.',
    user_id: 4
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Consequat ullamco officia sint non officia est sint exercitation ex ea dolore sint aute. Mollit enim esse laborum exercitation exercitation eu sint. Enim est tempor culpa non esse veniam. In mollit fugiat in amet fugiat excepteur occaecat sunt ipsum tempor commodo et magna reprehenderit. Proident id nulla dolore consectetur laboris elit ex ipsum ex eu ullamco. Sit occaecat deserunt ipsum aute sit cillum non reprehenderit occaecat ullamco officia officia.',
    user_id: 1
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_content: 'Laborum cillum est deserunt sit nisi. Qui nostrud anim proident est proident proident dolore officia reprehenderit sunt proident sunt. Cillum officia consectetur adipisicing ut amet sunt eu quis veniam proident consequat consectetur voluptate. Consequat aliqua amet non cillum culpa laborum pariatur deserunt non ullamco fugiat aliqua et incididunt. Fugiat eu enim est id.',
    user_id: 1
  },
  {
    title: 'Duis ac nibh.',
    post_content: 'Deserunt nisi laboris exercitation sit laborum. Incididunt ea esse labore ullamco id. Culpa anim cillum cillum officia.',
    user_id: 9
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_content: 'Qui commodo eiusmod dolore dolore velit. Amet nisi minim et fugiat occaecat et magna nostrud eu sit. Consequat proident pariatur dolor aute in quis duis. Sit minim magna eu magna enim. Pariatur et adipisicing dolore exercitation dolor nisi consequat aute. Est sit consequat officia eiusmod mollit quis consectetur excepteur sunt duis velit culpa Lorem.',
    user_id: 5
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Amet qui veniam ex dolore dolore ea. Veniam qui laborum voluptate veniam officia sit deserunt esse elit aliqua sunt reprehenderit aute. Lorem ex ad sint elit enim quis nisi proident non anim elit proident pariatur.',
    user_id: 3
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_content: 'Ea aliqua velit mollit nisi nisi consectetur cillum consequat do ullamco quis sit. Ea mollit Lorem veniam nulla cillum est non elit consequat deserunt. Cupidatat in adipisicing enim elit non. Enim nostrud minim mollit Lorem. Laborum ea culpa ad occaecat et.',
    user_id: 10
  },
  {
    title: 'Donec dapibus.',
    post_content: 'Excepteur Lorem consectetur qui fugiat ea. Irure qui aliqua proident sint esse. Aliquip veniam aliquip quis sunt in Lorem officia ut consectetur nostrud cillum pariatur ad fugiat.',
    user_id: 8
  },
  {
    title: 'Nulla tellus.',
    post_content: 'In occaecat cillum sit ea enim. Voluptate adipisicing aliqua labore amet consequat officia magna anim sit pariatur sint. Culpa dolore excepteur nisi enim aliqua ut ea reprehenderit. Enim esse laboris consectetur tempor.',
    user_id: 3
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_content: 'Esse in pariatur adipisicing sunt. Tempor labore esse quis est. Ex fugiat eiusmod aliquip cillum nulla ut irure quis quis.',
    user_id: 3
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_content: 'Et labore Lorem laborum ullamco anim aliquip irure magna. Do tempor incididunt sunt irure ex excepteur Lorem mollit ea. Ex consectetur deserunt veniam voluptate ex voluptate consequat cillum culpa qui anim eu.',
    user_id: 7
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_content: 'Deserunt nisi commodo labore aliqua do cillum fugiat culpa esse occaecat. Amet enim veniam nostrud eiusmod ad sit est pariatur laboris voluptate velit. In aute est qui anim consequat cupidatat magna officia reprehenderit ipsum tempor.',
    user_id: 6
  },
  {
    title: 'Etiam justo.',
    post_content: 'Aliqua irure aute voluptate cillum minim eu ut consequat dolore tempor. Anim magna irure aliqua excepteur duis pariatur ex. Commodo esse laborum duis aute.',
    user_id: 4
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_content: 'Veniam laboris aute do deserunt tempor in id excepteur dolor ut nostrud. Sunt dolore culpa qui nostrud. Culpa magna minim enim enim mollit. Exercitation ut voluptate aute ex ad aliquip amet id commodo quis. Officia occaecat enim fugiat non cupidatat minim esse pariatur.',
    user_id: 6
  },
  {
    title: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
    post_content: 'Et aute magna mollit eiusmod proident incididunt ullamco cupidatat ad. Consectetur est sint occaecat et ex cupidatat exercitation. Ex aute nulla tempor ipsum ipsum do adipisicing do est commodo. Dolor eiusmod eiusmod velit cillum esse pariatur mollit mollit elit excepteur eiusmod ad irure. Reprehenderit Lorem esse et Lorem irure culpa incididunt nisi ullamco ea do excepteur. Eu exercitation ad magna nostrud non.',
    user_id: 7
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;