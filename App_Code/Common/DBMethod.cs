using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace JK_Tkn.App_Code.Common
{
    public class DBMethod
    {
        private static SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["TKNConString"].ConnectionString);

        #region Users

        public static DataTable GetUsersGrid()
        {
            return SqlHelper.ExecuteDataTable(con, "IM_Select_UsersGrid");
        }

        public static int InsertUser(string fname, string lname, string email, string username, string password, string contact, string NotRole, int role, int chk, int Updated_By, string Updated_IP)
        {
            DataTable returnint = SqlHelper.ExecuteDataTable(con, "IM_Insert_Users", fname, lname, email, username, password, contact, NotRole, role, chk, Updated_By, Updated_IP);
            return int.Parse(returnint.Rows[0][0].ToString());
        }
        public static DataTable EditUser(int User_ID)
        {
            return SqlHelper.ExecuteDataTable(con, "IM_Select_UsersBy_ID", User_ID);
        }
        public static int UpdateUser(int User_ID, string fname, string lname, string email, string username, string password, string contact, string NotRole, int role, int chk, int Updated_By, string Updated_IP)
        {
            return SqlHelper.ExecuteNonQuery(con, "IM_Update_User", User_ID, fname, lname, email, username, password, contact, NotRole, role, chk, Updated_By, Updated_IP);
        }
        public static int DeleteUser(int User_ID)
        {
            return SqlHelper.ExecuteNonQuery(con, "IM_Delete_Users", User_ID);
        }


        #endregion
    }
}