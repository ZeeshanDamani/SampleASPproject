$(document).ready(function () {
    FillddlRole();
    GetUser()
    FillddlStore();
    $("#txtUserName").val("");
    $("#txtPassword").val("");
    $("#ddlNotRole").select2({
        placeholder: "Select a Notification Role",
        allowClear: true
    });
})
function GetUser() {
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/BindUser",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessRole
    });
}
function OnSuccessRole(data, status) {
    var json = JSON.parse(data.d);

    var newArray = [];
    $.each(json, function (i, option) {
        var uStatus = option.Is_Active;
        if (uStatus == "True") {
            uStatus = "Active";
        } else {
            uStatus = "In-Active";
        }
        json[i]["Is_Active"] = uStatus;

        //if ($('#HiddenEditId').val() != 0) {
        //    json[i]["Action"] = '<input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(' + option.ID + ');bindRecordToEditStore(' + option.ID + ')"/>';
        //}

        //if ($('#HiddenDeleteId').val() != 0) {
        //    json[i]["Action"] = '<input type="button" value="" class="delete_btn" title="Delete" onclick="DeleteRecord(' + option.ID + ')"/>';
        //}

        //json[i]["Action"] = '<input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(' + json[i].ID + ');bindRecordToEditStore(' + json[i].ID + ')">';
        //var checkJson = json[i];
        //tempArray.push(json[i],)
        //newArray.push()


        //$('#template').append('<tr><td>' + option.ID + '</td><td>' + option.First_Name + '</td><td>' + option.Last_Name + '</td><td>' + option.Email + '</td><td>' + option.Username + '</td><td>' + option.Password + '</td><td>' + option.ContactNo + '</td><td>' + option.Name + '</td><td>' + option.StoreNames + '</td><td>' + uStatus + '</td><td></tr>');
        //var string = '<tr><td>' + option.ID + '</td><td>' + option.First_Name + '</td><td>' + option.Last_Name + '</td><td>' + option.Email + '</td><td>' + option.Username + '</td><td>' + option.Password + '</td><td>' + option.ContactNo + '</td><td>' + option.Name + '</td><td>' + option.StoreNames + '</td><td>' + uStatus + '</td><td>';
        //if ($('#HiddenEditId').val() != 0) {
        //    string += '<input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(' + option.ID + ');bindRecordToEditStore(' + option.ID + ')">';
        //}

        //if ($('#HiddenDeleteId').val() != 0) {
        //    string += '<input type="button" value="" class="delete_btn" title="Delete" onclick="DeleteRecord(' + option.ID + ')">';
        //}
    })
    //var newJson = JSON.stringify(json);

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






//function pageLoad() {

//    FillddlRole();
//    GetUser();
//    FillddlStore();
//    $("#txtUserName").val("");
//    $("#txtPassword").val("");

//}

//var GridVar;
//function OnSuccessRole(data, status) {
//    $('#DTWrapper').empty();
//    $('#DTWrapper').append('<table id="DTGrid" class="display"><thead><tr>'
//                            + '<td>ID</td>'
//                            + '<td>FirstName</td>'
//                            + '<td>LastName</td>'
//                            + '<td>Email</td>'
//                            + '<td>User</td>'
//                            + '<td>Password</td>'
//                            + '<td>ContactNo</td>'
//                            + '<td>Role</td>'
//                            + '<td>Stores</td>'
//                            + '<td>Status</td>'
//                            + '<td>Action</td>'
//                            + '</tr></thead><tbody>');
//    if (data.d != null) {
//        var json = JSON.parse(data.d);
//        $.each(json, function (i, option) {
//            var uStatus = option.Is_Active;
//            if (uStatus) {
//                uStatus = "Active";
//            } else {
//                uStatus = "In-Active";
//            }
//            var string = '<tr><td>' + option.ID + '</td><td>' + option.First_Name + '</td><td>' + option.Last_Name + '</td><td>' + option.Email + '</td><td>' + option.Username + '</td><td>' + option.Password + '</td><td>' + option.ContactNo + '</td><td>' + option.Name + '</td><td>' + option.StoreNames + '</td><td>' + uStatus + '</td><td>';
//            if ($('#HiddenEditId').val() != 0) {
//                string += '<input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(' + option.ID + ');bindRecordToEditStore(' + option.ID + ')">';
//            }

//            if ($('#HiddenDeleteId').val() != 0) {
//                string += '<input type="button" value="" class="delete_btn" title="Delete" onclick="DeleteRecord(' + option.ID + ')">';
//            }
//            //$('#DTGrid').append('<tr><td>' + option.ID
//            //                 + '</td><td>' + option.First_Name
//            //                 + '</td><td>' + option.Last_Name
//            //                 + '</td><td>' + option.Email
//            //                 + '</td><td>' + option.Username
//            //                 + '</td><td>' + option.Password
//            //                 + '</td><td>' + option.ContactNo
//            //                 + '</td><td>' + option.Name
//            //                 + '</td><td><input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(' + option.ID + ')"><input type="button" value="" class="delete_btn" title="Delete" onclick="DeleteRecord(' + option.ID + ')"></td></tr>');
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
function FillddlRole() {
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/BindRoleUser",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: OnsuccessFillRole
    });
}
function OnsuccessFillRole(response) {
    // $('#ddlRole').empty().append($('<option/>').attr("value", "0").text("Please Select"));
    var json = JSON.parse(response.d);
    $.each(json, function (i, option) {
        $('#ddlRole').append($('<option/>').attr("value", option.Role_ID).text(option.Name));
    });
    $("#ddlRole").select2({
        placeholder: "Select a Role",
        allowClear: true
    });
}
function bindRecordToEdit(that) {
    //var id = that
    var id = $('td:first', $(that).parents('tr')).text();

    var top = $('.menu_content').offset().top - 150; $('html, body').animate({ scrollTop: top });
    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/EditUser",
        data: "{id:'" + id + "'}",
        contentType: "application/json; charset=utf-8",
        datatype: "jsondata",
        async: true,
        success: function (response) {
            var msg = JSON.parse(response.d);
            // var msg =response.d;
            $('#id').val(msg[0]["ID"])
            $('#txtfName').val(msg[0]["First_Name"]);
            $('#txtLName').val(msg[0]["Last_Name"]);
            $('#txtEmail').val(msg[0]["Email"]);
            $('#txtUserName').val(msg[0]["Username"])
            $('#txtPassword').val(msg[0]["Password"]);
            $('#txtContactNo').val(msg[0]["ContactNo"]);
            $('#ddlRole').val(msg[0]["Role_ID"]);
            var ntRole = [];
            for (var i = 0; i < msg[0]["Notification_Role"].split(',').length; i++) {
                ntRole.push(msg[0]["Notification_Role"].split(',')[i]);
            }
            $('#ddlNotRole').val(ntRole);
            $("#ddlNotRole").select2({
                placeholder: "Select a Notification Role",
                allowClear: true
            });
            $("#ddlRole").select2({
                placeholder: "Select a Role",
                allowClear: true
            });

            var i = msg[0]['Is_Active']
            if (i === "True") {
                $('#chkActive').prop('checked', true);
            } else {
                $('#chkActive').prop('checked', false);
            }


            $('#hdnEdit').hide();
            $('#FileUpload1').hide();
            $('#Button1').hide();
            $('#btnSave').hide();
            $('#btnUpdate').show();
            $('#btnCancel').show();




        }

    })
}
function bindRecordToEditStore(that) {
    var id = $('td:first', $(that).parents('tr')).text();

    $.ajax({
        type: "POST",
        url: "UserWebService.asmx/EditUserStore",
        data: "{id:'" + id + "'}",
        contentType: "application/json; charset=utf-8",
        datatype: "jsondata",
        async: true,
        success: function (response) {
            var msg = JSON.parse(response.d)
            var e = msg.length;
            var selectedValues = [];
            StoreAgainstUpload();
            for (var i = 0; i < e; i++) {
                //$("#ddlStore").val(msg[i]['StoreID']);
                selectedValues.push(msg[i]["StoreID"]);
                //selectedValues += msg[i]["StoreID"];
                $("#ddlStore").val(selectedValues);

                //$("#ddlStore").select2({
                //    placeholder: "Select Store",
                //    allowClear: true
                //});
            }
        }
    })
    $("#ddlStore").select2({
        placeholder: "Select Store",
        allowClear: true
    });
}
function DeleteRecord(that) {
    var id = $('td:first', $(that).parents('tr')).text();

    if (confirm("Are you sure?")) {
        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/DeleteUser",
            data: "{'id':'" + id + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            async: true,
            success: function (response) {
                GetUser();
                success_msg("Record Deleted Successfully!!")
                //alert("Record Deleted Successfully!!")
            }
        });
    }
    return false;
}
function Update() {
    result = user_val();
    if (result == true) {
        var id = $('#id').val();

        var FName = $('#txtfName').val();
        var LName = $('#txtLName').val();
        var Email = $('#txtEmail').val();
        var UserName = $('#txtUserName').val();
        var Password = $('#txtPassword').val();
        var Contact = $('#txtContactNo').val();
        var Role = $('#ddlRole').val();
        var NotRole = $('#ddlNotRole').val();

        if ($('#chkActive').is(":checked")) {
            var chk = 1;
        }
        else {
            var chk = 0;
        }


        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/UpdateUser",
            data: "{'User_ID':'" + id + "','fname':'" + FName + "' ,'lname':'" + LName + "','email':'" + Email + "','username':'" + UserName + "','password':'" + Password + "','contact':'" + Contact + "','NotRole':'" + NotRole + "','role':'" + Role + "','chk':'" + chk + "'}",
            contentType: "application/json; charset=utf-8",
            datatype: "jsondata",
            async: true,
            success: function (response) {

                var id = $('#id').val();
                $.ajax({
                    type: "POST",
                    url: "UserWebService.asmx/DeleteUserStore",
                    data: "{'User_ID':'" + id + "'}",
                    contentType: "application/json; charset=utf-8",
                    datatype: "jsondata",
                    async: true
                })
                var StoreID = $('#ddlStore').val() + "";
                for (var i = 0; i < StoreID.split(',').length; i++) {
                    var Store = StoreID.split(',')[i]
                    $.ajax({
                        type: "POST",
                        url: "UserWebService.asmx/UpdateUserStore",
                        data: "{'User_ID':'" + id + "','StoreID':'" + Store + "'}",
                        contentType: "application/json; charset=utf-8",
                        datatype: "jsondata",
                        async: true
                    })
                }
                //  $('#btnSave').show();
                ///$('#btnUpdate').hide();
                GetUser();
                $('#txtfName').val("");
                $('#txtLName').val("");
                $('#txtEmail').val("");
                $('#txtUserName').val("");
                $('#txtPassword').val("");
                $('#txtContactNo').val("");
                FillddlRole();
                $("#ddlRole").val("0");
                $("#ddlRole").select2();
                success_msg("Record Updated Successfully")
                //alert('Record Updated Successfully');
            }
        });
    }
}
function Insert() {
    result = user_val();
    if (result == true) {
        var add = $('#HiddenEditId').val();
        if (add == "") {
            add = "0"
        }
        var FName = $('#txtfName').val();
        var LName = $('#txtLName').val();
        var Email = $('#txtEmail').val();
        var UserName = $('#txtUserName').val();
        var Password = $('#txtPassword').val();
        var Contact = $('#txtContactNo').val();
        var Role = $('#ddlRole').val();
        var NotRole = $('#ddlNotRole').val();

        if ($('#chkActive').is(":checked")) {
            var chk = 1;
        }
        else {
            var chk = 0;
        }


        $.ajax({
            type: "POST",
            url: "UserWebService.asmx/InsertUser",
            data: "{'add':'" + add + "','fname':'" + FName + "' ,'lname':'" + LName + "','email':'" + Email + "','username':'" + UserName + "','password':'" + Password + "','contact':'" + Contact + "','NotRole':'" + NotRole + "','role':'" + Role + "','chk':'" + chk + "'}",
            contentType: "application/json",
            success: onSuccess,
            async: true,
            cache: false
        });
    }
}
var id;
function onSuccess(data) {
    var m = data.d;
    if (m == -1) {
        success_msg("Username or Firstname Already Exists")
    }
    else if (m == 10) {
        success_msg("Dnt Have Permission")
    }
    else if (m > 0) {
        id = m;
        var StoreID = $('#ddlStore').val() + "";
        for (var i = 0; i < StoreID.split(',').length; i++) {
            var s = StoreID.split(',')[i];
            if (s == "" || s == null) {
                s = 0;
            }

            $.ajax({
                type: "POST",
                url: "UserWebService.asmx/InsertUserStore",
                data: "{'ID':'" + id + "','StoreID':'" + s + "'}",
                contentType: "application/json",
                async: true,
                cache: false
            });
        }

        //id = m;
        success_msg("Inserted Successfully")

    }
    else if (m == 0) {
        success_msg("FirstName or UserName Already Exists")
    }



}
function Download(e) {
    //    $.ajax({
    //        type: "POST",
    //        url: "UserWebService.asmx/BindUser",
    //        datatype: "json",
    //        contentType: "application/json",
    //        async: false,
    //        success: OnSuccessDownload
    //    });
    //}
    //function OnSuccessDownload(data) {
    $("#DTTable").append('<table  id="DTGridd"><tr>'
                       + '<th>FirstName</th><th>LastName</th><th>Email</th><th>User</th><th>Password</th><th>ContactNo</th><th>Role</th></tr>');
    //var jsoon = JSON.parse(data.d);
    //$.each(jsoon, function (i, option) {
    //    $('#DTGridd').append('<tr><td>' + option.ID
    //                     + '</td><td>' + option.First_Name
    //                     + '</td><td>' + option.Last_Name
    //                     + '</td><td>' + option.Email
    //                     + '</td><td>' + option.Username
    //                     + '</td><td>' + option.Password
    //                     + '</td><td>' + option.ContactNo
    //                     + '</td><td>' + option.Name
    //                     + '</td></tr</table>');
    //});
    window.open('data:application/vnd.ms-excel,' + '<table>' + $("#DTGridd").html() + '</table>');
    e.preventDefault();
}

function Cancel() {

    window.location.href = "../Users/User.aspx";
}


//// Product Store
function FillddlStore() {
    $.ajax({
        type: "POST",
        url: "../Forms/ManageProductWebService.asmx/ddlStore",
        contentType: "application/json; charset=utf-8",
        async: true,
        success: OnsuccessFillddlStore
    });
}
function OnsuccessFillddlStore(response) {
    //$('#ddlStore').empty();
    $('#ddlStore').append($('<option/>').attr("value", "").text("Please Select Store"));
    var json = JSON.parse(response.d);
    $.each(json, function (i, option) {
        $('#ddlStore').append($('<option/>').attr("value", option.Type_ID).text(option.Name));
    });
    $("#ddlStore").select2({
        placeholder: "Please Select Store",
        allowClear: true
    });
}

function StoreAgainstUpload() {
    var role = $('#ddlRole :selected').text();
    if (role == 'Uploader') {
        $('#idStores').show();
    }
    else {
        $('#idStores').hide();
    }
}