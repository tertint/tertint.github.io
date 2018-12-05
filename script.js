var targets = [                          //Place target URL here



			'http://www.aif.ru',
			'http://www.aif.ru/culture/person/prokaza_ne_udalas_kto_takoy_haski_i_chem_on_ne_nravitsya_policii',
			'http://www.aif.ru/politics/world/meksika_napravila_notu_ssha_iz-za_incidenta_s_migrantami_na_granice',
			'http://www.aif.ru/politics/russia/fsb_rasskazala_kak_razvivalis_sobytiya_v_rayone_kerchenskogo_proliva',
			'https://www.vesti.ru/',
			'https://www.mk.ru/social/2018/12/05/yandeks-i-gazprommedia-zaklyuchili-mirovoe-soglashenie.html',
			'https://www.mk.ru/politics/2018/12/05/sud-kieva-zavershil-rassmotrenie-dela-yanukovicha.html',




    ];

    var iTarget;

    function nextTarget(){
        window.open( targets[iTarget], 'target' );
        if( ++iTarget >= targets.length ) {
            iTarget = 0;
        }
    }
        iTarget = 0;
        nextTarget();
        setInterval( nextTarget, 60000 );   //time interval here 30000 = 30 Sec
