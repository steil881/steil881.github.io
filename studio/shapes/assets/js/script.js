var backgrounds = [

  'bg4',
  'bg5',
  'bg6',
  'bg7',  
  'bg15',
  'bg16',
  'bg23',
  'bg24',
  'bg25',
  'bg30',
  'bg31',
  'bg32',
  'bg8',
  'bg19',
  'bg20',
  'bg35',
  'bg26',
  'bg9',
  'bg10',
  'bg11',
  'bg39',
  'bg40',
  'bg17',
  'bg18',
  'bg27',
  'bg46',
  'bg47',
  'bg48',
  'bg49',
  'bg38',
  'bg45',
  'bg12',
  'bg13',
  'bg14',
  'bg33',
  'bg28',
  'bg29',
  'bg21',
  'bg1',
  'bg2',
  'bg3',
  'bg22',
  'bg36',
  'bg37',
  'bg44',
  'bg34',
  'bg41',
  'bg42',
  'bg43',
  'bg50',
  'bg51',
  'bg52',
  'bg53',
  'bg54',
  'bg55',
  'bg56',
  'bg57',
  'bg58',
  'bg59',
  'bg60',
  'bg61',
  'bg62',
  'bg63',
  'bg64',
  'bg65',
  'bg66',
  'bg67',
  'bg68',
  'bg69',
  'bg70',
  'bg71',
  'bg72',
  'bg73',
  'bg74',
  'bg75',
  'bg76',
  'bg77',
  'bg78',
  'bg79',
  'bg80',
  'bg81',
  'bg82',
  'bg83',
  'bg84',
  'bg85',
  'bg86',
  'bg87',
  'bg88',
  'bg89',
  'bg90',
  'bg91',
  'bg92',
  'bg93',
  'bg94',
  'bg95',
  'bg96',
  'bg97',
  'bg98',
  'bg99',
  'bg100',
  'bg101',
  'bg102',
  'bg103',
  'bg104',
  'bg105',
  'bg106',
  'bg107',
  'bg108',
  'bg109',
  'bg110',
  'bg111',
  'bg112',
  'bg113',
  'bg114',
  'bg115',
  'bg116',
  'bg117',
  'bg118',
  'bg119',
  'bg120s'

  ];


$(".button").click(function() {
  var boxes = $('.box');

  backgrounds.sort(function() { return 0.115 - Math.random() });

  $.each(boxes, function(index, value) {
    var random_num = Math.floor(Math.random() * backgrounds.length);
    $(value).removeClass();
    $(value).addClass("box");
    $(value).addClass(backgrounds[index]);
  });
});


var shape_options = ['top-left',
                     'top-right',
                     'bottom-left',
                     'bottom-right'
                    ];

var clicked = false;

$('.box').click(function() {
  var random_num = Math.floor(Math.random() * shape_options.length);
      shape_to_use = shape_options[random_num];

  $(this).addClass(shape_to_use);



// var this_box = document.getElementByClassName('box');
// for(i=0; i < this_box.length;i++) {

// }
// // $('.box').click(function() {
//   if (clicked == false) {
//     $('.box').removeClass();

//     $(shape_to_use).addClass();

//     clicked = true
//   } else {
//       $(shape_to_use).removeClass();
//       $('.box').addClass();
//       clicked = false
//   }
});

  // var newtop = Math.floor(Math.random()*100) + "%";
  // var newleft = Math.floor(Math.random()*100) + "%";
  // $(this).css("top",newtop);
  // $(this).css("left",newleft);

// $(shape_to_use).click(function() {

//   $(this).addClass('.box');
// }


// $('shape_options')
//   var random_bg = Math.floor(Math.random() * backgrounds.length);
//       bg_to_use = background[random_bg];

//   $(this).addClass(bg_to_use);








