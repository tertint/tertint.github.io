var targets = [                          //Place target URL here

			'https://life.ru/',
			'https://life.ru/t/%D1%8D%D0%BA%D0%BE%D0%BD%D0%BE%D0%BC%D0%B8%D0%BA%D0%B0/1175485/diziel_tianiet_tsieny_naskolko_podorozhaiet_toplivo_v_diekabrie',
			'https://news.mail.ru/',
			'https://news.mail.ru/politics/35593842/',
			'http://moevideo.biz/',
			'http://moevideo.biz/news/duh-puteshestvij',
			'https://ria.ru',
			'https://ria.ru/religion/20181205/1543489443.html?referrer_block=index_main_1',
			'https://m.kp.ru/',
			'https://www.kp.ru/daily/26916/3962680/',
			'https://iz.ru/',
			'https://iz.ru/820170/2018-12-05/minoborony-pokazalo-video-razvertyvaniia-boevogo-lazera-peresvet',
			'https://www.lentainform.com/',
			'https://russian.rt.com/business/news/579145-saxo-bank-shokiruyuschie-predskazaniya?utm_medium=referral&utm_source=lentainform&utm_campaign=russian.rt.com&utm_term=135505&utm_content=1',
			'https://showjet.ru/',
			'https://showjet.ru/serials/3422-snegopad',
			'https://www.babyblog.ru/',
			'https://m.babyblog.ru/community/post/naming/3047283',
			'http://bazr.ru/',
			'http://bazr.ru/shou/novoe/lisa-rulit',
			'https://www.ntv.ru/',
			'https://www.ntv.ru/novosti/2117283/',
			'https://regnum.ru/',
			'https://regnum.ru/news/society/2531788.html',
			'https://www.baby.ru/',
			'https://www.baby.ru/journal/mladency-babochki-20-krasivyh-foto/?utm_source=index.article.title.1',
			'http://m.woman.ru/',
			'http://m.woman.ru/beauty/medley2/article/225235/',
			'http://www.wday.ru/',
			'http://www.wday.ru/seks-otnosheniya/psihologiya/slujebnyie-romanyi-zvezd-znamenitosti-kotoryih-svela-rabota/',
			'https://m.lenta.ru/',
			'https://m.lenta.ru/news/2018/12/05/bolbea/',
			'https://fishki.net',
			'https://fishki.net/2791699-uralyskim-malysham-v-detskom-sadu-predlozhili-zaplatity-za-novogodnij-utrennik.html',
			'https://fishki.net/2605110-vyjdu-na-ulicu-gljanu-na-selo-osobennosti-derevenskih-prazdnikov.html?from=post',
			'https://m.market.yandex.ru/product--smartfon-samsung-galaxy-a8-2018-32gb/1901397008?hid=91491&show-uid=15426269924785467360716004&from=search&local-offers-first=0&onstock=0',
			'https://www.kino-teatr.ru/',
			'https://www.kino-teatr.ru/kino/news/y2018/12-4/16802/',
			'http://www.aif.ru',
			'http://www.aif.ru/culture/person/prokaza_ne_udalas_kto_takoy_haski_i_chem_on_ne_nravitsya_policii',
			'http://www.aif.ru/politics/world/meksika_napravila_notu_ssha_iz-za_incidenta_s_migrantami_na_granice',
			'http://www.aif.ru/politics/russia/fsb_rasskazala_kak_razvivalis_sobytiya_v_rayone_kerchenskogo_proliva',
			'https://www.vesti.ru/',
			'https://www.vesti.ru/doc.html?id=3087914',
			'https://www.mk.ru/social/2018/12/05/yandeks-i-gazprommedia-zaklyuchili-mirovoe-soglashenie.html',
			'https://www.mk.ru/politics/2018/12/05/sud-kieva-zavershil-rassmotrenie-dela-yanukovicha.html',
			'https://tass.ru/ekonomika/5872570',
			'https://tass.ru/mezhdunarodnaya-panorama/5872345',
			'https://m.vz.ru/news/2018/12/5/953803.html',
			'https://m.vz.ru/opinions/2018/12/4/953493.html',
			'https://matchtv.ru/football/matchtvnews_NI935486_Ekskluziv_Match_TV_Pervoje_intervju_Massimo_Karrery_posle_uvolnenija_iz_Spartaka',

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
        setInterval( nextTarget, 6000 );   //time interval here 30000 = 30 Sec
