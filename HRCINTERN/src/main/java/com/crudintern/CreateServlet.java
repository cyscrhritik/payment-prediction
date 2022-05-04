package com.crudintern;

import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import java.io.*;  
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.text.ParseException;
import java.sql.PreparedStatement;
import java.util.ArrayList;
import com.Pojo.POJO;
import com.crudintern.CRUD;

@WebServlet("/create")
public class CreateServlet extends HttpServlet{
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	public void doPost(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException {
		//String invoice = null;
		//BufferedReader reader = req.getReader();
		//invoice = reader.readLine();
		//System.out.println(invoice); 
		
		//int a=   Integer.parseInt(req.getParameter("sl_no"));
		String b= req.getParameter("business_code");
		int c=  Integer.parseInt(req.getParameter("cust_number"));
		String d=req.getParameter("clear_date");
		int ee=Integer.parseInt(req.getParameter("business_year"));
		String f=req.getParameter("doc_id");
		String g=req.getParameter(" posting_date");			
		String h=req.getParameter("document_create_date");	
		String j=req.getParameter(" due_in_date");	
		String k=req.getParameter("invoice_currency");	
		String l=req.getParameter("document_type");
		int m=  Integer.parseInt(req.getParameter("posting_id"));
		double o=Double.parseDouble(req.getParameter("total_open_amount"));
		String p= req.getParameter("baseline_create_date");
		String q= req.getParameter("cust_payment_terms");
		int r=Integer.parseInt(req.getParameter("invoice_id"));
	
		CRUD createdata=new CRUD();
		try {
			createdata.insertData(b, c, d, ee, f, g, h, j, k, l, m, o, p, q, r);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
	

}
}

