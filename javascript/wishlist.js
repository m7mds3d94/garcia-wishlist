





// start loading page




$(window).on("load",function(){
    $(".load").hide()
    $(".contentPage").show()
    
  })
  
  // end loading page






// start navbar all width device



$(".collapseBtn").click(function() {
    $(".navWidthSmall").animate({"right":"0"},500)
 })
 
 $(".closeNavMobile").click(function() {
     $(".navWidthSmall").animate({"right":"-600"},500)
 })
 
 
 
 
 $(".toggle-icon").click(function() {
 
     if($(this).attr("toggleIcon") === "0") {
     $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideDown()
     $(this).children().attr("class","las la-minus")
         $(this).attr("toggleIcon","1")
     } else {
         $(".sub-menu:eq("+ $(".toggle-icon").index(this) +")").slideUp()
         $(this).children().attr("class","las la-plus")
             $(this).attr("toggleIcon","0")
     }
 
 })
 
 
 
 
 
 $(".toggle-inside-icon").click(function() {
 
     if($(this).attr("toggleInsideIcon") === "0") {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideDown()
        $(this).children().attr("class","las la-minus")
        $(this).attr("toggleInsideIcon","1")
     } else {
        $(".sub-menu-shopGrid:eq("+ $(".toggle-inside-icon").index(this) +")").slideUp()
        $(this).children().attr("class","las la-plus")
        $(this).attr("toggleInsideIcon","0")
     }
 
    
 })
 
 
 
 $(".item-nav-home").hover(function() {
     $(".iTemsDropdownHome").fadeToggle(500)
 })
 
 
 
 $(".item-nav-pages").hover(function() {
     $(".iTemsDropdownPages").fadeToggle()
 })
 
 $(".item-nav-blog").hover(function() {
     $(".iTemsDropdownBlog").fadeToggle()
 })
 
 
 $(".searchAreaBtn").click(function() {
     $(this).siblings().focus();
 })
 // end navbar all width device
 





// $(".dec-quan1").click(function() {
    
//    $(".inpu1").text(x--)

//    if ($(".inpu1").text() === "0") {
//         $(".inpu1").text(x = 0)
//    }
// })


// start increment and decrement product
var x = 1;



$(".plus").click(function () {

    if ($(this).siblings().eq(1).text() === "1") {
        $(this).siblings().eq(1).text(x = 1) 
    }
        $(this).siblings().eq(1).text(++x) 
})


$(".minus").click(function() {


    if ($(this).siblings().eq(0).text() === "0") {
        $(this).siblings().eq(0).text(x = 0) 
    } else {
        $(this).siblings().eq(0).text(--x)
    }
})



// // start calculator dropdown item with currncy

// $(".nice-select").click(function() {
//     $(".listcountry").slideToggle()
// })

// var item = document.querySelectorAll(".list li");
// var itemCurr = document.querySelectorAll(".list-curr li");


// for (var i = 0; i < item.length; i++) {
//     $(".list li").click(function(i) {
//         $(".current").text($(this).text())
//         $(".current").css("font-weight", "bold")
//         $(".list li").removeClass("bold")
//         $(this).addClass("bold");

//        $(".validate").attr("value",$(this).text())
//     $(".listcountry").slideUp()   
//     })
// }



// // start currncy

//     $(".nice-select-curr").click(function() {
//         $(".listcurrency").slideToggle()
//     })


// // end currency

// for (var ind = 0; ind < itemCurr.length; ind++) {
//     $(".list-curr li").click(function(ind) {
//         $(".current-crr").text($(this).text())
//         $(".list-curr li").removeClass("bold")
//         $(this).addClass("bold")
//         $(".current-crr").css("font-weight","bold")
//         $(".validateCrr").attr("value",$(this).text() )
//         $(".listcurrency").slideUp()
//     })
// }

// end calculator dropdown item with currncy





// start remove product....

    // $(".remove-product").click(function() {

    //     $(this).parent().parent().hide(1000)

    // })


// end remove product.......