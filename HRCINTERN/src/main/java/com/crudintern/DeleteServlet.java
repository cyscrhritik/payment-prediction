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

@WebServlet("/delete")
public class DeleteServlet extends HttpServlet{
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	
	public void doPost(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException {
		CRUD deletedata=new CRUD();
		
		String salesOrder = null;
		
		BufferedReader reader = req.getReader();
		salesOrder = reader.readLine();
		System.out.println(salesOrder);
		
		salesOrder = salesOrder.split(":")[1];
		salesOrder = salesOrder.substring(1,  salesOrder.length() - 2);
		
		String final_values[] = salesOrder.split(",");
		
		try {
			deletedata.deletedata(final_values);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		
		
		
		
		
	}
	
	
	
	

}
