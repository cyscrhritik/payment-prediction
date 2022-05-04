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
import com.google.gson.Gson;



@WebServlet("/fetch")
public class FetchServlet extends HttpServlet{
	
	
	
	public void doGet(HttpServletRequest req,HttpServletResponse res) throws IOException, ServletException {
		res.setContentType("application/json");
		res.setCharacterEncoding("UTF-8");
		int NO_OF_ROWS = 10;
		String pageInURL = req.getParameter("page");
		int page = Integer.parseInt(pageInURL) * NO_OF_ROWS;
		
		 CRUD fetchdata=new CRUD();
		 
		  ArrayList<POJO> data=new ArrayList<POJO>();
		try {
			data = fetchdata.getData(page);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		  //System.out.println(data);
		  	
		  	Gson gson = new Gson();
			String respData = gson.toJson(data);
			res.getWriter().print(respData);
			res.setStatus(200);
			res.getWriter().flush();
	
	}
	
	
	protected void doPost(HttpServletRequest req, HttpServletResponse res) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(req, res);
	}
}
	