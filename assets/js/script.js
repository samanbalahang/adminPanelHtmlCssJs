$(document).ready(function(){
  $('.select2').select2();

//if page has map we do it in this way for escape from any error.
if($(document).find("#osm-map").length > 0){
  // Where you want to render the map.
  var element = document.getElementById('osm-map');

  // Height has to be set. You can do this in CSS too.
  element.style = 'height:300px;';

  // Create Leaflet map on map element.
  var map = L.map(element);

  // Add OSM tile leayer to the Leaflet map.
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Target's GPS coordinates.
  var target = L.latLng('35.81943', '50.99362');

  // Set map's center to target with zoom 14.
  map.setView(target, 14);

  // Place a marker on the same location.
  L.marker(target).addTo(map);
}

 
  // $("#firstlist").click(function(){
  //   if($("#firstlist").hasClass("active")){
  //     $("#firstlist").removeClass("active");
  //     $("#firstlist a").removeClass("active");
  //     $("#home").removeClass("active");
  //     $('main').removeClass('col-lg-9');
  //     $('main').addClass('col-lg-11');
  //   }else{
  //     $("#firstlist").toggleClass("active");
  //     $("#firstlist a").toggleClass("active");
  //     $("#home").toggleClass("active");
  //       $('main').removeClass('col-lg-11');
  //       $('main').addClass('col-lg-9');
  //   }
  //   if($("#seclist").hasClass("active")){
  //     $("#seclist").toggleClass("active");
  //     $("#seclist a").toggleClass("active");
  //     $("#profile").toggleClass("active");
  //   }
  //   if($("#thirdlist").hasClass("active")){
  //     $("#thirdlist").toggleClass("active");
  //     $("#thirdlist a").toggleClass("active");
  //     $("#contact").toggleClass("active");
  //   }
  // });
  // $("#seclist").click(function(){
  //   if($("#seclist").hasClass("active")){
  //     $("#seclist").removeClass("active");
  //     $("#seclist a").removeClass("active");
  //     $("#profile").removeClass("active");
  //     $('main').removeClass('col-lg-9');
  //     $('main').addClass('col-lg-11');
  //   }else{
  //     $("#seclist").toggleClass("active");
  //     $("#seclist a").toggleClass("active");
  //     $("#profile").toggleClass("active");
  //     $('main').removeClass('col-lg-11');
  //     $('main').addClass('col-lg-9');

  //   }
  //   if($("#firstlist").hasClass("active")){
  //     $("#firstlist").toggleClass("active");
  //     $("#firstlist a").toggleClass("active");
  //     $("#home").toggleClass("active");
  //   }
  //   if($("#thirdlist").hasClass("active")){
  //     $("#thirdlist").toggleClass("active");
  //     $("#thirdlist a").toggleClass("active");
  //     $("#contact").toggleClass("active");
  //   }
  // });
  // $("#thirdlist").click(function(){
  //   if($("#thirdlist").hasClass("active")){
  //     $("#thirdlist").removeClass("active");
  //     $("#thirdlist a").removeClass("active");
  //     $("#contact").removeClass("active");
  //     $('main').removeClass('col-lg-9');
  //     $('main').addClass('col-lg-11');
  //   }else{
  //     $("#thirdlist").toggleClass("active");
  //     $("#thirdlist a").toggleClass("active");
  //     $("#contact").toggleClass("active");
  //     $('main').removeClass('col-lg-11');
  //     $('main').addClass('col-lg-9');
  //   }
  //   if($("#firstlist").hasClass("active")){
  //     $("#firstlist").toggleClass("active");
  //     $("#firstlist a").toggleClass("active");
  //     $("#home").toggleClass("active");
  //   }
  //   if($("#seclist").hasClass("active")){
  //     $("#seclist").toggleClass("active");
  //     $("#seclist a").toggleClass("active");
  //     $("#profile").toggleClass("active");
  //   }
  // });

//each nav elemant clicked change main css. 
//Todo: check if this's not already set.
    $("aside ul>li").click(function(){
       console.log('nav elemant clicked');
        $('main').removeClass('col-lg-11');
        $('main').addClass('col-lg-9');
    });
    
    $('.tab-pane>ul>li').click(function(){
         $(this).children().toggleClass('noheight');
   });

  //   $('.extrimeside>ul>li').click(function(){
  //     $(this).toggleClass('active');
  //   });

    $('.remactive').click(function(){
      $("aside a.active,aside li.active").removeClass('active');
      $('#myTabContent .active').removeClass('active');
      $('main').removeClass('col-lg-9');
      $('main').addClass('col-lg-11');
    });
    // $("#category").change(function(){
    //   console.log("D");
    // })  
    $('#category').on('select2:select', function (e) {
      var data = e.params.data;
    
      if(data.text == "رستوران"){
        $("#addmenu").removeClass("d-none");
        console.log(data.text);
      }
  });
  var counter = 5;
  $("#addfood").click(function(){
    var basiccontainer = document.getElementById("anothersfood");
    console.log(counter);
   
    // var first = "<div class='row'><div class='col'><div class='md-form mt-0 rtl'>";
    var first = document.createElement('div');
    first.classList.add("row");
    var sec = document.createElement('div');
    sec.classList.add("col");
    first.appendChild(sec);
    var third = document.createElement('div');
    third.className=("md-form mt-0 rtl");
    sec.appendChild(third);
    var forth = document.createElement('input');
    Object.assign(forth, {
      type: 'text',
      className: 'form-control',
      id: 'foodtitle_' +counter++ ,
     })    
    third.appendChild(forth);
    conters=counter+1;
    thenode ='<div class="row"><div class="col"><div class="md-form mt-0 rtl"><input type="text" class="form-control" id="foodtitle_'+  +conters +'"><label for="foodtitle_'+  +conters +'">عنوان غذا</label></div></div><div class="col"><div class="md-form mt-0 rtl"><input type="text" class="form-control" id="foodprice_'+  +conters +'"><label for="foodprice_'+  +conters +'">قیمت غذا</label></div></div><div class="col"><div class="md-form mt-0 rtl"><input type="text" class="form-control" id="fooddesk_'+  +conters +'"><label for="fooddesk_'+  +conters +'">توضیحات غذا</label></div></div></div>'; 
    let frag = document.createRange().createContextualFragment(thenode);
    console.log(frag);
    basiccontainer.appendChild(frag);
  });              

  });