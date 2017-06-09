using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace JK_Tkn.Forms
{
    public partial class Login : System.Web.UI.Page
    {
        SqlConnection con = new SqlConnection(ConfigurationManager.ConnectionStrings["TKNConString"].ConnectionString);

        protected void Page_Load(object sender, EventArgs e)
        {

        }

        public void Check(object sender, EventArgs e)
        {
            string Name = txtName.Text;
            string pass = txtPass.Text;
            SqlCommand cmd = new SqlCommand("JK_Login_Sync", con);
            cmd.CommandType = CommandType.StoredProcedure;
            cmd.Parameters.AddWithValue("P_name", Name);
            cmd.Parameters.AddWithValue("P_pass", pass);
            SqlDataAdapter da = new SqlDataAdapter(cmd);
            DataTable dt = new DataTable();
            da.Fill(dt);
            if (dt.Rows.Count > 0)
            {
                Session["LOGIN_SESSIONNAME"] = dt.Rows[0]["Username"].ToString();
                Session["LOGIN_SESSION"] = dt.Rows[0]["User_ID"].ToString();
                string ii = dt.Rows[0]["User_ID"].ToString();
                string role = dt.Rows[0]["Name"].ToString();
                Session["CurrentRole"] = dt.Rows[0]["Name"].ToString();
                if (Session["prevUrl"] != null)
                {
                    Response.Redirect(Session["prevUrl"].ToString()); //Will redirect to previous page
                }
                else
                {
                    Response.Redirect("/Forms/Dashboard.aspx");
                }
            }
            else
            {
                lblMsg.Text = "Invalid Login";
            }
        }
    }
}