package com.elibrary;

import java.io.*;
import java.sql.*;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import java.time.LocalDate;

@WebServlet("/issueBook")
public class IssueBookServlet extends HttpServlet {
    protected void doPost(HttpServletRequest req, HttpServletResponse res) throws IOException {
        int bookId = Integer.parseInt(req.getParameter("bookId"));
        String issuedTo = req.getParameter("issuedTo");
        LocalDate issuedOn = LocalDate.now();

        try {
            Connection con = DBConnection.getConnection();

            // Check if book is available
            PreparedStatement check = con.prepareStatement("SELECT status FROM books WHERE id = ?");
            check.setInt(1, bookId);
            ResultSet rs = check.executeQuery();
            if (rs.next() && rs.getString("status").equals("available")) {

                // Update book status
                PreparedStatement update = con.prepareStatement("UPDATE books SET status = 'issued' WHERE id = ?");
                update.setInt(1, bookId);
                update.executeUpdate();

                // Insert into issued_books table
                PreparedStatement ps = con.prepareStatement("INSERT INTO issued_books(book_id, issued_to, issued_on) VALUES (?, ?, ?)");
                ps.setInt(1, bookId);
                ps.setString(2, issuedTo);
                ps.setDate(3, Date.valueOf(issuedOn));
                ps.executeUpdate();

                res.getWriter().write("Book Issued Successfully!");
            } else {
                res.getWriter().write("Book not available.");
            }
        } catch (Exception e) {
            e.printStackTrace();
            res.getWriter().write("Error issuing book.");
        }
    }
}
