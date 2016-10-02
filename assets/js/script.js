/*
  Javascript Document
  Author: M. Wiguna Saputra
  Copyright 2016
*/

  $(document).ready(function(){
      $(window).scroll(function(){
      var y = $(window).scrollTop();
        if(y >= 1900){
          $(".linebl").css({'opacity': '0'});
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".orcon").animate({'opacity': '1', 'marginTop': '0'}, 1500);
        } else if(y >= 1550){
          $(".linebl").css({'opacity': '1'});
          $(".grb2").css({"borderColor": "#38D"});
          $(".blb3").css({"backgroundColor": "#37D"});
        } else if(y >= 1350){
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".prmain").animate({'opacity': '1', 'marginTop': '6%'}, 1000);
        } else if(y >= 900){
          $(".linebl").css({'opacity': '1'});
          $(".grb2").css({"borderColor": "#bbb"});
          $(".blb3").css({"backgroundColor": "#999"});
          $(".grb1").css({"borderColor": "#38D"});
          $(".blb2").css({"backgroundColor": "#37D"}); 
        } else if(y >= 750){
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".skc").animate({'opacity': '1', 'marginTop': '0px'}, 2000);
        } else if(y >= 360){
          $(".grb1").css({"borderColor": "#bbb"});
          $(".blb2").css({"backgroundColor": "#999"});
          $(".linebl").css({'opacity': '1'});
          $("#vmenu").css({"opacity": "1", "position": "fixed", "right": "2%"});
          $(".ttlbl").css({"position": "fixed", "top": "0", "boxShadow": "0 0 3px 1px #999"});
          $(".mainbl, #view").css({"marginTop": "4%"});
        } else if(y >= 150){
          $(".linebl").css({'opacity': '0'});
          $(".ttlbl").css({"position": "relative", "boxShadow": "none"});
          $("#vmenu").css({"opacity": "0"});
          $(".mainbl, #view").css({"marginTop": "0"});
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".line").animate({'margin-left': '20%', 'width': '60%'}, 500);
        } else {
          $(".linebl").css({'opacity': '0'});
          $(".sctp").animate({'opacity': '0'}, 10);
          $(".ttlbl").css({"position": "relative", "boxShadow": "none"});
          $("#vmenu").css({"opacity": "0"});
        }
      });


      //---------- Programming Skills ----------//


      var skills  = {
                      'html': '79%', 'css': '89%', 'js': '71%','php': '77%',
                      'node': '62%', 'mysql': '73%', 'ruby': '45%',
                      'python': '30%', 'java': '4%', 'cpp': '55%'
                    };
      var csub    = ['html', 'css', 'js', 'php', 'node', 'mysql', 'ruby', 'python', 'java', 'cpp'];
      var content = "";
      for(var ci = 0; ci <= 9; ci++){
        var content = content + '<div class="contentsk"><div class="fullfloat"><img src="assets/img/'+csub[ci]+'logo.png" class="fullfloat"></div><div class="bar '+csub[ci]+'"><span>&nbsp;</span><div class="progress '+csub[ci]+'"></div></div></div>';
        $(".skc").html(content);
      }

      for(var cc = 0; cc <= 9; cc++){
        $(".bar."+csub[cc]+" span").css('width', skills[csub[cc]]);
        $(".progress."+csub[cc]).text(skills[csub[cc]]);
      }


      //--------------- SPA -----------------//


      var cbtn  = false;
      $("#btn-portfolio").click(function(){
        $("#vmenu, .pageno").css({"display": "none"});
        $(".gmaps").css({"opacity": "0", "position": "absolute", "left": "-100%"});
        if(cbtn){
          $("main").css({"display": "block"});
          $("#aview").animate({"opacity": "0"}, 100, function(){
            $("main").animate({"opacity": "1"}, 500, function(){
              $('html, body').animate({
                scrollTop: $("#portfolio").offset().top
              }, 1000);
            });
          });
          cbtn = false;
        } else {
          $('html, body').animate({
            scrollTop: $("#portfolio").offset().top
          }, 1000);
        }
      });
      $("#btn-organization").click(function(){
        $(".gmaps").css({"opacity": "0", "position": "absolute", "left": "-100%"});
        $("#vmenu, .pageno").css({"display": "none"});
        if(cbtn){
          $("main").css({"display": "block"});
          $("#aview").animate({"opacity": "0"}, 100, function(){
            $("main").animate({"opacity": "1"}, 500, function(){
              $('html, body').animate({
                scrollTop: $("#organization").offset().top
              }, 1500);
            });
          });
          cbtn = false;
        } else {
          $('html, body').animate({
            scrollTop: $("#organization").offset().top
          }, 1500);
        }
      });
      $(".btn-contact").click(function(){
        $("#vmenu, .pageno").css({"display": "none"});
        $(".gmaps").css({"opacity": "1", "position": "relative", "left": "0"});
        if(!cbtn){
          $("main").animate({"opacity": "0"}, 100, function(){
              $("main").css("display", "none");
              $("#aview").animate({"opacity": "1"}, 500, function(){
                $('html, body').animate({
                  scrollTop: $("#contact").offset().top + 5
                }, 500);
              });
          });
          cbtn = true;
        } else {
          $("#aview").animate({"opacity": "0"}, 1,function(){
            $("#aview").animate({"opacity": "1"}, 500, function(){
              $('html, body').animate({
                scrollTop: $("#contact").offset().top + 5
              }, 500);
            });
          });
        }
      });
      $(".btn-socmed").click(function(){
        $("#vmenu, .pageno").css({"display": "none"});
        $(".gmaps").css({"opacity": "1", "position": "relative", "left": "0"});
        if(!cbtn){
          $("main").animate({"opacity": "0"}, 100, function(){
              $("main").css("display", "none");
              $("#aview").animate({"opacity": "1"}, 500, function(){
                $('html, body').animate({
                  scrollTop: $(".scm").offset().top + 5
                }, 500);
              });
          });
          cbtn = true;
        } else {
          $("#aview").animate({"opacity": "0"}, 1,function(){
            $("#aview").animate({"opacity": "1"}, 500, function(){
              $('html, body').animate({
                scrollTop: $(".scm").offset().top + 5
              }, 500);
            });
          });
        }
      });


      //------------------ Blog -----------------//


      function blogBtn(page){
        $(document).on("click", ".btn-blog"+page, function(){
          $(".gmaps").css({"opacity": "0", "position": "absolute", "left": "-100%"});
          $("#vmenu").css({"display": "none"});
          $(".linebl, .pageno").css({"display": "block"});
          if(!cbtn){
            $("main").animate({"opacity": "0"}, 100, function(){
                $("main").css("display", "none");
     
                $.getJSON('assets/js/data'+page+'.json', function(data) {
                  var ctbr = "";
                  for(var lcl = 0; lcl<data.length; lcl++){
                    data[lcl].article = data[lcl].article.substr(0, 250) + "...."; 
                    var ctbr = ctbr + '<div class="lnbl ttlv'+lcl+' '+page+'tview'+lcl+'">'+data[lcl].title+'</div><img src="'+data[lcl].photo+'" class="ibl"><div class="ctbb">'+data[lcl].article+'</div>';
                    $(".conbl").html(ctbr);
                  }
                });

                $("#aview").animate({"opacity": "1"}, 500, function(){
                  $('html, body').animate({
                    scrollTop: $("#blog").offset().top
                  }, 600);
                });
            });
            cbtn = true;
          } else {
            $("#aview").animate({"opacity": "0"}, 100, function(){
                
              $.getJSON('assets/js/data'+page+'.json', function(data) {
                  var ctbr = "";
                  for(var lcl = 0; lcl<data.length; lcl++){
                    data[lcl].article = data[lcl].article.substr(0, 250) + "...."; 
                    var ctbr = ctbr + '<div class="lnbl ttlv'+lcl+' '+page+'tview'+lcl+'">'+data[lcl].title+'</div><img src="'+data[lcl].photo+'" class="ibl"><div class="ctbb">'+data[lcl].article+'</div>';
                    $(".conbl").html(ctbr);
                  }
              });

              $("#aview").animate({"opacity": "1"}, 500, function(){
                $('html, body').animate({
                  scrollTop: $("#blog").offset().top
                }, 600);
              });
            });        
          }
        });
      }


      //------------- Open Blog -------------//


      function artctt(trr, ffr){
        $(document).on("click", "."+trr+"tview"+ffr, function(){
          $("#aview").animate({"opacity": "0"}, 100, function(){
              $('html, body').animate({
                scrollTop: $("#blog").offset().top
              }, 1000);         
              
              $.getJSON('assets/js/data'+trr+'.json', function(data) {
                var ctbr = '<div class="lnbl">'+data[ffr].title+'</div><img src="'+data[ffr].photo+'" class="ibl"><div class="ctbb">'+data[ffr].article+'</div>';
                $(".conbl").html(ctbr);
                $("#vmenu").css({"display": "block"}); 
              });

              $(".linebl, .pageno").css({"display": "none"});
              $("#aview, #vmenu").animate({"opacity": "1"}, 300);
          });
        });
      }

      for(var tartar = 1; tartar<=3; tartar++){
        for(var ttrr = 0; ttrr<=2; ttrr++){
          artctt(tartar, ttrr);
        }
        blogBtn(tartar);
      }   


      //--------------- Routing ---------------//


      var app = angular.module('app', ['ngRoute']);

      app.config(function($routeProvider){
        $routeProvider
        .when('/kontak', {
          templateUrl: 'contact.html'
        })
        .when('/blog', {
          templateUrl: 'blog.html'
        })
        .when('/blog/:param', {})
        .otherwise({redirectTo: '/'})
      });

      

      //--------------- Action --------------//


      $(".tx-main, .tx-sec, .bio-tx").animate({'opacity': '1'}, 1000);
      $(".bio-ph").delay(500).animate({'opacity': '1'}, 500);
      
      $(".cpno1, #vmenu, .btn-blog1").click(function(){
        $(".cpno2, .cpno3").removeClass("act");
        $(".cpno1").addClass("act");
      });
      $(".cpno2").click(function(){
        $(".cpno1, .cpno3").removeClass("act");
        $(this).addClass("act");
      });
      $(".cpno3").click(function(){
        $(".cpno1, .cpno2").removeClass("act");
        $(this).addClass("act");
      });

      function lbck(blba, blbb){
        $(document).on("click", ".blb"+blba, function(){
          $('html, body').animate({
            scrollTop: $(".ttlv"+blbb).offset().top - 50
          }, 300);
        });
      }
      for(var ccbo = 0; ccbo<=2; ccbo++){
        lbck(ccbo+1, ccbo);
      }

      $(".sctp").click(function(){
        $('html, body').animate({ scrollTop: 0}, 800);
      });      

  });


  //-------------- API -------------//


  var map;
  function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: -1.61465, lng: 103.58705},
      zoom: 12,
    });
        
    var marker = new google.maps.Marker({
      position: {lat: -1.61405, lng: 103.58705},
      icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
      map: map,
      title: "My Location"
    });
  }
  