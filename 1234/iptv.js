const channels = [
  {
    name: 'ANIMAL PLANET',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_animal_planet_sd.mpd',
        keyId: '436b69f987924fcbbc06d40a69c2799a',
        key: 'c63d5b0d7e52335b61aeba4f6537d54d',
		type: 'mpd',
		logo: 'https://logodownload.org/wp-content/uploads/2020/06/animal-planet-logo-0-1536x1536.png'
    },
    {
name: 'SINEMANILA',
        url: 'https://stream.gia.tv/giatv/giatv-ragetv/ragetv/chunks.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/zcFUYC5.png'
         },
    {	
name: 'TV 5 HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd',
        keyId: '2615129ef2c846a9bbd43a641c7303ef',
        key: '07c7f996b1734ea288641a68e1cfdc4d',
		type: 'mpd',
		logo: 'https://cms.cignal.tv/Upload/Thumbnails/TV5%20HD%20logo%20(1).png'
    },	 	
    {
name: 'KAPAMILYA CH',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-kapcha-dash-abscbnono/index.mpd',
        keyId: 'bd17afb5dc9648a39be79ee3634dd4b8',
        key: '3ecf305d54a7729299b93a3d69c02ea5',
		type: 'mpd',
		logo: 'https://i.ibb.co/nzPQS7S/download-54.png'
    },
    {
name: 'GMA PinoyTV',
        url: 'https://cdn-uw2-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-abscbn-gma-x7-dash-abscbnono/7c693236-e0c1-40a3-8bd0-bb25e43f5bfc/index.mpd',
        keyId: 'c95ed4c44b0b4f7fa1c6ebbbbaab21a1',
        key: '47635b8e885e19f2ccbdff078c207058',
		type: 'mpd',
		logo: 'https://i.imgur.com/yFfNVSt.png'
    },
    {
name: 'TRUE FM TV',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd',
        keyId: '0559c95496d44fadb94105b9176c3579',
        key: '40d8bb2a46ffd03540e0c6210ece57ce',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.mnFsqTyoPfS65QqSTLKHLAHaHa?rs=1&pid=ImgDetMain'
    },	
    {
        name: 'RPTV',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd',
        keyId: '1917f4caf2364e6d9b1507326a85ead6',
        key: 'a1340a251a5aa63a9b0ea5d9d7f67595',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.hWUhA4FmrinqMTykADb9NwHaEX?rs=1&pid=ImgDetMain'
    },	
    {
    name: 'SARI SARI',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd',
        keyId: '0a7ab3612f434335aa6e895016d8cd2d',
        key: 'b21654621230ae21714a5cab52daeb9d',
		type: 'mpd',
		logo: 'https://vignette1.wikia.nocookie.net/logopedia/images/3/3e/Sari-Sari_alternate_Logo.PNG/revision/latest?cb=20160619031101'
    },	
    {
        name: 'BNC',
        url: 'https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd',
        keyId: '227ffaf09bec4a889e0e0988704d52a2',
        key: 'b2d0dce5c486891997c1c92ddaca2cd2',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.O2OG_59US0j-zqWyZwqhXAHaCH?rs=1&pid=ImgDetMain'
    },
    {
	name: 'CINEMAONE GLOBAL',
        url: 'https://d9rpesrrg1bdi.cloudfront.net/out/v1/93b9db7b231d45f28f64f29b86dc6c65/index.mpd',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
		type: 'mpd',
		logo: 'https://i.imgur.com/qGyJLi9.png'
    },
{
    name: 'CINEMO GLOBAL',
        url: 'https://d1bail49udbz1k.cloudfront.net/out/v1/78e282e04f0944f3ad0aa1db7a1be645/index_3.m3u8',
        type: 'hls',
		logo: 'https://yt3.ggpht.com/a-/AAuE7mAK5lTlRJwr2rZLeitoTnOYkjForU2cvszswQ=s900-mo-c-c0xffffffff-rj-k-no'
         },
         {	
name: 'A2Z',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd',
        keyId: 'f703e4c8ec9041eeb5028ab4248fa094',
        key: 'c22f2162e176eee6273a5d0b68d19530',
		type: 'mpd',
		logo: 'https://cdn1.clickthecity.com/wp-content/uploads/2020/10/21172907/a2z-logo.png'
    },
{
name: 'JUNGO PINOY ',
        url: 'https://jungotvstream.chanall.tv/jungotv/jungopinoytv/stream.m3u8',
        type: 'hls',
		logo: 'https://i.imgur.com/W3gHsJ9.png'
         },	 
         {
	name: 'PBO',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd',
        keyId: 'dcbdaaa6662d4188bdf97f9f0ca5e830',
        key: '31e752b441bd2972f2b98a4b1bc1c7a1',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.4l7hnQUFPwtlNlglsgYdEgHaFI?rs=1&pid=ImgDetMain'
    },	
    {
	   name: 'VIVA',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd',
        keyId: '07aa813bf2c147748046edd930f7736e',
        key: '3bd6688b8b44e96201e753224adfc8fb',
     	type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.0RBFAFi5M4EojRsGMyb8ogHaEK?rs=1&pid=ImgDetMain'
    },	
    {
    name: 'TELERADYO SERBISYO',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-teleradyo-dash-abscbnono/index.mpd',
        keyId: '47c093e0c9fd4f80839a0337da3dd876',
        key: '50547394045b3d047dc7d92f57b5fb33',
		type: 'mpd',
		logo: 'https://i.imgur.com/eK7xBQI.jpeg'
		 },
		{
        name: 'PBA RUSH',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_pbarush_hd1.mpd',
        keyId: '76dc29dd87a244aeab9e8b7c5da1e5f3',
        key: '95b2f2ffd4e14073620506213b62ac82',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.dDzYufwVTWroitJQy9pfXQAAAA?rs=1&pid=ImgDetMain'
    },
    {
    name: 'BUKO',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd',
        keyId: 'd273c085f2ab4a248e7bfc375229007d',
        key: '7932354c3a84f7fc1b80efa6bcea0615',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.ph_7Uv-meouzQBVcfuuQQwHaIL?rs=1&pid=ImgDetMain'
    },
    {
    name: 'ANC NEWS CH',
        url: 'https://cdn-ue1-prod.tsv2.amagi.tv/linear/amg01006-abs-cbn-anc-global-dash-abscbnono/index.mpd',
        keyId: '4bbdc78024a54662854b412d01fafa16',
        key: '6039ec9b213aca913821677a28bd78ae',
		type: 'mpd',
		logo: 'https://vignette.wikia.nocookie.net/russel/images/5/52/ANC_HD_Logo_2016.png/revision/latest?cb=20180404015018'
    },
    {	 
    name: 'ABC AU',
        url: 'https://qp-pldt-live-grp-10-prod.akamaized.net/out/u/dr_abc_aus.mpd',
        keyId: '389497f9f8584a57b234e27e430e04b7',
        key: '3b85594c7f88604adf004e45c03511c0',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/R.867cf838cf27b5773da638acc80d8053?rik=CXB001zinv%2f2fg&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20100529153635%2flogopedia%2fimages%2ff%2ff9%2fABC_Australia_logo.png&ehk=EGDi5oCSKBzFrS1EADDUzHK%2fC%2fR0R4xMkC4M66J4i6U%3d&risl=&pid=ImgRaw&r=0'
    },
    {
    name: 'Al JAZEERA',
        url: 'https://live-hls-web-aje.getaj.net/AJE/index.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.EeF7fuBh0ASAdfYFigegbgHaE8?rs=1&pid=ImgDetMain'
    },
    {
name: 'STAR TV PH',
        url: 'https://glb.bozztv.com/glb/ssh101/11091982/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
		type: 'mpd',
		logo: 'https://i.imgur.com/AChmWTT.jpeg'
    },	
    {
name: 'ATBS GLOBAL',
        url: 'https://glb.bozztv.com/glb/ssh101/dwiz143hkl00023/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
		type: 'mpd',
		logo: 'https://i.imgur.com/SVSz8Ye.png'
    },	
    {
name: 'MOVIE BOX PH',
        url: 'https://glb.bozztv.com/glb/ssh101/primetvph/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
		type: 'mpd',
		logo: 'https://i.imgur.com/KQ9r6SS.png'
    },
    {
        name: 'ANIMAX',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_animax_sd.mpd',
        keyId: '92032b0e41a543fb9830751273b8debd',
        key: '03f8b65e2af785b10d6634735dbe6c11',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.39-tpYJk2UwoQjQc7Af_oAHaCi?rs=1&pid=ImgDetMain'
    },	
    {
	name: 'ARIRANG',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/arirang_sd.mpd',
        keyId: '13815d0fa026441ea7662b0c9de00bcf',
        key: '2d99a55743677c3879a068dd9c92f824',
		type: 'mpd',
		logo: 'https://w7.pngwing.com/pngs/609/810/png-transparent-arirang-tv-hd-logo-thumbnail.png'
    },
    {
        name: 'ASIANCRUSH',
        url: 'https://amg01201-cinedigmenterta-asiancrush-cineverse-x701o.amagi.tv/playlist/amg01201-cinedigmenterta-asiancrush-cineverse/cb543d1b796c668c84cb3f62cef049a2f9421fde1d6988693eb5518975d1073edce2a59caa08ff16388f1ede7f0a66413a3e951fda77118fd87eb141453c5728cfffe729a2c05616b7db083429b56a062a866a68ac39437ed0e21f48a238b6720a5aa82a66443d80b846ac7756db80148e782a8eb3dc68306d390ec90c1fbcbf5ba0f8ff5e43ca78a3b51a4b902910e39f429d8118a681d50ec85e8f25f4118095a1d88017d38f9437f852b7061632571541527ee9ab6d9e98f15931957d21560e5ce8a6808c2156e466702c337b56dd1f9b32dd8024fb115f7bc49f3def019f6eb006a9a16da9b9a29d3529c64c6f381345f0b5dae6d63027af69bb8fe8d37a7098bc721223983c89737979f897ba896357ae21976ea5cdecad7a7b0867a5bdf8e8cea3844bd308cbc9fd943c789c026e16ab52b89361d728922de69e53696b444aa99542d7c6f76a70331fc8d005942412b78ddfd89f166d9e295b7bf870d55e3269ce1f6568aa78aacd723fdf6642ae1d09d67479c04ef5b329b580dee60d34fc9ee44aed60e2b04583a756e73d720c55e0a7620e1c153de3ef600c22708c10b78484b2217b75869dfaf7ce5737102a57035cf985c944dbdf90674d6c823940477b1f109a01ac19fc085b0f23cc5e9eec3e7d8b022e3af5e558795f7f9ddcbe918db59b12e767b2a90e151a88cffbf5d1232a4e5e745aa3/162/1280x720_3329040/index.m3u8',
        type: 'hls',
		logo: 'https://i.ytimg.com/vi/ZfVzJWLOc40/maxresdefault.jpg'
    },	
    {
    name: 'AFN',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/asianfoodnetwork_sd.mpd',
        keyId: '1619db30b9ed42019abb760a0a3b5e7f',
        key: '5921e47fb290ae263291b851c0b4b6e4',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.jpkxVytnIviOUvaH59TqjgHaE3?rs=1&pid=ImgDetMain'
    },
    {
        name: 'AXN',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_axn_sd.mpd',
        keyId: 'fd5d928f5d974ca4983f6e9295dfe410',
        key: '3aaa001ddc142fedbb9d5557be43792f',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.HwdZNXfot1yU3nSXX9EwigHaDs?rs=1&pid=ImgDetMain'
         },	 
         {
    name: 'BBC EARTH',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_bbcearth_hd1.mpd',
        keyId: '34ce95b60c424e169619816c5181aded',
        key: '0e2a2117d705613542618f58bf26fc8e',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.wKX3V5khbu3Ssplnq3cE0AHaEF?rs=1&pid=ImgDetMain'
    },
    {
    name: 'BBCWORLD News',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/bbcworld_news_sd.mpd',
        keyId: 'f59650be475e4c34a844d4e2062f71f3',
        key: '119639e849ddee96c4cec2f2b6b09b40',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.Dt6zbSEb8BztEMb1C93QHQHaHk?rs=1&pid=ImgDetMain'
    },
    {
        name: 'BILLIARD TV',
        url: 'https://1b29dd71cd5e4191a3eb26afff631ed3.mediatailor.us-west-2.amazonaws.com/v1/master/9d062541f2ff39b5c0f48b743c6411d25f62fc25/SportsTribal-BilliardTV/BILLIARDTV_SCTE.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.JKBoiu3cX_PVMSwZLYFxCAHaHa?rs=1&pid=ImgDetMain'
    },	
    {
	name: 'ROCK ACTION',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_rockextreme.mpd',
        keyId: '0f852fb8412b11edb8780242ac120002',
        key: '4cbc004d8c444f9f996db42059ce8178',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.0c6d3hoH5evqsJVNnbhVNwHaC3?rs=1&pid=ImgDetMain'
    },
    {
    name: 'BLOOMBERG',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd',
        keyId: 'ef7d9dcfb99b406cb79fb9f675cba426',
        key: 'b24094f6ca136af25600e44df5987af4',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.ayx_C9FL75IKjIl408wLagHaFj?rs=1&pid=ImgDetMain'
    },
    {
	name: 'CCTV4',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_cctv4.mpd',
        keyId: '0f8541ec412b11edb8780242ac120002',
        key: '6cf16c272b7357c48cd47061799a4963',
		type: 'mpd',
		logo: 'https://w7.pngwing.com/pngs/976/161/png-transparent-china-central-television-cctv-4-cgtn-russian-cctv-channels-television-channel-others-miscellaneous-television-text.png'
    },
    {
    name: 'CNA',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_channelnewsasia.mpd',
        keyId: 'b259df9987364dd3b778aa5d42cb9acd',
        key: '753e3dba96ab467e468269e7e33fb813',
		type: 'mpd',
		logo: 'https://www.sopasia.com/wp-content/uploads/2014/04/logo_Channel-NewsAsia-logo.jpg'
    },
    {
    name: 'CINEMAX',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_cinemax.mpd',
        keyId: 'b207c44332844523a3a3b0469e5652d7',
        key: 'fe71aea346db08f8c6fbf0592209f955',
		type: 'mpd',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Cinemax_%28Yellow%29.svg/1200px-Cinemax_%28Yellow%29.svg.png'
        },
        {
        name: 'CLTV 36',
        url: 'https://live.cltv36.tv:5443/LiveApp/streams/cltvlive.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.TeH-Vo1LPvOkkVvm2KUzHgAAAA?rs=1&pid=ImgDetMain'
        },	
        {
    name: 'TMC',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd',
        keyId: '96701d297d1241e492d41c397631d857',
        key: 'ca2931211c1a261f082a3a2c4fd9f91b',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.mskveWFrbAwpq6athkC91gAAAA?rs=1&pid=ImgDetMain'
    },
    {
    name: 'DEFED CH',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/depedch_sd.mpd',
        keyId: '0f853706412b11edb8780242ac120002',
        key: '2157d6529d80a760f60a8b5350dbc4df',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.MPPdJ1ObiLG4Q6MFEDQ4pAHaEH?rs=1&pid=ImgDetMain'
    },
    {
        name: 'DISNEY XD',
        url: 'https://fl5.moveonjoy.com/DISNEY_XD/index.m3u8',
        type: 'hls',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Logo_Disney_XD.svg/1200px-Logo_Disney_XD.svg.png'
	},	
	{
    name: 'DREAMWORKS HD',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_dreamworks_hd1.mpd',
        keyId: '4ab9645a2a0a47edbd65e8479c2b9669',
        key: '8cb209f1828431ce9b50b593d1f44079',
		type: 'mpd',
		logo: 'https://logos-world.net/wp-content/uploads/2020/12/DreamWorks-Animation-Logo.png'
    },
    {
    name: 'DREAMWORKS TAGALOG',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd',
        keyId: '564b3b1c781043c19242c66e348699c5',
        key: 'd3ad27d7fe1f14fb1a2cd5688549fbab',
		type: 'mpd',
		logo: 'https://logos-world.net/wp-content/uploads/2020/12/DreamWorks-Animation-Logo.png'
    },	
    {
    name: 'FASHION TV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_fashiontvhd.mpd',
        keyId: '971ebbe2d887476398e97c37e0c5c591',
        key: '472aa631b1e671070a4bf198f43da0c7',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.fRG_3Wx6qmssHxgeN5leBQHaD4?rs=1&pid=ImgDetMain'
    },
    {
    name: 'FOOD NETWORK HD',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_foodnetwork_hd1.mpd',
        keyId: 'b7299ea0af8945479cd2f287ee7d530e',
        key: 'b8ae7679cf18e7261303313b18ba7a14',
		type: 'mpd',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Food_Network_New_Logo.png'
    },
    {
    name: 'GLOBAL FASHION',
        url: 'https://gfcomnimedia-globalfashionchannel-1-eu.xiaomi.wurl.tv/playlist.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.0gpjrMJZ4u5zx81mPvskNwAAAA?rs=1&pid=ImgDetMain'
       },
       {
        name: 'HBO FAMILY',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbofam.mpd',
        keyId: '872910c843294319800d85f9a0940607',
        key: 'f79fd895b79c590708cf5e8b5c6263be',
		type: 'mpd',
		logo: 'https://2.bp.blogspot.com/-fWMY8sHAuHs/TqB9xKDM_-I/AAAAAAAAQh0/N-fI53l9A84/s1600/hbo-family.png'
    },
    {
    name: 'HBO HITS',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hbohits.mpd',
        keyId: 'b04ae8017b5b4601a5a0c9060f6d5b7d',
        key: 'a8795f3bdb8a4778b7e888ee484cc7a1',
		type: 'mpd',
		logo: 'https://vignette.wikia.nocookie.net/logopedia/images/0/04/HBO_HiTS.svg/revision/latest/scale-to-width-down/627?cb=20100511073403'
    },
    {
        name: 'HBO SIGNATURE',
        url: 'https://qp-pldt-live-grp-01-prod.akamaized.net/out/u/cg_hbosign.mpd',
        keyId: 'a06ca6c275744151895762e0346380f5',
        key: '559da1b63eec77b5a942018f14d3f56f',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.PNeE4yWz4_Tp1O-dCdY_xAHaEP?rs=1&pid=ImgDetMain'
    },
    {
        name: 'HBO HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_hbohd.mpd',
        keyId: 'd47ebabf7a21430b83a8c4b82d9ef6b1',
        key: '54c213b2b5f885f1e0290ee4131d425b',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.lY5V2M3D9jtBFJNbOAI8swHaDt?rs=1&pid=ImgDetMain'
    },
    {
    name: 'HGTV HD',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/hgtv_hd1.mpd',
        keyId: 'f0e3ab943318471abc8b47027f384f5a',
        key: '13802a79b19cc3485d2257165a7ef62a',
		type: 'mpd',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/0/05/HGTV_logo.png'
    },
    {
    name: 'HISTORY HD',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_historyhd.mpd',
        keyId: 'a7724b7ca2604c33bb2e963a0319968a',
        key: '6f97e3e2eb2bade626e0281ec01d3675',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.Yx9hYOFfO03taYL2CZd6FAHaE8?rs=1&pid=ImgDetMain'
    },	
    {
        name: 'HITS NOW',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_hitsnow.mpd',
        keyId: '14439a1b7afc4527bb0ebc51cf11cbc1',
        key: '92b0287c7042f271b266cc11ab7541f1',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.cM1HO2isouoNessbj31CcgAAAA?rs=1&pid=ImgDetMain'
    },
    {
    name: 'IBC 13',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd',
        keyId: '04e292bc99bd4ccba89e778651914254',
        key: 'ff0a62bdf8920ce453fe680330b563a5',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.sJNkdFUalhzRyZT4SJ9HBAHaEc?rs=1&pid=ImgDetMain'
    },
    {
        name: 'INCTV',
        url: 'https://199211.global.ssl.fastly.net/643cc12aa824db4374021c8c/live_95f6ac80dd6511ed9d08b12be56ae55e/index.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.MHyjJgpgcnoGypCLEIh9qAHaDH?rs=1&pid=ImgDetMain'
    },
    {
    name: 'KBS WORLD',
        url: 'https://kbsworld-ott.akamaized.net:443/hls/live/2002341/kbsworld/01.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.oCsxB1kd9mX_LD-DigoB9AHaBf?rs=1&pid=ImgDetMain'
    },
    {
    name: 'KIX HD',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd',
        keyId: 'a8d5712967cd495ca80fdc425bc61d6b',
        key: 'f248c29525ed4c40cc39baeee9634735',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.tGUjHFJqDIFUuKfn-31TxAHaEN?rs=1&pid=ImgDetMain'
    },
    {
    name: 'KNOWLEDGE CH',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd',
        keyId: '0f856fa0412b11edb8780242ac120002',
        key: '783374273ef97ad3bc992c1d63e091e7',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.ix5ReWijxZg8uPcKrk2GHwHaGd?rs=1&pid=ImgDetMain'
    },
    {
    name: 'LIFETIME',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_lifetime.mpd',
        keyId: 'cf861d26e7834166807c324d57df5119',
        key: '64a81e30f6e5b7547e3516bbf8c647d0',
		type: 'mpd',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Logo_Lifetime_2020.svg/440px-Logo_Lifetime_2020.svg.png'
    },
    {
        name: 'K-MOVIES',
        url: 'https://7732c5436342497882363a8cd14ceff4.mediatailor.us-east-1.amazonaws.com/v1/master/04fd913bb278d8775298c26fdca9d9841f37601f/Plex_NewMovies/playlist.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.uvYKFBubGFR40NtgWh7W8wHaES?rs=1&pid=ImgDetMain'
    },
    {
        name: 'LOTUS MACAO',
        url: 'https://cdn1.skygo.mn/live/disk1/Lotus/HLS-FTA/Lotus.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.RCkAImW74AnuBiGuT7-sYgHaEN?rs=1&pid=ImgDetMain'
    },
    {
    name: 'MPTV',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd',
        keyId: '6aab8f40536f4ea98e7c97b8f3aa7d4e',
        key: '139aa5a55ade471faaddacc4f4de8807',
		type: 'mpd',
		logo: 'https://cms.cignal.tv/Upload/Images/MPTV%20-%20Rev.png'
    },
    {
        name: 'MYX PH',
        url: 'https://myxnola-abscbn-ono.amagi.tv/index.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.QXRmxKMS66jlGhpy5Y_o2gAAAA?rs=1&pid=ImgDetMain'
    },	
    {
        name: 'MTV Live',
        url: 'https://linearjitp02-playback.astro.com.my/dash-wv/linear/5014/default.mpd',
        keyId: '3ac2542a4f7be746633db07647451710',
        key: '22f964a6d6927ccdba482e775cdff190',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.SgkTOHObei1CVSSJg_ukEgHaHa?rs=1&pid=ImgDetMain'
    },	
    {
    name: 'NICK JR.',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_nickjr.mpd',
        keyId: 'bab5c11178b646749fbae87962bf5113',
        key: '0ac679aad3b9d619ac39ad634ec76bc8',
		type: 'mpd',
		logo: 'https://vignette.wikia.nocookie.net/logaekranowe/images/4/45/1024px-Nick_Jr._logo_2009.svg.png/revision/latest?cb=20180616122202&path-prefix=pl'
    },
    {
    name: 'NICKELODEON',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_nickelodeon.mpd',
        keyId: '9ce58f37576b416381b6514a809bfd8b',
        key: 'f0fbb758cdeeaddfa3eae538856b4d72',
		type: 'mpd',
		logo: 'https://logos-download.com/wp-content/uploads/2016/04/Nickelodeon_logo_logotype_2.png'
    },
    {
        name: 'ONE NEWS HD',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd',
        keyId: 'd39eb201ae494a0b98583df4d110e8dd',
        key: '6797066880d344422abd3f5eda41f45f',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.x5VzEESkd4_1pVGulNU43gHaGN?rs=1&pid=ImgDetMain'
    },	
    {
        name: 'ONE PH',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd',
        keyId: '92834ab4a7e1499b90886c5d49220e46',
        key: 'a7108d9a6cfcc1b7939eb111daf09ab3',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/R.2d24d7b257bea97175c1fcbb2aa4b21d?rik=sOXtQ%2fKznVBrVg&riu=http%3a%2f%2fjessejake.com%2fwp-content%2fuploads%2f2020%2f03%2fOne-PH-logo-1024x791.png&ehk=aQKsT0s1TCKGvvMXE7xsRaJI7CHqYN5glMEbGBc5tDk%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        name: 'ONE Sports',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd',
        keyId: '53c3bf2eba574f639aa21f2d4409ff11',
        key: '3de28411cf08a64ea935b9578f6d0edd',
		type: 'mpd',
		logo: 'https://vignette.wikia.nocookie.net/logopedia/images/5/56/TV5_One_Sports_Channel.png/revision/latest/scale-to-width-down/300?cb=20181221055916'
    },	
    {
    name: 'ONE SPORTS PLUS HD',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_onesportsplus_hd1.mpd',
        keyId: '322d06e9326f4753a7ec0908030c13d8',
        key: '1e3e0ca32d421fbfec86feced0efefda',
		type: 'mpd',
		logo: 'https://yt3.ggpht.com/a/AATXAJxL2nOhPRXCDKBEK-ccmTRM0G5r24tnVWUraw=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
	name: 'PREMIER SPORTS',
        url: 'https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cg_premiersports_hd1.mpd',
        keyId: 'fc19c98cb9504a0fb78b22fea0a4b814',
        key: 'ea683112a96d4ae6c32d4ea13923e8c7',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.UEZdJevwcZaL1qmePWjLGgHaHY?rs=1&pid=ImgDetMain'
    },	
    {
        name: 'PREMIER TENNIS',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_premiertennishd.mpd',
        keyId: '59454adb530b4e0784eae62735f9d850',
        key: '61100d0b8c4dd13e4eb8b4851ba192cc',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.yd4QRZWcEgEz2T1EZv41mAAAAA?rs=1&pid=ImgDetMain'
    },
    {
    name: 'PTV 4',
        url: 'https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd',
        keyId: '71a130a851b9484bb47141c8966fb4a3',
        key: 'ad1f003b4f0b31b75ea4593844435600',
		type: 'mpd',
		logo: 'https://media.philstar.com/images/articles/ptv4_2018-06-14_11-27-10.jpg'
    },
    {
        name: 'Q Music',
        url: 'https://dpp-qmusicnl-live.akamaized.net/streamx/QmusicNL.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP.VIBKAVHEqSwJ_jojb9Mt7wHaFg?rs=1&pid=ImgDetMain'
    },	
    {
	name: 'SONY MOVIES',
        url: 'https://cdn.klowdtv.net/803B48A/n1.klowdtv.net/live1/smc_720p/chunks.m3u8',
        type: 'hls',
		logo: 'https://th.bing.com/th/id/OIP._NGk-Rpn5n6TOVRIjvnZ6QHaHb?rs=1&pid=ImgDetMain'
    },	
    {
    name: 'SPOTV',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_spotvhd.mpd',
        keyId: 'ec7ee27d83764e4b845c48cca31c8eef',
        key: '9c0e4191203fccb0fde34ee29999129e',
		type: 'mpd',
		logo: 'https://uploads-sportbusiness.imgix.net/uploads/2021/09/SPOTV_LOGO-01-w-2.png?auto=compress,format&crop=faces,entropy,edges&fit=crop&w=620&h=227'
    },
    {
    name: 'SPOTV2',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_spotv2hd.mpd',
        keyId: '7eea72d6075245a99ee3255603d58853',
        key: '6848ef60575579bf4d415db1032153ed',
		type: 'mpd',
		logo: 'https://cms.dmpcdn.com/livetv/2023/02/06/00d2eb00-a5c0-11ed-a358-099f80363291_webp_original.png'
    },
    {
    name: 'TAP EDGE',
        url: 'https://qp-pldt-live-grp-12-prod.akamaized.net/out/u/dr_tapedge.mpd',
        keyId: '0f854034412b11edb8780242ac120002',
        key: 'af8ad1c5e3f2e1b751a4f64608f24275',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/R.e3f73d11a9d3f540cb5b43419d29a84a?rik=B20sUS1KhrTh1A&riu=http%3a%2f%2fwww.tapdmv.com%2flogo-tapEDGE-2021.png&ehk=uuGQFPGGgIAxHZQZXHp1uSi3q7BZsuUMVaydH%2fuxv4k%3d&risl=&pid=ImgRaw&r=0'
    },
    {
    name: 'TAP SPORTS',
        url: 'https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_tapsports.mpd',
        keyId: 'eabd2d95c89e42f2b0b0b40ce4179ea0',
        key: '0e7e35a07e2c12822316c0dc4873903f',
		type: 'mpd',
		logo: 'https://tapdmv.com/logo-tapSPORTS-2021.png'
    },
    {
    name: 'TAP MOVIES',
        url: 'https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_popupppvhd.mpd',
        keyId: '286e1c2d622c4c73b5c3d72e4a848abd',
        key: 'b7fad67599c1ce3c2fbc9d02b901be05',
		type: 'mpd',
		logo: 'https://cms.cignal.tv/Upload/Images/Tap-movies.jpg'
    },	
    {
    name: 'TAP TV',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_taptv_sd.mpd',
        keyId: 'f6804251e90b4966889b7df94fdc621e',
        key: '55c3c014f2bd12d6bd62349658f24566',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/R.ed7c5876b12bdcc4e442371ea09b1e72?rik=opVp7WMJKwNBbQ&riu=http%3a%2f%2fwww.tapdmv.com%2flogo-TapTV.png&ehk=3cu7Z9MkvL2T8pyV7X25sD7xOTlZilwPp4FQ17uRoqc%3d&risl=&pid=ImgRaw&r=0'
    },
    {
        name: 'TAP ACTION FLIX',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_tapactionflix_hd1.mpd',
        keyId: 'bee1066160c0424696d9bf99ca0645e3',
        key: 'f5b72bf3b89b9848de5616f37de040b7',
	    type: 'mpd',
		logo: 'https://tapdmv.ovationproductionsmanila.com/logo-TapActionFlix-2021-B.png'
    },	
    {
	name: 'THRILL',
        url: 'https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd',
        keyId: '928114ffb2394d14b5585258f70ed183',
        key: 'a82edc340bc73447bac16cdfed0a4c62',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/R.599bb5da89f5f34c975a72e4225e3085?rik=emhyOV9pEqLZSg&riu=http%3a%2f%2fimg2.wikia.nocookie.net%2f__cb20140607175204%2flogopedia%2fimages%2fa%2fa0%2fThrill_logo.jpg&ehk=4VBdq8tPkXPyOBD6rgb8hSXsKSpAfov9f%2fKIgNchpv4%3d&risl=&pid=ImgRaw&r=0'
    },		
    {
    name: 'TRAVEL CH.',
        url: 'https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/travel_channel_sd.mpd',
        keyId: 'f3047fc13d454dacb6db4207ee79d3d3',
        key: 'bdbd38748f51fc26932e96c9a2020839',
		type: 'mpd',
		logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/2018_Travel_Channel_logo.svg/1200px-2018_Travel_Channel_logo.svg.png'
    },
    {
  name: 'TVN MOVIES',
        url: 'https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd',
        keyId: '2e53f8d8a5e94bca8f9a1e16ce67df33',
        key: '3471b2464b5c7b033a03bb8307d9fa35',
		type: 'mpd',
		logo: 'https://yt3.ggpht.com/a/AATXAJy1C8c3pOmn9lAsPovaRcKqIvw2OAAfHK-HtA=s900-c-k-c0xffffffff-no-rj-mo'
    },
    {
    name: 'TVN',
        url: 'https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_tvnpre.mpd',
        keyId: 'e1bde543e8a140b38d3f84ace746553e',
        key: 'b712c4ec307300043333a6899a402c10',
		type: 'mpd',
		logo: 'https://s3.amazonaws.com/ivacy-website-images/wp-content/uploads/2020/01/19140041/1200px-Logo_tvN.svg_-1024x406.png'
    },
    {
name: 'UAAP VARSITY',
        url: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/cg_uaap_cplay_sd.mpd',
        keyId: '95588338ee37423e99358a6d431324b9',
        key: '6e0f50a12f36599a55073868f814e81e',
		type: 'mpd',
		logo: 'https://th.bing.com/th/id/OIP.lHehlIBc-0nftDyZSjNqJQHaEK?rs=1&pid=ImgDetMain'
    },
    {	
name: 'STV GLOBAL',
        url: 'https://glb.bozztv.com/glb/ssh101/startelevision/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
		type: 'mpd',
		logo: 'https://i.imgur.com/emtdwiv.jpeg'
    },	
    {
name: 'RAGE TV',
        url: 'https://glb.bozztv.com/glb/ssh101/ragetv/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
		type: 'mpd',
		logo: 'https://i.imgur.com/E3q2kTu.png'
    },	
    {
name: 'CHANNEL 702',
        url: 'https://glb.bozztv.com/glb/ssh101/3rstvph/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
		type: 'mpd',
		logo: 'https://i.imgur.com/5ikWTsq.png'
    },
    {
    name: 'R&E TV',
        url: 'https://glb.bozztv.com/glb/ssh101/retv/manifest.mpd',
        keyId: '9ecad6c4413f8bdc54712ce6c072a2cf',
        key: '442df559c369bdada8ba3abe97811575',
     	type: 'mpd',
		logo: 'https://i.imgur.com/ZJuaveL.png'
  }
            ];

let shakaPlayer = null;
let hls = null;

async function initPlayer(channel) {
  const video = document.getElementById('video');
  const currentChannel = document.getElementById('current-channel');
  const background = document.getElementById('background');

  // Cleanup old players
  if (shakaPlayer) {
    await shakaPlayer.destroy();
    shakaPlayer = null;
  }
  if (hls) {
    hls.destroy();
    hls = null;
  }

  // Reset video
  video.pause();
  video.removeAttribute('src');
  video.load();

  // Set background image to the channel logo with blur effect
  background.style.backgroundImage = `url('${channel.logo}')`;

  if (channel.type === 'mpd') {
    if (!shaka.Player.isBrowserSupported()) {
      alert("Shaka Player not supported on this browser.");
      return;
    }

    shakaPlayer = new shaka.Player(video);

    if (channel.keyId && channel.key) {
      shakaPlayer.configure({
        drm: {
          clearKeys: {
            [channel.keyId]: channel.key
          }
        }
      });
    }

    try {
      await shakaPlayer.load(channel.url);
      video.play().catch(e => {
        console.warn("Play promise rejected:", e);
      });
    } catch (e) {
      console.error("Shaka Player error:", e);
      console.error("Failed to load channel: " + channel.name + ". Error details:", e);
    }

  } else if (channel.type === 'hls') {
    if (Hls.isSupported()) {
      hls = new Hls();
      hls.loadSource(channel.url);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(e => console.warn("Play promise rejected:", e));
      });
      hls.on(Hls.Events.ERROR, function(event, data) {
        console.error("HLS.js error:", data);
        alert("Failed to load channel: " + channel.name);
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = channel.url;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(e => console.warn("Play promise rejected:", e));
      }, { once: true });
    } else {
      alert("HLS not supported on this browser.");
    }
  } else {
    alert("Unsupported channel type: " + channel.type);
  }

  // Update the current channel info
  currentChannel.textContent = `Current Channel: ${channel.name}`;
}

// Create channel buttons dynamically
const channelList = document.getElementById('channel-list');
channels.forEach((channel) => {
  const div = document.createElement('div');
  div.className = 'channel-item';
  div.innerHTML = `
    <img src="${channel.logo}" alt="${channel.name}" class="channel-logo" />
    <div>${channel.name}</div>
  `;
  div.addEventListener('click', () => {
    // Directly call initPlayer without resetting video manually
    initPlayer(channel);
  });
  channelList.appendChild(div);
});


// Start first channel by default
if (channels.length > 0) {
  initPlayer(channels[0]);
}

// Close button behavior
document.getElementById('close-btn').onclick = () => {
  window.location.href = 'https://watch2me-v2.pages.dev/';
};
