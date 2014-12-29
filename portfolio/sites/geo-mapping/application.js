
var map = new Datamap({
  element: document.getElementById('container'),
  scope: 'world',

  fills: {
      'CHE': '#458A42',
      'AUS': '#498741',
      'USA': '#4E8440',
      'DNK': '#528140',
      'DEU': '#577F3F',
      'IRL': '#5B7C3F',
      'NZL': '#60793E',
      'FRA': '#65763E',
      'GBR': '#69743D',
      'BEL': '#6E713D',
      'NLD': '#726E3C',
      'JPN': '#776C3C',
      'SWE': '#7C693B',
      'AUT': '#80663B',
      'ESP': '#85633A',
      'ROU': '#89613A',
      'FIN': '#8E5E39',
      'UKR': '#935B38',
      'RUS': '#975938',
      'PRT': '#9C5637',
      'ITA': '#A05337',
      'BRA': '#A55036',
      'GRC': '#AA4E36',
      'POL': '#AE4B35',
      'ZAF': '#B34835',
      'MEX': '#B74634',
      'MYS': '#BC4334',
      'ARG': '#C14033',
      'KEN': '#C53D33',
      'EGY': '#CA3B32',
      'IDN': '#CE3832',
      'IND': '#D33531',
      defaultFill: '#969696'
  },

  data: {

      CHE: {
          fillKey: 'CHE',
          salary: "$63,546"
      },

      AUS: {
          fillKey: 'AUS',
          salary: "$52,717"
      },

      USA: {
        fillKey: 'USA',
        salary: "$50,900"
      },

      DNK: {
        fillKey: 'DNK',
        salary: "$47,775"
      },

      DEU: {
        fillKey: 'DEU',
        salary: "$45,108"
      },

      IRL: {
        fillKey: 'IRL',
        salary: "$44,344"
      },

      NZL: {
        fillKey: 'NZL',
        salary: "$40,260"
      },

      FRA: {
        fillKey: 'FRA',
        salary: "$38,095"
      },

      GBR: {
        fillKey: 'GBR',
        salary: "$36,875"
      },

      BEL: {
        fillKey: 'BEL',
        salary: "$35,170"
      },

      NLD: {
        fillKey: 'NLD',
        salary: "$34,854"
      },

      JPN: {
        fillKey: 'JPN',
        salary: "$33,553"
      },

      SWE: {
        fillKey: 'SWE',
        salary: "$32,229"
      },

      AUT: {
        fillKey: 'AUT',
        salary: "$30,754"
      },

      ESP: {
        fillKey: 'ESP',
        salary: "$30,324"
      },

      ROU: {
        fillKey: 'ROU',
        salary: "$25,728"
      },

      FIN: {
        fillKey: 'FIN',
        salary: "$24,372"
      },

      UKR: {
        fillKey: 'UKR',
        salary: "$24,000"
      },

      RUS: {
        fillKey: 'RUS',
        salary: "$23,724"
      },

      PRT: {
        fillKey: 'PRT',
        salary: "$23,636"
      },

      ITA: {
        fillKey: 'ITA',
        salary: "$21,745"
      },

      BRA: {
        fillKey: 'BRA',
        salary: "$20,660"
      },

      GRC: {
        fillKey: 'GRC',
        salary: "$20,087"
      },

      POL: {
        fillKey: 'POL',
        salary: "$18,597"
      },

      ZAF: {
        fillKey: 'ZAF',
        salary: "$17,527"
      },

      MEX: {
        fillKey: 'MEX',
        salary: "$13,720"
      },

      MYS: {
        fillKey: 'MYS',
        salary: "$12,490"
      },

      ARG: {
        fillKey: 'ARG',
        salary: "$10,917"
      },

      KEN: {
        fillKey: 'KEN',
        salary: "$9,467"
      },

      EGY: {
        fillKey: 'EGY',
        salary: "$6,912"
      },

      IDN: {
        fillKey: 'IDN',
        salary: "$5,347"
      },

      IND: {
          fillKey: 'IND',
          salary: "$4,605"
      }
  },
  geographyConfig: {
      popupTemplate: function(geo, data) {
        if ( data == null ) {
          return '<div class="hoverinfo"><strong>' + geo.properties.name + '<br>' +'Currently no salary information</strong></div>';
        } else {
          return '<div class="hoverinfo"><strong>' + geo.properties.name + '<br>' + 'Average Web Developer salary: ' + data.salary + '</strong></div>';
        };
    }
  }

});

// city ommited to use bubbles: HK, Singapore, Bahrain