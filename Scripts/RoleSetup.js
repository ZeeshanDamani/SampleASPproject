$(document).ready(function () {
    GetRole();
})




function GetRole() {
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/BindRole",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessRole
    });
}
function OnSuccessRole(data, status) {
    var json = JSON.parse(data.d);

    var newArray = [];
    var data = json, html = $.trim($("#template").html()), template = Mustache.compile(html);
    var view = function (record, index) {
        return template({ record: record, index: index });
    }
    var $summary = $('#summary');
    var $found = $('#found');
    var $record_count = $('#record_count');
    $('#found').hide();
    var callbacks = {
        pagination: function (summary) {
            if ($.trim($('#st_search').val()).length > 0) {
                $found.text('Found : ' + summary.total).show();
            } else {
                $found.hide();
            }
            $summary.text(summary.from + ' to ' + summary.to + ' of ' + summary.total + ' entries');
        },
        after_add: function () {
            var percent = this.data.length * 100 / json.length;
            $record_count.text(percent + '%').attr('style', 'width:' + percent + '%');
            if (this.data.length == json.length) {
                this.stopStreaming();
                $('.example .progress').removeClass('active').hide();
            }
        }
    }
    st = StreamTable('#stream_table',
      {
          view: view,
          per_page: 10,
          url_data: json,
          stream_after: 0.5,
          fetch_data_limit: 100,
          callbacks: callbacks,
          pagination: { span: 5, next_text: 'Next &rarr;', prev_text: '&larr; Previous' }
      }
    , json);
}
//var GridVar;
//function OnSuccessRole(data, status) {
//    $('#DTWrapper').empty()
//    $('#DTWrapper').append('<table id="DTGrid" class="display"><thead><tr>'
//                            + '<td>ID</td>'
//                            + '<td>Role</td>'
//                            + '<td>Action</td>'
//                            + '</tr></thead><tbody>');
//    if (data.d != null) {
//        var json = JSON.parse(data.d);
//        $.each(json, function (i, option) {
//            var string = '<tr><td>' + option.Role_ID + '</td><td>' + option.Name + '</td><td>';

//            if ($('#HiddenEditId').val() != 0) {
//                //edit here
//                string += '<input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(' + option.Role_ID + ')">';
//            }

//            if ($('#HiddenDeleteId').val() != 0) {
//                string += '<input type="button" value="" class="delete_btn" title="Delete" onclick="DeleteRecord(' + option.Role_ID + ')">';

//            }
//            string += "</td></tr>";
//            $('#DTGrid').append(string);
//        });
//        $('#DTGrid').append('</tbody></table>');
//        TagGridVar = $('#DTGrid').dataTable({
//            "aoColumnDefs": [
//                             { "bSearchable": false, "bVisible": false, "aTargets": [0] }],
//            "aaSorting": [[0, "asc"]],
//            "bJQueryUI": true,
//            "sPaginationType": "full_numbers",
//            "oLanguage": {
//                "sSearch": "Search all columns:"
//            }
//        });
//    }
//}



function Insert() {
    result = insert_val();
    if (result == true) {
        var add = $('#HiddenEditId').val();
        if (add == "")
        {
            add = "0"
        }
        var Name = $('#txtName').val();
        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/InsertRole",
            data: "{'add': '" + add + "','Name': '" + Name + "'}",
            contentType: "application/json",
            async: true,
            success: onSuccess,
            cache: false
        });
    }
}
function onSuccess(data) {
    var m = data.d;
    if (m > 0) {
        success_msg("Inserted Successfully")

    } else

    {
        success_msg("Dnt Have Permission")
    }
    //alert("Inserted Successfully");
    GetRole();
    $("#txtName").val("");
}

function bindRecordToEdit(that) {
    var id = $('td:first', $(that).parents('tr')).text();
    var top = $('.menu_content').offset().top - 150; $('html, body').animate({ scrollTop: top });
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/EditRole",
        data: "{id:'" + id + "'}",
        contentType: "application/json; charset=utf-8",
        datatype: "jsondata",
        success: function (response) {
            
            $('#hdnEdit').hide();
            $('#btnSave').hide();
            $('#btnUpdate').show();
            $('#btnCancel').show();
            var msg = JSON.parse(response.d);
            // var msg =response.d;
            $('#id').val(msg[0]["Role_ID"])
            $("#txtName").val(msg[0]["Name"]);
            $('#FileUpload1').hide();
            $('#Button1').hide();

        }
    });



}
function Update() {
    result = insert_val();
    if (result == true) {
        var id = $('#id').val();
        var txtname = $('#txtName').val();
        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/UpdateRole",
            data: "{'id':'" + id + "' ,'Name':'" + txtname + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",

            success: function (response) {
                $('#btnSave').show();
                $('#btnUpdate').hide();
                $('#txtName').val("");
                GetRole();
                success_msg("Record Updated Successfully")
            }
        });
    }
}
function DeleteRecord(id) {

    if (confirm("Are you sure?")) {

        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/DeleteRole",
            data: "{'id':'" + id + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            success: function (response) {
                GetRole();
                success_msg("Record Deleted Successfully!!")
            }
        });
    }
    return false;


}
function iii(e) {
    window.open('data:application/vnd.ms-excel,' + '<table>' + $("#DTGrid").html() + '</table>');
    e.preventDefault();
}
function Download(e) {
    //    $.ajax({
    //        type: "POST",
    //        url: "UserWebService.asmx/BindRole",
    //        datatype: "json",
    //        contentType: "application/json",
    //        async: false,
    //        success: OnSuccessDownload
    //    });
    //}
    //function OnSuccessDownload(data) {
    $("#DTTable").append('<table  id="DTGridd"><tr>'
                       + '<th>Role</th></tr>');
    //    var jsoon = JSON.parse(data.d);
    //    $.each(jsoon, function (i, option) {
    //$('#DTGridd').append('<tr><td>' + option.Role_ID
    //                  + '</td><td>' + option.Name
    //                  + '</td></tr></table>');
    //});
    window.open('data:application/vnd.ms-excel,' + '<table>' + $("#DTGridd").html() + '</table>');
    e.preventDefault();
}

function Cancel() {
   
    window.location.href = "../Users/RoleSetup.aspx";
}


