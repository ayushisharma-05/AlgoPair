package com.elibrary;

import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.WebServlet;

@WebServlet("/searchBook")
public class SearchBookServlet extends HttpServlet {

    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String title = request.getParameter("title");

        out.println("<html><head><title>Search Books</title>");
        out.println("<style>");
        out.println("body { font-family: 'Segoe UI', sans-serif; background-color: #f1f8e9; padding: 20px; }");
        out.println("h2 { color: #2e7d32; text-align: center; }");
        out.println("form { text-align: center; margin-bottom: 30px; }");
        out.println("input[type='text'] { padding: 10px; width: 300px; border-radius: 5px; border: 1px solid #81c784; }");
        out.println("input[type='submit'] { padding: 10px 20px; background-color: #43a047; color: white; border: none; border-radius: 5px; cursor: pointer; margin-left: 10px; }");
        out.println("table { margin: auto; border-collapse: collapse; width: 80%; }");
        out.println("th, td { border: 1px solid #c8e6c9; padding: 10px; text-align: center; }");
        out.println("th { background-color: #43a047; color: white; }");
        out.println("tr:nth-child(even) { background-color: #e8f5e9; }");
        out.println("a { color: #2e7d32; text-decoration: none; font-weight: bold; }");
        out.println("a:hover { text-decoration: underline; }");
        out.println("</style></head><body>");

        out.println("<h2>🔎 Search Book by Title</h2>");
        out.println("<form method='get' action='searchBook'>");
        out.println("<input type='text' name='title' placeholder='Enter book title...' required>");
        out.println("<input type='submit' value='Search'>");
        out.println("</form>");

        if (title != null && !title.trim().isEmpty()) {
            try {
                Connection con = DBConnection.getConnection();
                PreparedStatement ps = con.prepareStatement("SELECT id, title, author, pdf_path FROM books WHERE title LIKE ?");
                ps.setString(1, "%" + title + "%");
                ResultSet rs = ps.executeQuery();

                boolean found = false;
                out.println("<table>");
                out.println("<tr><th>ID</th><th>Title</th><th>Author</th></tr>");

                while (rs.next()) {
                    found = true;
                    out.println("<tr>");
                    out.println("<td>" + rs.getInt("id") + "</td>");
                    out.println("<td><a href='" + rs.getString("pdf_path") + "' target='_blank'>" + rs.getString("title") + "</a></td>");
                    out.println("<td>" + rs.getString("author") + "</td>");
                    out.println("</tr>");
                }

                out.println("</table>");

                if (!found) {
                    out.println("<p style='text-align:center; color:red;'>No book found with title: <b>" + title + "</b></p>");
                }

            } catch (Exception e) {
                e.printStackTrace();
                out.println("<h3 style='color:red;'>❌ Error: " + e.getMessage() + "</h3>");
            }
        }

        out.println("</body></html>");
    }
}
