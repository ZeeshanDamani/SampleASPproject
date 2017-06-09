using JK_Tkn.App_Code.Common;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Web;
using System.Web.Services;

namespace JK_Tkn.WebService
{
    /// <summary>
    /// Summary description for ManageUsers
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class ManageUsers : System.Web.Services.WebService
    {

        #region UserService

        [WebMethod]
        public string GetUsersGrid()
        {
            DataTable dtUsers = DBMethod.GetUsersGrid();
            return dtUsers.ToJsonString();
        }

        [WebMethod(EnableSession = true)]
        public int InsertUser(int add, string fname, string lname, string email, string username, string password, string contact, string NotRole, int role, int chk)
        {
            if (add == 1)
            {
                int result = DBMethod.InsertUser(fname, lname, email, username, password, contact, NotRole, role, chk, int.Parse(Session["LOGIN_SESSION"].ToString()), HttpContext.Current.Request.UserHostAddress);
                return result;
            }
            else
            {
                return 0;
            }
        }


        [WebMethod]
        public string EditUser(int id)
        {
            DataTable dtuser = DBMethod.EditUser(id);
            return dtuser.ToJsonString();
        }
        [WebMethod(EnableSession = true)]
        public int UpdateUser(int User_ID, string fname, string lname, string email, string username, string password, string contact, string NotRole, int role, int chk)
        {
            int result = DBMethod.UpdateUser(User_ID, fname, lname, email, username, password, contact, NotRole, role, chk, int.Parse(Session["LOGIN_SESSION"].ToString()), HttpContext.Current.Request.UserHostAddress);
            return result;
        }

        [WebMethod]
        public int DeleteUser(int id)
        {
            int result = DBMethod.DeleteUser(id);
            return result;
        }
        #endregion
    }
}
