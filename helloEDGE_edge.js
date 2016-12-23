/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'kimonoGirl_v',
            type:'rect',
            rect:[455,315,0,0],
            transform:[[-50,-273]]
         },
         {
            id:'kimonoGirl_h',
            type:'rect',
            rect:[47,343,0,0],
            transform:[[-183,-300]]
         },
         {
            id:'kimonoGirl',
            type:'rect',
            rect:[255,364,0,0],
            transform:[[-116,-321]]
         }],
         symbolInstances: [
         {
            id:'kimonoGirl_h',
            symbolName:'kimonoGirl_h'
         },
         {
            id:'kimonoGirl',
            symbolName:'kimonoGirl'
         },
         {
            id:'kimonoGirl_v',
            symbolName:'kimonoGirl_v'
         }
         ]
      },
   states: {
      "Base State": {
         "body": [
            ["color", "background-color", 'rgba(0,0,0,0)']
         ],
         "${_Stage}": [
            ["style", "height", '700px'],
            ["style", "overflow", 'hidden'],
            ["style", "width", '590px']
         ],
         "${_kimonoGirl_v}": [
            ["transform", "translateY", '-5000px'],
            ["transform", "translateX", '-5000px']
         ],
         "${_kimonoGirl_h}": [
            ["transform", "translateX", '-5000px'],
            ["transform", "translateY", '-5000px']	
         ],
         "${_kimonoGirl}": [
            ["transform", "translateX", '-116px'],
            ["transform", "translateY", '-380px']

         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
            { id: "eid242", tween: [ "color", "${_Text}", "color", 'rgba(255,255,255,1)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(255,255,255,1)'}], position: 0, duration: 0 },
            { id: "eid243", tween: [ "style", "${_Text}", "font-size", '48px', { fromValue: '48px'}], position: 0, duration: 0 },
            { id: "eid184", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_kimonoGirl_v}', [2500] ], ""], position: 0 },
            { id: "eid244", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['stop', '${_kimonoGirl_h}', [2500] ], ""], position: 0 }         ]
      }
   }
},
"eye": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-305,-115]],
      id: 'leftEye',
      type: 'image',
      rect: [305,115,35,35],
      fill: ['rgba(0,0,0,0)','https://3.bp.blogspot.com/-qsuYcI-QAoU/WFzpNgDIt6I/AAAAAAAAL8s/gOFd1vV-yewmqCQeFAaFy6GeXIc_heuAgCLcB/s1600/rightEye01.png']
   },
   {
      rect: [380,146,35,35],
      transform: [[-380,-146]],
      id: 'rightEye02',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','https://2.bp.blogspot.com/-5NSZilhlP4o/WFzpN49WoYI/AAAAAAAAL8w/XxoJjnxRpPYyCyS1jG-48Iy7reSR9dVcQCLcB/s1600/rightEye02.png']
   },
   {
      rect: [82,102,35,35],
      transform: [[-82,-102]],
      id: 'rightEye03',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-Uq6FkdNM4RY/WFzpN_DfDbI/AAAAAAAAL80/EVvZR2Yql7AiHBZRlcMxIcu-hpqIZDnQgCLcB/s1600/rightEye03.png']
   },
   {
      rect: [51,97,35,35],
      transform: [[-51,-97]],
      id: 'rightEye04',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-NIFzGT7RoPk/WFzpN8XusCI/AAAAAAAAL88/WbRg-wN8lyYLkBBFuZT1aPajtjLZixJzwCLcB/s1600/rightEye04.png']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_rightEye03}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-102px'],
            ["transform", "translateX", '-82px']
         ],
         "${symbolSelector}": [
            ["style", "height", '35px'],
            ["style", "width", '35px']
         ],
         "${_rightEye04}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-97px'],
            ["transform", "translateX", '-51px']
         ],
         "${_rightEye02}": [
            ["style", "display", 'none'],
            ["transform", "translateY", '-146px'],
            ["transform", "translateX", '-380px']
         ],
         "${_leftEye}": [
            ["style", "display", 'block'],
            ["transform", "translateY", '-115px'],
            ["transform", "translateX", '-305px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2000,
         autoPlay: true,
         timeline: [
            { id: "eid4", tween: [ "style", "${_leftEye}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid5", tween: [ "style", "${_leftEye}", "display", 'none', { fromValue: 'block'}], position: 1750, duration: 0 },
            { id: "eid11", tween: [ "style", "${_leftEye}", "display", 'none', { fromValue: 'none'}], position: 1900, duration: 0 },
            { id: "eid14", tween: [ "style", "${_leftEye}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid2", tween: [ "style", "${_rightEye03}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_rightEye03}", "display", 'block', { fromValue: 'none'}], position: 1850, duration: 0 },
            { id: "eid9", tween: [ "style", "${_rightEye03}", "display", 'none', { fromValue: 'block'}], position: 1900, duration: 0 },
            { id: "eid3", tween: [ "style", "${_rightEye04}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_rightEye04}", "display", 'block', { fromValue: 'none'}], position: 1900, duration: 0 },
            { id: "eid15", tween: [ "style", "${_rightEye04}", "display", 'none', { fromValue: 'block'}], position: 2000, duration: 0 },
            { id: "eid1", tween: [ "style", "${_rightEye02}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_rightEye02}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid12", tween: [ "style", "${_rightEye02}", "display", 'none', { fromValue: 'block'}], position: 1850, duration: 0 },
            { id: "eid8", tween: [ "style", "${_rightEye02}", "display", 'none', { fromValue: 'none'}], position: 1900, duration: 0 }         ]
      }
   }
},
"kimonoGirl_h": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-68,-123]],
      id: 'hair',
      type: 'image',
      rect: [94,175,212,193],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-DsMcLJuXeb8/WFzpNBGkE1I/AAAAAAAAL8U/Gk8JoScBhIAKRqwI2_qz_xVP7itCVdjegCLcB/s1600/hair.png']
   },
   {
      transform: [[-63,-145]],
      id: 'tail',
      type: 'image',
      rect: [139,145,136,107],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-nN5KoE3mnGE/WFzpOCG1URI/AAAAAAAAL9A/B6qsEwUo_TgsbklvEdi7TCZWSx3JR_P_gCLcB/s1600/tail.png']
   },
   {
      transform: [[-69,-80]],
      id: 'comb',
      type: 'image',
      rect: [139,106,138,63],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-A1FT2h4kUGA/WFzpMoCuMNI/AAAAAAAAL8I/IzSJwEs8PeA_Ekoik4aGFcCgD2WxtO30QCLcB/s1600/comb.png']
   },
   {
      transform: [[-176,-15]],
      id: 'neck',
      type: 'image',
      rect: [283,250,64,74],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-IWMl1T97-3U/WFzpNRsuoAI/AAAAAAAAL8g/lAB-p1BfDG8hg9yGmyB4hVUyY52XMHjAACLcB/s1600/neck.png']
   },
   {
      transform: [[-97,-61]],
      id: 'kimono',
      type: 'image',
      rect: [162,317,148,107],
      fill: ['rgba(0,0,0,0)','kimono.png']
   },
   {
      transform: [[-97,-22]],
      id: 'leftEar',
      type: 'image',
      rect: [309,219,29,31],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-AACHpekbZXM/WFzpNEN8SSI/AAAAAAAAL8Q/epBWQYTWQGInWO_026dSKba15DbVfb_RACLcB/s1600/leftEar.png']
   },
   {
      transform: [[2]],
      id: 'rightEar',
      type: 'image',
      rect: [33,198,31,31],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-C6G22cdi2EE/WFzpNtiRnVI/AAAAAAAAL8o/I6gJxl51BecQUhOvIGgbCx1aefzEEu-iwCLcB/s1600/rightEar.png']
   },
   {
      transform: [[-84,-109]],
      id: 'face',
      type: 'image',
      rect: [139,208,167,149],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-ByeDMYlh4bw/WFzpMjeJNJI/AAAAAAAAL8M/Ujru14aFfIcx0b80wCobkJdNU5HKs6_bACLcB/s1600/face.png']
   },
   {
      transform: [[-5,-18]],
      id: 'mouth',
      type: 'image',
      rect: [139,250,11,5],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-71213iUFXoE/WFzpNaxwpqI/AAAAAAAAL8c/pjJlIAgajdcl2a7xIrhsHIfsLrUc-pgxQCLcB/s1600/mouth.png']
   },
   {
      id: 'rightEye',
      type: 'rect',
      rect: [95,184,0,0]
   },
   {
      id: 'leftEye',
      type: 'rect',
      rect: [174,179,0,0]
   },
   {
      transform: [[-3,-15]],
      id: 'nose',
      type: 'image',
      rect: [139,222,7,7],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-Ayf0MJpnDgU/WFzpNVJwrbI/AAAAAAAAL8k/uW_BEy6zWLARN-CBHuhIPjpVWrNCFKwOgCLcB/s1600/nose.png']
   },
   {
      transform: [[-395,-71]],
      id: 'rightCheek',
      type: 'image',
      rect: [460,287,31,27],
      fill: ['rgba(0,0,0,0)','rightCheek.png']
   },
   {
      transform: [[-83,-52]],
      id: 'leftCheek',
      type: 'image',
      rect: [266,269,31,26],
      fill: ['rgba(0,0,0,0)','leftCheek.png']
   },
   {
      transform: [[-360,-162]],
      id: 'bangs',
      type: 'image',
      rect: [414,221,169,126],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-jz5OXoHMDuo/WFzpMu8A1zI/AAAAAAAAL8E/Y2PSztGDeu4NU-gfG29x2JhcViI95SR7QCLcB/s1600/bangs.png']
   },
   {
      transform: [[-174,-86]],
      id: 'leftHairPin',
      type: 'image',
      rect: [356,152,89,83],
      fill: ['rgba(0,0,0,0)','leftHirPin.png']
   },
   {
      transform: [[-331,-175]],
      id: 'rightHairPin',
      type: 'image',
      rect: [337,212,89,84],
      fill: ['rgba(0,0,0,0)','rightHairPin.png']
   }],
   symbolInstances: [
   {
      id: 'rightEye',
      symbolName: 'eye'
   },
   {
      id: 'leftEye',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_comb}": [
            ["transform", "translateX", '-59px'],
            ["transform", "translateY", '-80px']
         ],
         "${_rightEar}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '7px'],
            ["transform", "translateY", '0px']
         ],
         "${_hair}": [
            ["transform", "translateX", '-49px'],
            ["transform", "translateY", '-123px']
         ],
         "${_kimono}": [
            ["transform", "translateX", '-97px'],
            ["transform", "translateY", '-61px']
         ],
         "${_leftEye}": [
            ["transform", "translateX", '-13px'],
            ["transform", "translateY", '0px']
         ],
         "${_leftEar}": [
            ["transform", "scaleX", '1.20689'],
            ["transform", "scaleY", '1.20689'],
            ["transform", "translateY", '-22.19px'],
            ["transform", "translateX", '-97.99px']
         ],
         "${symbolSelector}": [
            ["style", "height", '363px'],
            ["style", "width", '268.709125px']
         ],
         "${_nose}": [
            ["transform", "translateX", '-22px'],
            ["transform", "translateY", '-15px']
         ],
         "${_face}": [
            ["transform", "translateX", '-86px'],
            ["transform", "translateY", '-109px']
         ],
         "${_leftCheek}": [
            ["transform", "translateX", '-94.62px'],
            ["transform", "translateY", '-52.92px']
         ],
         "${_rightCheek}": [
            ["transform", "translateX", '-406.48px'],
            ["transform", "translateY", '-70.86px']
         ],
         "${_rightEye}": [
            ["transform", "translateX", '-38px'],
            ["transform", "translateY", '-5px']
         ],
         "${_tail}": [
            ["transform", "translateX", '-43px'],
            ["transform", "translateY", '-145px']
         ],
         "${_leftHairPin}": [
            ["transform", "scaleX", '1.09637'],
            ["transform", "scaleY", '1.09637'],
            ["transform", "translateY", '-89.99px'],
            ["transform", "translateX", '-180.71px']
         ],
         "${_mouth}": [
            ["transform", "translateX", '-20px'],
            ["transform", "translateY", '-18px']
         ],
         "${_rightHairPin}": [
            ["transform", "scaleX", '0.82142'],
            ["transform", "scaleY", '0.82142'],
            ["transform", "translateY", '-167.49px'],
            ["transform", "translateX", '-344.94px']
         ],
         "${_bangs}": [
            ["transform", "translateX", '-373px'],
            ["transform", "translateY", '-162.6px']
         ],
         "${_neck}": [
            ["transform", "translateX", '-176px'],
            ["transform", "translateY", '-15px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         timeline: [
            { id: "eid71", tween: [ "transform", "${_leftHairPin}", "scaleX", '1', { fromValue: '1.09637'}], position: 0, duration: 2500 },
            { id: "eid39", tween: [ "transform", "${_leftHairPin}", "scaleX", '0.89156', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid68", tween: [ "transform", "${_nose}", "translateX", '-3px', { fromValue: '-22px'}], position: 0, duration: 2500 },
            { id: "eid27", tween: [ "transform", "${_nose}", "translateX", '20px', { fromValue: '-3px'}], position: 2500, duration: 2500 },
            { id: "eid79", tween: [ "transform", "${_comb}", "translateX", '-69px', { fromValue: '-59px'}], position: 0, duration: 2500 },
            { id: "eid45", tween: [ "transform", "${_comb}", "translateX", '-86px', { fromValue: '-69px'}], position: 2500, duration: 2500 },
            { id: "eid60", tween: [ "transform", "${_leftEar}", "scaleX", '1', { fromValue: '1.20689'}], position: 0, duration: 2500 },
            { id: "eid246", tween: [ "transform", "${_leftEar}", "scaleX", '0.86206', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid221", tween: [ "transform", "${_bangs}", "translateX", '-360px', { fromValue: '-373px'}], position: 0, duration: 2500 },
            { id: "eid36", tween: [ "transform", "${_bangs}", "translateX", '-345px', { fromValue: '-360px'}], position: 2500, duration: 2500 },
            { id: "eid55", tween: [ "transform", "${_rightEar}", "translateX", '2px', { fromValue: '7px'}], position: 0, duration: 2500 },
            { id: "eid32", tween: [ "transform", "${_rightEar}", "translateX", '0.01px', { fromValue: '2px'}], position: 2500, duration: 2500 },
            { id: "eid69", tween: [ "transform", "${_leftHairPin}", "translateX", '-174px', { fromValue: '-180.71px'}], position: 0, duration: 2500 },
            { id: "eid37", tween: [ "transform", "${_leftHairPin}", "translateX", '-166.82px', { fromValue: '-174px'}], position: 2500, duration: 2500 },
            { id: "eid67", tween: [ "transform", "${_leftCheek}", "translateX", '-83.62px', { fromValue: '-94.62px'}], position: 0, duration: 2500 },
            { id: "eid23", tween: [ "transform", "${_leftCheek}", "translateX", '-73.62px', { fromValue: '-83.62px'}], position: 2500, duration: 2500 },
            { id: "eid70", tween: [ "transform", "${_leftHairPin}", "translateY", '-86px', { fromValue: '-89.99px'}], position: 0, duration: 2500 },
            { id: "eid38", tween: [ "transform", "${_leftHairPin}", "translateY", '-81.49px', { fromValue: '-86px'}], position: 2500, duration: 2500 },
            { id: "eid76", tween: [ "transform", "${_rightHairPin}", "scaleY", '1', { fromValue: '0.82142'}], position: 0, duration: 2500 },
            { id: "eid44", tween: [ "transform", "${_rightHairPin}", "scaleY", '1.13094', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid35", tween: [ "transform", "${_rightEar}", "scaleY", '1.12903', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid54", tween: [ "transform", "${_face}", "translateX", '-84px', { fromValue: '-86px'}], position: 0, duration: 2500 },
            { id: "eid48", tween: [ "transform", "${_face}", "translateX", '-82px', { fromValue: '-84px'}], position: 2500, duration: 2500 },
            { id: "eid56", tween: [ "transform", "${_leftEar}", "translateX", '-97px', { fromValue: '-97.99px'}], position: 0, duration: 2500 },
            { id: "eid31", tween: [ "transform", "${_leftEar}", "translateX", '-102px', { fromValue: '-97px'}], position: 2500, duration: 2500 },
            { id: "eid63", tween: [ "transform", "${_rightEye}", "translateX", '-27px', { fromValue: '-38px'}], position: 0, duration: 2500 },
            { id: "eid28", tween: [ "transform", "${_rightEye}", "translateX", '-11px', { fromValue: '-27px'}], position: 2500, duration: 2500 },
            { id: "eid80", tween: [ "transform", "${_tail}", "translateX", '-63px', { fromValue: '-43px'}], position: 0, duration: 2500 },
            { id: "eid46", tween: [ "transform", "${_tail}", "translateX", '-101px', { fromValue: '-63px'}], position: 2500, duration: 2500 },
            { id: "eid74", tween: [ "transform", "${_rightHairPin}", "translateY", '-175px', { fromValue: '-167.49px'}], position: 0, duration: 2500 },
            { id: "eid42", tween: [ "transform", "${_rightHairPin}", "translateY", '-180.49px', { fromValue: '-175px'}], position: 2500, duration: 2500 },
            { id: "eid66", tween: [ "transform", "${_leftEye}", "translateX", '-1px', { fromValue: '-13px'}], position: 0, duration: 2500 },
            { id: "eid22", tween: [ "transform", "${_leftEye}", "translateX", '12px', { fromValue: '-1px'}], position: 2500, duration: 2500 },
            { id: "eid58", tween: [ "transform", "${_leftEar}", "translateY", '-22px', { fromValue: '-22.19px'}], position: 0, duration: 2500 },
            { id: "eid33", tween: [ "transform", "${_rightEar}", "translateY", '-1.99px', { fromValue: '0px'}], position: 2500, duration: 2500 },
            { id: "eid73", tween: [ "transform", "${_rightHairPin}", "translateX", '-331px', { fromValue: '-344.94px'}], position: 0, duration: 2500 },
            { id: "eid41", tween: [ "transform", "${_rightHairPin}", "translateX", '-330.82px', { fromValue: '-331px'}], position: 2500, duration: 2500 },
            { id: "eid34", tween: [ "transform", "${_rightEar}", "scaleX", '1.12903', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid75", tween: [ "transform", "${_rightHairPin}", "scaleX", '1', { fromValue: '0.82142'}], position: 0, duration: 2500 },
            { id: "eid43", tween: [ "transform", "${_rightHairPin}", "scaleX", '1.13094', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid64", tween: [ "transform", "${_mouth}", "translateX", '-5px', { fromValue: '-20px'}], position: 0, duration: 2500 },
            { id: "eid29", tween: [ "transform", "${_mouth}", "translateX", '12px', { fromValue: '-5px'}], position: 2500, duration: 2500 },
            { id: "eid72", tween: [ "transform", "${_leftHairPin}", "scaleY", '1', { fromValue: '1.09637'}], position: 0, duration: 2500 },
            { id: "eid40", tween: [ "transform", "${_leftHairPin}", "scaleY", '0.89156', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid24", tween: [ "transform", "${_leftCheek}", "translateY", '-51.92px', { fromValue: '-52.92px'}], position: 2500, duration: 2500 },
            { id: "eid77", tween: [ "transform", "${_hair}", "translateX", '-61px', { fromValue: '-49px'}], position: 0, duration: 2500 },
            { id: "eid52", tween: [ "transform", "${_hair}", "translateX", '-68px', { fromValue: '-61px'}], position: 2500, duration: 2500 },
            { id: "eid62", tween: [ "transform", "${_leftEar}", "scaleY", '1', { fromValue: '1.20689'}], position: 0, duration: 2500 },
            { id: "eid90", tween: [ "transform", "${_rightCheek}", "translateY", '-70.86px', { fromValue: '-70.86px'}], position: 2500, duration: 0 },
            { id: "eid65", tween: [ "transform", "${_rightCheek}", "translateX", '-396.48px', { fromValue: '-406.48px'}], position: 0, duration: 2500 },
            { id: "eid25", tween: [ "transform", "${_rightCheek}", "translateX", '-391.48px', { fromValue: '-396.48px'}], position: 2500, duration: 2500 }         ]
      }
   }
},
"kimonoGirl_v": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-68,-123]],
      id: 'hair',
      type: 'image',
      rect: [94,175,212,193],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-DsMcLJuXeb8/WFzpNBGkE1I/AAAAAAAAL8U/Gk8JoScBhIAKRqwI2_qz_xVP7itCVdjegCLcB/s1600/hair.png']
   },
   {
      transform: [[-63,-145]],
      id: 'tail',
      type: 'image',
      rect: [139,145,136,107],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-nN5KoE3mnGE/WFzpOCG1URI/AAAAAAAAL9A/B6qsEwUo_TgsbklvEdi7TCZWSx3JR_P_gCLcB/s1600/tail.png']
   },
   {
      transform: [[-69,-80]],
      id: 'comb',
      type: 'image',
      rect: [139,106,138,63],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-A1FT2h4kUGA/WFzpMoCuMNI/AAAAAAAAL8I/IzSJwEs8PeA_Ekoik4aGFcCgD2WxtO30QCLcB/s1600/comb.png']
   },
   {
      transform: [[-176,-15]],
      id: 'neck',
      type: 'image',
      rect: [283,250,64,74],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-IWMl1T97-3U/WFzpNRsuoAI/AAAAAAAAL8g/lAB-p1BfDG8hg9yGmyB4hVUyY52XMHjAACLcB/s1600/neck.png']
   },
   {
      transform: [[-97,-61]],
      id: 'kimono',
      type: 'image',
      rect: [162,317,148,107],
      fill: ['rgba(0,0,0,0)','kimono.png']
   },
   {
      transform: [[-97,-22]],
      id: 'leftEar',
      type: 'image',
      rect: [309,219,29,31],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-AACHpekbZXM/WFzpNEN8SSI/AAAAAAAAL8Q/epBWQYTWQGInWO_026dSKba15DbVfb_RACLcB/s1600/leftEar.png']
   },
   {
      transform: [[2]],
      id: 'rightEar',
      type: 'image',
      rect: [33,198,31,31],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-C6G22cdi2EE/WFzpNtiRnVI/AAAAAAAAL8o/I6gJxl51BecQUhOvIGgbCx1aefzEEu-iwCLcB/s1600/rightEar.png']
   },
   {
      transform: [[-84,-109]],
      id: 'face',
      type: 'image',
      rect: [139,208,167,149],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-ByeDMYlh4bw/WFzpMjeJNJI/AAAAAAAAL8M/Ujru14aFfIcx0b80wCobkJdNU5HKs6_bACLcB/s1600/face.png']
   },
   {
      transform: [[-5,-18]],
      id: 'mouth',
      type: 'image',
      rect: [139,250,11,5],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-71213iUFXoE/WFzpNaxwpqI/AAAAAAAAL8c/pjJlIAgajdcl2a7xIrhsHIfsLrUc-pgxQCLcB/s1600/mouth.png']
   },
   {
      id: 'rightEye',
      type: 'rect',
      rect: [95,184,0,0]
   },
   {
      id: 'leftEye',
      type: 'rect',
      rect: [174,179,0,0]
   },
   {
      transform: [[-3,-15]],
      id: 'nose',
      type: 'image',
      rect: [139,222,7,7],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-Ayf0MJpnDgU/WFzpNVJwrbI/AAAAAAAAL8k/uW_BEy6zWLARN-CBHuhIPjpVWrNCFKwOgCLcB/s1600/nose.png']
   },
   {
      transform: [[-395,-71]],
      id: 'rightCheek',
      type: 'image',
      rect: [460,287,31,27],
      fill: ['rgba(0,0,0,0)','rightCheek.png']
   },
   {
      transform: [[-83,-52]],
      id: 'leftCheek',
      type: 'image',
      rect: [266,269,31,26],
      fill: ['rgba(0,0,0,0)','leftCheek.png']
   },
   {
      transform: [[-360,-162]],
      id: 'bangs',
      type: 'image',
      rect: [414,221,169,126],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-jz5OXoHMDuo/WFzpMu8A1zI/AAAAAAAAL8E/Y2PSztGDeu4NU-gfG29x2JhcViI95SR7QCLcB/s1600/bangs.png']
   },
   {
      transform: [[-174,-86]],
      id: 'leftHairPin',
      type: 'image',
      rect: [356,152,89,83],
      fill: ['rgba(0,0,0,0)','leftHirPin.png']
   },
   {
      transform: [[-331,-175]],
      id: 'rightHairPin',
      type: 'image',
      rect: [337,212,89,84],
      fill: ['rgba(0,0,0,0)','rightHairPin.png']
   }],
   symbolInstances: [
   {
      id: 'rightEye',
      symbolName: 'eye'
   },
   {
      id: 'leftEye',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_comb}": [
            ["transform", "translateX", '-69px'],
            ["transform", "translateY", '-74px']
         ],
         "${_rightEar}": [
            ["transform", "scaleX", '1'],
            ["transform", "translateY", '1px'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '2px']
         ],
         "${_hair}": [
            ["transform", "translateX", '-61px'],
            ["transform", "translateY", '-116px']
         ],
         "${_kimono}": [
            ["transform", "translateX", '-97px'],
            ["transform", "translateY", '-61px']
         ],
         "${_leftEye}": [
            ["transform", "translateX", '-1px'],
            ["transform", "translateY", '-15px']
         ],
         "${_leftEar}": [
            ["transform", "scaleX", '1'],
            ["transform", "translateX", '-97px'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-21px']
         ],
         "${symbolSelector}": [
            ["style", "height", '364px'],
            ["style", "width", '272px']
         ],
         "${_nose}": [
            ["transform", "translateX", '-3px'],
            ["transform", "translateY", '-30px']
         ],
         "${_face}": [
            ["transform", "translateX", '-84px'],
            ["transform", "translateY", '-111px']
         ],
         "${_leftCheek}": [
            ["transform", "translateX", '-83.62px'],
            ["transform", "translateY", '-64.92px']
         ],
         "${_rightCheek}": [
            ["transform", "translateX", '-396.48px'],
            ["transform", "translateY", '-81.86px']
         ],
         "${_rightEye}": [
            ["transform", "translateX", '-27px'],
            ["transform", "translateY", '-20px']
         ],
         "${_tail}": [
            ["transform", "translateX", '-63px'],
            ["transform", "translateY", '-121px']
         ],
         "${_leftHairPin}": [
            ["transform", "scaleX", '0.91566'],
            ["transform", "translateX", '-176.75px'],
            ["transform", "scaleY", '0.91566'],
            ["transform", "translateY", '-98.5px']
         ],
         "${_mouth}": [
            ["transform", "translateX", '-5px'],
            ["transform", "translateY", '-33px']
         ],
         "${_rightHairPin}": [
            ["transform", "scaleX", '0.89887'],
            ["transform", "translateX", '-330.5px'],
            ["transform", "scaleY", '0.89887'],
            ["transform", "translateY", '-182.75px']
         ],
         "${_neck}": [
            ["transform", "translateX", '-176px'],
            ["transform", "translateY", '-15px']
         ],
         "${_bangs}": [
            ["transform", "translateX", '-360px'],
            ["transform", "translateY", '-172.6px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 5000,
         autoPlay: false,
         timeline: [
            { id: "eid144", tween: [ "transform", "${_leftEye}", "translateY", '0px', { fromValue: '-15px'}], position: 0, duration: 2500 },
            { id: "eid158", tween: [ "transform", "${_leftEye}", "translateY", '14px', { fromValue: '0px'}], position: 2500, duration: 2500 },
            { id: "eid128", tween: [ "transform", "${_leftHairPin}", "scaleX", '1', { fromValue: '0.91566'}], position: 0, duration: 2500 },
            { id: "eid177", tween: [ "transform", "${_leftHairPin}", "scaleX", '1.05952', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid148", tween: [ "transform", "${_rightCheek}", "translateY", '-70.86px', { fromValue: '-81.86px'}], position: 0, duration: 2500 },
            { id: "eid162", tween: [ "transform", "${_rightCheek}", "translateY", '-58.86px', { fromValue: '-70.86px'}], position: 2500, duration: 2500 },
            { id: "eid114", tween: [ "transform", "${_bangs}", "translateY", '-162.6px', { fromValue: '-172.6px'}], position: 0, duration: 2500 },
            { id: "eid165", tween: [ "transform", "${_bangs}", "translateY", '-144.6px', { fromValue: '-162.6px'}], position: 2500, duration: 2500 },
            { id: "eid136", tween: [ "transform", "${_rightHairPin}", "scaleY", '1', { fromValue: '0.89887'}], position: 0, duration: 2500 },
            { id: "eid175", tween: [ "transform", "${_rightHairPin}", "scaleY", '1.05952', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid116", tween: [ "transform", "${_hair}", "translateY", '-123px', { fromValue: '-116px'}], position: 0, duration: 2500 },
            { id: "eid168", tween: [ "transform", "${_hair}", "translateY", '-133px', { fromValue: '-123px'}], position: 2500, duration: 2500 },
            { id: "eid140", tween: [ "transform", "${_rightEye}", "translateY", '-5px', { fromValue: '-20px'}], position: 0, duration: 2500 },
            { id: "eid160", tween: [ "transform", "${_rightEye}", "translateY", '9px', { fromValue: '-5px'}], position: 2500, duration: 2500 },
            { id: "eid122", tween: [ "transform", "${_rightHairPin}", "translateY", '-175px', { fromValue: '-182.75px'}], position: 0, duration: 2500 },
            { id: "eid171", tween: [ "transform", "${_rightHairPin}", "translateY", '-156.49px', { fromValue: '-175px'}], position: 2500, duration: 2500 },
            { id: "eid134", tween: [ "transform", "${_rightHairPin}", "scaleX", '1', { fromValue: '0.89887'}], position: 0, duration: 2500 },
            { id: "eid174", tween: [ "transform", "${_rightHairPin}", "scaleX", '1.05952', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid152", tween: [ "transform", "${_leftEar}", "translateY", '-22px', { fromValue: '-21px'}], position: 0, duration: 2500 },
            { id: "eid167", tween: [ "transform", "${_leftEar}", "translateY", '-26px', { fromValue: '-22px'}], position: 2500, duration: 2500 },
            { id: "eid154", tween: [ "transform", "${_rightEar}", "translateY", '0px', { fromValue: '1px'}], position: 0, duration: 2500 },
            { id: "eid166", tween: [ "transform", "${_rightEar}", "translateY", '-4px', { fromValue: '0px'}], position: 2500, duration: 2500 },
            { id: "eid132", tween: [ "transform", "${_rightHairPin}", "translateX", '-331px', { fromValue: '-330.5px'}], position: 0, duration: 2500 },
            { id: "eid173", tween: [ "transform", "${_rightHairPin}", "translateX", '-333.64px', { fromValue: '-331px'}], position: 2500, duration: 2500 },
            { id: "eid118", tween: [ "transform", "${_comb}", "translateY", '-80px', { fromValue: '-74px'}], position: 0, duration: 2500 },
            { id: "eid169", tween: [ "transform", "${_comb}", "translateY", '-85px', { fromValue: '-80px'}], position: 2500, duration: 2500 },
            { id: "eid156", tween: [ "transform", "${_face}", "translateY", '-109px', { fromValue: '-111px'}], position: 0, duration: 2500 },
            { id: "eid163", tween: [ "transform", "${_face}", "translateY", '-103px', { fromValue: '-109px'}], position: 2500, duration: 2500 },
            { id: "eid146", tween: [ "transform", "${_mouth}", "translateY", '-18px', { fromValue: '-33px'}], position: 0, duration: 2500 },
            { id: "eid161", tween: [ "transform", "${_mouth}", "translateY", '-8px', { fromValue: '-18px'}], position: 2500, duration: 2500 },
            { id: "eid130", tween: [ "transform", "${_leftHairPin}", "scaleY", '1', { fromValue: '0.91566'}], position: 0, duration: 2500 },
            { id: "eid178", tween: [ "transform", "${_leftHairPin}", "scaleY", '1.05952', { fromValue: '1'}], position: 2500, duration: 2500 },
            { id: "eid150", tween: [ "transform", "${_leftCheek}", "translateY", '-52.92px', { fromValue: '-64.92px'}], position: 0, duration: 2500 },
            { id: "eid157", tween: [ "transform", "${_leftCheek}", "translateY", '-40.92px', { fromValue: '-52.92px'}], position: 2500, duration: 2500 },
            { id: "eid142", tween: [ "transform", "${_nose}", "translateY", '-15px', { fromValue: '-30px'}], position: 0, duration: 2500 },
            { id: "eid159", tween: [ "transform", "${_nose}", "translateY", '-5px', { fromValue: '-15px'}], position: 2500, duration: 2500 },
            { id: "eid124", tween: [ "transform", "${_leftHairPin}", "translateY", '-86px', { fromValue: '-98.5px'}], position: 0, duration: 2500 },
            { id: "eid172", tween: [ "transform", "${_leftHairPin}", "translateY", '-67.47px', { fromValue: '-86px'}], position: 2500, duration: 2500 },
            { id: "eid120", tween: [ "transform", "${_tail}", "translateY", '-145px', { fromValue: '-121px'}], position: 0, duration: 2500 },
            { id: "eid170", tween: [ "transform", "${_tail}", "translateY", '-148px', { fromValue: '-145px'}], position: 2500, duration: 2500 },
            { id: "eid126", tween: [ "transform", "${_leftHairPin}", "translateX", '-174px', { fromValue: '-176.75px'}], position: 0, duration: 2500 },
            { id: "eid176", tween: [ "transform", "${_leftHairPin}", "translateX", '-171.35px', { fromValue: '-174px'}], position: 2500, duration: 2500 }         ]
      }
   }
},
"maru": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[-26,62]],
      id: 'RoundRect',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   },
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[46,62]],
      id: 'RoundRectCopy',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   },
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[118,62]],
      id: 'RoundRectCopy2',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   },
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[175,62]],
      id: 'RoundRectCopy3',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   },
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[237,62]],
      id: 'RoundRectCopy4',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   },
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[305,62]],
      id: 'RoundRectCopy8',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   },
   {
      rect: [26,-62,31,31],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[368,62]],
      id: 'RoundRectCopy9',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.75)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRectCopy}": [
            ["color", "background-color", 'rgba(255,255,255,0.7461)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '46px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ],
         "${_RoundRectCopy9}": [
            ["color", "background-color", 'rgba(255,255,255,0.7461)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '368px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ],
         "${_RoundRectCopy3}": [
            ["color", "background-color", 'rgba(255,255,255,0.7461)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '175px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ],
         "${symbolSelector}": [
            ["style", "height", '31px'],
            ["style", "width", '31px']
         ],
         "${_RoundRect}": [
            ["color", "background-color", 'rgba(255,255,255,0.75)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '-26px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ],
         "${_RoundRectCopy8}": [
            ["color", "background-color", 'rgba(255,255,255,0.7461)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '305px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ],
         "${_RoundRectCopy4}": [
            ["color", "background-color", 'rgba(255,255,255,0.7461)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '237px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ],
         "${_RoundRectCopy2}": [
            ["color", "background-color", 'rgba(255,255,255,0.7461)'],
            ["style", "border-top-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["transform", "translateX", '118px'],
            ["style", "border-bottom-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "border-top-right-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "width", '31px'],
            ["style", "border-bottom-left-radius", [45,45], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "height", '31px'],
            ["transform", "translateY", '62px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ball1": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-174,171,23,23],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[162,-183]],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.7461)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ],
         "${_RoundRect2}": [
            ["style", "height", '23px'],
            ["transform", "translateY", '-183px'],
            ["transform", "translateX", '162px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ball2": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-174,171,48,48],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[150,-195]],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(230,209,209,0.75)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(230,209,209,0.75)'],
            ["transform", "translateX", '150px'],
            ["style", "height", '48px'],
            ["transform", "translateY", '-195px'],
            ["style", "width", '48px']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ball3": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-174,171,35,35],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[156,-189]],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(208,243,220,0.75)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(208,243,220,0.75)'],
            ["transform", "translateX", '156px'],
            ["style", "height", '35px'],
            ["transform", "translateY", '-189px'],
            ["style", "width", '35px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ball4": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-174,171,23,23],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[162,-183]],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(201,209,243,0.75)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(201,209,243,0.75)'],
            ["transform", "translateX", '162px'],
            ["style", "height", '23px'],
            ["transform", "translateY", '-183px'],
            ["style", "width", '23px']
         ],
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"ball5": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-174,171,55,55],
      borderRadius: ['45px 45px','45px 45px','45px 45px','45px 45px'],
      transform: [[146,-199]],
      id: 'RoundRect2',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(228,230,199,0.75)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '23px'],
            ["style", "width", '23px']
         ],
         "${_RoundRect2}": [
            ["color", "background-color", 'rgba(228,230,199,0.75)'],
            ["transform", "translateX", '146px'],
            ["style", "height", '55px'],
            ["transform", "translateY", '-199px'],
            ["style", "width", '55px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"kimonoGirl": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      transform: [[-68,-123]],
      id: 'hair',
      type: 'image',
      rect: [94,175,212,193],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-DsMcLJuXeb8/WFzpNBGkE1I/AAAAAAAAL8U/Gk8JoScBhIAKRqwI2_qz_xVP7itCVdjegCLcB/s1600/hair.png']
   },
   {
      transform: [[-63,-145]],
      id: 'tail',
      type: 'image',
      rect: [139,145,136,157],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-nN5KoE3mnGE/WFzpOCG1URI/AAAAAAAAL9A/B6qsEwUo_TgsbklvEdi7TCZWSx3JR_P_gCLcB/s1600/tail.png']
   },
   {
      transform: [[-69,-80]],
      id: 'comb',
      type: 'image',
      rect: [139,106,138,100],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-A1FT2h4kUGA/WFzpMoCuMNI/AAAAAAAAL8I/IzSJwEs8PeA_Ekoik4aGFcCgD2WxtO30QCLcB/s1600/comb.png']
   },
   {
      transform: [[-176,-15]],
      id: 'neck',
      type: 'image',
      rect: [283,250,64,74],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-IWMl1T97-3U/WFzpNRsuoAI/AAAAAAAAL8g/lAB-p1BfDG8hg9yGmyB4hVUyY52XMHjAACLcB/s1600/neck.png']
   },
   {
      transform: [[-97,-61]],
      id: 'kimono',
      type: 'image',
      rect: [162,317,148,107],
      fill: ['rgba(0,0,0,0)','kimono.png']
   },
   {
      transform: [[-97,-22]],
      id: 'leftEar',
      type: 'image',
      rect: [309,219,29,31],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-AACHpekbZXM/WFzpNEN8SSI/AAAAAAAAL8Q/epBWQYTWQGInWO_026dSKba15DbVfb_RACLcB/s1600/leftEar.png']
   },
   {
      transform: [[2]],
      id: 'rightEar',
      type: 'image',
      rect: [33,198,31,31],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-C6G22cdi2EE/WFzpNtiRnVI/AAAAAAAAL8o/I6gJxl51BecQUhOvIGgbCx1aefzEEu-iwCLcB/s1600/rightEar.png']
   },
   {
      transform: [[-84,-109]],
      id: 'face',
      type: 'image',
      rect: [139,208,167,149],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-ByeDMYlh4bw/WFzpMjeJNJI/AAAAAAAAL8M/Ujru14aFfIcx0b80wCobkJdNU5HKs6_bACLcB/s1600/face.png']
   },
   {
      transform: [[-5,-18]],
      id: 'mouth',
      type: 'image',
      rect: [139,250,11,5],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-71213iUFXoE/WFzpNaxwpqI/AAAAAAAAL8c/pjJlIAgajdcl2a7xIrhsHIfsLrUc-pgxQCLcB/s1600/mouth.png']
   },
   {
      id: 'rightEye',
      type: 'rect',
      rect: [95,184,0,0]
   },
   {
      id: 'leftEye',
      type: 'rect',
      rect: [174,179,0,0]
   },
   {
      transform: [[-3,-15]],
      id: 'nose',
      type: 'image',
      rect: [139,222,7,7],
      fill: ['rgba(0,0,0,0)','https://4.bp.blogspot.com/-Ayf0MJpnDgU/WFzpNVJwrbI/AAAAAAAAL8k/uW_BEy6zWLARN-CBHuhIPjpVWrNCFKwOgCLcB/s1600/nose.png']
   },
   {
      transform: [[-395,-71]],
      id: 'rightCheek',
      type: 'image',
      rect: [460,287,31,27],
      fill: ['rgba(0,0,0,0)','rightCheek.png']
   },
   {
      transform: [[-83,-52]],
      id: 'leftCheek',
      type: 'image',
      rect: [266,269,31,26],
      fill: ['rgba(0,0,0,0)','leftCheek.png']
   },
   {
      transform: [[-360,-162]],
      id: 'bangs',
      type: 'image',
      rect: [414,221,169,126],
      fill: ['rgba(0,0,0,0)','https://1.bp.blogspot.com/-jz5OXoHMDuo/WFzpMu8A1zI/AAAAAAAAL8E/Y2PSztGDeu4NU-gfG29x2JhcViI95SR7QCLcB/s1600/bangs.png']
   },
   {
      transform: [[-174,-86]],
      id: 'leftHairPin',
      type: 'image',
      rect: [356,152,89,83],
      fill: ['rgba(0,0,0,0)','leftHirPin.png']
   },
   {
      transform: [[-331,-175]],
      id: 'rightHairPin',
      type: 'image',
      rect: [337,212,89,84],
      fill: ['rgba(0,0,0,0)','rightHairPin.png']
   }],
   symbolInstances: [
   {
      id: 'rightEye',
      symbolName: 'eye'
   },
   {
      id: 'leftEye',
      symbolName: 'eye'
   }   ]
   },
   states: {
      "Base State": {
         "${_comb}": [
            ["transform", "translateX", '-69px'],
            ["transform", "translateY", '-80px']
         ],
         "${_rightEar}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateX", '2px'],
            ["transform", "translateY", '0px']
         ],
         "${_hair}": [
            ["transform", "translateX", '-61px'],
            ["transform", "translateY", '-123px']
         ],
         "${_kimono}": [
            ["transform", "translateX", '-97px'],
            ["transform", "translateY", '-61px']
         ],
         "${_leftEye}": [
            ["transform", "translateX", '-1px'],
            ["transform", "translateY", '0px']
         ],
         "${_leftEar}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-22px'],
            ["transform", "translateX", '-97px']
         ],
         "${symbolSelector}": [
            ["style", "height", '364px'],
            ["style", "width", '272px']
         ],
         "${_bangs}": [
            ["transform", "translateX", '-360px'],
            ["transform", "translateY", '-162.6px']
         ],
         "${_face}": [
            ["transform", "translateX", '-84px'],
            ["transform", "translateY", '-109px']
         ],
         "${_leftCheek}": [
            ["transform", "translateX", '-83.62px'],
            ["transform", "translateY", '-52.92px']
         ],
         "${_rightCheek}": [
            ["transform", "translateX", '-396.48px'],
            ["transform", "translateY", '-70.86px']
         ],
         "${_rightEye}": [
            ["transform", "translateX", '-27px'],
            ["transform", "translateY", '-5px']
         ],
         "${_tail}": [
            ["transform", "translateX", '-63px'],
            ["transform", "translateY", '-145px']
         ],
         "${_leftHairPin}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-86px'],
            ["transform", "translateX", '-174px']
         ],
         "${_neck}": [
            ["transform", "translateX", '-176px'],
            ["transform", "translateY", '-15px']
         ],
         "${_mouth}": [
            ["transform", "translateX", '-5px'],
            ["transform", "translateY", '-18px']
         ],
         "${_nose}": [
            ["transform", "translateX", '-3px'],
            ["transform", "translateY", '-15px']
         ],
         "${_rightHairPin}": [
            ["transform", "scaleX", '1'],
            ["transform", "scaleY", '1'],
            ["transform", "translateY", '-175px'],
            ["transform", "translateX", '-331px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: false,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2192733");
