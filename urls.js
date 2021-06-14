const SITELIST = [
  { url: "http://www.duzcetv.com/", city: "81" },
  { url: "http://www.oxijen.tv/", city: "81" },
  { url: "http://www.duzcepostasi.com/", city: "81" },
  { url: "http://www.duzceninsesi.com.tr/", city: "81" },
  { url: "http://www.duzceparantez.com/", city: "81" },
  { url: "http://www.gunaydinduzce.com/", city: "81" },
  { url: "http://www.maviduzce.com/", city: "81" },
  { url: "http://www.burasiduzce.com/", city: "81" },
  { url: "http://www.duzcerota.com/", city: "81" },
  { url: "http://www.duzcesonhaber.com/", city: "81" },
  { url: "http://duzceyerelhaber.com/", city: "81" },
  { url: "http://akcakocatv.com/", city: "81" },
  { url: "http://duzcedetay.com/", city: "81" },
  { url: "http://duzceobjektif.com/", city: "81" },
  { url: "http://www.bizbolulular.com/", city: "14" },
  { url: "http://www.duzcemanset.com.tr/", city: "81" },
  { url: "http://www.oncurtv.com/", city: "81" },
  { url: "http://www.81oraytv.com/", city: "81" },
  { url: "http://www.duzcedamla.com/", city: "81" },
  { url: "http://www.duzcearti.com/", city: "81" },
  { url: "http://duzcetakip.com/", city: "81" },
  { url: "http://www.duzcelife.com/", city: "81" },
  { url: "http://www.duzcehavadis.net/", city: "81" },
  { url: "http://www.duzcepusula.com/", city: "81" },
  { url: "http://www.memleketimduzce.com/", city: "81" },
  { url: "http://www.malumathaber.com/", city: "81" },
  { url: "http://www.habergercek.org/", city: "81" },
  { url: "http://www.haberolduk.com/", city: "81" },
  { url: "http://www.duzcehurhaber.com/", city: "81" },
  { url: "http://www.duzcedebugun.com/", city: "81" },
  { url: "http://www.merkeztv.com.tr/", city: "14" },
  { url: "http://www.duzceanaliz.com/", city: "81" },
  { url: "https://www.medyajans.com/", city: "0" },
  { url: "http://superhaber.tv/", city: "0" },
  { url: "http://www.haber7.com/", city: "0" },
  { url: "http://www.trthaber.com/", city: "0" },
  { url: "https://www.ntv.com.tr/", city: "0" },
  { url: "http://www.aa.com.tr/", city: "0" },
  { url: "http://www.cnnturk.com/", city: "0" },
  { url: "http://ensonhaber.com/", city: "0" },
  { url: "https://www.haberturk.com/", city: "0" },
  { url: "http://www.iha.com.tr/", city: "0" },
  { url: "http://www.haberler.com/", city: "0" },
  { url: "http://www.ahaber.com.tr/", city: "0" },
  { url: "http://www.internethaber.com/", city: "0" },
  { url: "http://www.dha.com.tr/", city: "0" },
  { url: "https://veryansintv.com/", city: "0" },
  { url: "https://www.bbc.com/turkce", city: "0" },
  { url: "http://www.diken.com.tr/", city: "0" },
  { url: "https://tr.sputniknews.com/", city: "0" },
  { url: "http://www.t24.com.tr/", city: "0" },
  { url: "https://www.amerikaninsesi.com/", city: "0" },
  { url: "http://www.gercekgundem.com/", city: "0" },
  { url: "https://tr.euronews.com/", city: "0" },
  { url: "http://www.f5haber.com/", city: "0" },
  { url: "https://www.dw.com/", city: "0" },
  { url: "http://www.beyazgazete.com/", city: "0" },
  { url: "https://indyturk.com/", city: "0" },
  { url: "http://www.memurlar.net/", city: "0" },
  { url: "http://www.gazetevatan.com/", city: "0" },
  { url: "http://www.haber3.com/", city: "0" },
  { url: "http://www.stargazete.com/", city: "0" },
  { url: "https://www.sondakika.com/", city: "0" },
  { url: "http://www.medyafaresi.com/", city: "0" },
  { url: "https://medyascope.tv/", city: "0" },
  { url: "https://www.mynet.com/", city: "0" },
  { url: "http://www.turktime.com/", city: "0" },
  { url: "http://www.hurhaber.com/", city: "0" },
  { url: "http://www.objektifhaber.com/", city: "0" },
  { url: "http://www.habervakti.com/", city: "0" },
  { url: "http://www.eurovizyon.co.uk/", city: "0" },
  { url: "http://www.habervitrini.com/", city: "0" },
  { url: "http://www.bigpara.com/", city: "0" },
  { url: "http://www.tgrthaber.com.tr/", city: "0" },
  { url: "http://www.pressturk.com/", city: "0" },
  { url: "http://www.timeturk.com/", city: "0" },
  { url: "http://www.netgazete.com/", city: "0" },
];

const CITIES = {
  0: { plate: 0, name: "ULUSAL" },
  1: { plate: 1, name: "ADANA" },
  2: { plate: 2, name: "ADIYAMAN" },
  3: { plate: 3, name: "AFYONKARAHİSAR" },
  4: { plate: 4, name: "AĞRI" },
  5: { plate: 5, name: "AMASYA" },
  6: { plate: 6, name: "ANKARA" },
  7: { plate: 7, name: "ANTALYA" },
  8: { plate: 8, name: "ARTVİN" },
  9: { plate: 9, name: "AYDIN" },
  10: { plate: 10, name: "BALIKESİR" },
  11: { plate: 11, name: "BİLECİK" },
  12: { plate: 12, name: "BİNGÖL" },
  13: { plate: 13, name: "BİTLİS" },
  14: { plate: 14, name: "BOLU" },
  15: { plate: 15, name: "BURDUR" },
  16: { plate: 16, name: "BURSA" },
  17: { plate: 17, name: "ÇANAKKALE" },
  18: { plate: 18, name: "ÇANKIRI" },
  19: { plate: 19, name: "ÇORUM" },
  20: { plate: 20, name: "DENİZLİ" },
  21: { plate: 21, name: "DİYARBAKIR" },
  22: { plate: 22, name: "EDİRNE" },
  23: { plate: 23, name: "ELAZIĞ" },
  24: { plate: 24, name: "ERZİNCAN" },
  25: { plate: 25, name: "ERZURUM" },
  26: { plate: 26, name: "ESKİŞEHİR" },
  27: { plate: 27, name: "GAZİANTEP" },
  28: { plate: 28, name: "GİRESUN" },
  29: { plate: 29, name: "GÜMÜŞHANE" },
  30: { plate: 30, name: "HAKKARİ" },
  31: { plate: 31, name: "HATAY" },
  32: { plate: 32, name: "ISPARTA" },
  33: { plate: 33, name: "MERSİN(İÇEL)" },
  34: { plate: 34, name: "İSTANBUL" },
  35: { plate: 35, name: "İZMİR" },
  36: { plate: 36, name: "KARS" },
  37: { plate: 37, name: "KASTAMONU" },
  38: { plate: 38, name: "KAYSERİ" },
  39: { plate: 39, name: "KIRKLARELİ" },
  40: { plate: 40, name: "KIRŞEHİR" },
  41: { plate: 41, name: "KOCAELİ" },
  42: { plate: 42, name: "KONYA" },
  43: { plate: 43, name: "KÜTAHYA" },
  44: { plate: 44, name: "MALATYA" },
  45: { plate: 45, name: "MANİSA" },
  46: { plate: 46, name: "KAHRAMANMARAŞ" },
  47: { plate: 47, name: "MARDİN" },
  48: { plate: 48, name: "MUĞLA" },
  49: { plate: 49, name: "MUŞ" },
  50: { plate: 50, name: "NEVŞEHİR" },
  51: { plate: 51, name: "NİĞDE" },
  52: { plate: 52, name: "ORDU" },
  53: { plate: 53, name: "RİZE" },
  54: { plate: 54, name: "SAKARYA" },
  55: { plate: 55, name: "SAMSUN" },
  56: { plate: 56, name: "SİİRT" },
  57: { plate: 57, name: "SİNOP" },
  58: { plate: 58, name: "SİVAS" },
  59: { plate: 59, name: "TEKİRDAĞ" },
  60: { plate: 60, name: "TOKAT" },
  61: { plate: 61, name: "TRABZON" },
  62: { plate: 62, name: "TUNCELİ" },
  63: { plate: 63, name: "ŞANLIURFA" },
  64: { plate: 64, name: "UŞAK" },
  65: { plate: 65, name: "VAN" },
  66: { plate: 66, name: "YOZGAT" },
  67: { plate: 67, name: "ZONGULDAK" },
  68: { plate: 68, name: "AKSARAY" },
  69: { plate: 69, name: "BAYBURT" },
  70: { plate: 70, name: "KARAMAN" },
  71: { plate: 71, name: "KIRIKKALE" },
  72: { plate: 72, name: "BATMAN" },
  73: { plate: 73, name: "ŞIRNAK" },
  74: { plate: 74, name: "BARTIN" },
  75: { plate: 75, name: "ARDAHAN" },
  76: { plate: 76, name: "IĞDIR" },
  77: { plate: 77, name: "YALOVA" },
  78: { plate: 78, name: "KARABÜK" },
  79: { plate: 79, name: "KİLİS" },
  80: { plate: 80, name: "OSMANİYE" },
  81: { plate: 81, name: "DÜZCE" },
};

module.exports = { SITELIST, CITIES };
