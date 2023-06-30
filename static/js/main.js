
(function($) {

    // var myd = JSON.stringify(data)
    console.log('myd')
    console.log('1')

    "use strict";
    var sort_options = [];
    var providersTable = '';
    
    function getSort(){
        return sort_options;
        }

    // $(document).ready(function() {
    //     providersTable = $('#providers').DataTable({
    //           'processing': true,
    //           'paging':false,
    //           'pageLength':10,
    //           'serverSide': true,
    //           'serverMethod': 'post',
    //           'ajax': {
    //               'url':'providers_fetch.php',
    //               data:function(data){
    //                   data.sort_options = getSort();
    //               },
    //               error:function(data){
    //                   console.log(data);
    //               }
    //           },
    //           'columns': [
    //              { data: 'name' },
    //              { data: 'speciality' },
    //              { data: 'street' },
    //              { data: 'email' },
    //              { data: 'cellphone' },
    //              { data: 'area' }
    //           ]
    //    });

    // } );
       
    // $(document).on('click', '.area-checkbox', function(event){
        
    //     var value = $(this).attr('value');
    //     var decision = 0;
    //     console.log(value);
    //     for(var i = 0; i < sort_options.length; i++) {
    //         if(sort_options[i] == value) {
    //             sort_options.splice(i, 1);
    //             decision = true;
    //             break;
    //         }
    //     }
    //     if(decision == 0){
    //         sort_options.push(value);
    //         // console.log('in');
    //     }
        
    //     console.log(sort_options);
    //     providersTable.ajax.reload();

    
    // })

})(jQuery); // End of use strict