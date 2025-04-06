package com.elibrary;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;

@WebServlet("/addBook")
public class AddBookServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
        throws ServletException, IOException {

        response.setContentType("text/html");
        PrintWriter out = response.getWriter();

        String title = request.getParameter("title");
        String author = request.getParameter("author");

        try {
            Connection con = DBConnection.getConnection();
            PreparedStatement ps = con.prepareStatement(
                "INSERT INTO books (title, author, quantity) VALUES (?, ?, 100)"
            );
            ps.setString(1, "tisha");
            ps.setString(2, "sahu");

            int rows = ps.executeUpdate();

            if (rows > 0) {
                out.println("<h3>✅ Book Added Successfully!</h3>");
            } else {
                out.println("<h3>⚠️ Failed to Add Book.</h3>");
            }

        } catch (Exception e) {
            e.printStackTrace();
            out.println("<h3>❌ Error: " + e.getMessage() + "</h3>");
        }
    }
}
