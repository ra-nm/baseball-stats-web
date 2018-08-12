var s = new Vue({
    el: '#app',
    data: {
      salaries: []
    },
    methods: {
      getSalaries: function() {
        axios.get("https://rawebaseballstats-api.azurewebsites.net/api/salaries?code=iLrB1RBpLVxLB/ZF3ozL3GSGSFSLmVTh4WLph2aKxn9pWYjA/v6V8Q==&yearId=" + years.selected + "&teamId=" + teams.selected)
          .then(r => {this.salaries = r.data})
      }
    }
  });    
  
var teams = new Vue({
el: '#teams',
data: {
selected: '',
options: [
  { text: 'Brewers', value: 'MIL' },
  { text: 'Astros', value: 'HOU' }
]
}
});

var years = new Vue({
el: '#years',
data: {
selected: '',
options: [
   { text: '1985', value: '1985' },
    { text: '1986', value: '1986' },
    { text: '1987', value: '1987' },
    { text: '1988', value: '1988' },
    { text: '1989', value: '1989' },
    { text: '1990', value: '1990' },
    { text: '1991', value: '1991' },
    { text: '1992', value: '1992' },
    { text: '1993', value: '1993' },
    { text: '1994', value: '1994' },
    { text: '1995', value: '1995' },
    { text: '1996', value: '1996' },
    { text: '1997', value: '1997' },
    { text: '1998', value: '1998' },
    { text: '1999', value: '1999' },
    { text: '2000', value: '2000' },
    { text: '2001', value: '2001' },
    { text: '2002', value: '2002' },
    { text: '2003', value: '2003' },
    { text: '2004', value: '2004' },
    { text: '2005', value: '2005' },
    { text: '2006', value: '2006' },
    { text: '2007', value: '2007' },
    { text: '2008', value: '2008' },
    { text: '2009', value: '2009' },
    { text: '2010', value: '2010' },
    { text: '2011', value: '2011' },
    { text: '2012', value: '2012' },
    { text: '2013', value: '2013' },
    { text: '2014', value: '2014' },
    { text: '2015', value: '2015' },
    { text: '2016', value: '2016' }
]
}
});