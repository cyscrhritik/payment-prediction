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
import java.sql.PreparedStatement;
import java.util.ArrayList;
import com.Pojo.POJO;
import com.crudintern.CRUD;

@WebServlet("/update")
public class UpdateServlet extends HttpServlet{
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}
	
	public void doPost(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException {
		
		String salesOrder = null;
		BufferedReader reader = req.getReader();
		salesOrder = reader.readLine();
		System.out.println(salesOrder);
		
		salesOrder = salesOrder.substring(1,  salesOrder.length() - 1);
		String final_values[] = salesOrder.split(",");
		
		for(int i = 0; i < final_values.length; ++i) {
			final_values[i] = final_values[i].split(":")[1];
			if(final_values[i].charAt(0) == '\"') {
				final_values[i] = final_values[i].substring(1, final_values[i].length() - 1);
			}
			System.out.println(final_values[i]);
		}
		
		String salesOrderNumber = final_values[0];
		String invoice_currency = final_values[1];
		String cust_payment_term = final_values[2];
		
		CRUD updatedata=new CRUD();
		
	    try {
			updatedata.update(invoice_currency, cust_payment_term, salesOrderNumber);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
	
	}
	
	
	
	

}