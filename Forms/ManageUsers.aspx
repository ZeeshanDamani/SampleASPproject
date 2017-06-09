<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ManageUsers.aspx.cs" Title="Users - TKN" MasterPageFile="~/JK-Tkn.Master" Inherits="JK_Tkn.Forms.ManageUsers" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/Scripts/select2.full.min.js" type="text/javascript"></script>
    <link href="/css/select2.min.css" rel="stylesheet" type="text/css" />
    <script src="/Scripts/ManageUsers.js" type="text/javascript"></script>
    <style>
        table1 {
            border: 1px solid black;
        }

        th1 {
            border: 1px solid black;
            padding: 5px;
            background-color: skyblue;
            color: white;
        }

        td1 {
            border: 1px solid black;
            padding: 5px;
            color: green;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <asp:ScriptManager ID="Scriptmanager1" runat="server"></asp:ScriptManager>
    <div class="menu_content">
        <h1>Manage Users</h1>
        <div class="page_content">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>First Name <span>*</span></label>
                        <input type="text" id="txtfName" placeholder="Please Insert First Name" />
                        <asp:HiddenField ClientIDMode="Static" ID="HiddenEditId" runat="server" />
                        <asp:HiddenField ClientIDMode="Static" ID="HiddenDeleteId" runat="server" />
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Last Name <span>*</span></label>
                        <input type="text" id="txtLName" placeholder="Please Insert Last name" />
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Email <span>*</span></label>
                        <input type="text" id="txtEmail" placeholder="Please Insert Email Address" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Username <span>*</span></label>
                        <input type="text" id="txtUserName" placeholder="Please Insert Username" />
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Password <span>*</span></label>
                        <input type="password" id="txtPassword" placeholder="Please Insert Password" />
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Contact Number <span>*</span></label>
                        <input type="text" id="txtContactNo" placeholder="Please Insert Contact Number" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Notification Role</label>
                        <div class="testing">
                            <select multiple="multiple" id="ddlNotRole">
                                <option value="">Select your Notification Role</option>
                                <option value="1">Sales</option>
                                <option value="2">Sales Return</option>
                                <option value="3">Purchase</option>
                                <option value="4">Purchase Return</option>
                                <option value="5">Thread Management</option>
                                <option value="6">Inventory Threshold</option>
                                <option value="7">PO Notification Transfer</option>
                                <option value="8">SO Notification Transfer</option>
                                <option value="100">Amazon</option>
                                <option value="101">Ebay</option>
                                <option value="102">NewEgg</option>
                            </select>
                        </div>
                        <%--  <select id="ddlRole">
            		<option value="0">Please Select Role</option>
          		</select>--%>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Role <span>*</span></label>
                        <div class="testing">
                            <select id="ddlRole">
                                <option value="">Select your Role</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group" id="chk">
                        <label>Active <span></span></label>
                        <input type="checkbox" id="chkActive" />
                    </div>

                    <div class="form-group">
                        <input type="button" id="btnSave" value="Save" class="marginTop0" onclick="Insert()" />
                        <input type="button" value="Update" class="marginTop0" style="display: none;" id="btnUpdate" onclick="Update()" />
                        <input type="button" id="btnCancel" class="marginTop0" style="display: none; margin-top: 0 !important;" value="Cancel" onclick="Cancel()" />
                    </div>
                </div>
                <div class="col-sm-4"></div>
            </div>
        </div>
        <div class="datatTableWrapper">

            <span id="found" class="label label-info"></span>
            <table id="stream_table" class='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th data-sort="ID:asc">#</th>
                        <th data-sort="First_Name:asc">FirstName</th>
                        <th data-sort="Last_Name:asc">LastName</th>
                        <th data-sort="Email:asc">Email</th>
                        <th data-sort="Username:asc">User</th>
                        <th data-sort="Password:asc">Password</th>
                        <th data-sort="ContactNo:asc">ContactNo</th>
                        <th data-sort="Name:asc">Role</th>
                        <th data-sort="StoreNames:asc">Stores</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
            <div id="summary">
                <div>
                </div>
            </div>
        </div>
        <script id="template" type="text/html">
            <tr>
                <%--<td>{{index}}</td>--%>
                <td>{{record.ID}}</td>
                <td>{{record.First_Name}}</td>
                <td>{{record.Last_Name}}</td>
                <td>{{record.Email}}</td>
                <td>{{record.Username}}</td>
                <td>{{record.Password}}</td>
                <td>{{record.ContactNo}}</td>
                <td>{{record.Name}}</td>
                <td>{{record.StoreNames}}</td>
                <td>{{record.Is_Active}}</td>
                <%--<td>{{record.Action}}</td>--%>
                <td>
                    <input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(this); bindRecordToEditStore(this)" /><input type="button" value="" class="delete_btn" title="Delete" onclick="    DeleteRecord(this)" /></td>

            </tr>
        </script>
    </div>
</asp:Content>
