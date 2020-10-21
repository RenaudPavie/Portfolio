var myFullpage = new fullpage('#fullpage', {
    menu:'#menu',
    anchors: ['Home', 'About', 'Portfolio', 'Skills','Contact'],
    sectionsColor: ['#1e232b', '#1e232b', '#1e232b', '#1e232b'],

    navigation: true,
    navigationPosition: 'right',
    // loopBottom:true,

    scrollingSpeed:500,
});

$('.one-time').slick({
    arrows:false,
    infinite: true,
    autoplay:true,
    pauseOnHover:true,
    focusOnSelect:false,
    speed: 300,
    slidesToShow: 1,
  });