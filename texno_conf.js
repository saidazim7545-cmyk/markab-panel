/* Texno Markaz premium — narxlash ilovasi sozlamalari.
   Narxlar Markab bilan bir xil: narx_data.js dan olinadi, bu fayl faqat brendga tegishli joylarni almashtiradi. */
(function (D) {
  if (!D) return;
  var BRAND = 'Texno Markaz';
  var fix = function (v) { return typeof v === 'string' ? v.replace(/Markab Electronics|Markab/g, BRAND) : v; };

  D.bot = 'TexnoMarkazpremium_bot';            // yangi botning nomi (@siz)
  D.app = 'narx';
  D.api = 'https://2-29-39-102.sslip.io/tm';

  // Markab Instagram banneri olib tashlanadi, trade-in banneri Texno Markaz nomi bilan qoladi
  D.banners = (D.banners || []).filter(function (b) { return b.id !== 'insta'; }).map(function (b) {
    var o = {}; for (var k in b) o[k] = fix(b[k]);
    o.bg = '#2C2C2E';
    return o;
  });

  D.branches = [{
    name: 'Texno Markaz premium', name_ru: 'Texno Markaz premium',
    addr: '', addr_ru: '',
    phone: '+998 55 520 00 02',
    open: '10:00', close: '20:00'
  }];
})(window.NARX_DATA);
