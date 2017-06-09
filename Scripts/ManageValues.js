$(document).ready(function () {
    GetValues();
    $("#ddlType").select2({
        placeholder: "Select Value",
        allowClear: true
    });
})

function GetValues() {
    $.ajax({
        type: "POST",
        url: "ManageValuesWebService.asmx/BindValues",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessValues
    });
}
var GridVar;
function OnSuccessValues(data, status) {
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
    result = MNVal_val();
    if (result == true) {
        var add = $('#HiddenEditId').val();
        if (add == "") {
            add = "0"
        }
        var Type = $('#ddlType').val();
        var Name = $('#txtName').val();
        var Value = $('#txtValue').val();
        var Chk = $('#chkActive').val();
        if (Chk = "on") {
            Chk = 1
        } else {
            Chk = 0
        }
        $.ajax({
            type: "POST",
            url: "ManageValuesWebService.asmx/InsertManageValues",
            data: "{'add':'" + add + "' ,'Type':'" + Type + "' ,'Name':'" + Name + "','Value':'" + Value + "','Is_Active':'" + Chk + "'}",
            contentType: "application/json",
            success: onSuccess,
            async: true
        });
    }
}
function onSuccess(data) {
    var m = data.d;
    if (m > 0) {
        success_msg("Inserted Successfully")

    } else {
        success_msg("Dnt Have Permission")
    }
    //GetValues();
    //$('#ddlType').val("0");
    //$('#ddlType').select2({
    //    placeholder: "Select Value",
    //    allowClear: true
    //});
    //$('#txtName').val("");
    //$('#txtValue').val("");
    //alert("Inserted");
    //GetValues();
}
function bindRecordToEdit(that) {
    var id = $('td:first', $(that).parents('tr')).text();
    var top = $('.menu_content').offset().top - 150; $('html, body').animate({ scrollTop: top });
    $.ajax({
        type: "POST",
        url: "ManageValuesWebService.asmx/EditManageValues",
        data: "{Type_ID:'" + id + "'}",
        contentType: "application/json; charset=utf-8",
        datatype: "jsondata",
        success: function (response) {
            var msg = JSON.parse(response.d);
            // var msg =response.d;
            $('#hdnTypeId').val(msg[0]["Type_ID"])
            $('#ddlType').val(msg[0]["Type"]);
            $('#ddlType').select2({
                placeholder: "Select Value",
                allowClear: true
            });
            $('#txtName').val(msg[0]["Name"])
            $('#txtValue').val(msg[0]["Value"]);
            //      
            $('#btnSave').hide();
            $('#btnUpdate').show();
            $('#btnCancel').show();
        }
    });
}
function DeleteRecord(id) {
    if (confirm("Are you sure?")) {
        $.ajax({
            type: "POST",
            url: "ManageValuesWebService.asmx/DeleteValues",
            data: "{'Type_ID':'" + id + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            success: function (response) {
                GetValues();
                success_msg("Record Deleted Successfully!!")
                //alert("Record Deleted Successfully!!")
            }
        });
    }
    return false;
}
function Update() {
    result = MNVal_val();
    if (result == true) {
        var id = $('#hdnTypeId').val();
        var Type = $('#ddlType').val();
        var Name = $('#txtName').val();
        var Value = $('#txtValue').val();



        $.ajax({
            type: "POST",
            url: "ManageValuesWebService.asmx/UpdateManageWareHouse",
            data: "{'Type_ID':'" + id + "','Type':'" + Type + "' ,'Name':'" + Name + "','Value':'" + Value + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            success: function (response) {
                //  $('#btnSave').show();
                // $('#btnUpdate').hide();
                $('#ddlType').val("0");
                $('#ddlType').select2({
                    placeholder: "Select Value",
                    allowClear: true
                });
                $('#txtName').val("");
                $('#txtValue').val("");
                GetValues();
                success_msg("Record Updated Successfully!!")
                //alert('Record Updated Successfully');
            }
        });
    }
}

function Download(e) {
    $.ajax({
        type: "POST",
        url: "ManageValuesWebService.asmx/BindValues",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessDownload
    });
}
function OnSuccessDownload(data) {
    $("#DTTable").append('<table  id="DTGridd"><tr>'
                       + '<th>Type_ID</th><th>Type</th><th>Name</th><th>Value</th></tr>');
    var jsoon = JSON.parse(data.d);
    $.each(jsoon, function (i, option) {

        $('#DTGridd').append('<tr><td>' + option.Type_ID
                           + '</td><td>' + option.Type
                           + '</td><td>' + option.Name
                           + '</td><td>' + option.Value
                           + '</td></tr>');
    });
    window.open('data:application/vnd.ms-excel,' + '<table>' + $("#DTGridd").html() + '</table>');
    e.preventDefault();
}

function Cancel() {

    window.location.href = "../Forms/ManageValues.aspx";
}
