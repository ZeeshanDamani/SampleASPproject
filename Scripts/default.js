/// <reference path="default.js" />
// $(document).ready(function(){
// setTimeout (function (){
// if ($(".select2").attr("disabled"))
// alert('yes we found disabled attributes');
// else
// alert('there is no disabled attributes');
// },3000)
// });
// $(document).ready(function(){
// setTimeout (function (){
// if (select == [name=disabled]){
// alert('you have one')
// }
// },3000)
// })
// $(document).on('focus', '.select2', function() {
// $(this).siblings('select').select2('open');
// });

//$(document).ready(function (){
//	setTimeout (function (){
//	$("select:disabled").addClass("not_open");
//	if($('select').hasClass('not_open')){
//		//alert('yess')
//	}
//	else{
//		$(document).on('focus', '.select2', function() {
//    $(this).siblings('select').select2('open');
// 	});
//	}
//	},2500)
//})
//var defaultOpen = 0;
//$(".notificationWrap").click(function () {
//    if (defaultOpen == 0) {
//        fillNotification();
//        defaultOpen = 1;
//    } else {
//        defaultOpen = 0;
//    }
//    $("#dvNotPopup").toggleClass("activeNote");
//});
$(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
        $('#sticky_header').addClass("sticky");
    }
    else {
        $('#sticky_header').removeClass("sticky");
    }
});
$(document).ready(function () {
    setTimeout(function () {
        $('.green_tr_bg .edit_icon, .red_tr_bg .edit_icon').addClass('edit_white_icon');
        $('.green_tr_bg .delete_btn, .red_tr_bg .delete_btn').addClass('delete_white_btn');
    }, 2000)
})
$("#Button1").click(function () {
    var validFields = $('#FileUpload1[type="file"]').map(function () {
        if ($(this).val() != "")
            return $(this);
    }).get();

    if (validFields.length) {
        alert("Form is valid");
    }
    else {
        alert("Form is not valid");
    }
});


function loaderOpen() {
    $('.loader_container').fadeIn();
    $('body').addClass('overFlowHidden');
}
function loaderClose() {
    $('.loader_container').fadeOut();
    $('body').removeClass('overFlowHidden');
}

$('#sub_menu_1').click(function () {
    $('#purchase_menu').slideToggle();
    $('#toggle_menu_plus_1').toggleClass('active');
})
$('#sub_menu_2').click(function () {
    $('#sales_menu').slideToggle();
    $('#toggle_menu_plus_2').toggleClass('active');
})

//var txt= $('.cc_container p').text();
//if(txt.length > 155)
//    $('.cc_container p').text(txt.substring(0,220) + '.....');

//$('#txtContactNo').bind("cut copy paste", function (e) {
//    e.preventDefault();
//});
$(document).ready(function () {
    $("textarea").attr('maxlength', '500');
    $('#txt').attr('maxlength', '5000');
});
$('#TotalQuantity, .Cost_validation').keyup(function () {
    var val = $(this).val();
    if (isNaN(val)) {
        val = val.replace(/[^0-9\.]/g, '');
        if (val.split('.').length > 2) val = val.replace(/\.+$/, "")
        {
            $(this).addClass('error');
        }
    }
    $(this).val(val);
});

//function isNumberKey2(evt) {
//    $('#txtPhone').keypress(function () {

//    })
//};

$(document).ready(function () {
    $("#txtFirstName, #txtLastName, #txtName, #txtfName, #txtLName, #txtname, #txtConcernPerson, #txtDesignation, #txtpickupby, #txtFrieightTrackingNo, #txtBillingName, #txtShipping").keypress(function (e) {
        var code = e.keyCode || e.which;
        if ((code < 65 || code > 90)
        && (code < 97 || code > 122) && code != 32 && code != 46) {
            $(this).addClass('error')
            return false;
        }
    });
});
$(document).ready(function () {
    $('#txtFax, #txtDiscount, #TotalQuantity, #txtExtension, #txtZip, .Q_validation, .Cost_validation').keypress(function (evt) {
        var charCode = (evt.which) ? evt.which : evt.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
            $(this).addClass('error')
            return false;
        }
        else if ((event.which < 48 || event.which > 57)) {
            $(this).addClass('error')
            return false;
            event.preventDefault();
        }

    });

});
$('#txtAmount, #txtTaxAmount, #idRefundAmount ,#idPartialCredit, #txtShippingCharge, #txtAccountNumber,#txtPurchasedAmount').keypress(function (evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
        $(this).addClass('error')
        return false;
    }
}
)

function isNumberKey(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31
      && (charCode < 48 || charCode > 57)) {
        $(this).addClass('error')
        return false;
    }

    return true;
}

function checkValidation(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        $(this).addClass('error')
        return false;
    }
    else if ((event.which < 48 || event.which > 57)) {
        $(this).addClass('error')
        return false;
        event.preventDefault();
    }
}
$(document).ready(function () {
    $(":text").attr('maxlength', '100');
    $('#idPostalCode, #txtPhone, #txtpostalCode, #txtCellphone, #txtTaxAmount').attr('maxlength', '15');
    $('#txtThreadTitle').attr('maxlength', '80')
    $('#txtProductName').attr('maxlength', '80')
});
/*$(window).load(function (e) {
    var winHeight = $(window).height();
    $('.left_menu_bar').css("height", winHeight + 'px');
});*/
$(window).load(function (e) {
    var winHeight = $('.left_menu_bar').height();
    //alert(winHeight)
    var FinalHeight = winHeight + 600;
    $('.right_content_area').css("min-height", FinalHeight + 'px');
});
//$(document).ready(function checkPosition() {
//        var winHeight = $(window).height();
//		//alert(winHeight)
//		var btn_container = $('.mn_btn_container').height();
//		//	alert(btn_container)
//    	//$('.dynamic_height_item').css("height", winHeight);
//		//var winHeight = $(window).height();
//		var FinalHeight = winHeight - btn_container;
//		//alert(FinalHeight)
//		FinalHeight = FinalHeight / 13;
//    	$('.mymenu li a').css("height", FinalHeight);
//	
//});



$('.menu_button').click(function () {
    $('.menu_button, .left_menu_bar ul li a, .left_menu_bar ul li, .logo_container a, .logo_container, .anchor_1, .left_menu_bar ul li span, .left_menu_bar, .right_content_area').toggleClass('active')
    $('#purchase_menu').slideUp();
    $('.toggle_menu_plus').removeClass('active');
    $('#sales_menu').slideUp();
    $('.toggle_menu_plus').removeClass('active');
})
$('.left_menu_bar ul li span').click(function () {
    $('.menu_button, .left_menu_bar ul li a, .left_menu_bar ul li span, .left_menu_bar, .right_content_area').removeClass('active')
})
$(function () {
    var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
    $(".mymenu li a").each(function () {
        if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
            $(this).addClass("active");
    })
});
function popup_openr() {
    $('.popup_container').fadeIn();
    $('#pop_id').fadeIn();
}
$(document).keyup(function (e) {
    //if (e.keyCode == 27) {
    //    $('.popup_container').fadeOut();
    //    $('.lockScreen').fadeOut();
    //    $('.success_msg_cotnainer').fadeOut();
    //    location.reload();
    //}
});
function popup_exit() {
    $('.popup_container').fadeOut();
    $('.lockScreen').fadeOut();
    $('.success_msg_cotnainer').fadeOut();
    location.reload();
}
$('.close_container').click(function () {
    popup_exit()
});
//$('.lockScreen').click(function () {
//    popup_exit()

//});

//$('#btnCancel').click(function () {
//    $('#ContactIframe').fadeOut();
//})
/*ROLE VALIDATION*/
function insert_val() {
    var txtCUFullName = $('#txtName').val();
    //var specialChar = /^[a-zA-Z ]{2,30}$/;
    //var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (txtCUFullName == "") {
        $('#txtName').focus();
        setTimeout(function () {
            $('#txtName').addClass("error")
        }, 10)
        return false;
    }
    return true
}

/*USERS VALIDATION*/
function user_val() {
    var txtfirstName = $('#txtfName').val();
    var txtlastName = $('#txtLName').val();
    var txtCUEmailAddress = $('#txtEmail').val();
    var txtuserName = $('#txtUserName').val();
    var txtPassword = document.getElementById('txtPassword');
    var txtCUContactNumber = document.getElementById('txtContactNo');
    var ddlRole = document.getElementById('ddlRole');
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (!txtfirstName.match(specialChar) || txtfirstName == "") {
        $('#txtfName').focus();
        setTimeout(function () {
            $('#txtfName').addClass("error")
        }, 10)
        return false;
    }
    else if (!txtlastName.match(specialChar) || txtlastName == "") {
        $('#txtLName').focus();
        setTimeout(function () {
            $('#txtLName').addClass("error")
        }, 10)
        return false;
    }
    else if (!txtCUEmailAddress.match(emailValid) || txtCUEmailAddress == "") {
        $('#txtEmail').focus();
        setTimeout(function () {
            $('#txtEmail').addClass("error");
        }, 10)
        return false;
    }
    else if (txtuserName == "") {
        $('#txtUserName').focus();
        setTimeout(function () {
            $('#txtUserName').addClass("error")
        }, 10)
        return false;
    }
    else if (txtPassword.value == "") {
        $('#txtPassword').focus()
        setTimeout(function () {
            $('#txtPassword').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCUContactNumber.value == "") {
        txtCUContactNumber.focus()
        setTimeout(function () {
            $(txtCUContactNumber).addClass("error");
        }, 10)

        return false;
    }
    else if (ddlRole.selectedIndex == "0") {
        ddlRole.focus()
        setTimeout(function () {
            $(".testing .select2-selection--single").addClass("error");
        }, 10)

        return false;
    }

    return true
}

/*MANAGE FORMS VALIDATION*/
function Approve_val() {
    var txttitle = $('#txtTile').val();
    var txtdescription = $('#txtDescription').val();
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (!txttitle.match(specialChar) || txttitle == "") {
        $('#txtTile').focus();
        setTimeout(function () {
            $('#txtTile').addClass("error")
        }, 10)
        return false;
    }
    else if (txtdescription == "") {
        $('#txtDescription').focus();
        setTimeout(function () {
            $('#txtDescription').addClass("error")
        }, 10)
        return false;
    }

    return true
}




/*MANAGE FORMS VALIDATION*/
function Form_val() {
    var txttitle = $('#txtTile').val();
    var txtdescription = $('#txtDescription').val();
    var txtnavigate = $('#txtNavigate').val();
    var ddlForm = document.getElementById('chkFormType');
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (!txttitle.match(specialChar) || txttitle == "") {
        $('#txtTile').focus();
        setTimeout(function () {
            $('#txtTile').addClass("error")
        }, 10)
        return false;
    }
    else if (txtdescription == "") {
        $('#txtDescription').focus();
        setTimeout(function () {
            $('#txtDescription').addClass("error")
        }, 10)
        return false;
    }
    else if (txtnavigate == "") {
        $('#txtNavigate').focus();
        setTimeout(function () {
            $('#txtNavigate').addClass("error");
        }, 10)
        return false;
    }
    //else if (ddlForm.selectedIndex == "0") {
    //    ddlForm.focus()
    //    setTimeout(function () {
    //        $(ddlForm).addClass("error");
    //    }, 10)

    //    return false;
    //}
    return true
}


/*MANAGE WAREHOUSE VALIDATION*/
function Ware_val() {
    var txttitle = $('#txtname').val();
    var txtconcernPer = $('#txtConcernPerson').val();
    var txtCUEmailAddress = $('#txtEmail').val();
    var txtCUContactNumber = document.getElementById('txtPhone');
    var txtidAddress1 = $('#txtAddress1').val();
    var ddlForm1 = document.getElementById('idCountry');
    var ddlForm2 = document.getElementById('idState');
    var ddlForm3 = document.getElementById('idCity');
    //var txtaddress1 = $('#idAddress1').val();
    var txtpostalcode = document.getElementById('idPostalCode');
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (txttitle == "") {
        $('#txtname').focus();
        setTimeout(function () {
            $('#txtname').addClass("error")
        }, 10)
        return false;
    }
    else if (txtconcernPer == "") {
        $('#txtConcernPerson').focus();
        setTimeout(function () {
            $('#txtConcernPerson').addClass("error")
        }, 10)
        return false;
    }
    else if (!txtCUEmailAddress.match(emailValid) || txtCUEmailAddress == "") {
        $('#txtEmail').focus();
        setTimeout(function () {
            $('#txtEmail').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCUContactNumber.value == "") {
        txtCUContactNumber.focus()
        setTimeout(function () {
            $(txtCUContactNumber).addClass("error");
        }, 10)

        return false;
    }
    else if (txtidAddress1 == "") {
        $('#idAddress1').focus();
        setTimeout(function () {
            $('#idAddress1').addClass("error")
        }, 10)
        return false;
    }
    else if (ddlForm1.selectedIndex == "0") {
        ddlForm1.focus()
        setTimeout(function () {
            $('.testing .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (ddlForm2.selectedIndex == "0") {
        ddlForm2.focus()
        setTimeout(function () {
            $('.testing2 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (ddlForm3.selectedIndex == "0") {
        ddlForm3.focus()
        setTimeout(function () {
            $('.testing3 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (txtpostalcode.value == "") {
        txtpostalcode.focus()
        setTimeout(function () {
            $(txtpostalcode).addClass("error");
        }, 10)

        return false;
    }
    return true
}
function validateURL(textval) {

    return urlregex.test(textval);
}

/*MANAGE VENDOR VALIDATION*/
function Vendor_val() {
    var txtvendor = $('#txtVendor').val();
    //var txttaxid = $('#txtTaxid').val();
    //  var txtCUEmailAddress = $('#txtEmail').val();
    var txtCatO = document.getElementById('ddlCategory');
    var txtVendor = document.getElementById('ddlVendorType');
    //var txtWebsite = $('#txtWebsite').val();
    // var txtaddress1 = $('#txtAddress1').val();
    // var ddlCountry = document.getElementById('ddlCountry');
    // var ddlForm2 = document.getElementById('#idState');
    // var ddlForm3 = document.getElementById('idCity');
    //var txtaddress2 = $('#txtAddress2').val();
    //var postalCode = $('#txtpostalCode').val();
    //var txtCUContactNumber = document.getElementById('txtPhone')
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");

    if (txtvendor == "") {
        $('#txtVendor').focus();
        setTimeout(function () {
            $('#txtVendor').addClass("error")
        }, 10)
        return false;
    }
        // else if (txttaxid == "") {
        // $('#txtTaxid').focus();
        // setTimeout(function () {
        // $('#txtTaxid').addClass("error")
        // }, 10)
        // return false;
        // }
        //else if (!txtCUEmailAddress.match(emailValid) || txtCUEmailAddress == "") {
        //    $('#txtEmail').focus();
        //    setTimeout(function () {
        //        $('#txtEmail').addClass("error");
        //    }, 10)
        //    return false;
        //}
    else if (txtCatO.selectedIndex == -1) {
        txtCatO.focus()
        setTimeout(function () {
            $(".ddl_category .select2-selection--multiple").addClass("error");
        }, 10)

        return false;
    }
    else if (txtVendor.selectedIndex == -1) {
        txtVendor.focus()
        setTimeout(function () {
            $('.ddl_vendor .select2-selection').addClass("error");
        }, 10)

        return false;
    }
    // else if (!txtWebsite.match(urlregex) || txtWebsite == "") {
    // $('#txtWebsite').focus();
    // setTimeout(function () {
    // $('#txtWebsite').addClass("error");
    // }, 10)
    // return false;
    // }
    //else if (txtaddress1 == "") {
    //    $('#txtAddress1').focus();
    //    setTimeout(function () {
    //        $('#txtAddress1').addClass("error");
    //    }, 10)
    //    return false;
    //}
    //else if (ddlCountry.selectedIndex == "0") {
    //    ddlCountry.focus()
    //    setTimeout(function () {
    //        $('.ddl_country .select2-selection--single').addClass("error");
    //    }, 10)

    //    return false;
    //}
    // else if ($("#select2-ddlState-container").text() == "Please Select State") {
    // $("#select2-ddlState-container").focus()
    // setTimeout(function () {
    // $('.ddl_Wrap .select2-selection--single').addClass("error");
    // }, 10)

    // return false;
    // }
    // else if ($("#select2-ddlCity-container").text() == "Please Select City") {
    // $("#select2-ddlCity-container").focus()
    // setTimeout(function () {
    // $('.ddl_city .select2-selection--single').addClass("error");
    // }, 10)

    // return false;
    // }
    //else if (txtaddress2 == "") {
    //        $('#txtAddress2').focus();
    //        setTimeout(function () {
    //            $('#txtAddress2').addClass("error");
    //        }, 10)
    //        return false;
    //    }
    // else if (postalCode == "") {
    // $('#txtpostalCode').focus();
    // setTimeout(function () {
    // $('#txtpostalCode').addClass("error");
    // }, 10)
    // return false;
    // }
    // else if (txtCUContactNumber.value == "") {
    // txtCUContactNumber.focus()
    // setTimeout(function () {
    // $(txtCUContactNumber).addClass("error");
    // }, 10)

    // return false;
    // }
    return true
}
/*MANAGE VENDOR CONTACT VALIDATION*/
function VendorStore_val() {
    var ddlStore = document.getElementById('ddlVendorStore');
    var txtSite = $('#txtSite').val();
    var urlregex = new RegExp("^(http:\/\/www.|https:\/\/www.|ftp:\/\/www.|www.){1}([0-9A-Za-z]+\.)");

    if (ddlStore.selectedIndex == "0") {
        ddlStore.focus()
        setTimeout(function () {
            $('.ddl_store .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (!txtSite.match(urlregex) || txtSite == "") {
        $('#txtSite').focus();
        setTimeout(function () {
            $('#txtSite').addClass("error");
        }, 10)
        return false;
    }
    return true;
}

/*MANAGE VALUE VALIDATION*/
function MNVal_val() {
    var ddlStore = document.getElementById('ddlType');
    var txtSite = $('#txtName').val();
    if (ddlStore.selectedIndex == "0") {
        ddlStore.focus()
        setTimeout(function () {
            $('.ddl_store .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtSite == "") {
        $('#txtName').focus();
        setTimeout(function () {
            $('#txtName').addClass("error")
        }, 10)
        return false;
    }
    return true;
}

/*MANAGE VENDOR CONTACT VALIDATION*/
function VendorCont_val() {
    var txtvendor = $('#txtConcernPerson').val();
    var txttaxid = $('#txtDesignation').val();
    var txtCUEmailAddress = $('#txtPrimaryEmail').val();
    //var txtSecEmailAddress = $('#txtSecondaryEmail').val();
    var ddlDepartment = document.getElementById('ddlDepartment');
    var txtCUContactNumber = document.getElementById('txtPhone');
    //var txtext = $('#txtExtension').val();
    //var txtCellNumber = document.getElementById('txtCellphone');
    //var txtAim = document.getElementById('txtAim');
    //var txtGoogle = document.getElementById('txtGoogleTalk');
    //var txtSkype = document.getElementById('txtSkype');
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    //if (txtvendor == "") {
    //    $('#txtConcernPerson').focus();
    //    setTimeout(function () {
    //        $('#txtConcernPerson').addClass("error")
    //    }, 10)
    //    return false;
    //}
    //else if (txttaxid == "") {
    //    $('#txtDesignation').focus();
    //    setTimeout(function () {
    //        $('#txtDesignation').addClass("error")
    //    }, 10)
    //    return false;
    //}
    //else
    if (!txtCUEmailAddress.match(emailValid) || txtCUEmailAddress == "") {
        $('#txtPrimaryEmail').focus();
        setTimeout(function () {
            $('#txtPrimaryEmail').addClass("error");
        }, 10)
        return false;
    }
        // else if (!txtSecEmailAddress.match(emailValid) || txtSecEmailAddress == "") {
        // $('#txtSecondaryEmail').focus();
        // setTimeout(function () {
        // $('#txtSecondaryEmail').addClass("error");
        // }, 10)
        // return false;
        // }
    else if (ddlDepartment.selectedIndex == "0") {
        ddlDepartment.focus()
        setTimeout(function () {
            $('.ddl_depart .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }

    // else if (txtext == "") {
    // $('#txtExtension').focus();
    // setTimeout(function () {
    // $('#txtExtension').addClass("error")
    // }, 10)
    // return false;
    // }
    // else if (txtCellNumber.value == "") {
    // txtCellNumber.focus()
    // setTimeout(function () {
    // $(txtCellNumber).addClass("error");
    // }, 10)

    // return false;
    // }
    // else if (txtAim.value == "") {
    // txtAim.focus()
    // setTimeout(function () {
    // $(txtAim).addClass("error");
    // }, 10)

    // return false;
    // }
    // else if (txtGoogle.value == "") {
    // txtGoogle.focus()
    // setTimeout(function () {
    // $(txtGoogle).addClass("error");
    // }, 10)

    // return false;
    // }
    // else if (txtSkype.value == "") {
    // txtSkype.focus()
    // setTimeout(function () {
    // $(txtSkype).addClass("error");
    // }, 10)

    // return false;
    // }
    return true
}


/*MANAGE PRODUCT VALIDATION*/
function Pro_val() {
    var txtSku = $('#txtSKU').val();
    var txtPname = $('#txtProductName').val();
    var ddlManu = document.getElementById('ddlManufacturer');
    var txtCat = document.getElementById('ddlCategory');
    var txtCond = document.getElementById('ddlCondition');
    var txtStore = document.getElementById('ddlStore');
    var rowCount = $('#dtAddProduct li').length;
    var pro_chtxt = $('.ch_txt').val();
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (txtSku == "") {
        $('#txtSKU').focus();
        setTimeout(function () {
            $('#txtSKU').addClass("error")
        }, 10)
        return false;
    }
    else if (txtPname == "") {
        $('#txtProductName').focus();
        setTimeout(function () {
            $('#txtProductName').addClass("error")
        }, 10)
        return false;
    }
    else if (ddlManu.selectedIndex == "0") {
        ddlManu.focus()
        setTimeout(function () {
            $('.ddl_Manu .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCat.selectedIndex == "0") {
        txtCat.focus()
        setTimeout(function () {
            $('.ddl_cat .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCond.selectedIndex == -1) {
        txtCond.focus()
        setTimeout(function () {
            $('.ddl_Cond .select2-selection--multiple').addClass("error");
        }, 10)
        return false;
    }

    else if (txtStore.selectedIndex == -1) {
        txtStore.focus()
        setTimeout(function () {
            $('.ddl_Store .select2-selection--multiple').addClass("error");
        }, 10)
        return false;
    }
    else if (pro_chtxt == "") {
        $('.ch_txt').focus();
        setTimeout(function () {
            $('.ch_txt').addClass("error")
        }, 10)
        return false;
    } else if (rowCount > 0) {
        for (var i = 0; i < rowCount; i++) {
            var rowID = $('#dtAddProduct li')[i].id;
            var newRowID = rowID.split('rowID')[1];
            var ddlCharacteristics = $('#ddlCharacteristics' + newRowID).val();
            var Value = $('#idValue' + newRowID).val();
            if ($('#ddlCharacteristics' + newRowID).val() == "0") {
                $('#ddlCharacteristics' + newRowID).focus()
                setTimeout(function () {
                    $('#ddlCharacteristics' + newRowID).addClass("error");
                }, 10)
                return false;
            }
            if (Value == "") {
                $('#idValue' + newRowID).focus()
                setTimeout(function () {
                    $('#idValue' + newRowID).addClass("error");
                }, 10)
                return false;
            }
        }
    }


    return true
}

/*MANAGE REVERT PRODUCT VALIDATION*/
function Rev_val() {
    var txtSku = $('#txtSKUV').val();
    var txtPname = $('#txtProductNameV').val();
    var ddlManu = document.getElementById('ddlManufacturerV');
    var txtCat = document.getElementById('ddlCategoryV');
    var txtCond = document.getElementById('ddlConditionV');
    var txtStore = document.getElementById('ddlStoreV');
    var rowCount = $('#dtAddProduct li').length;
    var pro_chtxt = $('.ch_txt').val();
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (txtSku == "") {
        $('#txtSKU').focus();
        setTimeout(function () {
            $('#txtSKU').addClass("error")
        }, 10)
        return false;
    }
    else if (txtPname == "") {
        $('#txtProductNameV').focus();
        setTimeout(function () {
            $('#txtProductNameV').addClass("error")
        }, 10)
        return false;
    }
    else if (ddlManu.selectedIndex == "0") {
        ddlManu.focus()
        setTimeout(function () {
            $('.ddl_Manu .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCat.selectedIndex == "0") {
        txtCat.focus()
        setTimeout(function () {
            $('.ddl_cat .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCond.selectedIndex == -1) {
        txtCond.focus()
        setTimeout(function () {
            $('.ddl_Cond .select2-selection--multiple').addClass("error");
        }, 10)
        return false;
    }

    else if (txtStore.selectedIndex == -1) {
        txtStore.focus()
        setTimeout(function () {
            $('.ddl_Store .select2-selection--multiple').addClass("error");
        }, 10)
        return false;
    }
    else if (pro_chtxt == "") {
        $('.ch_txt').focus();
        setTimeout(function () {
            $('.ch_txt').addClass("error")
        }, 10)
        return false;
    } else if (rowCount > 0) {
        for (var i = 0; i < rowCount; i++) {
            var rowID = $('#dtAddProduct li')[i].id;
            var newRowID = rowID.split('rowID')[1];
            var ddlCharacteristics = $('#ddlCharacteristics' + newRowID).val();
            var Value = $('#idValue' + newRowID).val();
            if ($('#ddlCharacteristics' + newRowID).val() == "0") {
                $('#ddlCharacteristics' + newRowID).focus()
                setTimeout(function () {
                    $('#ddlCharacteristics' + newRowID).addClass("error");
                }, 10)
                return false;
            }
            if (Value == "") {
                $('#idValue' + newRowID).focus()
                setTimeout(function () {
                    $('#idValue' + newRowID).addClass("error");
                }, 10)
                return false;
            }
        }
    }


    return true
}




/*MANAGE PO VALIDATION*/
function ManagePurchase_order_val() {
    var txtDdl_user = document.getElementById('ddlUsers');
    var txtDdlVendor = document.getElementById('idVendor');
    var txtDdlWare = document.getElementById('idWarehouse');
    //var txtDdlCountry2 = document.getElementById('idCountry');
    //var ddlForm2 = document.getElementById('#idState');
    //var ddlForm3 = document.getElementById('idCity');
    //var txtAddress1 = $('#idAddress1').val();
    var txtDdlPay = document.getElementById('ddlPaymentStatus');
    var txtPayMethod = document.getElementById('ddlpaymentMethod');
    var txtRefId = $('#ddlRef');
    var checked_1 = document.getElementById('ChkTaxable');
    var txt_amount = $('#txtTaxAmount');

    if (txtDdl_user.selectedIndex == "-1") {
        txtDdl_user.focus()
        setTimeout(function () {
            $('.div_users .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlVendor.selectedIndex == "-1") {
        txtDdlVendor.focus()
        setTimeout(function () {
            $('.div_vendor .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
        //else if (txtDdlWare.selectedIndex == "-1") {
        //    txtDdlWare.focus()
        //    setTimeout(function () {
        //        $('.div_wareHouse .select2-selection--single').addClass("error");
        //    }, 10)
        //    return false;
        //}
        //else if (txtDdlCountry2.selectedIndex == "0") {
        //        txtDdlCountry2.focus()
        //        setTimeout(function () {
        //            $('.div_country .select2-selection--single').addClass("error");
        //        }, 10)
        //        return false;
        //    }
        //    else if ($("#select2-idState-container").text() == "Please Select State") {
        //        $("#idState").focus()
        //        setTimeout(function () {
        //            $('.testing2 .select2-selection--single').addClass("error");
        //        }, 10)
        //
        //        return false;
        //    }
        //    else if (ddlForm3.selectedIndex == "0") {
        //        ddlForm3.focus()
        //        setTimeout(function () {
        //            $('.testing3 .select2-selection--single').addClass("error");
        //        }, 10)
        //
        //        return false;
        //    }
        //    else if (txtAddress1 == "") {
        //        $('#idAddress1').focus();
        //        setTimeout(function () {
        //            $('#idAddress1').addClass("error");
        //        }, 10)
        //        return false;
        //    }

    else if (txtDdlPay.selectedIndex == "2") {
        if (txtPayMethod.selectedIndex == "-1") {
            var top = $('#idddlpay').offset().top - 150; $('html, body').animate({ scrollTop: top });
            $(txtPayMethod).focus();
            $('#idddlpay .select2-selection--single').addClass("error");
            return false;
        }
        else if ($('#ddlRef').val() == "") {
            var top = $('#ddlRef').offset().top - 150; $('html, body').animate({ scrollTop: top });
            $(txtRefId).focus();
            setTimeout(function () {
                $('#ddlRef').addClass("error");
            }, 10)
            return false;
        }
        else if ($(checked_1).is(':checked')) {
            if ($('#txtTaxAmount').val() == "") {
                $('#txtTaxAmount').focus();
                setTimeout(function () {
                    $('#txtTaxAmount').addClass("error");
                }, 10)
                return false;
            }

        }
    }
    return true;

}
function ManagePurchase_order_val2() {
    var txtDdlShipCh = document.getElementById('ddlShippingChrges');
    var txtPurAmt = $('#txtPurchasedAmount');
    var txtPurAcct = $('#txtAccountNumber');
    var txtDdlPrefS = document.getElementById('ddlPreferredShipping');
    var txtPick1 = $('#txtpickupby').val();
    var txtDdlCP2 = document.getElementById('ddlCarrrierShipping');
    var txtTack = $('#txtTrackinNo').val();
    var txtFRTack = $('#txtFrieightTrackingNo').val();
    var txtACNumber = $('#txtAccountNumber').val();
    //var txtDdlST = document.getElementById('ddlStatus');
    var sel1 = $('#select2-ddlPreferredShipping-container').text();
    var sel1_2 = $('#select2-ddlShippingChrges-container').text();
    //if (txtDdlShipCh.selectedIndex == "0") {
    //    txtDdlShipCh.focus()
    //    setTimeout(function () {
    //        $('.div_shippingcharges .select2-selection--single').addClass("error");
    //    }, 10)
    //    return false;
    //}
    if (txtDdlShipCh.selectedIndex == "1") {
        if ($('#txtPurchasedAmount').val() == "") {
            $('#txtPurchasedAmount').focus();
            setTimeout(function () {
                $('#txtPurchasedAmount').addClass("error");
            }, 10)
            return false;
        }
        if (sel1 == '×Carrier') {
            if (txtDdlCP2.selectedIndex == 0) {
                $(txtDdlCP2).focus()
                var top = $('#idcar').offset().top - 150; $('html, body').animate({ scrollTop: top });
                setTimeout(function () {
                    $('.div_carrier .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1 == '×Local Pickup') {
            if (txtPick1 == "") {
                $('#txtpickupby').focus()
                setTimeout(function () {
                    $('#txtpickupby').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1 == '×Frieght') {
            if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
            else if (txtFRTack == "") {
                $('#txtFrieightTrackingNo').focus()
                setTimeout(function () {
                    $('#txtFrieightTrackingNo').addClass("error");
                }, 10)
                return false;
            }
        }
    }
    else if (txtDdlShipCh.selectedIndex == "2") {
        if ($('#txtAccountNumber').val() == "") {
            $('#txtAccountNumber').focus();
            setTimeout(function () {
                $('#txtAccountNumber').addClass("error");
            }, 10)
            return false;
        }
    }
    //else if (txtDdlST.selectedIndex == 0) {
    //$(txtDdlST).focus()
    // setTimeout(function () {
    //$('.div_status .select2-selection--single').addClass("error");
    //}, 10)
    //return false;
    //}
    return true;
}


function ManagePurchase_order_val3() {
    var txtBillName = $('#txtBillingName').val();
    var txtAddBilling = $('#txtAddressBilling').val();
    var txtbillingCountry = document.getElementById('ddlCountry');
    var ddlForm2 = document.getElementById('ddlState');
    var ddlForm3 = document.getElementById('ddlCity');
    var txtZipCode = $('#txtZipCode').val();
    var txtCntct = $('#txtContact').val();
    if (txtBillName == "") {
        $('#txtBillingName').focus();
        setTimeout(function () {
            $('#txtBillingName').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddBilling == "") {
        $('#txtAddressBilling').focus();
        setTimeout(function () {
            $('#txtAddressBilling').addClass("error");
        }, 10)
        return false;
    }
    else if (txtbillingCountry.selectedIndex == 0) {
        $(txtbillingCountry).focus()
        setTimeout(function () {
            $('.div_Bcountry .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if ($("#select2-ddlState-container").text() == "Please Select State") {
        $("#select2-ddlState-container").focus()
        setTimeout(function () {
            $('.testing3 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (ddlForm3.selectedIndex == "0") {
        ddlForm3.focus()
        setTimeout(function () {
            $('.testing4 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (txtZipCode == "") {
        $('#txtZipCode').focus();
        setTimeout(function () {
            $('#txtZipCode').addClass("error");
        }, 10)
        return false;
    }
    //else if (txtCntct == "") {
    //    $('#txtContact').focus();
    //    setTimeout(function () {
    //        $('#txtContact').addClass("error");
    //    }, 10)
    //    return false;
    //}
    return true;
}


function ManagePurchase_order_val4() {
    if (!ManagePurchase_order_val()) {
        return false;
    }
    //if (!ManagePurchase_order_val2()) {
    //    return false;
    //}
    if (!ManagePurchase_order_val3()) {
        return false;
    }
    var txtShipping = $('#txtShipping').val();
    var txtAddress = $('#txtAddress').val();
    var txtCountryShip = document.getElementById('ddlCountryShip');
    var ddlForm2 = document.getElementById('ddlStateShip');
    var ddlForm3 = document.getElementById('ddlCityShip');
    var txtZp = $('#txtZip').val();
    var rowCount = $('#DTWrapper tr').length;
    var pro_qountity = $('.Q_validation').val();
    var pro_cost = $('.Cost_validation').val();
    var reg = ".";
    if (txtShipping == "") {
        $('#txtShipping').focus();
        setTimeout(function () {
            $('#txtShipping').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddress == "") {
        $('#txtAddress').focus();
        setTimeout(function () {
            $('#txtAddress').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCountryShip.selectedIndex == 0) {
        $(txtCountryShip).focus()
        setTimeout(function () {
            $('.div_Shipcountry .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if ($("#select2-ddlStateShip-container").text() == "Please Select State") {
        //$("#select2-ddlStateShip-container").focus()
        ddlForm2.focus();
        setTimeout(function () {
            $(ddlForm2).addClass("error");
            $("#select2-ddlStateShip-container").addClass("error");
            //$('.testing5 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (ddlForm3.selectedIndex == "0") {
        ddlForm3.focus()
        setTimeout(function () {
            $("#select2-ddlCityShip-container").addClass("error");

            //$('.testing6 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (txtZp == "") {
        $('#txtZip').focus();
        setTimeout(function () {
            $('#txtZip').addClass("error");
        }, 10)
        return false;
    }
    else if (rowCount == 0) {
        $('.add_product span').text('Please Add Some Product')
        return false;
    }


    else if (pro_cost == "") {
        $('.Cost_validation').focus();
        setTimeout(function () {
            $('.Cost_validation').addClass("error")
        }, 10)
        return false;
    }

    return true;
}
/*------------- Number Only validation on KeyPress ------------*/



/*------------- Remove error message ------------*/

function removeClientErrorMessage() {
    $('input, select , textarea, .select2-selection--multiple, .select2-selection--single, .select2-selection__rendered').each(function () {
        $(this).removeClass('error')
        $(this).parent().removeClass('error')
        $('.note-editable').removeClass('error')
        $('#error_message').slideUp();
        //$('.chkboxError').removeClass('chkboxError');
    })
}
$('input').keydown(function () {
    removeClientErrorMessage()
})
$('input').blur(function () {
    removeClientErrorMessage()
})
$('input').change(function () {
    removeClientErrorMessage()
})
$('select').change(function () {
    removeClientErrorMessage()
})
$('select').click(function () {
    removeClientErrorMessage()
})
$('select').blur(function () {
    removeClientErrorMessage()
})
$('textarea').keyup(function () {
    removeClientErrorMessage()
})
$('textarea').click(function () {
    removeClientErrorMessage()
})
$('textarea').blur(function () {
    removeClientErrorMessage()
})
$('.select2-selection--multiple').blur(function () {
    removeClientErrorMessage()
})
$('.select2-selection--multiple').click(function () {
    removeClientErrorMessage()
})
$('.select2-selection--multiple').keyup(function () {
    removeClientErrorMessage()
})
$('.select2-selection--single').blur(function () {
    removeClientErrorMessage()
})
$('.select2-selection--single').click(function () {
    removeClientErrorMessage()
})
$('.select2-selection--single').keyup(function () {
    removeClientErrorMessage()
})
$('.select2-selection__rendered').blur(function () {
    removeClientErrorMessage()
})
$('.select2-selection__rendered').click(function () {
    removeClientErrorMessage()
})
$('.select2-selection__rendered').keyup(function () {
    removeClientErrorMessage()
})
/*------------- Remove error message  End ------------*/




//$(document).keypress(keydownHandler);

//function keydownHandler(e) {
//    var activeSelectBox = $('.select2-container.select2-container--focus').prev('.select2');
//    activeSelectBox.select2('open');

//    activeChar = String.fromCharCode(e.which);
//    setTimeout(function () {
//        $('.select2-container--open').find('.select2-search__field').val(activeChar);
//    }, 30);
//}


/*MANAGE PO VALIDATION*/
function porma_order_val() {
    var txtpoID = document.getElementById('ddlPOID');
    var txtDdl_action = document.getElementById('ddlAction');
    var txtDdlVendor = document.getElementById('idVendor');
    var txtDdlWare = document.getElementById('idWarehouse');
    var txtDdlCountry2 = document.getElementById('idCountry');
    var txtAddress1 = $('#idAddress1').val();
    var txtComment = $('#idComments').val();
    var txtDdlPay = document.getElementById('ddlPaymentStatus');

    if (txtpoID.selectedIndex == 0) {
        txtpoID.focus()
        setTimeout(function () {
            $(txtpoID).addClass("error");
        }, 10)
        return false;
    }
        //else if (txtDdl_action.selectedIndex == 0) {
        //    txtDdl_action.focus()
        //    setTimeout(function () {
        //        $('.div_action .select2-selection--single').addClass("error");
        //    }, 10)
        //    return false;
        //}
    else if (txtDdlVendor.selectedIndex == 0) {
        txtDdlVendor.focus()
        setTimeout(function () {
            $('.div_vendor .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlWare.selectedIndex == 0) {
        txtDdlWare.focus()
        setTimeout(function () {
            $('.div_wareHouse .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlCountry2.selectedIndex == 0) {
        txtDdlCountry2.focus()
        setTimeout(function () {
            $('.div_country .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddress1 == "") {
        $('#idAddress1').focus();
        setTimeout(function () {
            $('#idAddress1').addClass("error");
        }, 10)
        return false;
    }
    else if (txtComment == "") {
        $('#idComments').focus();
        setTimeout(function () {
            $('#idComments').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlPay.selectedIndex == 0) {
        txtDdlPay.focus()
        setTimeout(function () {
            $('.ddl_Payment .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    return true;
}
function porma_order_val3() {
    var txtBillName = $('#txtBillingName').val();
    var txtAddBilling = $('#txtAddressBilling').val();
    var txtDdlCountry = document.getElementById('ddlCountry');
    var txtZipCode = $('#txtZipCode').val();
    //var txtCntct = $('#txtContact').val();
    if (txtBillName == "") {
        $('#txtBillingName').focus();
        setTimeout(function () {
            $('#txtBillingName').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddBilling == "") {
        $('#txtAddressBilling').focus();
        setTimeout(function () {
            $('#txtAddressBilling').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlCountry.selectedIndex == 0) {
        $(txtDdlCountry).focus()
        setTimeout(function () {
            $('.div_Bcountry .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtZipCode == "") {
        $('#txtZipCode').focus();
        setTimeout(function () {
            $('#txtZipCode').addClass("error");
        }, 10)
        return false;
    }
    //else if (txtCntct == "") {
    //        $('#txtContact').focus();
    //        setTimeout(function () {
    //            $('#txtContact').addClass("error");
    //        }, 10)
    //        return false;
    //    }
    return true;
}


function porma_order_val4() {
    if (!porma_order_val()) {
        return false;
    } if (!porma_order_val2()) {
        return false;
    } if (!porma_order_val3()) {
        return false;
    }
    var txtShipping = $('#txtShipping').val();
    var txtAddress = $('#txtAddress').val();
    var txtCountryShip = document.getElementById('ddlCountryShip');
    var txtZp = $('#txtZip').val();
    if (txtShipping == "") {
        $('#txtShipping').focus();
        setTimeout(function () {
            $('#txtShipping').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddress == "") {
        $('#txtAddress').focus();
        setTimeout(function () {
            $('#txtAddress').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCountryShip.selectedIndex == 0) {
        $(txtCountryShip).focus()
        setTimeout(function () {
            $('.div_Shipcountry .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (txtZp == "") {
        $('#txtZip').focus();
        setTimeout(function () {
            $('#txtZip').addClass("error");
        }, 10)
        return false;
    }

    return true;
}
function porma_order_val2() {
    var txtDdlPrefS = document.getElementById('ddlPreferredShipping');
    var txtPick1 = $('#dlR').val();
    var txtDdlCP2 = document.getElementById('ddlCarrrierShipping');
    var txtTack = $('#txtTrackinNo').val();
    //var txtTrSt = $('#txtTrackingStatus').val();
    var txtFRTack = $('#txtFrieightTrackingNo').val();
    var txtDdlShipCh = document.getElementById('ddlShippingChrges');
    var txtACNumber = $('#txtAccountNumber').val();
    var txtDdlST = document.getElementById('ddlStatus');
    var sel1 = $('#select2-ddlPreferredShipping-container').text();
    if (txtDdlPrefS.selectedIndex == 0) {
        txtDdlPrefS.focus()
        setTimeout(function () {
            $('.div_shipping .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else {
        if (sel1 == 'Return') {
            if (txtPick1 == "") {
                $('#dlR').focus()
                setTimeout(function () {
                    $('#dlR').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1 == 'Carrier') {
            if (txtDdlCP2.selectedIndex == 0) {
                $(txtDdlCP2).focus()
                setTimeout(function () {
                    $('.div_carrier .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
            //else if (txtTrSt == "") {
            //    $('#txtTrackingStatus').focus()
            //    setTimeout(function () {
            //        $('#txtTrackingStatus').addClass("error");
            //    }, 10)
            //    return false;
            //}
        }
        else if (sel1 == 'Frieght') {
            if (txtFRTack == "") {
                $('#txtFrieightTrackingNo').focus()
                setTimeout(function () {
                    $('#txtFrieightTrackingNo').addClass("error");
                }, 10)
                return false;
            }
        }
    }
    if (txtDdlShipCh.selectedIndex == 0) {
        $(txtDdlShipCh).focus()
        setTimeout(function () {
            $('.div_shippingcharges .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtACNumber == "") {
        $('#txtAccountNumber').focus();
        setTimeout(function () {
            $('#txtAccountNumber').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlST.selectedIndex == 0) {
        $(txtDdlST).focus()
        setTimeout(function () {
            $('.div_status .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    return true;
}




function manage_pa() {
    var ddlbilling = document.getElementById('ddlPOID');
    var txtDdlCountry = document.getElementById('ddlAction');
    var txtZipCode = $('#txtZipCode').val();
    var txtCntct = $('#txtContact').val();
    if (ddlbilling.selectedIndex == 0) {
        ddlbilling.focus();
        setTimeout(function () {
            $(ddlbilling).addClass('error')
        }, 10);
        return false;
    }
    else if (txtAddBilling == "") {
        $('#txtAddressBilling').focus();
        setTimeout(function () {
            $('#txtAddressBilling').addClass("error");
        }, 10)
        return false;
    }
        //else if (txtDdlCountry.selectedIndex == 0) {
        //    $(txtDdlCountry).focus()
        //    setTimeout(function () {
        //        $('.div_action .select2-selection--single').addClass("error");
        //    }, 10)
        //    return false;
        //}
    else if (txtZipCode == "") {
        $('#txtZipCode').focus();
        setTimeout(function () {
            $('#txtZipCode').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCntct == "") {
        $('#txtContact').focus();
        setTimeout(function () {
            $('#txtContact').addClass("error");
        }, 10)
        return false;
    }
    return true;
}
function manage_order_val() {
    var ddlbilling = document.getElementById('ddlPOID');
    var txtDdlPrefS = document.getElementById('ddlAction');
    var txtPick1 = $('#ddlReturn').val();
    var txtTack = $('#ddlNoreturn').val();
    var sel1 = $('#select2-ddlAction-container').text();
    if (ddlbilling.selectedIndex == "0") {
        ddlbilling.focus();
        setTimeout(function () {
            $('.pp_div .select2-selection--single').addClass('error')
        }, 10);
        return false;
    }
    //else if (txtDdlPrefS.selectedIndex == 0) {
    //    txtDdlPrefS.focus()
    //    setTimeout(function () {
    //        $('.div_action .select2-selection--single').addClass("error");
    //    }, 10)
    //    return false;
    //}
    //else {
    //    if (sel1 == 'Return') {
    //        if (txtPick1 == "0") {
    //            $('#dlR').focus()
    //            setTimeout(function () {
    //                $('.div_adjust1 .select2-selection--single').addClass("error");
    //            }, 10)
    //            return false;
    //        }
    //    }
    //    else if (sel1 == 'No Return') {
    //        if (txtTack == "0") {
    //            $(txtTack).focus()
    //            setTimeout(function () {
    //                $('.div_adjust2 .select2-selection--single').addClass("error");
    //            }, 10)
    //            return false;
    //        }

    //    }
    //    return true;
    //}
}
function manage_order_val2() {
    var txtDdlPrefS = document.getElementById('ddlPreferredShipping');
    var txtPick1 = $('#txtpickupby').val();
    var txtDdlCP2 = document.getElementById('ddlCarrrierShipping');
    var txtTack = $('#txtTrackinNo').val();
    var txtTrSt = $('#txtTrackingStatus').val();
    var txtFRTack = $('#txtFrieightTrackingNo').val();
    var txtDdlShipCh = document.getElementById('ddlShippingChrges');
    var txtACNumber = $('#txtAmount').val();
    var txtDdlST = document.getElementById('ddlStatus');
    var sel12 = $('#select2-ddlPreferredShipping-container').text();
    if (txtDdlPrefS.selectedIndex == 0) {
        txtDdlPrefS.focus()
        setTimeout(function () {
            $('.div_shipping .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else {
        if (sel12 == 'Local Pickup') {
            if (txtPick1 == "") {
                $('#txtpickupby').focus()
                setTimeout(function () {
                    $('#txtpickupby').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel12 == 'Carrier') {
            if (txtDdlCP2.selectedIndex == 0) {
                $(txtDdlCP2).focus()
                setTimeout(function () {
                    $('.div_carrier .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTrSt == "") {
                $('#txtTrackingStatus').focus()
                setTimeout(function () {
                    $('#txtTrackingStatus').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel12 == 'Frieght') {
            if (txtFRTack == "") {
                $('#txtFrieightTrackingNo').focus()
                setTimeout(function () {
                    $('#txtFrieightTrackingNo').addClass("error");
                }, 10)
                return false;
            }
        }
    }
    if (txtDdlShipCh.selectedIndex == 0) {
        $(txtDdlShipCh).focus()
        setTimeout(function () {
            $('.div_shippingcharges .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtACNumber == "") {
        $('#txtAmount').focus();
        setTimeout(function () {
            $('#txtAmount').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlST.selectedIndex == 0) {
        $(txtDdlST).focus()
        setTimeout(function () {
            $('.div_status .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    return true;
}
function Manage_order_val4() {
    if (!manage_order_val()) {
        return false;
    } if (!manage_order_val2()) {
        return false;
    }
    var txtShipping = $('#txtShipping').val();
    var txtAddress = $('#txtAddress').val();
    var txtCountryShip = document.getElementById('ddlCountryShip');
    var txtZp = $('#txtZip').val();
    //var rowCount = $('#DTWrapper tr').length;
    var txtRfid = $('#idRefid').val();
    var txtdate = $('#idRefundDate').val();
    var txtrefmethod = document.getElementById('ddlpaymentMethod');
    var txtrefamount = $('#idRefundAmount').val();
    var reg = ".";
    if (txtShipping == "") {
        $('#txtShipping').focus();
        setTimeout(function () {
            $('#txtShipping').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddress == "") {
        $('#txtAddress').focus();
        setTimeout(function () {
            $('#txtAddress').addClass("error");
        }, 10)
        return false;
    }
    else if (txtCountryShip.selectedIndex == 0) {
        $(txtCountryShip).focus()
        setTimeout(function () {
            $('.div_Shipcountry .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (txtZp == "") {
        $('#txtZip').focus();
        setTimeout(function () {
            $('#txtZip').addClass("error");
        }, 10)
        return false;
    }
    //else if (rowCount == 0) {
    //    $('.add_product span').text('Please Add Some Product')
    //    return false;
    //}
    //var rowCount = $('#DTWrapper tr').length;
    //for (var i = 0; i < rowCount; i++) {
    //    var rowID = $('#DTWrapper tr')[i].id;
    //    var newRowID = rowID.split('rowID')[1];
    //    var qty = $('#idQuantity' + newRowID).val();
    //    var unit = $('#idUnitCost' + newRowID).val();
    //}
    if ($("#DTWrapper input[type=radio]:checked").length < 1) {
        //$('.add_product span').text('Please Add Some Product')
        alert("Please select One product");
        return false;
    }
        //if ($("#DTWrapper input[type=radio]:checked")) {
        //    var count = $("#DTWrapper input[type=radio]:checked").length;
        //    for (var i = 0; i < count; i++) {
        //        if (true) {

        //        }
        //        var rowID = $('#DTWrapper input[type=radio]:checked')[i].id;
        //        var newRowID = rowID.split('rowID-')[0];

        //        var lblSku = $('#lblSKU-' + newRowID).text();
        //        var lblProduct = $('#lblProduct-' + newRowID).text();
        //        var lblDescription = $('#lblDescription-' + newRowID).text();
        //        var lblCondition = $('#lblCondition-' + newRowID).text();
        //        var lblOrderQuantity = $('#lblOrderQuantity-' + newRowID).text();
        //        var lblReceivedQuantity = $('#lblReceivedQuantity-' + newRowID).text();
        //        var lblVarienceQunatity = $('#lblVarienceQunatity-' + newRowID).text();
        //        var ddlabc = $('#ddlabc-' + newRowID).val();
        //        var idComment = $('#idComment-' + newRowID).text();
        //    }

        //}

        //if (qty == "" || qty == "0") {
        //    $('#idQuantity' + newRowID).focus();
        //    setTimeout(function () {
        //        $('#idQuantity' + newRowID).addClass("error")
        //    }, 10)
        //    return false;
        //}
        //if (unit == "" || unit == "0") {
        //    $('#idUnitCost' + newRowID).focus();
        //    setTimeout(function () {
        //        $('#idUnitCost' + newRowID).addClass("error")
        //    }, 10)
        //    return false;

        //}


        //else if (txtRfid == "") {
        //    $('#idRefid').focus();
        //    setTimeout(function () {
        //        $('#idRefid').addClass("error");
        //    }, 10)
        //    return false;
        //}
    else if (txtdate == "") {
        $('#idRefundDate').focus();
        setTimeout(function () {
            $('#idRefundDate').addClass("error");
        }, 10)
        return false;
    }
    //else if (txtrefmethod.selectedIndex == 0) {
    //    $(txtrefmethod).focus()
    //    setTimeout(function () {
    //        $('.div_refund .select2-selection--single').addClass("error");
    //    }, 10)

    //    return false;
    //}
    //else if (!txtrefamount.match(reg) || txtrefamount == "") {
    //    $('#idRefundAmount').focus();
    //    setTimeout(function () {
    //        $('#idRefundAmount').addClass("error");
    //    }, 10)
    //    return false;
    //}

    return true;
}
function checkValidation(evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57)) {
        $(this).addClass('error')
        return false;
    }
    else if ((event.which < 48 || event.which > 57)) {
        $(this).addClass('error')
        return false;
        event.preventDefault();
    }
}
function success_msg(msg, newLocation) {
    $(window).scrollTop($('body').position().top - 100);
    $('.lockScreen').fadeIn();
    $('.success_msg_cotnainer').fadeIn();
    $('.success_msg_cotnainer span').text(msg);
    if (newLocation == "DontLoad") {
        setTimeout(function () {
            $('.lockScreen').fadeOut();
            $('.success_msg_cotnainer').fadeOut();
        }, 3000);
    } else {
        setTimeout(function () {
            if (typeof newLocation === "undefined") {
                location.href = window.location.href;
            } else {
                location.href = newLocation;
            }
        }, 3000);
    }
}
function success_msg_close() {
    $('.lockScreen').fadeOut();
    $('.success_msg_cotnainer').fadeOut();
    location.reload();
}
function error_msg(errormsg) {
    $(window).scrollTop($('body').position().top - 100);
    $('.error_msg_container').slideDown();
    $('.error_msg_container span').html(errormsg)
}
$('.close_error').click(function () {
    $('.error_msg_container').slideUp();
})


$(function () {
    $(".menu_content input, .menu_content select").keypress(function (e) {
        if ((e.which && e.which == 13) || (e.keyCode && e.keyCode == 13)) {
            //$('#btnSave').click();
            return false;
        } else {
            return true;
        }
    });
});





/*MANAGE SO VALIDATION*/
function SO_val() {
    var txtDdl_SalesOR = document.getElementById('ddlSO');
    var txtDdl_cust = document.getElementById('ddlCustomer');
    var txtDdlSales = document.getElementById('ddlSalesRep');
    var txtddlRes = document.getElementById('ddlResource');
    var txtResID = $('#txtResourceID').val();
    var txtddlPaid = document.getElementById('ddlPaid');
    var txtddlPaymentPaypal = document.getElementById('ddlPaymentPaypal');
    var txtTransactionID = $('#txtTransactionID').val();
    var checked_1 = document.getElementById('ChkTaxable');
    var txt_amount = $('#txtTaxAmount');
    var txtDdlShipCh = document.getElementById('ddlShippingChrges');
    var txtPurAmt = $('#txtPurchasedAmount');
    var txtPurAcct = $('#txtAccountNumber');
    var txtDdlPrefS = document.getElementById('ddlPreferredShipping');
    var txtPick1 = $('#txtpickupby').val();
    var txtDdlCP2 = document.getElementById('ddlCarrrierShipping');
    var txtTack = $('#txtTrackinNo').val();
    var sel1 = $('#select2-ddlPaid-container').text();
    var sel1_2 = $('#select2-ddlPreferredShipping-container').text();

    if (txtDdl_SalesOR.selectedIndex == "0") {
        txtDdl_SalesOR.focus()
        setTimeout(function () {
            $('.testing9 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (txtDdl_cust.selectedIndex == "0") {
        txtDdl_cust.focus()
        setTimeout(function () {
            $('.div_select1 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtDdlSales.selectedIndex == "0") {
        txtDdlSales.focus()
        setTimeout(function () {
            $('.div_select2 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtddlRes.selectedIndex == "0") {
        txtddlRes.focus()
        setTimeout(function () {
            $('.div_select4 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtResID == "") {
        $('#txtResourceID').focus();
        setTimeout(function () {
            $('#txtResourceID').addClass("error");
        }, 10)
        return false;
    }
    //else if (txtddlPaid.selectedIndex == "0") {
    //    txtddlPaid.focus()
    //    setTimeout(function () {
    //        $('.div_select5 .select2-selection--single').addClass("error");
    //    }, 10)
    //    return false;
    //}
    if (sel1 == '×Paypal') {
        if (txtddlPaymentPaypal.selectedIndex == 0) {
            $(txtddlPaymentPaypal).focus()
            setTimeout(function () {
                $('#ddlPaymentPaypal').addClass("error");
            }, 10)
            return false;
        }
        else if (txtTransactionID == "") {
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
        if ($("#Error2").is(":visible")) {
            // remove hidden class
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
    }
    else if (sel1 == '×Stripe CC') {
        if (txtddlPaymentPaypal.selectedIndex == 0) {
            $(txtddlPaymentPaypal).focus()
            setTimeout(function () {
                $('#ddlPaymentPaypal').addClass("error");
            }, 10)
            return false;
        }
        else if (txtTransactionID == "") {
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
        if ($("#Error2").is(":visible")) {
            // remove hidden class
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
        //return false;
    }
    else if ($(checked_1).is(':checked')) {
        if ($('#txtTaxAmount').val() == "") {
            $('#txtTaxAmount').focus();
            setTimeout(function () {
                $('#txtTaxAmount').addClass("error");
            }, 10)
            return false;
        }
        //return false;
    }
    if ($("#Error").is(":visible")) {
        // remove hidden class
        $('#txtResourceID').focus();
        setTimeout(function () {
            $('#txtResourceID').addClass("error");
        }, 10)
        return false;
    }

    //if (txtDdlShipCh.selectedIndex == "0") {
    //    txtDdlShipCh.focus()
    //    setTimeout(function () {
    //        $('.div_shippingcharges .select2-selection--single').addClass("error");
    //    }, 10)
    //    return false;
    //}
    if (txtDdlShipCh.selectedIndex == "1") {
        if ($('#txtPurchasedAmount').val() == "") {
            $('#txtPurchasedAmount').focus();
            setTimeout(function () {
                $('#txtPurchasedAmount').addClass("error");
            }, 10)
            return false;
        }
        if (sel1_2 == '×Carrier') {
            if (txtDdlCP2.selectedIndex == 0) {
                $(txtDdlCP2).focus()
                var top = $('#idcar').offset().top - 150; $('html, body').animate({ scrollTop: top });
                setTimeout(function () {
                    $('.div_carrier .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1_2 == '×Local Pickup') {
            if (txtPick1 == "") {
                $('#txtpickupby').focus()
                setTimeout(function () {
                    $('#txtpickupby').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1_2 == '×Frieght') {
            if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
        }
    }
    else if (txtDdlShipCh.selectedIndex == "2") {
        if ($('#txtAccountNumber').val() == "") {
            $('#txtAccountNumber').focus();
            setTimeout(function () {
                $('#txtAccountNumber').addClass("error");
            }, 10)
            return false;
        }
    }
    return true;
}

function SO_val_new() {
    var txtDdl_SalesOR = document.getElementById('ddlSO');
    //var txtDdl_cust = document.getElementById('ddlCustomer');
    var txtDdlSales = document.getElementById('ddlSalesRep');
    var txtddlRes = document.getElementById('ddlResource');
    var txtResID = $('#txtResourceID').val();
    var txtddlPaid = document.getElementById('ddlPaid');
    var txtddlPaymentPaypal = document.getElementById('ddlPaymentPaypal');
    var txtTransactionID = $('#txtTransactionID').val();
    var checked_1 = document.getElementById('ChkTaxable');
    var txt_amount = $('#txtTaxAmount');
    var txtDdlShipCh = document.getElementById('ddlShippingChrges');
    var txtPurAmt = $('#txtPurchasedAmount');
    var txtPurAcct = $('#txtAccountNumber');
    var txtDdlPrefS = document.getElementById('ddlPreferredShipping');
    var txtPick1 = $('#txtpickupby').val();
    var txtDdlCP2 = document.getElementById('ddlCarrrierShipping');
    var txtTack = $('#txtTrackinNo').val();
    var sel1 = $('#select2-ddlPaid-container').text();
    var sel1_2 = $('#select2-ddlPreferredShipping-container').text();

    if (txtDdl_SalesOR.selectedIndex == "0") {
        txtDdl_SalesOR.focus()
        setTimeout(function () {
            $('.testing9 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

        // else if (txtDdl_cust.selectedIndex == "0") {
        // txtDdl_cust.focus()
        // setTimeout(function () {
        // $('.div_select1 .select2-selection--single').addClass("error");
        // }, 10)
        // return false;
        // }
    else if (txtDdlSales.selectedIndex == "0") {
        txtDdlSales.focus()
        setTimeout(function () {
            $('.div_select2 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtddlRes.selectedIndex == "0") {
        txtddlRes.focus()
        setTimeout(function () {
            $('.div_select4 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtResID == "") {
        $('#txtResourceID').focus();
        setTimeout(function () {
            $('#txtResourceID').addClass("error");
        }, 10)
        return false;
    }
    //else if (txtddlPaid.selectedIndex == "0") {
    //    txtddlPaid.focus()
    //    setTimeout(function () {
    //        $('.div_select5 .select2-selection--single').addClass("error");
    //    }, 10)
    //    return false;
    //}
    if (sel1 == '×Paypal') {
        if (txtddlPaymentPaypal.selectedIndex == 0) {
            $(txtddlPaymentPaypal).focus()
            setTimeout(function () {
                $('#ddlPaymentPaypal').addClass("error");
            }, 10)
            return false;
        }
        else if (txtTransactionID == "") {
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
        if ($("#Error2").is(":visible")) {
            // remove hidden class
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
    }
    else if (sel1 == '×Stripe CC') {
        if (txtddlPaymentPaypal.selectedIndex == 0) {
            $(txtddlPaymentPaypal).focus()
            setTimeout(function () {
                $('#ddlPaymentPaypal').addClass("error");
            }, 10)
            return false;
        }
        else if (txtTransactionID == "") {
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
        if ($("#Error2").is(":visible")) {
            // remove hidden class
            $('#txtTransactionID').focus();
            setTimeout(function () {
                $('#txtTransactionID').addClass("error");
            }, 10)
            return false;
        }
        //return false;
    }
    else if ($(checked_1).is(':checked')) {
        if ($('#txtTaxAmount').val() == "") {
            $('#txtTaxAmount').focus();
            setTimeout(function () {
                $('#txtTaxAmount').addClass("error");
            }, 10)
            return false;
        }
        //return false;
    }
    if ($("#Error").is(":visible")) {
        // remove hidden class
        $('#txtResourceID').focus();
        setTimeout(function () {
            $('#txtResourceID').addClass("error");
        }, 10)
        return false;
    }

    //if (txtDdlShipCh.selectedIndex == "0") {
    //    txtDdlShipCh.focus()
    //    setTimeout(function () {
    //        $('.div_shippingcharges .select2-selection--single').addClass("error");
    //    }, 10)
    //    return false;
    //}
    if (txtDdlShipCh.selectedIndex == "1") {
        if ($('#txtPurchasedAmount').val() == "") {
            $('#txtPurchasedAmount').focus();
            setTimeout(function () {
                $('#txtPurchasedAmount').addClass("error");
            }, 10)
            return false;
        }
        if (sel1_2 == '×Carrier') {
            if (txtDdlCP2.selectedIndex == 0) {
                $(txtDdlCP2).focus()
                var top = $('#idcar').offset().top - 150; $('html, body').animate({ scrollTop: top });
                setTimeout(function () {
                    $('.div_carrier .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1_2 == '×Local Pickup') {
            if (txtPick1 == "") {
                $('#txtpickupby').focus()
                setTimeout(function () {
                    $('#txtpickupby').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1_2 == '×Frieght') {
            if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
        }
    }
    else if (txtDdlShipCh.selectedIndex == "2") {
        if ($('#txtAccountNumber').val() == "") {
            $('#txtAccountNumber').focus();
            setTimeout(function () {
                $('#txtAccountNumber').addClass("error");
            }, 10)
            return false;
        }
    }
    return true;
}

function SO_val_more_new() {
    result = SO_val();
    if (result == true) {
        var txtddlSO = document.getElementById('ddlSO');
        var rowCount = $('#DTWrapper1 tr').length;
        var rowCount_2 = $('#DTWrapper2 tr').length;
        var reg = ".";
        if (txtddlSO.selectedIndex == "0") {
            $(txtddlSO).focus()
            setTimeout(function () {
                $(txtddlSO).addClass("error");
            }, 10)
            return false;
        }
        else if (($('#ddlSO option:selected').text() == "Regular")) {
            if (rowCount_2 == 0) {
                $('.add_product span').text('Please Add Some Product (regular)')
                return false;
            }
            var rowCount = $('#DTWrapper2 tr').length;
            for (var i = 0; i < rowCount; i++) {
                var rowID = $('#DTWrapper2 tr')[i].id;
                var newRowID = rowID.split('rowID2')[1];
                var prdt = $('#idProductt' + newRowID).val();
                var cond = $('#idConditionn' + newRowID).val();
                var qty = $('#idQuantity' + newRowID).val();
                var unit = $('#idUnitCost' + newRowID).val();
                if (prdt == "0") {
                    $('#idProductt' + newRowID).focus();
                    setTimeout(function () {
                        $('.idproductClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (cond == "0") {
                    $('#idConditionn' + newRowID).focus();
                    setTimeout(function () {
                        $('.idConditionClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (qty == "" || qty == "0") {
                    $('#idQuantity' + newRowID).focus();
                    setTimeout(function () {
                        $('#idQuantity' + newRowID).addClass("error")
                    }, 10)
                    return false;
                }
                if (unit == "") {
                    $('#idUnitCost' + newRowID).focus();
                    setTimeout(function () {
                        $('#idUnitCost' + newRowID).addClass("error")
                    }, 10)
                    return false;

                }
            }
        }
        else if ($('#ddlSO option:selected').text() == "DropShip") {
            if (rowCount == 0) {
                $('.add_product span').text('Please Add Some Product (dropship)')
                return false;
            }
            var rowCount = $('#DTWrapper1 tr').length;
            for (var i = 0; i < rowCount; i++) {
                var rowID = $('#DTWrapper1 tr')[i].id;
                var newRowID = rowID.split('rowID1')[1];
                var prdt = $('#idProduct' + newRowID).val();
                var cond = $('#idCondition' + newRowID).val();
                var qty = $('#idQuantity' + newRowID).val();
                var unit = $('#idUnitCost' + newRowID).val();
                if (prdt == "0") {
                    $('#idProductt' + newRowID).focus();
                    setTimeout(function () {
                        $('.idproductClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (cond == "0") {
                    $('#idConditionn' + newRowID).focus();
                    setTimeout(function () {
                        $('.idConditionClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (qty == "" || qty == "0") {
                    $('#idQuantity' + newRowID).focus();
                    setTimeout(function () {
                        $('#idQuantity' + newRowID).addClass("error")
                    }, 10)
                    return false;
                }
                if (unit == "") {
                    $('#idUnitCost' + newRowID).focus();
                    setTimeout(function () {
                        $('#idUnitCost' + newRowID).addClass("error")
                    }, 10)
                    return false;
                }
            }
        }
        return true;
    }
}



function SO_val_more() {
    result = SO_val();
    if (result == true) {
        var txtddlSO = document.getElementById('ddlSO');
        var rowCount = $('#DTWrapper1 tr').length;
        var rowCount_2 = $('#DTWrapper2 tr').length;
        var reg = ".";
        if (txtddlSO.selectedIndex == "0") {
            $(txtddlSO).focus()
            setTimeout(function () {
                $(txtddlSO).addClass("error");
            }, 10)
            return false;
        }
        else if (($('#ddlSO option:selected').text() == "Regular")) {
            if (rowCount_2 == 0) {
                $('.add_product span').text('Please Add Some Product (regular)')
                return false;
            }
            var rowCount = $('#DTWrapper2 tr').length;
            for (var i = 0; i < rowCount; i++) {
                var rowID = $('#DTWrapper2 tr')[i].id;
                var newRowID = rowID.split('rowID2')[1];
                var prdt = $('#idProductt' + newRowID).val();
                var cond = $('#idConditionn' + newRowID).val();
                var qty = $('#idQuantity' + newRowID).val();
                var unit = $('#idUnitCost' + newRowID).val();
                if (prdt == "0") {
                    $('#idProductt' + newRowID).focus();
                    setTimeout(function () {
                        $('.idproductClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (cond == "0") {
                    $('#idConditionn' + newRowID).focus();
                    setTimeout(function () {
                        $('.idConditionClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (qty == "" || qty == "0") {
                    $('#idQuantity' + newRowID).focus();
                    setTimeout(function () {
                        $('#idQuantity' + newRowID).addClass("error")
                    }, 10)
                    return false;
                }
                if (unit == "") {
                    $('#idUnitCost' + newRowID).focus();
                    setTimeout(function () {
                        $('#idUnitCost' + newRowID).addClass("error")
                    }, 10)
                    return false;

                }
            }
        }
        else if ($('#ddlSO option:selected').text() == "DropShip") {
            if (rowCount == 0) {
                $('.add_product span').text('Please Add Some Product (dropship)')
                return false;
            }
            var rowCount = $('#DTWrapper1 tr').length;
            for (var i = 0; i < rowCount; i++) {
                var rowID = $('#DTWrapper1 tr')[i].id;
                var newRowID = rowID.split('rowID1')[1];
                var prdt = $('#idProduct' + newRowID).val();
                var cond = $('#idCondition' + newRowID).val();
                var qty = $('#idQuantity' + newRowID).val();
                var unit = $('#idUnitCost' + newRowID).val();
                if (prdt == "0") {
                    $('#idProductt' + newRowID).focus();
                    setTimeout(function () {
                        $('.idproductClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (cond == "0") {
                    $('#idConditionn' + newRowID).focus();
                    setTimeout(function () {
                        $('.idConditionClass .select2-selection--single').addClass("error")
                    }, 10)
                    return false;
                }
                if (qty == "" || qty == "0") {
                    $('#idQuantity' + newRowID).focus();
                    setTimeout(function () {
                        $('#idQuantity' + newRowID).addClass("error")
                    }, 10)
                    return false;
                }
                if (unit == "") {
                    $('#idUnitCost' + newRowID).focus();
                    setTimeout(function () {
                        $('#idUnitCost' + newRowID).addClass("error")
                    }, 10)
                    return false;
                }
            }
        }
        return true;
    }
}



/*MANAGE SORMA VALIDATION*/
function SORMA_val() {
    var txttxtRMA = $('#txtRMA').val();
    var txtidrmadate = $('#idrmadate').val();
    var txtDdl_cust = document.getElementById('ddlCustomer');
    var txtddluser = document.getElementById('ddluser');
    var txtddlRMAstatus = document.getElementById('ddlRMAstatus');
    var txtddlsoid = document.getElementById('ddlsoid');
    var txttxtPhone = $('#txtPhone').val();
    var txttxtCompany = $('#txtCompany').val();
    var txttxtEmail = $('#txtEmail').val();
    var txtddlResource = document.getElementById('ddlResource');
    var txtDdlPrefS = document.getElementById('ddlPreferredShipping');
    var txtPick1 = $('#txtpickupby').val();
    var txtDdlCP2 = document.getElementById('ddlCarrrierShipping');
    var txtTack = $('#txtTrackinNo').val();
    var txtTrSt = $('#txtTrackingStatus').val();
    var txtFRTack = $('#txtFrieightTrackingNo').val();
    var txtddlStatus = document.getElementById('ddlStatus');
    var txtddlPaid = document.getElementById('ddlPaid');
    var txtddlPaymentPaypal = document.getElementById('ddlPaymentPaypal');
    var txtpaymentDates = $('#txtpaymentDate').val();
    var txtTransactionID = $('#txtTransactionID').val();
    var checked_1 = document.getElementById('ChkTaxable');
    var txt_amount = $('#txtTaxAmount');
    var txtShippingCharge = $('#txtShippingCharge').val();
    var txtBillName = $('#txtBillingName').val();
    var txtAddBilling = $('#txtAddressBilling').val();
    var txtbillingCountry = document.getElementById('ddlCountry');
    var ddlForm2 = document.getElementById('ddlState');
    var ddlForm3 = document.getElementById('ddlCity');
    var txtZipCode = $('#txtZipCode').val();
    var sel1 = $('#select2-ddlPaid-container').text();
    var sel1_2 = $('#select2-ddlPreferredShipping-container').text();
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    //var sel1_3 = $('#ddlSO').val();
    if (txttxtRMA == "") {
        $('#txtRMA').focus();
        setTimeout(function () {
            $('#txtRMA').addClass("error");
        }, 10)
        return false;
    }
    else if (txtidrmadate == "") {
        $('#idrmadate').focus();
        setTimeout(function () {
            $('#idrmadate').addClass("error");
        }, 10)
        return false;
    }

    else if (txtDdl_cust.selectedIndex == "0") {

        txtDdl_cust.focus()
        setTimeout(function () {
            $('.div_select1 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (txtddluser.selectedIndex == "0") {
        txtddluser.focus()
        setTimeout(function () {
            $('.div_select2 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (txtddlRMAstatus.selectedIndex == "0") {
        txtddlRMAstatus.focus()
        setTimeout(function () {
            $('.div_select3 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (txtddlsoid.selectedIndex == "0") {
        txtddlsoid.focus()
        setTimeout(function () {
            $('.div_select4 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (txttxtPhone == "") {
        $('#txtPhone').focus();
        setTimeout(function () {
            $('#txtPhone').addClass("error");
        }, 10)
        return false;
    }


    else if (txttxtCompany == "") {
        $('#txtCompany').focus();
        setTimeout(function () {
            $('#txtCompany').addClass("error");
        }, 10)
        return false;
    }

    else if (!txttxtEmail.match(emailValid) || txttxtEmail == "") {

        $('#txtEmail').focus();
        setTimeout(function () {
            $('#txtEmail').addClass("error");
        }, 10)
        return false;
    }

    else if (txtddlResource.selectedIndex == "0") {
        txtddlResource.focus()
        setTimeout(function () {
            $('.div_selectR .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    if (txtDdlPrefS.selectedIndex == "0") {
        txtDdlPrefS.focus()
        setTimeout(function () {
            $('.div_shipping .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else {
        if (sel1_2 == 'Local Pickup') {
            //$('#txtpickupby')
            if (txtPick1 == "") {
                $('#txtpickupby').focus()
                setTimeout(function () {
                    $('#txtpickupby').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1_2 == 'Carrier') {
            if (txtDdlCP2.selectedIndex == 0) {
                $(txtDdlCP2).focus()
                setTimeout(function () {
                    $('.div_carrier .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTack == "") {
                $('#txtTrackinNo').focus()
                setTimeout(function () {
                    $('#txtTrackinNo').addClass("error");
                }, 10)
                return false;
            }
            else if (txtTrSt == "") {
                $('#txtTrackingStatus').focus()
                setTimeout(function () {
                    $('#txtTrackingStatus').addClass("error");
                }, 10)
                return false;
            }
        }
        else if (sel1_2 == 'Frieght') {
            if (txtFRTack == "") {
                $('#txtFrieightTrackingNo').focus()
                setTimeout(function () {
                    $('#txtFrieightTrackingNo').addClass("error");
                }, 10)
                return false;
            }
        }
    }
    if (txtddlStatus.selectedIndex == "0") {
        txtddlStatus.focus()
        setTimeout(function () {
            $('.div_select5 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (txtpaymentDates == "") {
        $('#txtpaymentDate').focus();
        setTimeout(function () {
            $('#txtpaymentDate').addClass("error");
        }, 10)
        return false;
    }
    else if (txtTransactionID == "") {
        $('#txtTransactionID').focus();
        setTimeout(function () {
            $('#txtTransactionID').addClass("error");
        }, 10)
        return false;
    }
    else if ($(checked_1).is(':checked')) {
        if ($('#txtTaxAmount').val() == "") {
            $('#txtTaxAmount').focus();
            setTimeout(function () {
                $('#txtTaxAmount').addClass("error");
            }, 10)
            return false;
        }

    }
    else if (txtShippingCharge == "") {
        $('#txtShippingCharge').focus();
        setTimeout(function () {
            $('#txtShippingCharge').addClass("error");
        }, 10)
        return false;
    }


    if (ddlStatus.selectedIndex == "0") {
        $(ddlStatus).focus()
        setTimeout(function () {
            $('.div_select_7 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtBillName == "") {
        $('#txtBillingName').focus();
        setTimeout(function () {
            $('#txtBillingName').addClass("error");
        }, 10)
        return false;
    }
    else if (txtAddBilling == "") {
        $('#txtAddressBilling').focus();
        setTimeout(function () {
            $('#txtAddressBilling').addClass("error");
        }, 10)
        return false;
    }
    else if (txtbillingCountry.selectedIndex == 0) {
        $(txtbillingCountry).focus()
        setTimeout(function () {
            $('.div_Bcountry .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if ($("#select2-ddlState-container").text() == "Please Select State") {
        $("#select2-ddlState-container").focus()
        setTimeout(function () {
            $('.testing3 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (ddlForm3.selectedIndex == "0") {
        ddlForm3.focus()
        setTimeout(function () {
            $('.testing4 .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    else if (txtZipCode == "") {
        $('#txtZipCode').focus();
        setTimeout(function () {
            $('#txtZipCode').addClass("error");
        }, 10)
        return false;
    }
    return true;
}



function SORMA_val_more() {
    result = SORMA_val();
    if (result == true) {
        var txtddlAction = document.getElementById('ddlAction');
        var txtddlReturn = $('#ddlReturn').val();
        var txtidRefid = $('#idRefid').val();
        var txtidRefundDate = $('#idRefundDate').val();
        var txtddlpaymentMethod = document.getElementById('ddlpaymentMethod');
        var txtddlpaymentShippingMethod = document.getElementById('ddlpaymentShippingMethod');
        var txtidRefundAmount = $('#idRefundAmount').val();
        var txtidPartialCredit = $('#idPartialCredit').val();
        var txtidShippingTrackingNo = $('#idShippingTrackingNo').val();
        var txtddlNoreturn = $('#ddlNoreturn').val();
        var action_1 = $('#select2-ddlAction-container').text();
        var action_2 = $('#select2-ddlReturn-container').text();
        var action_3 = $('#select2-ddlNoreturn-container').text();
        if (txtddlAction.selectedIndex == "0") {
            $(txtddlAction).focus()
            setTimeout(function () {
                $('.div_action .select2-selection--single').addClass("error");
            }, 10)
            return false;
        }

        else if (action_1 == 'Return') {
            if (txtddlReturn == "0") {
                $('#dlR').focus()
                setTimeout(function () {
                    $('.div_adjust1 .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (action_2 == 'Return Refund') {
                if (txtidRefid == "") {
                    $('#idRefid').focus();
                    setTimeout(function () {
                        $('#idRefid').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundDate == "") {
                    $('#idRefundDate').focus();
                    setTimeout(function () {
                        $('#idRefundDate').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtddlpaymentMethod.selectedIndex == "0") {
                    txtddlpaymentMethod.focus()
                    setTimeout(function () {
                        $('.div_refund .select2-selection--single').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundAmount == "") {
                    $('#idRefundAmount').focus();
                    setTimeout(function () {
                        $('#idRefundAmount').addClass("error");
                    }, 10)
                    return false;
                }
            }

            else if (action_2 == 'Return Partial Credit') {
                if (txtidRefid == "") {
                    $('#idRefid').focus();
                    setTimeout(function () {
                        $('#idRefid').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundDate == "") {
                    $('#idRefundDate').focus();
                    setTimeout(function () {
                        $('#idRefundDate').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtddlpaymentMethod.selectedIndex == "0") {
                    txtddlpaymentMethod.focus()
                    setTimeout(function () {
                        $('.div_refund .select2-selection--single').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundAmount == "") {
                    $('#idRefundAmount').focus();
                    setTimeout(function () {
                        $('#idRefundAmount').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidPartialCredit == "") {
                    $('#idPartialCredit').focus();
                    setTimeout(function () {
                        $('#idPartialCredit').addClass("error");
                    }, 10)
                    return false;
                }
            }




            else if (action_2 == 'Return Replacement') {
                if (txtidRefundDate == "") {
                    $('#idRefundDate').focus();
                    setTimeout(function () {
                        $('#idRefundDate').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtddlpaymentShippingMethod.selectedIndex == "0") {
                    txtddlpaymentShippingMethod.focus()
                    setTimeout(function () {
                        $('#dpsm .select2-selection--single').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidShippingTrackingNo == "") {
                    $('#idShippingTrackingNo').focus();
                    setTimeout(function () {
                        $('#idShippingTrackingNo').addClass("error");
                    }, 10)
                    return false;
                }
            }
            //}
            //return true;
        }

        else if (action_1 == 'No Return') {
            if (txtddlNoreturn == "0") {
                $('#ddlNoreturn').focus()
                setTimeout(function () {
                    $('.div_adjust2 .select2-selection--single').addClass("error");
                }, 10)
                return false;
            }
            else if (action_3 == 'No Return Refund') {
                if (txtidRefid == "") {
                    $('#idRefid').focus();
                    setTimeout(function () {
                        $('#idRefid').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundDate == "") {
                    $('#idRefundDate').focus();
                    setTimeout(function () {
                        $('#idRefundDate').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtddlpaymentMethod.selectedIndex == "0") {
                    txtddlpaymentMethod.focus()
                    setTimeout(function () {
                        $('.div_refund .select2-selection--single').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundAmount == "") {
                    $('#idRefundAmount').focus();
                    setTimeout(function () {
                        $('#idRefundAmount').addClass("error");
                    }, 10)
                    return false;
                }
            }

            else if (action_3 == 'No Return Partial Credit') {
                if (txtidRefid == "") {
                    $('#idRefid').focus();
                    setTimeout(function () {
                        $('#idRefid').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundDate == "") {
                    $('#idRefundDate').focus();
                    setTimeout(function () {
                        $('#idRefundDate').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtddlpaymentMethod.selectedIndex == "0") {
                    txtddlpaymentMethod.focus()
                    setTimeout(function () {
                        $('.div_refund .select2-selection--single').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidRefundAmount == "") {
                    $('#idRefundAmount').focus();
                    setTimeout(function () {
                        $('#idRefundAmount').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidPartialCredit == "") {
                    $('#idPartialCredit').focus();
                    setTimeout(function () {
                        $('#idPartialCredit').addClass("error");
                    }, 10)
                    return false;
                }
            }

            else if (action_3 == 'No Return Replacement') {
                if (txtidRefundDate == "") {
                    $('#idRefundDate').focus();
                    setTimeout(function () {
                        $('#idRefundDate').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtddlpaymentShippingMethod.selectedIndex == "0") {
                    txtddlpaymentShippingMethod.focus()
                    setTimeout(function () {
                        $('#dpsm .select2-selection--single').addClass("error");
                    }, 10)
                    return false;
                }
                else if (txtidShippingTrackingNo == "") {
                    $('#idShippingTrackingNo').focus();
                    setTimeout(function () {
                        $('#idShippingTrackingNo').addClass("error");
                    }, 10)
                    return false;
                }
            }
        }
        return true;
    }
}

function cust_val() {
    var txtfirstNamec = $('#txtFirstName').val();
    var txtCUEmailAddress = $('#txtEmail').val();
    var txtddlCustomerType = document.getElementById('ddlCustomerType');
    var txtidAddress1 = $('#txtAddress1').val();
    var ddlForm1 = document.getElementById('ddlCountry');
    var ddlForm2 = document.getElementById('ddlState');
    var ddlForm3 = document.getElementById('ddlCity');
    //var txtpostalcode = document.getElementById('txtpostalCode');
    var specialChar = /^[a-zA-Z ]{2,30}$/;
    var emailValid = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;


    if (!txtfirstNamec.match(specialChar) || txtfirstNamec == "") {
        $('#txtFirstName').focus();
        setTimeout(function () {
            $('#txtFirstName').addClass("error")
        }, 10)
        return false;
    }
    else if (!txtCUEmailAddress.match(emailValid) || txtCUEmailAddress == "") {
        $('#txtEmail').focus();
        setTimeout(function () {
            $('#txtEmail').addClass("error");
        }, 10)
        return false;
    }
    else if (txtddlCustomerType.selectedIndex == "0") {
        txtddlCustomerType.focus()
        setTimeout(function () {
            $('.testing4 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtidAddress1 == "") {
        $('#txtAddress1').focus();
        setTimeout(function () {
            $('#txtAddress1').addClass("error")
        }, 10)
        return false;
    }
    else if (ddlForm1.selectedIndex == "0") {
        ddlForm1.focus()
        setTimeout(function () {
            $('.ddl_country .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (ddlForm2.selectedIndex == "0") {
        ddlForm2.focus()
        setTimeout(function () {
            $('.ddl_Wrap .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }

    else if (ddlForm3.selectedIndex == "0") {
        ddlForm3.focus()
        setTimeout(function () {
            $('.ddl_city .select2-selection--single').addClass("error");
        }, 10)

        return false;
    }
    // else if (txtpostalcode.value == "") {
    // txtpostalcode.focus()
    // setTimeout(function () {
    // $(txtpostalcode).addClass("error");
    // }, 10)
    // return false;
    // }

    return true;
}



function mngThreads_val() {
    var txtddlThreadType = document.getElementById('ddlThreadType');
    var txtddlThreadAgainst = document.getElementById('ddlThreadAgainst');
    var txtidthAgainst = document.getElementById('idthAgainst');
    var txtddlAssignTo = document.getElementById('ddlAssignTo');
    var txttxtThreadTitle = $('#txtThreadTitle').val();
    if (txtddlThreadType.selectedIndex == "0") {
        txtddlThreadType.focus()
        setTimeout(function () {
            $('.testing4 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtddlThreadAgainst.selectedIndex == "0") {
        txtddlThreadAgainst.focus()
        setTimeout(function () {
            $('.testing5 .select2-selection--single').addClass("error");
        }, 10)
        return false;

    }
    else if ($("#ddlThreadAgainst").val() != "5") {

        if (txtidthAgainst.selectedIndex == "0") {
            txtidthAgainst.focus()
            setTimeout(function () {
                $('.testing6 .select2-selection--single').addClass("error");
            }, 10)
            return false;

        }
    }
    else if (txtddlAssignTo.selectedIndex == -1) {
        txtddlAssignTo.focus()
        setTimeout(function () {
            $('.testing7 .select2-selection').addClass("error");
        }, 10)
        return false;
    }
    else if (txttxtThreadTitle == "") {
        $('#txtThreadTitle').focus()
        setTimeout(function () {
            $('#txtThreadTitle').addClass("error");
        }, 10)

        return false;
    }
    return true;
}
function mngFile_val() {
    var txtddlAgainst = document.getElementById('ddlAgainst');
    var txtidthAgainst = document.getElementById('idthAgainst');
    if (txtddlAgainst.selectedIndex == "0") {
        txtddlAgainst.focus()
        setTimeout(function () {
            $('.testing4 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    else if (txtidthAgainst.selectedIndex == "0") {
        txtidthAgainst.focus()
        setTimeout(function () {
            $('.testing5 .select2-selection--single').addClass("error");
        }, 10)
        return false;
    }
    return true;
}

function getMenu() {
    //getNotifications();
    $.ajax({
        type: "POST",
        url: "/Users/UserWebService.asmx/GetMenu",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessgetMenu
    });
}

function OnSuccessgetMenu(data) {
    $("#navMenu").empty();
    if (data != '[]') {
        var json = JSON.parse(data.d);
        var subMenuCounter = 0;
        $.each(json, function (i, option) {
            var FirstCharacter = option.Child.charAt(0);
            if (option.FormType == "0") {
                if (option.NavigateURL == "#") {
                    subMenuCounter++;
                    $("#navMenu").append('<li><a class="anchor_1" id="sub_menu_' + subMenuCounter + '" href="javascript:;">' + option.Child + '<span class="toggle_menu_plus" id="toggle_menu_plus_1"></span></a><a href="javascript::"><span class="color8">' + FirstCharacter + '</span></a><ul class="sub_menu_ul" id="mainList-' + option.Form_ID + '"></ul></li>');
                } else {
                    $("#navMenu").append('<li runat="server"><a class="anchor_1" href="' + option.NavigateURL + '">' + option.Child + '</a><a href="' + option.NavigateURL + '"><span class="color1">' + FirstCharacter + '</span></a><ul class="sub_menu_ul" id="mainList-' + option.Form_ID + '"></ul></li>')
                }
            } else {
                $("#mainList-" + option.FormType).append('<li id="subList-' + option.Form_ID + '" runat="server"><a href="' + option.NavigateURL + '">' + option.Child + '</a></li>')
            }
            $('#sub_menu_' + subMenuCounter).click(function () {
                $('#mainList-' + option.Form_ID).slideToggle();
                $('#toggle_menu_plus_' + subMenuCounter).toggleClass('active');
            })
        });

    }
}

time = setInterval(function () {
    getNotifications();
    getNotificationsPopup();
}, 30000);


function getNotifications() {
    $.ajax({
        type: "POST",
        url: "/Users/UserWebService.asmx/GetNotification",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessgetNotification
    });
}
function OnSuccessgetNotification(data) {
    if (data != '[]') {
        var json = JSON.parse(data.d);
        $("#counterInventory").text("0");
        $("#counterThread").text("0");
        $("#counterSReturn").text("0");
        $("#counterPReturn").text("0");
        $("#counterPOTransfer").text("0");
        $("#counterSOTransfer").text("0");
        $.each(json, function (i, option) {
            //if (oldCountThread > 0) {
            //    if (option.ThreadCount > oldCountThread) {

            //    }
            //}
            $("#counter" + option.Type).text(option.Counts);
            //$("#counterThread").text(option.ThreadCount);

        });
    }
}
function getNotificationsPopup() {
    $.ajax({
        type: "POST",
        url: "/Users/UserWebService.asmx/GetNotificationPopUp",
        datatype: "json",
        contentType: "application/json",
        async: true,
        success: OnSuccessgetNotificationPopUp
    });
}
function OnSuccessgetNotificationPopUp(data) {
    //Push.clear();
    if (data != '[]') {
        var json = JSON.parse(data.d);

        $.each(json, function (i, option) {
            option.Text = option.Text;
            option.Heading = option.Heading;
            Push.create(option.Heading, {
                body: option.Text,
                icon: {
                    x16: '/img/Logo-Notification.png',
                    x32: '/img/Logo-Notification.png'
                },
                timeout: 10000,
                onClick: function () {
                    window.focus();
                    var curLoc = option.Url;
                    location.href = curLoc;
                    this.close();
                }
            });

        });
    }

}

//function fillNotification() {
//    $.ajax({
//        type: "POST",
//        url: "/Users/UserWebService.asmx/GetNotification",
//        datatype: "json",
//        contentType: "application/json",
//        async: true,
//        success: OnSuccessfillNotification
//    });
//}
//function OnSuccessfillNotification(data) {
//    $("#dvNotPopup").empty();
//    $("#dvNotPopup").append("<div class='notBtnContainer'><a href='javascript:;' onClick='Readactive()' class='readBtn'>Read</a><a onClick='Unreadactive()' href='javascript:;' class='unreadBtn active'>Unread</a></div>")
//    if (data != '[]') {
//        var json = JSON.parse(data.d);
//        $.each(json, function (i, option) {
//            var isRead = "read";
//            if (option.isClicked == "False") {
//                isRead = "un-read";
//            }
//            var frmt = "<ul class='" + isRead + "' onclick='NavigateToPage(" + option.ID + ",\"" + option.Url + "\")'><li><span class='notiFirstSpan'>" + option.Type + "</span><span class='NotipopUpDate'>" + option.CreatedDate + "</span><span class='popNone'>" + option.Heading + "</span><span>" + option.Text + "</span></li></ul>";
//            $("#dvNotPopup").append(frmt);
//            //if (option.Column1 > oldNot) {
//            //    oldNot = option.Column1;
//            //    //if (firstTime > 0) {
//            //    //    ion.sound.play("bell_ring");
//            //    //    $.notify(option.Text, {
//            //    //        position: "right bottom",
//            //    //        clickToHide: true,
//            //    //        className: 'info',
//            //    //    }, "info");
//            //    //    //Push.clear();
//            //    //    //Push.create(option.Heading, {
//            //    //    //    body: option.Text,
//            //    //    //    icon: {
//            //    //    //        x16: '/img/Logo.png',
//            //    //    //        x32: '/img/Logo.png'
//            //    //    //    },
//            //    //    //    timeout: 5000
//            //    //    //});
//            //    //}
//            //}
//            //firstTime = 1;
//            //$("#notNumbers").text(option.Column1);
//        });
//    }
//}
//function NavigateToPage(id, url) {

//    $.ajax({
//        type: "POST",
//        url: "/Users/UserWebService.asmx/UpdateNotification",
//        data: "{'notID':'" + id + "'}",
//        contentType: "application/json",
//        async: true,
//        success: function () {
//            location.href = url;
//        }
//    });
//}

//function Readactive() {
//    $('ul.read').slideDown();
//    $('ul.un-read').slideUp();
//    $('.unreadBtn').removeClass("active");
//    $('.readBtn').addClass("active");
//    //$('ul.read').hide();
//    //$('ul.un-read').show();
//    //$('.unreadBtn').removeClass("active");
//    //$('.readBtn').addClass("active");
//}
//function Unreadactive() {
//    $('ul.read').slideUp();
//    $('ul.un-read').slideDown();
//    $('.readBtn').removeClass("active");
//    $('.unreadBtn').addClass("active");

//    //$('ul.read').show();
//    //$('ul.un-read').hide();
//    //$('.readBtn').removeClass("active");
//    //$('.unreadBtn').addClass("active");
//}