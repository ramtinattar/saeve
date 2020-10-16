$('#sendData').on('click', function(){
  var addConstraint = false;
  for (var key in tags) {
    if (tags.hasOwnProperty(key)) {
      if (!(tags[key] == "je-ne-sais-pas")) {
        if (addConstraint)
          urlFinal += "%2B";
        addConstraint = true;
        urlFinal += tags[key];
      }
    }
  }
  window.location = urlFinal;
});

function setCookie(name, value, days) {
    var expires;

    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
}

function trackAnalyticsQuizz(currentBlock) {
  ga('send', 'event', "Diag_beauté", "View", "question", currentBlock);
}

function updateBreadcrumb(currentBlock) {
  $('.breadcrumb-dot-container').removeClass('active');
  $($('.breadcrumb-dot-container')[currentBlock - 1]).addClass('active');
}

function result_algo() {
  var real_age = getCookie("customer_age");
  var age = "";
  var text = ["<span>Eau la la... !</span><br><br><b>Une peau inconfortable après la douche, une peau qui tiraille par tous les temps, une peau rugueuse et en perte d’éclat? Bon… ce n’est pas le désert du Sahara mais la déshydratation a frappé !</b><br><br>Un seul mot d’ordre : HY-DRA-TER ! Votre peau a besoin d’une vraie oasis pour se ressourcer. Privilégiez des soins riches en eau pour <b>ressourcer la peau en profondeur</b> ainsi que des textures <b>fondantes</b> et <b>aqueuses</b> qui se transforment au contact de la peau. Un véritable bain d’hydratation tout au long de la journée !",
              "<span>Alerte à la peau de croco !</span><br><br><b>Vous avez cette sensation d’être en plein milieu du désert ? La peau tire, elle est rugueuse, terne, sans éclat, irritée et présente des signes de desquamation (vous savez, ces fameuses petites pelures blanches).</b><br><br>Pas d’inquiétude… Avant tout, le remède c’est d’hydrater intensément sa peau au quotidien. Pour retrouver un <b>confort immédiat et durable</b>, optez pour des soins hautement réhydratants aux textures dites « riches » ou « relipidantes » à base <b>de beurre végétal</b> et <b>d’acide hyaluronique d’origine végétale</b>. À vous la peau douce et souple !",
              "<span>Sébumissime !</span><br><br><b>On vous dit souvent : « Waouh tu es rayonnante ! » mais vous vous êtes toujours demandée si c’était à cause de votre peau qui brille ? Et qui dit peau qui brille, dit aussi porte ouverte aux imperfections en tous genres (points noirs, boutons, rougeurs…) et un teint pas toujours très net…</b><br><br>Pour réduire cet effet « peau grasse » dû à un excès de sébum, nous vous conseillons de privilégier des <b>textures légères dites « oil-free »</b> et de <b>traiter les imperfections avec des correcteurs adaptés</b>. On vous promet que vous n’aurez plus honte de votre peau !",
              "<span>Détox-me please !</span><br><br><b>Une peau agressée par la pollution ? Les UV ? Le froid ? Le tabac ? Un teint souvent triste ? Une peau qui se déshydrate et en manque d’éclat ?</b><br><br>Un vrai cocktail détox pour votre peau s’impose ! Comblez-la d’<b>anti-oxydants</b> pour lutter contre le stress oxydatif, et d’actifs naturels pour <b>détoxifier</b> et <b>booster les défenses immunitaires cutanées</b>. Vous préserverez ainsi <b>le capital jeunesse</b> de votre peau et elle vous remerciera !",
              "<span>Halte à la grise mine !</span><br><br><b>Votre teint est à l’image du temps, gris et terne ? Et pour couronner le tout, des taches brunes ont pointé leur nez après vous être exposée au soleil (sans protection) ou durant votre période de grossesse ou d’acné ? Bref, autant de désordres cutanés qui viennent encore plus assombrir votre visage.</b><br><br>Chassez ce teint brouillon et ces indésirables taches pigmentaires grâce à des soins spécifiques à base de <b>pois titré en monosaccharides</b> sélectionné pour son haut pouvoir éclaircissant, correcteur de taches et révélateur d’éclat, ainsi que <b>des acides de fruits (AHA) très doux</b> qui contribuent à lisser la surface de la peau sans l’agresser et à homogénéiser le teint. Autrement dit, comment passer illico de l’ombre à la lumière !", 
              "<span>Tic tac, tic tac</span><br><br><b>Qu’est-ce qui vous chiffonne ? Les signes de l’âge sur votre peau ? Une peau qui se relâche avec le temps ? Qui manque de fermeté ? En perte d’élasticité ?</b><br><br>A défaut d’avoir trouvé la fontaine de Jouvence, nous pouvons vous aider à lutter efficacement contre les effets du temps grâce à une action hautement hydratante et <b>repulpante</b>, une protection <b>anti-oxydante</b> et surtout des actifs boostant la production naturelle de <b>collagène</b>. Il n’est jamais trop tard pour redonner de la fermeté à votre visage et traiter les rides. Réveillez la jeunesse de votre peau !"
  			  ];
  
  if (real_age > 30)
    age = "plus";
  else
    age = "moins";
  
//  var age = tags["age"];
  var peau = tags["peau"];
  var voeu = tags["voeu"];
  var finir = tags["finir"];
  
  console.log(age, peau, voeu, finir);
  
  var soin1 = "";
  var soin2 = "";
  var soin3 = "";
  var comp1 = "";
  var comp2 = "";
  var comp3 = "";
  var i = 0;
  
  switch (peau) {
    case "inconfort" :
      soin1 = "serum-botanique-hydratant-24h-apaisant-30-ml";
      break;
    case "bouton" :
      soin1 = "serum-botanique-purifiant-anti-imperfections-30-ml";
      break;
    case "retour" :
      soin1 = "serum-botanique-anti-age-fermete-30-ml";
      break;
    case "pollution" :
      soin1 = "serum-botanique-bouclier-detox-anti-oxydant-30-ml";
      break;
    case "taches" :
      soin1 = "serum-botanique-booster-eclat-anti-taches-30-ml";
      break;
    default :
      break ;
  }


  switch (voeu) {
    case "deshydratation" :
      var i = 0;
      soin2 = "creme-desalterante-apaisante-40-ml";
      if (age == "moins")
        soin3 = "creme-nuit-detox-regenerante-50-ml";
      else
        soin3 = "creme-nuit-redensifiante-50-ml";
      comp1 = "essence-f90-activatrice-declat-150-ml";
      comp2 = "masque-infusion-re-hydratant-apaisant-75-ml";
      break;
    case "secheresse" :
	  var i = 1;
      soin2 = "creme-riche-desalterante-50-ml";
      if (age == "moins")
        soin3 = "creme-nuit-detox-regenerante-50-ml";
      else
        soin3 = "creme-nuit-redensifiante-50-ml";
      comp1 = "essence-f90-activatrice-declat-150-ml";
      comp2 = "masque-infusion-re-hydratant-apaisant-75-ml";
      break;
    case "brillance" :
	  var i = 2;
      soin2 = "fluide-botanique-purifiant-40-ml";
      soin3 = "serum-botanique-nuit-micro-peel-peau-neuve-30-ml";
      comp1 = "essence-f90-activatrice-declat-150-ml";
      comp2 = "masque-2-en-1-gommant-purifiant-75-ml";
      break;
    case "agressions" :
	  var i = 3;
      soin2 = "creme-detox-multi-defense-spf30-40ml";
      if (age == "moins")
        soin3 = "creme-nuit-detox-regenerante-50-ml";
      else
        soin3 = "creme-nuit-redensifiante-50-ml";
      comp1 = "essence-f90-activatrice-declat-150-ml";
      comp2 = "masque-detox-intense-75-ml";
      break;
    case "taches" :
	  var i = 4;
      soin2 = "creme-lissante-infusion-d-eclat-40-ml";
      soin3 = "serum-botanique-nuit-micro-peel-peau-neuve-30-ml";
      comp1 = "essence-f90-activatrice-declat-150-ml";
      comp2 = "masque-peeling-eclat-minute-75-ml";
      break;
    case "rides" :
	  var i = 5;
      soin2 = "creme-lift-multi-correctrice-40-ml";
      if (age == "moins")
        soin3 = "creme-nuit-detox-regenerante-50-ml";
      else
        soin3 = "creme-nuit-redensifiante-50-ml";
      comp1 = "essence-f90-activatrice-declat-150-ml";
      comp2 = "masque-peeling-eclat-minute-75-ml"
      break;
    default :
      break ;
  }
    
   switch (finir) {
    case "cernes" :
      comp3 = "creme-yeux-lissante-15-ml";
      break;
    case "rien" :
      comp3 = "creme-yeux-lissante-15-ml";
      break;
    case "rides" :
      comp3 = "contour-yeux-et-levres-liftant-15-ml";
      break;
    default :
      break ;
  }
  
  delete_cookie('result_text');
  setCookie("result_text", text[i]);
  var randomN = Math.floor((Math.random() * 10000) + 1);
  if (i == 3) {
    window.location.replace("/pages/result?soin1=" + soin1 + "&soin2=" + soin2 + "&soin3=" + soin3 + "&comp1=" + comp1 + "&comp2=" + comp2 + "&comp3=" + comp3 + "&cache=false&text=alt&q=" + randomN );
  } else {
    window.location.replace("/pages/result?soin1=" + soin1 + "&soin2=" + soin2 + "&soin3=" + soin3 + "&comp1=" + comp1 + "&comp2=" + comp2 + "&comp3=" + comp3 + "&cache=false&q=" + randomN );
	console.log(soin1, soin2, soin3, comp1, comp2, comp3);
  }
  
}


$(document).ready(function() {
  var oldBlock = 0;

  $('.backButton').on('click', function(){
    if (currentBlock > 1)
      currentBlock--;
    if (currentBlock == 1)
      // TODO : maybe disable before fadeout !
      $('.backButton').fadeOut();
    $('.owl-prev').click();
    updateBreadcrumb(currentBlock)
  });


  $('.enterButton').click(function() {
    switchBlock();
  });

  function switchBlock() {
    oldBlock = currentBlock;
    switch (blockTypes[currentBlock][0]) {
      case "block-a":
        currentBlock = window["validateBlockA" + blockTypes[currentBlock][1]](currentBlock);
        break;
      case "block-b":
        currentBlock = window["validateBlockB" + blockTypes[currentBlock][1]](currentBlock);
        break;
      case "block-c":
        currentBlock = window["validateBlockC" + blockTypes[currentBlock][1]](currentBlock);
        break;
      case "block-explain-with-cta":
        currentBlock = validateBlockExplainWithCta(currentBlock);
        break;
      default:
        break;
    }
    if (oldBlock !== currentBlock)
    {
      updateBreadcrumb(currentBlock);
      trackAnalyticsQuizz(currentBlock);
    }
    if (maxquizz + 1 == currentBlock)
      result_algo();
    if (currentBlock > 1)
      $('.backButton').fadeIn();
  }
});
