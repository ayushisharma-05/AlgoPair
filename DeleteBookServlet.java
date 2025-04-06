package com.elibrary;

import java.io.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.sql.*;

@WebServlet("/deleteBook")
public class DeleteBookServlet extends HttpServlet {
    protected void doGet(HttpServletRequest req, HttpServletResponse res) throws IOException {
        res.setContentType("text/html");
        PrintWriter out = res.getWriter();

        String bookIdStr = req.getParameter("bookId");

        if (bookIdStr == null || bookIdStr.isEmpty()) {
            out.println("<h3>❌ Book ID is missing.</h3>");
            return;
        }

        try {
            int bookId = Integer.parseInt(bookIdStr);
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement("DELETE FROM books WHERE id = ?");
            ps.setInt(1, bookId);
            int rowsAffected = ps.executeUpdate();

            if (rowsAffected > 0) {
                out.println("<h3>✅ Book Deleted Successfully!</h3>");
            } else {
                out.println("<h3>⚠️ Book Not Found.</h3>");
            }

        } catch (Exception e) {
            e.printStackTrace();
            out.println("<h3>❌ Error deleting book: " + e.getMessage() + "</h3>");
        }
    }
}
