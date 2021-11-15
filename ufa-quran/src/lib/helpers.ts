export function toArabicNumber(w: number) {
  var id = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
  return w.toString().replace(/[0-9]/g, function (x) {
    return id[+x];
  });
}
