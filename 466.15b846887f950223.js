"use strict";(self.webpackChunkghumao=self.webpackChunkghumao||[]).push([[466],{6466:(m,u,s)=>{s.r(u),s.d(u,{Rajasthanpackage1Module:()=>p});var A=s(9808),T=s(6866),e=s(1223),g=s(7687);const q=function(a){return{sticky:a}},d=[{path:"",component:(()=>{class a{constructor(){this.slideConfigPackage={dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:2500,speed:2500,slidesToShow:2,slidesToScroll:1,pauseOnHover:!0,pauseOnFocus:!1,respondTo:"slider",adaptiveHeight:!0,responsive:[{breakpoint:767,settings:{slidesToShow:1}}]},this.sticky=!1,this.selector=[],setTimeout(()=>{window.scrollTo(0,0)},1e3)}ngOnInit(){}ngAfterViewInit(){this.initTopPosition=$("#myTab").offset().top;for(var t,i=$(".tab li a"),Z=[],n=0;n<i.length;n++){var o=$(i[n]).attr("href");Z.push(o),t=Z.join(" , ")}console.log(t),this.selector=Z}handleScroll(i){if(this.stopScrollDetection)return!1;$(window).scrollTop()>this.initTopPosition?$("#myTab").addClass("sticky"):$("#myTab").removeClass("sticky");var Z=$(window).scrollTop();this.selector.map(t=>{var n=$(t).position().top;if(Z-n>270){var r=$(t).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+r+'"]').addClass("active")}})}setActive(i){console.info(i),this.selector.map(Z=>{var t=$(Z).attr("id");$(".tab li a").removeClass("active"),$('a[href="#'+t+'"]').removeClass("active"),Z!=i||(this.stopScrollDetection=!0,setTimeout(()=>{$('a[href="#'+i+'"]').addClass("active");let n=Z.split("#")[1],r=document.getElementById(n);null!=r&&window.scroll({top:r.offsetTop+300,behavior:"smooth"}),this.stopScrollDetection=!1},100)),setTimeout(()=>{this.selector.map(n=>{n!=i?$(n+"-tab").removeClass("active"):$(i+"-tab").addClass("active"),$("#myTab").addClass("sticky")})},500)})}}return a.\u0275fac=function(i){return new(i||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-package"]],hostBindings:function(i,Z){1&i&&e.NdJ("scroll",function(n){return Z.handleScroll(n)},!1,e.Jf7)},decls:671,vars:4,consts:[[1,"inner-banner-wrap"],[1,"inner-baner-container",2,"background-image","url(assets/images/inner-banner.jpg)"],[1,"container"],[1,"inner-banner-content"],[1,"inner-title"],[1,"inner-shape"],[1,"single-tour-section"],[1,"row"],[1,"col-lg-8"],[1,"single-tour-inner"],[1,"feature-image"],["src","assets/images/img27.jpg","alt",""],[1,"package-meta","text-center"],[1,"far","fa-clock"],[1,"fas","fa-user-friends"],[1,"fas","fa-map-marked-alt"],["id","test"],[1,"tab-container"],["id","myTab","role","tablist",1,"nav","nav-tabs","tab",3,"ngClass"],[1,"nav-item",3,"click"],["id","program-tab","data-toggle","tab","href","#program","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","inclusionexclusion-tab","data-toggle","tab","href","#inclusionexclusion","role","tab","aria-controls","program","aria-selected","false",1,"nav-link"],["id","review-tab","data-toggle","tab","href","#review","role","tab","aria-controls","review","aria-selected","false",1,"nav-link"],["id","map-tab","data-toggle","tab","href","#map","role","tab","aria-controls","map","aria-selected","false",1,"nav-link"],["id","myTabContent",1,"tab-content"],["tabContent",""],["id","program","role","tabpanel","aria-labelledby","program-tab",1,"tab-pane","show","active"],["program",""],[1,"itinerary-content"],[1,"itinerary-timeline-wrap"],[1,"timeline-content"],[1,"day-count"],["id","inclusionexclusion","role","tabpanel","aria-labelledby","inclusionexclusion-tab",1,"tab-pane","show","active"],["inclusionexclusion",""],[1,"overview-content"],[1,"col-md-6"],["id","review","role","tabpanel","aria-labelledby","review-tab",1,"tab-pane","show","active"],["review",""],[1,"summary-review"],[1,"review-score"],[1,"review-score-content"],[1,"comment-area"],[1,"comment-title"],[1,"comment-area-inner"],[1,"comment-thumb"],["src","assets/images/img20.jpg","alt",""],[1,"comment-content"],[1,"comment-header"],[1,"author-name"],[1,"post-on"],[1,"rating-wrap"],["title","Rated 5 out of 5",1,"rating-start"],[2,"width","90%"],["href","#",1,"reply"],[1,"fas","fa-reply"],["src","assets/images/img21.jpg","alt",""],["src","assets/images/img22.jpg","alt",""],[1,"comment-form-wrap"],[1,"comment-form"],[1,"full-width","rate-wrap"],[1,"procduct-rate"],["type","text","name","name","placeholder","Name"],["type","text","name","name","placeholder","Last name"],["type","email","name","email","placeholder","Email"],["type","text","name","subject","placeholder","Subject"],["rows","6","placeholder","Your review"],["type","submit","name","submit","value","Submit"],["id","map","role","tabpanel","aria-labelledby","map-tab",1,"tab-pane","show","active"],["map",""],[1,"map-area"],["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60998820.06503915!2d95.3386452160086!3d-21.069765827214972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2b2bfd076787c5df%3A0x538267a1955b1352!2sAustralia!5e0!3m2!1sen!2snp!4v1579777829477!5m2!1sen!2snp","height","450","allowfullscreen",""],[1,"single-tour-gallery"],[1,"single-tour-slider","slick-initialized","slick-slider","slick-dotted"],[1,"row","package-slider","carousel",3,"config"],["slickModal","slick-carousel"],["ngxSlickItem","",1,"col-lg-6","col-md-6","col-sm-4","slide"],[1,"package-wrap"],["href","#"],["src","assets/images/img5.jpg","alt",""],[1,"package-price"],[1,"package-content-wrap"],[1,"fas","fa-map-marker-alt"],[1,"package-content"],[1,"review-area"],[1,"review-text"],[2,"width","60%"],[1,"innercontent"],[1,"btn-wrap"],["href","#",1,"button-text","width-6"],[1,"fas","fa-arrow-right"],["src","assets/images/img6.jpg","alt",""],["src","assets/images/img7.jpg","alt",""],["ngxSlickItem","",1,"col-lg-6col-md-6","col-sm-4","slide"],[1,"col-lg-4"],[1,"sidebar"],[1,"price"],[1,"start-wrap"],[1,"widget-bg","booking-form-wrap"],[1,"bg-title"],[1,"booking-form"],[1,"col-sm-12"],[1,"form-group"],["name","name_booking","type","text","placeholder","Full Name"],["name","email_booking","type","text","placeholder","Email"],["name","phone_booking","type","text","placeholder","Number"],["type","text","name","s","autocomplete","off","readonly","readonly","placeholder","Date","id","dp1652000334191",1,"input-date-picker","hasDatepicker"],[1,""],[1,"col-sm-6"],[1,"checkbox-list"],["type","checkbox","name","s"],[1,"custom-checkbox"],[1,"form-group","submit-btn"],["type","submit","name","submit","value","Boook Now"],[1,"widget-bg","information-content","text-center"],["href","#",1,"button-primary"],[1,"travel-package-content","text-center",2,"background-image","url(assets/images/img11.jpg)"],[1,"far","fa-arrow-alt-circle-right"],[1,"subscribe-section",2,"background-image","url(assets/images/img16.jpg)"],[1,"col-lg-7"],[1,"section-heading","section-heading-white"],[1,"dash-style"],[1,"newsletter-form"],["type","email","name","s","placeholder","Your Email Address"],["type","submit","name","signup","value","SIGN UP NOW!"]],template:function(i,Z){1&i&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e.TgZ(4,"h1",4),e._uU(5,"Package Detail"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(6,"div",5),e.qZA(),e.TgZ(7,"div",6),e.TgZ(8,"div",2),e.TgZ(9,"div",7),e.TgZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"h2"),e._uU(13,"COLOURFUL RAJASTHAN"),e.qZA(),e.TgZ(14,"figure",10),e._UZ(15,"img",11),e.TgZ(16,"div",12),e.TgZ(17,"ul"),e.TgZ(18,"li"),e._UZ(19,"i",13),e._uU(20," 7 Nights / 8 Days "),e.qZA(),e.TgZ(21,"li"),e._UZ(22,"i",14),e._uU(23," People: 4 "),e.qZA(),e.TgZ(24,"li"),e._UZ(25,"i",15),e._uU(26," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(27,"div",16),e.TgZ(28,"div",17),e.TgZ(29,"ul",18),e.TgZ(30,"li",19),e.NdJ("click",function(){return Z.setActive("#program")}),e.TgZ(31,"a",20),e._uU(32,"PROGRAM"),e.qZA(),e.qZA(),e.TgZ(33,"li",19),e.NdJ("click",function(){return Z.setActive("#inclusionexclusion")}),e.TgZ(34,"a",21),e._uU(35,"INCLUSIONS/EXCLUSIONS"),e.qZA(),e.qZA(),e.TgZ(36,"li",19),e.NdJ("click",function(){return Z.setActive("#review")}),e.TgZ(37,"a",22),e._uU(38,"REVIEW"),e.qZA(),e.qZA(),e.TgZ(39,"li",19),e.NdJ("click",function(){return Z.setActive("#map")}),e.TgZ(40,"a",23),e._uU(41,"Map"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"div",24,25),e.TgZ(44,"div",26,27),e.TgZ(46,"div",28),e.TgZ(47,"h3"),e._uU(48,"Program "),e.TgZ(49,"span"),e._uU(50,"( 8 days )"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(51,"div",29),e.TgZ(52,"ul"),e.TgZ(53,"li"),e.TgZ(54,"div",30),e.TgZ(55,"div",31),e._uU(56,"Day "),e.TgZ(57,"span"),e._uU(58,"1"),e.qZA(),e.qZA(),e.TgZ(59,"h4"),e._uU(60,"Delhi - Jaipur "),e.qZA(),e.TgZ(61,"p"),e._uU(62,"Arrival Delhi and this morning proceed to The Royal Pink City of Jaipur (265 kms . / 5 hrs.). En-route visit Amber Fort and enjoy an elephant ride here. Arrival at Jaipur & transfer to hotel. Evening you can visit Birla Mandir and explore the attractive and colorful markets of Jaipur. Overnight stay at Jaipur. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(63,"li"),e.TgZ(64,"div",30),e.TgZ(65,"div",31),e._uU(66,"Day "),e.TgZ(67,"span"),e._uU(68,"2"),e.qZA(),e.qZA(),e.TgZ(69,"h4"),e._uU(70,"Jaipur - Ajmer - Pushkar "),e.qZA(),e.TgZ(71,"p"),e._uU(72,"After breakfast, visit City Palace, Albert Hall, Hawa Mahal, Jantar Mantar. Later, proceed to Ajmer (135 kms . / 3 hrs..), visit the famous Dargah of Salim Chisti and then drive to Pushkar (11 kms .), where you will visit the only Brahma Temple in India and Pushkar Lake. Overnight stay at Pushkar."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(73,"li"),e.TgZ(74,"div",30),e.TgZ(75,"div",31),e._uU(76,"Day "),e.TgZ(77,"span"),e._uU(78,"3"),e.qZA(),e.qZA(),e.TgZ(79,"h4"),e._uU(80,"Pushkar - Udaipur "),e.qZA(),e.TgZ(81,"p"),e._uU(82,"Morning drive to Udaipur (286 kms . / 6 hrs..). Upon arrival, check into hotel. Later visit the famous Jagdish temple which enshrines a black stone image of Lord Vishnu as Jagannath - Lord of the Universe, Jag Mandir and enjoy Boat ride at Pichola Lake . Overnight stay at Udaipur . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(83,"li"),e.TgZ(84,"div",30),e.TgZ(85,"div",31),e._uU(86,"Day "),e.TgZ(87,"span"),e._uU(88,"4"),e.qZA(),e.qZA(),e.TgZ(89,"h4"),e._uU(90,"Udaipur"),e.qZA(),e.TgZ(91,"p"),e._uU(92,"After breakfast, visit City Palace , Crystal Hall , the Saheliyon ki bari - \u201cGardens of the Maidens\u201d and Sajjan Garh . Overnight stay at Udaipur . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(93,"li"),e.TgZ(94,"div",30),e.TgZ(95,"div",31),e._uU(96,"Day "),e.TgZ(97,"span"),e._uU(98,"5"),e.qZA(),e.qZA(),e.TgZ(99,"h4"),e._uU(100,"Udaipur - Mount Abu"),e.qZA(),e.TgZ(101,"p"),e._uU(102,"Morning after breakfast , drive in amazing road trip of Mount Abu (190 kms . / 4.5 hrs.), Mount Abu is the only Hill Station in Rajasthan surrounding by Aravali Hills. Upon arrival, check into hotel. Enroute visit the magnificent Dilwara Jain Temples built in 11th century and then in evening enjoy the Sunset point and Nakki Lake where you can do boat ride. Overnight stay at Mount Abu. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(103,"li"),e.TgZ(104,"div",30),e.TgZ(105,"div",31),e._uU(106,"Day "),e.TgZ(107,"span"),e._uU(108,"6"),e.qZA(),e.qZA(),e.TgZ(109,"h4"),e._uU(110,"Mount Abu - Jodhpur "),e.qZA(),e.TgZ(111,"p"),e._uU(112,"After breakfast , depart to Jodhpur (325 kms . / 7 hrs..), the second largest city of Rajasthan.Jodhpur is also known \u201cblue city of Rajasthan\u201d . Upon arrival check into the hotel and then proceed for visiting Meharangarh Fort, Ummaid Bhawan Palace. Evening you can enjoy the famous sweets of Jodhpur in local market. Overnight stay at Jodhpur . "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(113,"li"),e.TgZ(114,"div",30),e.TgZ(115,"div",31),e._uU(116,"Day "),e.TgZ(117,"span"),e._uU(118,"7"),e.qZA(),e.qZA(),e.TgZ(119,"h4"),e._uU(120,"Jodhpur - Jaipur"),e.qZA(),e.TgZ(121,"p"),e._uU(122,"Post breakfast, Visit Museum in Jodhpur and then depart to Jaipur (336 kms . / 7 hrs..). Arrival at Jaipur and transfer to hotel. Evening visit the local colourful market where you can feel you are in Rajasthan . Jaipur is famous for amazing sweets, Chat , jewellery , Jaipuri laheriya Sarees , Bangles etc. Overnight stay at Jaipur. "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(123,"li"),e.TgZ(124,"div",30),e.TgZ(125,"div",31),e._uU(126,"Day "),e.TgZ(127,"span"),e._uU(128,"8"),e.qZA(),e.qZA(),e.TgZ(129,"h4"),e._uU(130,"Jaipur - Delhi "),e.qZA(),e.TgZ(131,"p"),e._uU(132,"This morning drive to Delhi (260 kms . / 5 hrs..) Arrive Delhi . Tour concludes with nice memories of Rajasthan. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(133,"div",32,33),e.TgZ(135,"div",34),e.TgZ(136,"div",7),e.TgZ(137,"div",35),e.TgZ(138,"h4"),e._uU(139," TOUR INCLUSIONS "),e.qZA(),e.TgZ(140,"ul"),e.TgZ(141,"li"),e._uU(142,"- 2 nights accommodation in Jaipur."),e.qZA(),e.TgZ(143,"li"),e._uU(144,"- 1 nights accommodation in Pushkar."),e.qZA(),e.TgZ(145,"li"),e._uU(146,"- 2 nights accommodation in Udaipur"),e.qZA(),e.TgZ(147,"li"),e._uU(148,"- 1 night accommodation in Mount Abu."),e.qZA(),e.TgZ(149,"li"),e._uU(150,"- 1 night accommodation in Jodhpur."),e.qZA(),e.TgZ(151,"li"),e._uU(152,"- Assistance at the airport."),e.qZA(),e.TgZ(153,"li"),e._uU(154,"- Daily buffet breakfast in hotels for 7 days."),e.qZA(),e.TgZ(155,"li"),e._uU(156,"- A/C vehicle for all transfers and sightseeing as per the itinerary."),e.qZA(),e.TgZ(157,"li"),e._uU(158,"- All applicable Hotel taxes."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(159,"div",35),e.TgZ(160,"h4"),e._uU(161," TOUR EXCLUSIONS "),e.qZA(),e.TgZ(162,"ul"),e.TgZ(163,"li"),e._uU(164,"- Any Air/ Train Tickets."),e.qZA(),e.TgZ(165,"li"),e._uU(166,"- Expenses of personal nature."),e.qZA(),e.TgZ(167,"li"),e._uU(168,"- All Entrances & Guide charges. "),e.qZA(),e.TgZ(169,"li"),e._uU(170,"- Boat Ride & Horse rides or Cable car or Ropeway on direct payment basis."),e.qZA(),e.TgZ(171,"li"),e._uU(172,"- Supplement for Special activities as per the itinerary. "),e.qZA(),e.TgZ(173,"li"),e._uU(174,"-Items of personal nature like laundry, phone calls, tips to guides / drivers etc. "),e.qZA(),e.TgZ(175,"li"),e._uU(176,"-Camera / Video camera fees applicable at monument. "),e.qZA(),e.TgZ(177,"li"),e._uU(178,"-5% Government GST. "),e.qZA(),e.TgZ(179,"li"),e._uU(180,"-Any other items/services not mentioned in \u201c Inclusions \u201c "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(181,"div",36,37),e.TgZ(183,"div",38),e.TgZ(184,"div",39),e.TgZ(185,"span"),e._uU(186,"4.9"),e.qZA(),e.qZA(),e.TgZ(187,"div",40),e.TgZ(188,"h3"),e._uU(189," Excellent "),e.TgZ(190,"span"),e._uU(191,"( Based on 24 reviews )"),e.qZA(),e.qZA(),e.TgZ(192,"p"),e._uU(193,"Tincidunt iaculis pede mus lobortis hendrerit eveniet impedit aenean mauris qui, pharetra rem doloremque laboris euismod deserunt non, cupiditate, vestibulum."),e.qZA(),e.qZA(),e.qZA(),e.TgZ(194,"div",41),e.TgZ(195,"h3",42),e._uU(196,"3 Reviews"),e.qZA(),e.TgZ(197,"div",43),e.TgZ(198,"ol"),e.TgZ(199,"li"),e.TgZ(200,"figure",44),e._UZ(201,"img",45),e.qZA(),e.TgZ(202,"div",46),e.TgZ(203,"div",47),e.TgZ(204,"h5",48),e._uU(205,"Tom Sawyer"),e.qZA(),e.TgZ(206,"span",49),e._uU(207,"Jana 10 2020"),e.qZA(),e.TgZ(208,"div",50),e.TgZ(209,"div",51),e._UZ(210,"span",52),e.qZA(),e.qZA(),e.qZA(),e.TgZ(211,"p"),e._uU(212,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(213,"a",53),e._UZ(214,"i",54),e._uU(215,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(216,"li"),e.TgZ(217,"ol"),e.TgZ(218,"li"),e.TgZ(219,"figure",44),e._UZ(220,"img",55),e.qZA(),e.TgZ(221,"div",46),e.TgZ(222,"div",47),e.TgZ(223,"h5",48),e._uU(224,"John Doe"),e.qZA(),e.TgZ(225,"span",49),e._uU(226,"Jana 10 2020"),e.qZA(),e.TgZ(227,"div",50),e.TgZ(228,"div",51),e._UZ(229,"span",52),e.qZA(),e.qZA(),e.qZA(),e.TgZ(230,"p"),e._uU(231,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(232,"a",53),e._UZ(233,"i",54),e._uU(234,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(235,"ol"),e.TgZ(236,"li"),e.TgZ(237,"figure",44),e._UZ(238,"img",56),e.qZA(),e.TgZ(239,"div",46),e.TgZ(240,"div",47),e.TgZ(241,"h5",48),e._uU(242,"Jaan Smith"),e.qZA(),e.TgZ(243,"span",49),e._uU(244,"Jana 10 2020"),e.qZA(),e.TgZ(245,"div",50),e.TgZ(246,"div",51),e._UZ(247,"span"),e.qZA(),e.qZA(),e.qZA(),e.TgZ(248,"p"),e._uU(249,"Officia amet posuere voluptates, mollit montes eaque accusamus laboriosam quisque cupidatat dolor pariatur, pariatur auctor."),e.qZA(),e.TgZ(250,"a",53),e._UZ(251,"i",54),e._uU(252,"Reply"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(253,"div",57),e.TgZ(254,"h3",42),e._uU(255,"Leave a Review"),e.qZA(),e.TgZ(256,"form",58),e.TgZ(257,"div",59),e.TgZ(258,"label"),e._uU(259,"Your rating"),e.qZA(),e.TgZ(260,"div",60),e._UZ(261,"span"),e.qZA(),e.qZA(),e.TgZ(262,"p"),e._UZ(263,"input",61),e.qZA(),e.TgZ(264,"p"),e._UZ(265,"input",62),e.qZA(),e.TgZ(266,"p"),e._UZ(267,"input",63),e.qZA(),e.TgZ(268,"p"),e._UZ(269,"input",64),e.qZA(),e.TgZ(270,"p"),e._UZ(271,"textarea",65),e.qZA(),e.TgZ(272,"p"),e._UZ(273,"input",66),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(274,"div",67,68),e.TgZ(276,"div",69),e._UZ(277,"iframe",70),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(278,"div",71),e.TgZ(279,"h3"),e._uU(280,"GALLERY / PHOTOS"),e.qZA(),e.TgZ(281,"div",72),e.TgZ(282,"ngx-slick-carousel",73,74),e.TgZ(284,"div",75),e.TgZ(285,"div",76),e.TgZ(286,"figure",10),e.TgZ(287,"a",77),e._UZ(288,"img",78),e.qZA(),e.qZA(),e.TgZ(289,"div",79),e.TgZ(290,"h6"),e.TgZ(291,"span"),e._uU(292,"$1,900 "),e.qZA(),e._uU(293," / per person "),e.qZA(),e.qZA(),e.TgZ(294,"div",80),e.TgZ(295,"div",12),e.TgZ(296,"ul"),e.TgZ(297,"li"),e._UZ(298,"i",13),e._uU(299," 7N/8D "),e.qZA(),e.TgZ(300,"li"),e._UZ(301,"i",14),e._uU(302," People: 5 "),e.qZA(),e.TgZ(303,"li"),e._UZ(304,"i",81),e._uU(305," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(306,"div",82),e.TgZ(307,"h3"),e.TgZ(308,"a",77),e._uU(309,"Colourful Rajasthan"),e.qZA(),e.qZA(),e.TgZ(310,"div",83),e.TgZ(311,"span",84),e._uU(312,"(25 reviews)"),e.qZA(),e.TgZ(313,"div",51),e._UZ(314,"span",85),e.qZA(),e.qZA(),e.TgZ(315,"div",86),e.TgZ(316,"p"),e._uU(317,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(318,"div",87),e.TgZ(319,"a",88),e._uU(320,"Enquire Now"),e._UZ(321,"i",89),e.qZA(),e.TgZ(322,"a",88),e._uU(323,"Know More "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(324,"div",75),e.TgZ(325,"div",76),e.TgZ(326,"figure",10),e.TgZ(327,"a",77),e._UZ(328,"img",90),e.qZA(),e.qZA(),e.TgZ(329,"div",79),e.TgZ(330,"h6"),e.TgZ(331,"span"),e._uU(332,"$1,900 "),e.qZA(),e._uU(333," / per person "),e.qZA(),e.qZA(),e.TgZ(334,"div",80),e.TgZ(335,"div",12),e.TgZ(336,"ul"),e.TgZ(337,"li"),e._UZ(338,"i",13),e._uU(339," 7N/8D "),e.qZA(),e.TgZ(340,"li"),e._UZ(341,"i",14),e._uU(342," People: 5 "),e.qZA(),e.TgZ(343,"li"),e._UZ(344,"i",81),e._uU(345," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(346,"div",82),e.TgZ(347,"h3"),e.TgZ(348,"a",77),e._uU(349,"Amazing Rajasthan (EX \u2013Jaipur )"),e.qZA(),e.qZA(),e.TgZ(350,"div",83),e.TgZ(351,"span",84),e._uU(352,"(25 reviews)"),e.qZA(),e.TgZ(353,"div",51),e._UZ(354,"span",85),e.qZA(),e.qZA(),e.TgZ(355,"div",86),e.TgZ(356,"p"),e._uU(357,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(358,"div",87),e.TgZ(359,"a",88),e._uU(360,"Enquire Now"),e._UZ(361,"i",89),e.qZA(),e.TgZ(362,"a",88),e._uU(363,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(364,"div",75),e.TgZ(365,"div",76),e.TgZ(366,"figure",10),e.TgZ(367,"a",77),e._UZ(368,"img",91),e.qZA(),e.qZA(),e.TgZ(369,"div",79),e.TgZ(370,"h6"),e.TgZ(371,"span"),e._uU(372,"$1,900 "),e.qZA(),e._uU(373," / per person "),e.qZA(),e.qZA(),e.TgZ(374,"div",80),e.TgZ(375,"div",12),e.TgZ(376,"ul"),e.TgZ(377,"li"),e._UZ(378,"i",13),e._uU(379," 10N/11D "),e.qZA(),e.TgZ(380,"li"),e._UZ(381,"i",14),e._uU(382," People: 5 "),e.qZA(),e.TgZ(383,"li"),e._UZ(384,"i",81),e._uU(385," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(386,"div",82),e.TgZ(387,"h3"),e.TgZ(388,"a",77),e._uU(389,"Rangilo Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(390,"div",83),e.TgZ(391,"span",84),e._uU(392,"(25 reviews)"),e.qZA(),e.TgZ(393,"div",51),e._UZ(394,"span",85),e.qZA(),e.qZA(),e.TgZ(395,"div",86),e.TgZ(396,"p"),e._uU(397,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(398,"div",87),e.TgZ(399,"a",88),e._uU(400,"Enquire Now"),e._UZ(401,"i",89),e.qZA(),e.TgZ(402,"a",88),e._uU(403,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(404,"div",75),e.TgZ(405,"div",76),e.TgZ(406,"figure",10),e.TgZ(407,"a",77),e._UZ(408,"img",90),e.qZA(),e.qZA(),e.TgZ(409,"div",79),e.TgZ(410,"h6"),e.TgZ(411,"span"),e._uU(412,"$1,900 "),e.qZA(),e._uU(413," / per person "),e.qZA(),e.qZA(),e.TgZ(414,"div",80),e.TgZ(415,"div",12),e.TgZ(416,"ul"),e.TgZ(417,"li"),e._UZ(418,"i",13),e._uU(419," 10N/11D "),e.qZA(),e.TgZ(420,"li"),e._UZ(421,"i",14),e._uU(422," People: 5 "),e.qZA(),e.TgZ(423,"li"),e._UZ(424,"i",81),e._uU(425," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(426,"div",82),e.TgZ(427,"h3"),e.TgZ(428,"a",77),e._uU(429,"Rajasthan with Sand Dunes"),e.qZA(),e.qZA(),e.TgZ(430,"div",83),e.TgZ(431,"span",84),e._uU(432,"(25 reviews)"),e.qZA(),e.TgZ(433,"div",51),e._UZ(434,"span",85),e.qZA(),e.qZA(),e.TgZ(435,"div",86),e.TgZ(436,"p"),e._uU(437,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(438,"div",87),e.TgZ(439,"a",88),e._uU(440,"Enquire Now"),e._UZ(441,"i",89),e.qZA(),e.TgZ(442,"a",88),e._uU(443,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(444,"div",75),e.TgZ(445,"div",76),e.TgZ(446,"figure",10),e.TgZ(447,"a",77),e._UZ(448,"img",78),e.qZA(),e.qZA(),e.TgZ(449,"div",79),e.TgZ(450,"h6"),e.TgZ(451,"span"),e._uU(452,"$1,900 "),e.qZA(),e._uU(453," / per person "),e.qZA(),e.qZA(),e.TgZ(454,"div",80),e.TgZ(455,"div",12),e.TgZ(456,"ul"),e.TgZ(457,"li"),e._UZ(458,"i",13),e._uU(459," 7N/8D "),e.qZA(),e.TgZ(460,"li"),e._UZ(461,"i",14),e._uU(462," People: 5 "),e.qZA(),e.TgZ(463,"li"),e._UZ(464,"i",81),e._uU(465," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(466,"div",82),e.TgZ(467,"h3"),e.TgZ(468,"a",77),e._uU(469,"Golden Triangle tour with Ajmer & Pushkar"),e.qZA(),e.qZA(),e.TgZ(470,"div",83),e.TgZ(471,"span",84),e._uU(472,"(25 reviews)"),e.qZA(),e.TgZ(473,"div",51),e._UZ(474,"span",85),e.qZA(),e.qZA(),e.TgZ(475,"div",86),e.TgZ(476,"p"),e._uU(477,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(478,"div",87),e.TgZ(479,"a",88),e._uU(480,"Enquire Now"),e._UZ(481,"i",89),e.qZA(),e.TgZ(482,"a",88),e._uU(483,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(484,"div",75),e.TgZ(485,"div",76),e.TgZ(486,"figure",10),e.TgZ(487,"a",77),e._UZ(488,"img",90),e.qZA(),e.qZA(),e.TgZ(489,"div",79),e.TgZ(490,"h6"),e.TgZ(491,"span"),e._uU(492,"$1,900 "),e.qZA(),e._uU(493," / per person "),e.qZA(),e.qZA(),e.TgZ(494,"div",80),e.TgZ(495,"div",12),e.TgZ(496,"ul"),e.TgZ(497,"li"),e._UZ(498,"i",13),e._uU(499," 7N/8D "),e.qZA(),e.TgZ(500,"li"),e._UZ(501,"i",14),e._uU(502," People: 5 "),e.qZA(),e.TgZ(503,"li"),e._UZ(504,"i",81),e._uU(505," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(506,"div",82),e.TgZ(507,"h3"),e.TgZ(508,"a",77),e._uU(509,"Golden Triangle tour with Ranthambore Jungle Safari"),e.qZA(),e.qZA(),e.TgZ(510,"div",83),e.TgZ(511,"span",84),e._uU(512,"(25 reviews)"),e.qZA(),e.TgZ(513,"div",51),e._UZ(514,"span",85),e.qZA(),e.qZA(),e.TgZ(515,"div",86),e.TgZ(516,"p"),e._uU(517,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(518,"div",87),e.TgZ(519,"a",88),e._uU(520,"Enquire Now"),e._UZ(521,"i",89),e.qZA(),e.TgZ(522,"a",88),e._uU(523,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(524,"div",92),e.TgZ(525,"div",76),e.TgZ(526,"figure",10),e.TgZ(527,"a",77),e._UZ(528,"img",91),e.qZA(),e.qZA(),e.TgZ(529,"div",79),e.TgZ(530,"h6"),e.TgZ(531,"span"),e._uU(532,"$1,900 "),e.qZA(),e._uU(533," / per person "),e.qZA(),e.qZA(),e.TgZ(534,"div",80),e.TgZ(535,"div",12),e.TgZ(536,"ul"),e.TgZ(537,"li"),e._UZ(538,"i",13),e._uU(539," 3N/4D "),e.qZA(),e.TgZ(540,"li"),e._UZ(541,"i",14),e._uU(542," People: 5 "),e.qZA(),e.TgZ(543,"li"),e._UZ(544,"i",81),e._uU(545," Rajasthan "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(546,"div",82),e.TgZ(547,"h3"),e.TgZ(548,"a",77),e._uU(549,"Beautiful Udaipur with Mount Abu ( EX \u2013Udaipur)"),e.qZA(),e.qZA(),e.TgZ(550,"div",83),e.TgZ(551,"span",84),e._uU(552,"(25 reviews)"),e.qZA(),e.TgZ(553,"div",51),e._UZ(554,"span",85),e.qZA(),e.qZA(),e.TgZ(555,"div",86),e.TgZ(556,"p"),e._uU(557,"Lorem ipsum dolor sit amet, consectetur adipiscing elit luctus nec ullam. Ut elit tellus, luctus nec ullam elit tellpus."),e.qZA(),e.qZA(),e.TgZ(558,"div",87),e.TgZ(559,"a",88),e._uU(560,"Enquire Now"),e._UZ(561,"i",89),e.qZA(),e.TgZ(562,"a",88),e._uU(563,"Know More"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(564,"div",93),e.TgZ(565,"div",94),e.TgZ(566,"div",79),e.TgZ(567,"h5",95),e.TgZ(568,"span"),e._uU(569,"$649"),e.qZA(),e._uU(570," / per person "),e.qZA(),e.TgZ(571,"div",96),e.TgZ(572,"div",51),e._UZ(573,"span",85),e.qZA(),e.qZA(),e.qZA(),e.TgZ(574,"div",97),e.TgZ(575,"h4",98),e._uU(576,"Booking"),e.qZA(),e.TgZ(577,"form",99),e.TgZ(578,"div",7),e.TgZ(579,"div",100),e.TgZ(580,"div",101),e._UZ(581,"input",102),e.qZA(),e.qZA(),e.TgZ(582,"div",100),e.TgZ(583,"div",101),e._UZ(584,"input",103),e.qZA(),e.qZA(),e.TgZ(585,"div",100),e.TgZ(586,"div",101),e._UZ(587,"input",104),e.qZA(),e.qZA(),e.TgZ(588,"div",100),e.TgZ(589,"div",101),e._UZ(590,"input",105),e.qZA(),e.qZA(),e.TgZ(591,"div",100),e.TgZ(592,"h4",106),e._uU(593,"Add Options"),e.qZA(),e.qZA(),e.TgZ(594,"div",107),e.TgZ(595,"div",101),e.TgZ(596,"label",108),e._UZ(597,"input",109),e._UZ(598,"span",110),e._uU(599," Tour guide "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(600,"div",107),e.TgZ(601,"div",101),e.TgZ(602,"label",108),e._UZ(603,"input",109),e._UZ(604,"span",110),e._uU(605," Insurance "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(606,"div",107),e.TgZ(607,"div",101),e.TgZ(608,"label",108),e._UZ(609,"input",109),e._UZ(610,"span",110),e._uU(611," Dinner "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(612,"div",107),e.TgZ(613,"div",101),e.TgZ(614,"label",108),e._UZ(615,"input",109),e._UZ(616,"span",110),e._uU(617," Bike rent "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(618,"div",100),e.TgZ(619,"div",111),e._UZ(620,"input",112),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(621,"div",113),e.TgZ(622,"h5"),e._uU(623,"TRAVEL TIPS"),e.qZA(),e.TgZ(624,"h3"),e._uU(625,"NEED TRAVEL RELATED TIPS & INFORMATION"),e.qZA(),e.TgZ(626,"p"),e._uU(627,"Mollit voluptatem perspiciatis convallis elementum corporis quo veritatis aliquid blandit, blandit torquent, odit placeat. "),e.qZA(),e.TgZ(628,"a",114),e._uU(629,"GET A QUOTE"),e.qZA(),e.qZA(),e.TgZ(630,"div",115),e.TgZ(631,"h5"),e._uU(632,"MORE PACKAGES"),e.qZA(),e.TgZ(633,"h3"),e._uU(634,"OTHER TRAVEL PACKAGES"),e.qZA(),e.TgZ(635,"p"),e._uU(636,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus."),e.qZA(),e.TgZ(637,"ul"),e.TgZ(638,"li"),e.TgZ(639,"a",77),e._UZ(640,"i",116),e._uU(641,"Vacation packages"),e.qZA(),e.qZA(),e.TgZ(642,"li"),e.TgZ(643,"a",77),e._UZ(644,"i",116),e._uU(645,"Honeymoon packages"),e.qZA(),e.qZA(),e.TgZ(646,"li"),e.TgZ(647,"a",77),e._UZ(648,"i",116),e._uU(649,"New year packages"),e.qZA(),e.qZA(),e.TgZ(650,"li"),e.TgZ(651,"a",77),e._UZ(652,"i",116),e._uU(653,"Weekend packages"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(654,"section",117),e.TgZ(655,"div",2),e.TgZ(656,"div",7),e.TgZ(657,"div",118),e.TgZ(658,"div",119),e.TgZ(659,"h5",120),e._uU(660,"HOLIDAY PACKAGE OFFER"),e.qZA(),e.TgZ(661,"h2"),e._uU(662,"HOLIDAY SPECIAL 10% OFF !"),e.qZA(),e.TgZ(663,"h4"),e._uU(664,"Sign up now to recieve hot special offers and information about the best tour packages, updates and discounts !!"),e.qZA(),e.TgZ(665,"div",121),e.TgZ(666,"form"),e._UZ(667,"input",122),e._UZ(668,"input",123),e.qZA(),e.qZA(),e.TgZ(669,"p"),e._uU(670,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque adipiscing, luctus eleifend temporibus occaecat luctus eleifend tempo ribus."),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&i&&(e.xp6(29),e.Q6J("ngClass",e.VKq(2,q,Z.sticky)),e.xp6(253),e.Q6J("config",Z.slideConfigPackage))},directives:[A.mk,g.vE,g.Xg],styles:[""],encapsulation:2}),a})()}];let c=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[T.Bz.forChild(d)],T.Bz]}),a})(),p=(()=>{class a{}return a.\u0275fac=function(i){return new(i||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[[A.ez,c,g.Sv,g.Sv]]}),a})()}}]);