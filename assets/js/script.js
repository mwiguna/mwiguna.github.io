/*
  Javascript Document
  Author: M. Wiguna Saputra
  2016
*/

  $(document).ready(function(){
      $(window).scroll(function(){
      var y = $(window).scrollTop();
        if(y >= 1900){
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".orcon").animate({'opacity': '1', 'marginTop': '0'}, 1500);
        }
        else if(y >= 1300){
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".prmain").animate({'opacity': '1', 'marginTop': '6%'}, 1000);
        } else if(y >= 650){
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".skc").animate({'opacity': '1', 'marginTop': '0px'}, 2000);
        } else if(y >= 150){
          $(".sctp").animate({'opacity': '1'}, 10);
          $(".line").animate({'margin-left': '20%', 'width': '60%'}, 500);
          $(".prmain.cnt").animate({'opacity': '1', 'marginTop': '6%'}, 1000);
        } else {
          $(".sctp").animate({'opacity': '0'}, 10);
        }
      });



      //Programming Skills
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


      //action
      $("#btn-portfolio").click(function(){
        $('html, body').animate({
          scrollTop: $("#portfolio").offset().top
        }, 1000);
      });
      $("#btn-organization").click(function(){
        $('html, body').animate({
          scrollTop: $("#organization").offset().top
        }, 1500);
      });

      $(".sctp").click(function(){
        $('html, body').animate({ scrollTop: 0}, 800);
      });
  });