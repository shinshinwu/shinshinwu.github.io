
// defining module
(function(){
  var app = angular.module('store', []);

  // defining controller
  app.controller('StoreController', function(){
    this.products = toys;
  });

  app.controller("TabController", function(){
    this.tab = 1;

    this.setTab = function(tab) {
      this.tab = tab;
    };
    this.isSet = function(tab) {
      return (this.tab === tab);
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;
    this.setCurrent = function(index){
      this.current = index;
    };
  });

var toys = [{
        name: 'Unicorn Meat in a Can',
        description: "Yum and delicious, a true delicacy that is widely popular in the land far far away. Now available in storage-friendly cans so you can savor longer!",
        rating: 8,
        price: 99.99,
        rarity: 9,
        origin: "Land Far Far Away",
        images: "imgs/unicorn-meat.jpg",
        reviews: [{
          stars: 10,
          body: "Love the taste! I now feel younger and more energetic, thanks to unicorn meat!",
          author: "joe@carnivore.com",
          createdOn: 1397490980837
        }, {
          stars: 2,
          body: "Taste like dead unicorn.",
          author: "sucks@loveunicorn.com",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Extra Cushion Underwear',
        description: "Who couldn't use some extra cushions? Now you can recreate your Nicki Minaj, Iggy Azalea and even Beyonce look!",
        rating: 9,
        price: 22.99,
        rarity: 4,
        origin: "Some factory in China",
        images: "imgs/butt-underwear.jpg",
        reviews: [{
          stars: 10,
          body: "I recommend for all occasions! This baby pay for itself!",
          author: "ilikebigbutt@cannotlie.com",
          createdOn: 1397490980837
        }, {
          stars: 8,
          body: "The size runs a little large, you don't want a saggy fake butt!",
          author: "fit@fit.com",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'iBrator',
        description: "Give your Eve the Apple product that she has always wanted.",
        rating: 9,
        price: 44.99,
        rarity: 8,
        origin: "Garden of Knowledge",
        images: "imgs/iBrator.jpg",
        reviews: [{
          stars: 10,
          body: "Wow, this is truely amazing. It feels better than the time I bite the apple!",
          author: "eve@contactgod.com",
          createdOn: 1397490980837
        }, {
          stars: 4,
          body: "Meh, over advertized. Battery life sucks and always stops at the important moments.",
          author: "unsatisfied@toolazy.com",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Sweater Tunnel',
        description: "In this winter, stay cozy, fashionable and protect your own privacy at the same time!",
        rating: 7,
        price: 33.99,
        rarity: 7,
        origin: "genius factory",
        images: "imgs/sweater-tunnel.jpg",
        reviews: [{
          stars: 2,
          body: "This product sucks! Now my boyfriends never talks to me anymore and I think he is watching porn right next to me.",
          author: "upsetgirl@needy.com",
          createdOn: 1397490980837
        }, {
          stars: 9,
          body: "Love it! Now I can watch porn right next to my girlfriend. Thanks sweater tunnel!",
          author: "guy@iloveporn.com",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Sleep Safe Tape',
        description: "We all have those moments: meeting is so boring, classes materials are just too dry. Now you can safely nap without being noticed!",
        rating: 8,
        price: 9.99,
        rarity: 6,
        origin: "Sleepy Hollow",
        images: "imgs/sleep-tape.jpg",
        reviews: [{
          stars: 10,
          body: "Works like a charm, now I can make my attendance and catch up on sleep at the same time!",
          author: "sleepy@iheartsleep.com",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "Used in one of my review meeting with my boss. Now I am unemployed.",
          author: "jobless@job.com",
          createdOn: 1397490980837
        }]
      },
      {
        name: 'Evil Banana',
        description: "He is ALWAYS happy to see you!",
        rating: 6,
        price: 11.99,
        rarity: 2,
        origin: "Minion Land",
        images: "imgs/evil-banana.jpg",
        reviews: [{
          stars: 3,
          body: "Fun in the beginning, then it is just creepy to look at...",
          author: "turtleguy@cia.gov",
          createdOn: 1397490980837
        }, {
          stars: 9,
          body: "Best trolling gift ever!",
          author: "fratbro@university.edu",
          createdOn: 1397490980837
        }, {
          stars: 5,
          body: "Don't eat it!",
          author: "hungry@ineedfood.com",
          createdOn: 1397490980837
        }]
      }];
})();