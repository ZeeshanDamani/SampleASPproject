using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Script.Serialization;
using System.Data;
using System.Text;
using System.Collections;

namespace JK_Tkn.App_Code.Common
{
    public static class ExtentionMethod
    {
        public static string ToJsonString(this DataTable dt)
        {
            var serializer = new JavaScriptSerializer();
            serializer.MaxJsonLength = Int32.MaxValue;

            var rows = new List<Dictionary<string, string>>();
            foreach (DataRow dr in dt.Rows)
            {
                var row = dt.Columns.Cast<DataColumn>().ToDictionary(col => col.ColumnName, col => dr[col].ToString());
                rows.Add(row);
            }

            var builder = new StringBuilder();
            serializer.Serialize(rows, builder);
            return builder.ToString();
        }

        public static string ToJsonString(this ArrayList List)
        {
            var serializer = new JavaScriptSerializer();
            serializer.MaxJsonLength = Int32.MaxValue;
            return serializer.Serialize(List);
        }
    }
}