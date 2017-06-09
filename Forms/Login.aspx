<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="JK_Tkn.Forms.Login" %>

<!DOCTYPE html>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <link href="/css/default.css" rel="stylesheet" type="text/css" />
    <link href="/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
    <script src="/Scripts/odernizr-2.8.3-respond-1.4.2.min.js" type="text/javascript"></script>
    <script src="/Scripts/bootstrap.min.js" type="text/javascript"></script>
    <script src="/Scripts/jquery-2.2.1.min.js" type="text/javascript"></script>
    <link rel="shortcut icon" href="/img/favicon.png" type="image/x-icon" />
</head>
<body class="login_body">
    <form id="form1" runat="server">
        <div class="main_container">
            <div class="login_main_container">
                <div class="login_center_container">
                    <h1>TIME & KNOWLEDGE</h1>
                    <div class="fld_wrapper_container">
                        <div class="form-group">
                            <label>Username / Email address</label>
                            <asp:TextBox class="form-control" placeholder="Please Enter Username or Email Address" ID="txtName" runat="server" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <asp:TextBox ID="txtPass" TextMode="Password" runat="server" class="form-control" placeholder="Please Enter Password" />
                        </div>
                        <div class="form-group">
                            <asp:Button ID="btnLogin" class="btn btn-default" Text="Login" runat="server" OnClick="Check" />
                        </div>
                        <div class="form-group">
                            <asp:Label ID="lblMsg" runat="server" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    <script type="text/javascript">
        $('#btnLogin').click(function Ware_val() {
            var txttitle = $('#txtname').val();
            if (txttitle == "") {
                $('#txtname').focus();
                setTimeout(function () {
                    $('#txtname').addClass("error")
                }, 10)
                return false;
            }
        })
    </script>
</body>
</html>

