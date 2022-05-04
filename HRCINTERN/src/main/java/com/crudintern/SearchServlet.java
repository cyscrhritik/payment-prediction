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
import com.google.gson.Gson;

@WebServlet("/search")
public class SearchServlet extends HttpServlet{
	
	public void doPost(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException {
		
		res.setContentType("application/json");
		res.setCharacterEncoding("UTF-8");

		int NO_OF_ROWS = 10;
		
		String pageInURL = req.getParameter("page");
		int page = Integer.parseInt(pageInURL) * NO_OF_ROWS;
		
		
		
			String s1=req.getParameter("doc_id");
			int s2=Integer.parseInt(req.getParameter("cust_number"));
			int s3=Integer.parseInt(req.getParameter("invoice_id"));
			int s4=Integer.parseInt(req.getParameter("business_year"));
			 ArrayList<POJO> data=new ArrayList<POJO>();
			CRUD searchdata=new CRUD();
			try {
				searchdata.getsearch(s1, s2, s3, s4,page);
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
			
			 
				  	
				  	Gson gson = new Gson();
					String respData = gson.toJson(data);
					
					res.getWriter().print(respData);
	
	
	

}
}
