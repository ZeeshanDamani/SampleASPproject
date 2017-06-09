<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ManageRole.aspx.cs" MasterPageFile="~/JK-Tkn.Master" Inherits="JK_Tkn.Forms.ManageRole" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
  <%--<script src="../Scripts/jquery-2.2.1.js" type="text/javascript"></script>
  <link href="../Datatable/DataTables-1.10.11/media/css/jquery.dataTables.css" rel="stylesheet"
        type="text/css" />
  <script src="../Datatable/DataTables-1.10.11/media/js/jquery.dataTables.js" type="text/javascript"></script>--%>
  <script src="../Scripts/RoleSetup.js" type="text/javascript"></script>
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
  <!--<div class="lockScreen"></div>
    <div class="success_msg_cotnainer">
    <div class="close_container2" onclick="success_msg_close()"></div>
    	<span></span>
    </div>-->
  
  <div class="menu_content">
    <h1>Role Setup</h1>
    <div class="page_content"> 
      <div id="Error404" style="display:none">
        <H2>
        <label id="errmsg" runat="server"></label>
      </H2>
          </div>
      <div class="row">
        <div class="col-sm-4">
          <div class="form-group">
            <label>Role <span>*</span></label>
            <asp:HiddenField ClientIDMode="Static" ID="id1" runat="server" />
            <asp:HiddenField ClientIDMode="Static" ID="HiddenEditId" runat="server" />
            <asp:HiddenField ClientIDMode="Static" ID="HiddenDeleteId" runat="server" />
               <asp:HiddenField ClientIDMode="Static" ID="HiddenHideId" runat="server" />
            <input type="hidden"  id="id" />
            <input type="text" id="txtName" placeholder="Please Insert Role" />
          </div>
          <div class="form-group">
        <input type="button" data-toggle="tooltip" title="Save" id="btnSave" class="marginTop0" value="Save" onclick="Insert()" />
        <input type="button" id="btnUpdate" style="display: none; margin-top: 0 !important;" value="Update" onclick="Update()" />
        <input type="button" id="btnCancel" style="display: none; margin-top: 0 !important;" value="Cancel" onclick="Cancel()" />
      </div>
        </div>
        <div class="col-sm-4"></div>
        <div class="col-sm-4">
        <div id="hdnEdit" class="buttons_grp_container">
        <div class="btn_inner">
          <div class="total_price">
            <div class="file_uploader_container">
              <div class="finner_container">
                <asp:FileUpload ID="FileUpload1" runat="server" ClientIDMode="Static"   />
              </div>
            </div>
            <div class="form-group">
              <asp:Button  id="idRoleDownload"  runat="server" Text="Download" OnClick="Button2_Click" />
            </div>
            <div class="form-group">
              <input type="button"  id="idTemplate"  runat="server" value="Template" name="Template" onclick="Download()" />
            </div>
            <div class="form-group">
            <asp:Button ID="Button1" runat="server" Text="Import" cssClass="marginTop0" ClientIDMode="Static"  OnClick="Button1_Click" />
            </div>
          </div>
        </div>
      </div>
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
                        <th data-sort="Role:asc">Role</th>
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
                <td>{{record.Role_ID}}</td>
                <td>{{record.Name}}</td>
                <td>
                    <input type="button" value="" class="edit_btn" title="Edit" onclick="bindRecordToEdit(this)" /><input type="button" value="" class="delete_btn" title="Delete" onclick="DeleteRecord(this)" /></td>

            </tr>
        </script>
  </div>
    
<%--  <div id="DTWrapper"></div>
  <div id="DTTable" style="display:none"></div>--%>
</asp:Content>
