$(document).ready(function () {
    var addid = $('#HiddenEditId').val();
    if (addid == 1) {
        GetForm();
        FillddlUser()
    }
    else {
        location.href = "../Forms/ManageMasterDashboard.aspx";
    }

})

function GetForm() {
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/BindForm",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessRole
    });
}
var GridVar;
function OnSuccessRole(data, status) {
    var json = JSON.parse(data.d);

    var newArray = [];
    var data = json, html = $.trim($("#template").html()), template = Mustache.compile(html);
    var view = function (record, index) {
        return template({ record: record, index: index });
    };
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







function Insert() {
    result = Form_val();
    if (result == true) {
        var add = $('#HiddenEditId').val();
        if (add == "") {
            add = "0";
        }
        var Tile = $('#txtTile').val();
        var Desc = $('#txtDescription').val();
        var Navi = $('#txtNavigate').val();
        var Chk = $('#chkFormType').val();
        if (Chk == "") {
            Chk = "0"
        }
        var sort = $('#txtSort').val();

        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/InsertForm",
            data: "{'add':'" + add + "' ,'Tile':'" + Tile + "' ,'Desc':'" + Desc + "','Navi':'" + Navi + "','Chk':'" + Chk + "','sort':'" + sort + "'}",
            contentType: "application/json",
            success: onSuccess,
            async: true
       
        });
    } 
}
function onSuccess(data) {

    var m = data.d;
    if (m >= 0 || m == -1) {
        success_msg("Inserted Successfully")
    } 

}
function bindRecordToEdit(that) {
    var id = $('td:first', $(that).parents('tr')).text();
    var top = $('.menu_content').offset().top - 150; $('html, body').animate({ scrollTop: top });
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/EditForm",
        data: "{id:'" + id + "'}",
        contentType: "application/json; charset=utf-8",
        datatype: "jsondata",
        success: function (response) {
            var msg = JSON.parse(response.d);


            $('#btnSave').hide();
            $('#btnUpdate').show();
            $('#btnCancel').show();
            // var msg =response.d;
            $('#id').val(msg[0]["Form_ID"])
            $("#txtTile").val(msg[0]["Title"]);
            $('#txtDescription').val(msg[0]["Description"])
            $("#txtNavigate").val(msg[0]["NavigateURL"]);
            $('#chkFormType').val(msg[0]["FormType"]);
            $("#chkFormType").select2({
                placeholder: "Please Select Title",
                allowClear: true
            });
            $('#txtSort').val(msg[0]["Sort"]);
        
        }
    });



}
function DeleteRecord(that) {
    var id = $('td:first', $(that).parents('tr')).text();
    if (confirm("Are you sure?")) {
        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/DeleteForm",
            data: "{'id':'" + id + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            success: function (response) {
                GetForm();
                success_msg("Record Deleted Successfully")
                //alert("Record Deleted Successfully!!")
            }
        });
    }
    return false;
}
function Update() {
    result = Form_val();
    if (result == true) {
        var id = $('#id').val();
        var Title = $('#txtTile').val();
        var Description = $('#txtDescription').val();
        var navigate = $('#txtNavigate').val();
        var Chk = $('#chkFormType').val();
        var sort = $('#txtSort').val();

        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/UpdateForm",
            data: "{'Form_ID':'" + id + "','Tile':'" + Title + "' ,'Desc':'" + Description + "','Navi':'" + navigate + "','Chk':'" + Chk + "','sort':'" + sort + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",

            success: function (response) {
                //$('#btnSave').show();
                //$('#btnUpdate').hide();
                $('#txtTile').val("");
                $('#txtDescription').val("");
                $('#txtNavigate').val("");
                $('#chkFormType').val("0");
        
                GetForm();
				success_msg("Record Updated Successfully")
                //alert('Record Updated Successfully');
            }
        });
    } 
}
function Download(e) {
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/BindForm",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessDownload
    });
}
function OnSuccessDownload(data) {
    $("#DTTable").append('<table  id="DTGridd"><tr>'
                       + '<th>Form ID</th><th>Title</th><th>Decription</th><th>Navigation</th><th>Form Parent</th><th>Sort</th></tr>');
    var jsoon = JSON.parse(data.d);
    $.each(jsoon, function (i, option) {

        $('#DTGridd').append('<tr><td>' + option.Form_ID
                             + '</td><td>' + option.Title
                             + '</td><td>' + option.Description
                             + '</td><td>' + option.NavigateURL
                             + '</td><td>' + option.TYT
                                + '</td><td>' + option.Sort
                             + '</td></tr>');
    });
    window.open('data:application/vnd.ms-excel,' + '<table>' + $("#DTGridd").html() + '</table>');
    e.preventDefault();
}

function Cancel() {

    window.location.href = "../Users/FormSetup.aspx";
}


///User OR SALES REP
function FillddlUser() {
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/ddlFormParent",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: OnsuccessFillddluser
    });
}
function OnsuccessFillddluser(response) {
    $('#chkFormType').empty();
    $('#chkFormType').append($('<option/>').attr("value", "0").text("None"));
    var json = JSON.parse(response.d);
    $.each(json, function (i, option) {
        $('#chkFormType').append($('<option/>').attr("value", option.Form_ID).text(option.Title));
    });
    $("#chkFormType").select2({
        placeholder: "Please Select Title",
        allowClear: true
    });
}
