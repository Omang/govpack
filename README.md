# govpack
gov society and security company registration services
Server interface(restful apis)
four services

microservices architecture Approach
We have four services
-clients service
...Society name search and reserve service
-Notification
...notifications, alerts , messaging management service
-payments
....societies payments management service

WE CONNECT USING Restful api's to services

HOW TO RUN A SERVICE
NOTE: YOU SHOULD HAVE THE BELOW TOOLS INSTALLED ON YOUR LOCAL MACHINE
-- Node (latest)
-- mongodb (latest) 
-- postman

CD TO SERVICE DIR USING CMD
RUN node app.js
success msg should appear on your console

open postman 
TEST APIs 

APIs

CLIENT SERVICE

POST DATA :     /api/addclient          for adding a new reserved name to database

pass this object as body
 {
    	organisation_name: "",
    	location: "",
    	contact: ""
    }
GET DATA :     /api/allclient           for getting all societies names from database


GET DATA :     /api/client/:id          for getting a single name from database
                                        use id of a single society to retrive data

GET DATA :     /api/checkname/:name           for searching for  name from database
                                              pass a name you want search.



NOTIFICATION SERVICE

POST DATA :     /api/newmsg          for adding a new msg,notification after a certain process have been excuted 
                                     to  database
            
            pass this object as body
 
                {
    	client_id: "",
    	msg: "",
    	date_created: ""
    }


GET DATA :    /api/getclientallmsg/:id           for getting all societies msg,notifications from database using
                                                 society id.


GET DATA :     /api/getmsg/:id          for getting a single message from database
                                        use id of a single msg to retrive data



PAYMENT SERVICE

POST DATA :     /api/newpayment          for adding a new payment record after a certain process have been excuted 
                                         to  database
            
            pass this object as body
 
                {
    	client_id: "",
    	amount: "",
    	date_created: ""
    }


GET DATA :    /api/getclientpayments/:id          for getting all payments from database using
                                                 society id.


GET DATA :     /api/getpayment/:id          for getting a single payment from database
                                        use id of a single data to retrive data




                                       AFTER ALL ABOVE SERVICES AS RUNNING

WE CAN RUN OUR BACKEND OF OUR APP(SOCIETY MANAGEMENT RESTFUL APIs);

CD TO society DIR USING CMD
RUN node app.js
success msg should appear on your console


POST DATA :     /api/reservename          for reserving a name after below api have run.
            
            pass this object as body
 
                {
      organisation_name: "",
      location: "",
      contact: "",
      category: "",
      date_created: ""
    }


GET DATA :    /api/searchclient/:name          For search for a name. if name available will retun an json object 
                                               if null will return an empty array.



                                               ENJOY...CALL +267 73725320 FOR HELP








