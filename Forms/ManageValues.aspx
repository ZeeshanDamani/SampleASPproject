<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ManageValues.aspx.cs" MasterPageFile="~/JK-Tkn.Master" Inherits="JK_Tkn.Forms.ManageValues" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="/Scripts/select2.full.min.js" type="text/javascript"></script>
    <link href="/css/select2.min.css" rel="stylesheet" type="text/css" />
    <script src="/Scripts/ManageValues.js" type="text/javascript"></script>
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
        <h1>Manage Values</h1>
        <div class="page_content">
            <div class="row">
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Type <span>*</span></label>
                        <input type="hidden" id="hdnTypeId" />
                        <asp:HiddenField ClientIDMode="Static" ID="HiddenEditId" runat="server" />
                        <asp:HiddenField ClientIDMode="Static" ID="HiddenDeleteId" runat="server" />
                        <div class="ddl_store">
                            <select id="ddlType">
                                <option value="">Please Select</option>
                                <option value="Manufacturer">Manufacturer</option>
                                <option value="Category">Category</option>
                                <option value="Characteristics">Characteristics</option>
                                <option value="VendorType">VendorType</option>
                                <option value="VendorStore">VendorStore</option>
                                <option value="Department">Department</option>
                                <option value="Condition">Condition</option>
                                <option value="Carrier Shipping">Carrier Shipping</option>
                                <option value="PaymentMethod">Payment Method</option>
                                <option value="POStatus">PO Status</option>
                                <option value="SOStatus">SO Status</option>
                                <option value="Resource">Resource</option>
                                <option value="PaymentStore">Payment Store</option>
                                <option value="CustomerType">Customer Type</option>
                                <option value="RMAStatus">RMA Status</option>
                                <option value="SORMAReason">SO RMA Reason</option>
                                <option value="ThreadType">Thread Type</option>
                                <option value="ProductType">Product Type</option>
                                <option value="ProductStore">Product Store</option>
                                <option value="PORMAStatus">PO RMA Status</option>
                                <option value="PORMAReason">PO RMA Reason</option>
                                <option value="ListingIncompleteStatus">Listing Incomplete Status</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Name <span>*</span></label>
                        <input type="text" id="txtName" placeholder="Please Insert Name" />
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <label>Value</label>
                        <input type="text" id="txtValue" placeholder="Please Insert Value" />
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-sm-4 display_none">
                    <input type="checkbox" style="display: none" id="chkActive" />
                </div>
                <div class="col-sm-4">
                    <div class="form-group">
                        <input type="button" id="btnSave" class="marginTop0" value="Save" onclick="Insert()" />
                        <input type="button" id="btnUpdate" class="marginTop0" style="display: none" value="Update" onclick="Update()" />
                        <input type="button" id="btnCancel" class="marginTop0" style="display: none;" value="Cancel" onclick="Cancel()" />
                    </div>
                </div>
                <div class="col-sm-4"></div>
                <div class="col-sm-4">
                    <input type="button" id="iduserDownload" class="marginTop0 pull-right" value="Download Values" onclick="Download()" />
                </div>
            </div>
        </div>
        <div class="datatTableWrapper">
            <%--       <div class="progress progress-striped active">
          <div id="record_count" class="progress-bar progress-bar-success" style="width: 0%">0</div>
        </div>--%>
            <span id="found" class="label label-info"></span>
            <table id="stream_table" class='table table-striped table-bordered'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th data-sort="Type:asc">Type</th>
                        <th data-sort="Name:asc">Name</th>
                        <th data-sort="Value:asc">Value</th>
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
                <td>{{record.Type_ID}}</td>
                <td>{{record.Type}}</td>
                <td>{{record.Name}}</td>
                <td>{{record.Value}}</td>

                <td>
                    <input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(this);" /></td>

            </tr>
        </script>
    </div>
    <%--  <div id="DTWrapper"> </div>
  <div id="DTTable" style="display:none" ></div>--%>
</asp:Content>
