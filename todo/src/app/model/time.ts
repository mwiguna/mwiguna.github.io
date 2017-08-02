export class Time {
  date = new Date();
  day:     any = this.date.getDate();
  month:   any = this.date.getMonth() + 1;
  fday:    any = (this.day < 10) ? "0" + this.day : this.day;
  fmonth:  any = (this.month < 10) ? "0" + this.month : this.month;
  year:    any = this.date.getFullYear();
  tanggal: any = this.year + "-" + this.fmonth  + "-" + this.fday;
}