import Combobox from "./Combobox";

onChangellce( event ){
    this.setState({ typed: event.target.value });
    console.log("ilce değeri:");
    console.log(event.target.value);
    let a;
    if( event.target.value==="altindag") {
        a:altindag
        console.log("altındagdayız");
        console.log(a[0]);

    }
    document.getElementById('apartioy').innerHTML=a[0];
    document.getElementById('bpartioy').innerHTML=a[1];
    document.getElementById('cpartioy').innerHTML=a[2];
    document.getElementById('dpartioy').innerHTML=a[3];
}




<label>
    <select id="ilce" value={this.target }  onChange={ this.onChangellce.bind(this) }>
        <option>İlçe Seçiniz  </option>
    </select>
</label>



const ank= ["Altındağ", "Ayaş", " Bala", "Beypazarı", "Çamlıdere", "Çankaya", "Çubuk", "Etimesgut", "Haymana", "Kalecik", "Keçiören", "Kızılcahamam", "Mamak", "Nallıhan", "Polatlı", "Şereflikoçhisar", "Sincan", "Yenimahalle"];
const ist = ["Adalar", "Bağcılar", "Bahçelievler", "Bakırköy", "Beşiktaş", "Beykoz", "Beyoğlu", "Büyükçekmece", "Çatalca", "Eminönü", "Esenler", "Eyüp", "Fatih", "Gaziosmanpaşa", "Güngören", "Kadıköy", "Kağıthane", "Kartal", "Küçükçekmece", "Maltepe", "Pendik", "Sarıyer", "Silivri", "Şile", "Şişli", "Sultanbeyli", "Tuzla", "Ümraniye", "Üsküdar", "Zeytinburnu"];
const izmr = ["Aliağa", "Balçova", "Bayındır", "Bergama", "Beydağ", "Bornova", "Buca", "Çeşme", "Dikili", "Foça", "Güzelbahçe", "Karaburun", "Karşıyaka", "Kemalpaşa", "Kınık", "Kiraz", "Konak", "Menderes","Menemen", "Narlıdere", "Ödemiş", "Seferihisar", "Selçuk", "Tire", "Torbalı", "Urla"];
const adna 	= ["Aladağ", "Ceyhan", "Feke", "Karaisalı", "Kozan", "Pozantı", "Saimbeyli", "Seyhan", "Yumurtalı", "Yüreğir"];
const adymn = ["Besni", "Gölbaşı", "Kahta", "Merkez"];
const afyn 	= ["Başmakçı", "Bolvadin", "Çay", "Çobanlar", "Dinar", "Emirdağ", "İhsaniye", "Kızılören", "Merkez", "Sandıklı", "Sincanlı", "Suhut", "Sultandağı"];
const agri  = ["Diyadin", "Doğubeyazıt", "Merkez", "Patnos", "Tutak"];
const aksry = ["Eskil", "Gülağaç", "Güzelyurt", "Merkez"];
const amsya = ["Göynücek", "Gümüşhacıköy", "Merkez", "Merzifon", "Suluova", "Taşova"];
const ant = ["Akseki", "Alanya", "Elmalı", "Finike", "Gazipaşa", "İbradi", "Kale", "Kaş", "Korkuteli", "Kumluca", "Manavgat", "Merkez", "Serik"];
const ardhn = ["Çıldır", "Göle", "Merkez"];
const artvn = ["Ardanuc", "Arhavi", "Hopa", "Merkez", "Murgül", "Savsat", "Yusufeli"];
const aydn = ["Bozdoğan", "Buharkent", "Çine", "Germenci", "İncirliova", "Karacasu", "Karpuzlu", "Koçarlı", "Köşk", "Kuşadası", "Kuyucak", "Merkez", "Nazilli", "Söke", "Sultanhisar", "Yenihisar", "Yenipazar"];
const baliksr= ["Ayvalık", "Balya", "Bandırma", "Bigadiç", "Burhaniye", "Dursunbey", "Edremit", "Erdek", "Gömeç", "Gönen", "Havran", "İvrindi", "Kepsut", "Manyas", "Merkez", "Savaştepe", "Sındırgı", "Susurluk"];
const brtn = ["Amasra", "Merkez", "Ulus"];
const brdr=  ["Ağlasun", "Altınyayla","Bucak", "Çavdır", "Çeltikçi", "Gölhisar", "Karamanlı",];
const brsa=[ "Nilufer", "Karacabey"];
const btmn = ["Hasankeyf", "Merkez"];
const bybrt = ["Aydıntepe", "Demirözü", "Merkez"];
const bilck = ["Bozhüyük", "Gölpazarı", "Merkez", "Osmaneli", "Pazaryeri", "Söğüt"];
const bngl = ["Adaklı", "Genç", "Karlıova", "Kiğı", "Merkez", "Solhan", "Yayladere", "Yedisu"];
const btls = ["Adilcevaz", "Ahlat", "Güloymak", "Merkez", "Mutki", "Tatvan"];
const blu = ["Gemlik", "Gürsu", "İnegöl", "İznik", "Karacabey", "Keleş", "Kestel", "Mudanya", "Mustafa Kemal Paşa", "Nilüfer", "Orhaneli", "Orhangazi", "Osmangazi", "Yenişehir", "Yıldırım"];
const cnk = ["Ayvacık", "Bayramiç", "Biga", "Bozcaada", "Çan", "Eceabat", "Ezine", "Gölbaşı", "Gökçeada", "Lapseki", "Merkez", "Yenice"];
const cnkri= ["Atkaracalar", "Bayramören", "Çerkeş", "Eldivan", "Ilgaz", "Kurşunlu", "Merkez", "Orta", "Şabanözü", "Yapraklı"];
const crm = ["Alaca", "Boğazkale", "Iskılıp", "Kargı", "Mecitözü", "Merkez", "Oğuzlar", "Osmancık", "Sungurlu", "Uğurludağ"];
const dnzli = ["Acıpayam", "Babadağ", "Buldan", "Çal", "Çardak", "Çivril", "Güney", "Holaz", "Kale", "Merkez", "Sarayköy", "Tavaş"];
const dyrbkr = ["Çermik", "Eğil", "Ergani", "Hani", "Hazro", "Kocaköy", "Lice", "Merkez", "Silvan"];
const dzce = ["Akçakoca", "Çilimli", "Merkez", "Yığılca"];
const edrne = ["Enes", "Havsa", "İpsala", "Keşan", "Lalapaşa", "Meriç", "Merkez", "Uzunköprü"];
const elzg = ["Ağin", "Arıcak", "Baskıl", "Karakoçan", "Keban", "Kovancılar", "Maden", "Merkez", "Palu", "Sivrice"];
const erzncn = ["Çayırlı", "Ilıç", "Kemah", "Kemaliye", "Merkez", "Refahiye", "Tercan", "Üzümlü"];
const erzrm= ["Aşkale", "Hınıs", "Horasan", "Ilıca", "İspir", "Narman", "Oltu", "Olur", "Pasinler", "Tortum"];
const eskishr= ["Alpu", "Beylikova", "Çifteler", "Günyüzü", "Han", "İnönü", "Mahmudiye", "Merkez", "Mihalıçcık", "Seyitgazi", "Sivrihisar"];
const gantep = ["Araban", "Islahiye", "Nizip", "Nurdağı", "Oğuzeli", "Şahinbey", "Şehitkamil", "Yavuzeli"];
const grsn= ["Alucra", "Bulancak", "Dereli", "Espiye", "Eynesil", "Görele", "Keşap", "Merkez", "Şebinkarahisar", "Tirebolu"];
const ghane	= ["Kelkit", "Kurtun", "Merkez", "Şiran"];
const hkkri	= ["Çukurca", "Merkez", "Şemdilli", "Yüksekova"];
const hty= ["Altınözü", "Belen", "Dörtyol", "Yüksekova", "Erzin", "İskenderun", "Kırıkhan", "Kumlu", "Merkez", "Reyhanlı", "Samandağı", "Yayladağı"];
const igdr= ["Aralık", "Karakoyunlu", "Merkez", "Tuzluca"];
const isprta = ["Aksu", "Atabey", "Eğirdir", "Gelendost", "Gönen", "Keçiborlu", "Merkez", "Sarkıkaraağaç", "Senirkent", "Sütçüler", "Uluborlu", "Yalvaç"];
const kmaras= ["Afşın", "Andırın", "Çağlayancerit", "Elbistan", "Göksun", "Merkez", "Pazarcık"];
const krbk = ["Eskipazar", "Merkez", "Safranbolu"];
const krmn	= ["Ayrancı", "Başyayla", "Ermenek", "Merkez"];
const krs= ["Kağızman", "Merkez", "Sarıkamış"];
const kstmn	= ["Abana", "Arac", "Bozkurt", "Çatalzeytin", "Cide", "Daday", "Devrenkanı", "Hanönü", "İhsangazi", "İnebolu", "Küre", "Merkez", "Taşköprü", "Tosya"];
const kysr= ["Akkışla", "Bünyan", "Develi", "Felahiye", "Hacılar", "İncesu", "Kocasinan", "Melekgazi", "Özvatan", "Pınarbaşı", "Talas", "Tomarza", "Yahyalı", "Yeşilhisar"];
const kls	= ["Elbeyli", "Merkez", "Musabeyli", "Polateli"];
const krkkale= ["Karakeçili", "Keskin", "Merkez", "Sulakyurt"];
const krklreli= ["Babaski", "Lüleburgaz", "Merkez", "Pehlivanköy", "Pınarhisar", "Vize"];
const krshr	= ["Akpınar", "Çiçekdağı", "Kaman", "Merkez", "Mucur"];
const kceli	= ["Derince", "Gebze", "Gölcük", "Kandıra", "Karamürsel", "Merkez"];
const knya	= ["Akören", "Akşehir", "Altınekin", "Beyşehir", "Bozkır", "Çeltik", "Cihanbeyli", "Çumra", "Derbent", "Doğanhisar", "Emirgazi", "Ereğli", "Hadım", "Hüyük", "Ilgın", "Kadınhanı", "Karapınar", "Karatay", "Meram", "Sarayönü", "Selçuklu", "Seydişehir", "Taşkent", "Yunak"];
const kthya	= ["Altıntaş", "Domaniç", "Dumlupınar", "Emet", "Gediz", "Merkez", "Pazarlar", "Simav", "Tavşanlı"];
const mltya	= ["Akçadağ", "Arapkır", "Arguvan", "Battalgazi", "Darende", "Doğanşehir", "Hekimhan", "Merkez", "Pötürge", "Yazıhan", "Yeşilhan"];
const mnsa= ["Ahmetli", "Akhisar", "Alaşehir", "Demirci", "Gölmarmara", "Gördes", "Kırkağaç", "Kula", "Merkez", "Salihli", "Sarıhanlı", "Soma", "Turgutlu"];
const mrdn	= ["Derik", "Kızıltepe", "Mazıdağı", "Merkez", "Midyat", "Nusaybin", "Ömerli", "Savur"];
const mrsn= ["Anamur", "Bozyazı", "Çamlıyayla", "Erdemli", "Gülnar", "Merkez", "Mut", "Silifke", "Tarsus"];
const mgla= ["Bodrum", "Datça", "Fathiye", "Kavaklıdere", "Köyceğiz", "Marmaris", "Merkez", "Milas", "Ortaca", "Ula", "Yatağan"];
const ms= ["Bulanık", "Korkut", "Malazgirt", "Merkez"];
const nvshr	= ["Avanos", "Derinkuyu", "Gülşehir", "Hacıbektaş", "Kozaklı", "Merkez", "Ürgüp"];
const ngde	= ["Altunhisar", "Bor", "Çamardı", "Çiftlik", "Ulukışla"];
const ord = ["Akkuş", "Fatsa", "Görköy", "Kabadüz", "Merkez", "Mesudiye", "Perşembe", "Ulubey", "Ünye"];
const osmnye = ["Bahçe", "Kadirli", "Merkez"];
const rze = ["Ardeşen", "Çayeli", "Fındıklı", "Merkez", "Pazar", "Çamlıhemşin"];
const skrya	= ["Akyazı", "Geyve", "Hendek", "Karasu", "Kaynarca", "Merkez", "Sapanca", "Taraklı"];
const smsn	= ["Alaçam", "Bafra", "Çarşamba", "Havza", "Kavak", "Ladik", "Merkez", "Salıpazarı", "Tekkeköy", "Terme", "Vezirköprü"];
const snlrf	= ["Akçakale", "Birecik", "Bozova", "Halfeti", "Harran", "Hilvan", "Merkez", "Siverek", "Suruç", "Viranşehir"];
const srt= ["Aydınlar", "Baykan", "Eruh", "Kurtalan", "Merkez"];
const snp= ["Ayancık", "Boyabat", "Durağan", "Elfelek", "Gerze", "Merkez"];
const srnk= ["Cizre", "İdil", "Merkez", "Silopi"];
const svs= ["Altınyayla", "Divriği", "Doğansar", "Gemerek", "Hafik", "Kangal", "Merkez", "Şarkışla", "Suşehri", "Yılızeli", "Zara"];
const tkrdg	= ["Çerkezköy", "Çorlu", "Hayrabolu", "Malkara", "Marmara Ereğlisi", "Merkez", "Muratlı", "Saray", "Şarköy"];
const tkt= ["Almuz", "Erbaa", "Merkez", "Niksar", "Pazar", "Reşadiye", "Sulusaray", "Turhal", "Zile"];
const trbzn	= ["Akçabat", "Araklı", "Arşin", "Beşikdüzü", "Çarşıbaşı", "Çaykara", "Dernekpazarı", "Maçka", "Merkez", "Of", "Sürmene", "Tonya", "Vakfıkebir", "Yomra"];
const tncli	= ["Çemişgezek", "Hozat", "Mazgirt", "Merkez", "Nazimiye", "Pertek"];
const usk= ["Banaz", "Eşme", "Merkez", "Sivaslı", "Ulubey"];
const vn= ["Başkale", "Çaldıran", "Çatak", "Erciş", "Gevaş", "Gürpınar", "Merkez", "Muradiye", "Özalp"];
const ylva= ["Altınova", "Armutlu", "Merkez"];
const yzgt	= ["Boğazlıyan", "Çandır", "Çayıralan", "Merkez", "Sarıkaya", "Sefaatli", "Sorgun", "Yenifakili", "Yerköy"];
const zngldk= ["Araplı", "Çaycuma", "Devrek", "Ereğli", "Merkez"];




<select value={this.state.value} id="il" onChange={Combobox.Set_player.bind(this)}>
    <option selected="selected">Lütfen İl Seçiniz</option>
    <option value="Ankara">Ankara</option>
    <option value="İstanbul">İstanbul</option>
    <option value="İzmir">İzmir</option>
    <option value="Adana">Adana</option>
    <option value="Adıyaman">Adıyaman</option>
    <option value="Afyon">Afyon</option>
    <option value="Ağrı">Ağrı</option>
    <option value="Aksaray">Aksaray</option>
    <option value="Amasya">Amasya</option>
    <option value="Antalya">Antalya</option>
    <option value="Ardahan">Ardahan</option>
    <option value="Artvin">Artvin</option>
    <option value="Aydın">Aydın</option>
    <option value="Balıkesir">Balıkesir</option>
    <option value="Bartın">Bartın</option>
    <option value="Batman">Batman</option>
    <option value="Bayburt">Bayburt</option>
    <option value="Bilecik">Bilecik</option>
    <option value="Bingöl">Bingöl</option>
    <option value="Bitlis">Bitlis</option>
    <option value="Bolu">Bolu</option>
    <option value="Burdur">Burdur</option>
    <option value="Bursa">Bursa</option>
    <option value="Çanakkale">Çanakkale</option>
    <option value="Çankırı">Çankırı</option>
    <option value="Çorum">Çorum</option>
    <option value="Denizli">Denizli</option>
    <option value="Diyarbakır">Diyarbakır</option>
    <option value="Düzce">Düzce</option>
    <option value="Edirne">Edirne</option>
    <option value="Elazığ">Elazığ</option>
    <option value="Erzincan">Erzincan</option>
    <option value="Erzurum">Erzurum</option>
    <option value="Eskişehir">Eskişehir</option>
    <option value="Gaziantep">Gaziantep</option>
    <option value="Giresun">Giresun</option>
    <option value="Gümüşhane">Gümüşhane</option>
    <option value="Hakkari">Hakkari</option>
    <option value="Hatay">Hatay</option>
    <option value="Iğdır">Iğdır</option>
    <option value="Isparta">Isparta</option>
    <option value="Kahramanmaraş">Kahramanmaraş</option>
    <option value="Karabük">Karabük</option>
    <option value="Karaman">Karaman</option>
    <option value="Kars">Kars</option>
    <option value="Kastamonu">Kastamonu</option>
    <option value="Kayseri">Kayseri</option>
    <option value="Kırıkkale">Kırıkkale</option>
    <option value="Kırklareli">Kırklareli</option>
    <option value="Kırşehir">Kırşehir</option>
    <option value="Kilis">Kilis</option>
    <option value="Kocaeli">Kocaeli</option>
    <option value="Konya">Konya</option>
    <option value="Kütahya">Kütahya</option>
    <option value="Malatya">Malatya</option>
    <option value="Manisa">Manisa</option>
    <option value="Mardin">Mardin</option>
    <option value="Mersin">Mersin</option>
    <option value="Muğla">Muğla</option>
    <option value="Muş">Muş</option>
    <option value="Nevşehir">Nevşehir</option>
    <option value="Niğde">Niğde</option>
    <option value="Ordu">Ordu</option>
    <option value="Osmaniye">Osmaniye</option>
    <option value="Rize">Rize</option>
    <option value="Sakarya">Sakarya</option>
    <option value="Samsun">Samsun</option>
    <option value="Siirt">Siirt</option>
    <option value="Sinop">Sinop</option>
    <option value="Sivas">Sivas</option>
    <option value="Şanlıurfa">Şanlıurfa</option>
    <option value="Şırnak">Şırnak</option>
    <option value="Tekirdağ">Tekirdağ</option>
    <option value="Tokat">Tokat</option>
    <option value="Trabzon">Trabzon</option>
    <option value="Tunceli">Tunceli</option>
    <option value="Uşak">Uşak</option>
    <option value="Van">Van</option>
    <option value="Yalova">Yalova</option>
    <option value="Yozgat">Yozgat</option>
    <option value="Zonguldak">Zonguldak</option>
</select>






/*
if (selected_il === "Adana"){
    for(i = 0; i<adna.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(adna[i]);
}
if (selected_il === "Adıyaman"){
    for(i = 0; i<adymn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(adymn[i]);
}
if (selected_il === "Afyon"){
    for(i = 0; i<afyn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(afyn[i]);
}
if (selected_il === "Ağrı"){
    for(i = 0; i<agri.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(agri[i]);
}
if (selected_il === "Aksaray"){
    for(i = 0; i<aksry.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(aksry[i]);
}
if (selected_il === "Amasya"){
    for(i = 0; i<amsya.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(amsya[i]);
}*/

/*
       if (selected_il === "Ardahan"){
           for(i = 0; i<ardhn.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(ardhn[i]);
       }
       if (selected_il === "Artvin"){
           for(i = 0; i<artvn.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(artvn[i]);
       }
       if (selected_il === "Aydın"){
           for(i = 0; i<aydn.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(aydn[i]);
       }
       if (selected_il === "Balıkesir"){
           for(i = 0; i<baliksr.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(baliksr[i]);
       }
       if (selected_il === "Bartın"){
           for(i = 0; i<brtn.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(brtn[i]);
       }
       if (selected_il === "Batman"){
           for(i = 0; i<btmn.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(btmn[i]);
       }
       if (selected_il === "Bayburt"){
           for(i = 0; i<bybrt.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(bybrt[i]);
       }
       if (selected_il === "Bilecik"){
           for(i = 0; i<bilck.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(bilck[i]);
       }
       if (selected_il === "Bingöl"){
           for(i = 0; i<bngl.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(bngl[i]);
       }
       if (selected_il === "Bitlis"){
           for(i = 0; i<btls.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(btls[i]);
       }
       if (selected_il === "Bolu"){
           for(i = 0; i<blu.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(blu[i]);
       }
       if (selected_il === "Burdur"){
           for(i = 0; i<brdr.length; i++)
               select_ilce.options[select_ilce.options.length] = new Option(brdr[i]);
       }
       */
/*
if (selected_il === "Çanakkale"){
    for(i = 0; i<cnk.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(cnk[i]);
}
if (selected_il === "Çankırı"){
    for(i = 0; i<cnkri.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(cnkri[i]);
}
if (selected_il === "Çorum"){
    for(i = 0; i<crm.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(crm[i]);
}
if (selected_il === "Denizli"){
    for(i = 0; i<dnzli.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(dnzli[i]);
}
*/

if (selected_il === "Diyarbakır"){
    for(i = 0; i<dyrbkr.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(dyrbkr[i]);
}
/*
if (selected_il === "Düzce"){
    for(i = 0; i<dzce.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(dzce[i]);
}
if (selected_il === "Edirne"){
    for(i = 0; i<edrne.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(edrne[i]);
}
if (selected_il === "Elazığ"){
    for(i = 0; i<elzg.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(elzg[i]);
}
if (selected_il === "Erzincan"){
    for(i = 0; i<erzncn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(erzncn[i]);
}
if (selected_il === "Erzurum"){
    for(i = 0; i<erzrm.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(erzrm[i]);
}
*/
if (selected_il === "Eskişehir"){
    for(i = 0; i<eskishr.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(eskishr[i]);
}
/*
if (selected_il === "Gaziantep"){
    for(i = 0; i<gantep.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(gantep[i]);
}
if (selected_il === "Giresun"){
    for(i = 0; i<grsn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(grsn[i]);
}
if (selected_il === "Gümüşhane"){
    for(i = 0; i<ghane.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(ghane[i]);
}
if (selected_il === "Hakkari"){
    for(i = 0; i<hkkri.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(hkkri[i]);
}
if (selected_il === "Hatay"){
    for(i = 0; i<hty.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(hty[i]);
}
if (selected_il === "Iğdır"){
    for(i = 0; i<igdr.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(igdr[i]);
}
if (selected_il === "Isparta"){
    for(i = 0; i<isprta.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(isprta[i]);
}
if (selected_il === "Kahramanmaraş"){
    for(i = 0; i<kmaras.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(kmaras[i]);
}
if (selected_il === "Karabük"){
    for(i = 0; i<krbk.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(krbk[i]);
}
if (selected_il === "Karaman"){
    for(i = 0; i<krmn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(krmn[i]);
}
if (selected_il === "Kars"){
    for(i = 0; i<krs.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(krs[i]);
}
if (selected_il === "Kastamonu"){
    for(i = 0; i<kstmn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(kstmn[i]);
}
if (selected_il === "Kayseri"){
    for(i = 0; i<kysr.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(kysr[i]);
}
if (selected_il === "Kilis"){
    for(i = 0; i<kls.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(kls[i]);
}
if (selected_il === "Kırıkkale"){
    for(i = 0; i<krkkale.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(krkkale[i]);
}
if (selected_il === "Kırklareli"){
    for(i = 0; i<krklreli.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(krklreli[i]);
}
if (selected_il === "Kırşehir"){
    for(i = 0; i<krshr.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(krshr[i]);
}
if (selected_il === "Kocaeli"){
    for(i = 0; i<kceli.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(kceli[i]);
}
if (selected_il === "Konya"){
    for(i = 0; i<knya.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(knya[i]);
}
if (selected_il === "Kütahya"){
    for(i = 0; i<kthya.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(kthya[i]);
}
if (selected_il === "Malatya"){
    for(i = 0; i<mltya.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(mltya[i]);
}
if (selected_il === "Manisa"){
    for(i = 0; i<mnsa.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(mnsa[i]);
}
if (selected_il === "Mardin"){
    for(i = 0; i<mrdn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(mrdn[i]);
}
if (selected_il === "Mersin"){
    for(i = 0; i<mrsn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(mrsn[i]);
}
if (selected_il === "Muğla"){
    for(i = 0; i<mgla.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(mgla[i]);
}
if (selected_il === "Muş"){
    for(i = 0; i<ms.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(ms[i]);
}
if (selected_il === "Nevşehir"){
    for(i = 0; i<nvshr.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(nvshr[i]);
}
if (selected_il === "Niğde"){
    for(i = 0; i<ngde.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(mgla[i]);
}
if (selected_il === "Ordu"){
    for(i = 0; i<ord.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(ord[i]);
}
if (selected_il === "Osmaniye"){
    for(i = 0; i<osmnye.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(osmnye[i]);
}
*/

if (selected_il === "Rize"){
    for(i = 0; i<rze.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(rze[i]);
}
/*
if (selected_il === "Sakarya"){
    for(i = 0; i<skrya.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(skrya[i]);
}
if (selected_il === "Samsun"){
    for(i = 0; i<smsn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(smsn[i]);
}
if (selected_il === "Şanlıurfa"){
    for(i = 0; i<snlrf.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(snlrf[i]);
}
if (selected_il === "Siirt"){
    for(i = 0; i<srt.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(srt[i]);
}
if (selected_il === "Sinop"){
    for(i = 0; i<snp.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(snp[i]);
}
if (selected_il === "Şırnak"){
    for(i = 0; i<srnk.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(srnk[i]);
}
if (selected_il === "Sivas"){
    for(i = 0; i<svs.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(svs[i]);
}
if (selected_il === "Tekirdağ"){
    for(i = 0; i<tkrdg.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(tkrdg[i]);
}
if (selected_il === "Tokat"){
    for(i = 0; i<tkt.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(tkt[i]);
}
if (selected_il === "Trabzon"){
    for(i = 0; i<trbzn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(trbzn[i]);
}
if (selected_il === "Tunceli"){
    for(i = 0; i<tncli.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(tncli[i]);
}
if (selected_il === "Uşak"){
    for(i = 0; i<usk.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(usk[i]);
}
if (selected_il === "Van"){
    for(i = 0; i<vn.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(vn[i]);
}
if (selected_il === "Yalova"){
    for(i = 0; i<ylva.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(ylva[i]);
}
if (selected_il === "Yozgat"){
    for(i = 0; i<yzgt.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(yzgt[i]);
}
if (selected_il === "Zonguldak"){
    for(i = 0; i<zngldk.length; i++)
        select_ilce.options[select_ilce.options.length] = new Option(zngldk[i]);
}
*/

