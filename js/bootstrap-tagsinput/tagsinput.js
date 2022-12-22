( function( $ ) {
  'use strict'; // Start of use strict
  
  $( document ).ready( function() { 
    var _tagsinput = $( '#tagsinput-markup' );
    if ( _tagsinput.length ) {
      _tagsinput.tagsinput({
        tagClass: 'badge badge-primary'
      });
    }


    var cities = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      prefetch: './js/select2/cities.json'
    });
    cities.initialize();

    var elt = $('#tagsinput-objects');
    elt.tagsinput({
      itemValue: 'value',
      itemText: 'text',
      typeaheadjs: {
        name: 'cities',
        displayKey: 'text',
        source: cities.ttAdapter()
      }
    });
    elt.tagsinput('add', { "value": 1 , "text": "Amsterdam"   , "continent": "Europe"    });
    elt.tagsinput('add', { "value": 4 , "text": "Washington"  , "continent": "America"   });
    elt.tagsinput('add', { "value": 7 , "text": "Sydney"      , "continent": "Australia" });
    elt.tagsinput('add', { "value": 10, "text": "Beijing"     , "continent": "Asia"      });
    elt.tagsinput('add', { "value": 13, "text": "Cairo"       , "continent": "Africa"    });
  } );
  
} )( jQuery ); // End of use strict