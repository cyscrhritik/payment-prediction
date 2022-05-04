package com.crudintern;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.sql.Statement;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.Year;
import javax.servlet.*;
import javax.servlet.annotation.WebServlet;
import java.io.*;  
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Cookie;
import com.Pojo.POJO;
import java.sql.Date;

public class CRUD {

	public Connection getConnection()
	{
		 Connection conn =null;
		 String url ="jdbc:mysql://localhost:3306/grey_goose";
		 String user = "root";
		 String pass ="Targetiit@22";
			
			
				try {
					Class.forName("com.mysql.jdbc.Driver");
					conn =DriverManager.getConnection(url,user,pass);
				} catch (ClassNotFoundException e) {
					
					e.printStackTrace();
				} catch (SQLException e) {
					e.printStackTrace();
				}
				
				return conn;

		}
	
	
	
	
	public ArrayList<POJO> getData(int page) throws SQLException
	{
		
		Connection conn=null;
		Statement stmt = null;
	    ResultSet rs = null;
		ArrayList<POJO> ALLData =new ArrayList<POJO>();
		
		 Integer sl_no;
		 String business_code; 
		 Integer cust_number;
		 String clear_date;
		 String business_year;
		 String doc_id;
		 String posting_date;
		 String document_create_date;
		 //String document_create_date_1;
		 String due_in_date;
		 String invoice_currency;
		 String document_type;
		 Integer posting_id;
		 //String area_business;
		 double total_open_amount;
		 String baseline_create_date;
		 String cust_payment_terms;
		 Integer invoice_id;
		 //Integer isOpen;
		 //String aging_bucket;
		 //Integer is_deleted;
		 int NO_OF_ROWS = 10;
		try {
			
		  conn = getConnection();
		 String sql_query="SELECT sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship ORDER BY doc_id ASC LIMIT"+ page + ", " + NO_OF_ROWS;
		 stmt = conn.createStatement();
		 rs = stmt.executeQuery(sql_query);
		 
		 if(rs.next()) {
			 System.out.println("successfully record found");
		 }else {
			 System.out.println("records not found");
		 }
		
		 while(rs.next())
		 {
				POJO p = new POJO();
			 	sl_no = rs.getInt("sl_no");
			 	business_code = rs.getString("business_code");
				cust_number = rs.getInt("cust_number");
				clear_date = rs.getString("clear_date");
				business_year=rs.getString("buisness_year");
				doc_id=rs.getString("doc_id");
				posting_date=rs.getString("posting_date");
				document_create_date=rs.getString("document_create_date");
				//document_create_date_1=rs.getString("document_create_date1");
				due_in_date=rs.getString("due_in_date");
				invoice_currency=rs.getString("invoice_currency");
				document_type=rs.getString("document_type");
				posting_id=rs.getInt("posting_id");
				//area_business=rs.getString("area_business");
				total_open_amount=rs.getDouble("total_open_amount");
				baseline_create_date=rs.getString("baseline_create_date");
				cust_payment_terms=rs.getString("cust_payment_terms");
				invoice_id=rs.getInt("invoice_id");
				//isOpen=rs.getInt("isOpen");
				//aging_bucket=rs.getString("aging_bucket");
				//is_deleted=rs.getInt("is_deleted");
				
				
								
				p.setSl_no(sl_no);
				p.setBusiness_code(business_code);
				p.setCust_number(cust_number);
				p.setClear_date(clear_date);
				p.setBusiness_year(business_year);
				p.setDoc_id(doc_id);
				p.setPosting_date(posting_date);
				p.setDocument_create_date(document_create_date);
				//p.setDocument_create_date_1(document_create_date_1);
				p.setDue_in_date(due_in_date);
				p.setInvoice_currency(invoice_currency);
				p.setDocument_type(document_type);
				p.setPosting_id(posting_id);
				//p.setArea_business(area_business);
				p.setTotal_open_amount(total_open_amount);
				p.setBaseline_create_date(baseline_create_date);
				p.setCust_payment_terms(cust_payment_terms);
				p.setInvoice_id(invoice_id);
				//p.setIsOpen(isOpen);
				//p.setAging_bucket(aging_bucket);
				//p.setIs_deleted(is_deleted);
				
				
				ALLData.add(p);
				
				
		 }
		 
		 for(POJO stud: ALLData)
		 {
			 System.out.println(stud.toString());
		 }
		 
		}
		catch (Exception e) {
			e.printStackTrace();
			System.out.println("exception occur");
		}finally {
	        if(rs != null) {
	             rs.close();
	        }
	        if(stmt !=null) {
	           stmt.close();
	        } 
	        if(conn != null) {
	           conn.close();
	        }
	    }
		
		return ALLData;
		
}
	
	
	public void insertData(String b,int c,String d,int ee,String f,String g,String h,String j,String k,String l,int m,double o,String p,String q,int r) throws SQLException, ParseException {
		
		
		Connection conn=null;
		PreparedStatement pstmt = null;
		java.util.Date utilDate =  new SimpleDateFormat("yyyy-MM-dd").parse(d);
		java.sql.Date sqlDate = new java.sql.Date(utilDate.getTime());
		java.util.Date utilDate_1 =  new SimpleDateFormat("yyyy-MM-dd").parse(g);
		java.sql.Date sqlDate_1 = new java.sql.Date(utilDate_1.getTime());
		java.util.Date utilDate_2 =  new SimpleDateFormat("yyyy-MM-dd").parse(h);
		java.sql.Date sqlDate_2 = new java.sql.Date(utilDate_2.getTime());
		//java.util.Date utilDate_3 =  new SimpleDateFormat("yyyy-MM-dd").parse(i);
		//java.sql.Date sqlDate_3 = new java.sql.Date(utilDate_3.getTime());
		java.util.Date utilDate_4 =  new SimpleDateFormat("yyyy-MM-dd").parse(j);
		java.sql.Date sqlDate_4 = new java.sql.Date(utilDate_4.getTime());
		java.util.Date utilDate_5 =  new SimpleDateFormat("yyyy-MM-dd").parse(p);
		java.sql.Date sqlDate_5 = new java.sql.Date(utilDate_5.getTime());
		Year year = Year.of( ee ) ;
		
		

	    
	    try {
	    	 conn = getConnection();
			 String sql_query="insert into winter_internship(business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id) values \r\n"
			 		+ "(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";			 
			 pstmt = conn.prepareStatement(sql_query);
			 
			 //pstmt.setInt(1, a);
			 pstmt.setString(1, b);
			 pstmt.setInt(2, c);
             pstmt.setDate(3, sqlDate);
             pstmt.setInt( 4 , year.getValue() );
             pstmt.setString(5, f);
             pstmt.setDate(6, sqlDate_1);
             pstmt.setDate(7, sqlDate_2);
             //pstmt.setDate(9, sqlDate_3);
             pstmt.setDate(8, sqlDate_4);
             pstmt.setString(9, k);
             pstmt.setString(10, l);
             pstmt.setInt(11, m);
            // pstmt.setString(14,n);
             pstmt.setDouble(12, o);
             pstmt.setDate(13, sqlDate_5);
             pstmt.setString(14,q);
             pstmt.setInt(15,r);
             //pstmt.setInt(19,s);
             //pstmt.setString(20, t);
             //pstmt.setInt(21, u);
             
			 int rows = pstmt.executeUpdate();
			 
			 if(rows>0) {
				 System.out.println("record inserted successfully");
			 }
			 else {
				 System.out.println("records not inserted successfully");
			 } 
			 
	    }catch (Exception e) {
			e.printStackTrace();
			System.out.println("exception occur");
		}finally {
	        if(pstmt !=null) {
	           pstmt.close();
	        } 
	        if(conn != null) {
	           conn.close();
	        }
	    }
			
		
	}
	
	
	
public void update(String s1,String s2,String s3) throws SQLException {
	
	
	Connection conn=null;
	PreparedStatement pstmt = null;
  //  ResultSet rs = null;
    
    try {
    	
    	conn=getConnection();
    	
    	String sql_query="UPDATE winter_internship SET invoice_currency= ?,cust_payment_terms = ? WHERE doc_id = ?";
    	pstmt=conn.prepareStatement(sql_query);
    	
    	pstmt.setString(3, s3);
		pstmt.setString(1, s1);
		pstmt.setString(2, s2);
		System.out.println(pstmt);
    	int rows=pstmt.executeUpdate();
    	
    	
    	if(rows>0) {
    		System.out.println("records updated successfuly");
    	}
    	else {
    		System.out.println("record not updated successsfully");
    	}
    	
    	
    }catch (Exception e) {
		e.printStackTrace();
		System.out.println("exception occur");
	}finally {
        if(pstmt !=null) {
           pstmt.close();
        } 
        if(conn != null) {
           conn.close();
        }
    }
    
	
	
}

public void deletedata(String [] final_values) throws SQLException {
	
	Connection conn=null;
	PreparedStatement stmt = null;
	//ResultSet rs = null;
	
	 try {
	    	
	    	conn=getConnection();
	    	
	    	String sql_query="DELETE FROM winter_internship WHERE doc_id = ?";
	    	for(int i = 0; i < final_values.length; ++i) {
//				System.out.println(final_values[i]);
				stmt = conn.prepareStatement(sql_query);
				stmt.setString(1, final_values[i]);
				System.out.println(stmt);
				stmt.executeUpdate();
			}
	    	
	    	    	
	    }catch (Exception e) {
			e.printStackTrace();
			System.out.println("exception occur");
		}finally {
	        if(stmt !=null) {
	           stmt.close();
	        } 
	        if(conn != null) {
	           conn.close();
	        }
	    }
	
	
	
	
}
public ArrayList<POJO> getsearch(String a1,int a2,int a3,int a4,int page) throws SQLException
{
	
	//int i1=Integer.parseInt(a2);
	//int i2=Integer.parseInt(a3);
	Year year = Year.of( a4 );
	
	Connection conn=null;
	PreparedStatement pstmt = null;
    ResultSet rs = null;
	ArrayList<POJO> ALLData =new ArrayList<POJO>();
	
	 Integer sl_no;
	 String business_code; 
	 Integer cust_number;
	 String clear_date;
	 String business_year;
	 String doc_id;
	 String posting_date;
	 String document_create_date;
	 //String document_create_date_1;
	 String due_in_date;
	 String invoice_currency;
	 String document_type;
	 Integer posting_id;
	 //String area_business;
	 double total_open_amount;
	 String baseline_create_date;
	 String cust_payment_terms;
	 Integer invoice_id;
	// Integer isOpen;
	 //String aging_bucket;
	 //Integer is_deleted;
	 

		int NO_OF_ROWS = 10;
	 
	try {
	  conn = getConnection();
	 String sql_query="SELECT sl_no,business_code,cust_number,clear_date,buisness_year,doc_id,posting_date,document_create_date,due_in_date,invoice_currency,document_type,posting_id,total_open_amount,baseline_create_date,cust_payment_terms,invoice_id from winter_internship where doc_id=? and invoice id=? and cust_number=? and business_year=? LIMIT" + page + ", " + NO_OF_ROWS;
	 pstmt = conn.prepareStatement(sql_query);
	 pstmt.setString(1, a1);
	 pstmt.setInt(2, a2);
	 pstmt.setInt(3, a3);
	 pstmt.setInt( 4 , year.getValue() );
	 rs = pstmt.executeQuery();
	 
	 if(rs.next()) {
		 System.out.println("successfully record found");
	 }else {
		 System.out.println("records not found");
	 }
	
	 while(rs.next())
	 {
			POJO p = new POJO();
		 	sl_no = rs.getInt("sl_no");
		 	business_code = rs.getString("business_code");
			cust_number = rs.getInt("cust_number");
			clear_date = rs.getString("clear_date");
			business_year=rs.getString("buisness_year");
			doc_id=rs.getString("doc_id");
			posting_date=rs.getString("posting_date");
			document_create_date=rs.getString("document_create_date");
			//document_create_date_1=rs.getString("document_create_date1");
			due_in_date=rs.getString("due_in_date");
			invoice_currency=rs.getString("invoice_currency");
			document_type=rs.getString("document_type");
			posting_id=rs.getInt("posting_id");
			//area_business=rs.getString("area_business");
			total_open_amount=rs.getDouble("total_open_amount");
			baseline_create_date=rs.getString("baseline_create_date");
			cust_payment_terms=rs.getString("cust_payment_terms");
			invoice_id=rs.getInt("invoice_id");
			//isOpen=rs.getInt("isOpen");
			//aging_bucket=rs.getString("aging_bucket");
			//is_deleted=rs.getInt("is_deleted");
			
			
							
			p.setSl_no(sl_no);
			p.setBusiness_code(business_code);
			p.setCust_number(cust_number);
			p.setClear_date(clear_date);
			p.setBusiness_year(business_year);
			p.setDoc_id(doc_id);
			p.setPosting_date(posting_date);
			p.setDocument_create_date(document_create_date);
			//p.setDocument_create_date_1(document_create_date_1);
			p.setDue_in_date(due_in_date);
			p.setInvoice_currency(invoice_currency);
			p.setDocument_type(document_type);
			p.setPosting_id(posting_id);
			//p.setArea_business(area_business);
			p.setTotal_open_amount(total_open_amount);
			p.setBaseline_create_date(baseline_create_date);
			p.setCust_payment_terms(cust_payment_terms);
			p.setInvoice_id(invoice_id);
			//p.setIsOpen(isOpen);
			//p.setAging_bucket(aging_bucket);
			//p.setIs_deleted(is_deleted);
			
			
			ALLData.add(p);
			
			
	 }
	 
	 for(POJO stud: ALLData)
	 {
		 System.out.println(stud.toString());
	 }
	 
	}
	catch (Exception e) {
		e.printStackTrace();
		System.out.println("exception occur");
	}finally {
        if(rs != null) {
             rs.close();
        }
        if(pstmt !=null) {
           pstmt.close();
        } 
        if(conn != null) {
           conn.close();
        }
    }
	
	return ALLData;
	
}
	
		
}
