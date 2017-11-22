var quizlist = [
	{
		"section": "ABAP",
		"question":"Which of the following is/are the application areas of SAP ECC? (Choose 3)",
		"options": [
			{"text":"Sales and distribution", "correct" : true},
			{"text":"Human Resources management", "correct" : true},
			{"text":"Industry solution", "correct" : false},
			{"text":"Production Planning", "correct" : true},
			{"text":"Workflow", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"The deployment strategy for SAP solutions comprises which of the following? (Choose 3)",
		"options": [
			{"text":"Deploy on Platform", "correct" : false},
			{"text":"Deploy on Device", "correct" : true},
			{"text":"Deploy on SOA", "correct" : false},
			{"text":"Deploy on Premise", "correct" : true},
			{"text":"Deploy on Demand", "correct" : true}
		]
	},	
	{
		"section": "ABAP",
		"question":"SAP has characteristics that have made it a widely used business solution. Mark the statements that are TRUE? (Choose 2)",
		"options": [
			{"text":"Integrates business functions and data across the enterprise", "correct" : true},
			{"text":"Has limited level of adaptability or flexibility", "correct" : false},
			{"text":"Offers solutions based on enterprise size and needs", "correct" : true},
			{"text":"Suitable only for enterprises having more than 2500 users", "correct" : false},
			{"text":"Is an easy to learn and use accounting system", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"What are the different layers in the SAP ECC architecture? (Choose 3)",
		"options": [
			{"text":"Presentation Layer", "correct" : true},
			{"text":"Gateway Layer", "correct" : false},
			{"text":"Application Layer", "correct" : true},
			{"text":"Database Layer", "correct" : true},
			{"text":"Internet Communication Layer", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Select the components that are the capabilities of SAP Netweaver. (Choose 3)",
		"options": [
			{"text":"Identity Management", "correct" : false},
			{"text":"Master Data Management", "correct" : true},
			{"text":"Sales and Distribution", "correct" : false},
			{"text":"Business Process Management", "correct" : true},
			{"text":"ABAP / Java Server", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT part of the SAP GUI screen structure?",
		"options": [
			{"text":"Application tool bar", "correct" : false},
			{"text":"Standard tool bar", "correct" : false},
			{"text":"Navigation tool bar", "correct" : true},
			{"text":"Status bar", "correct" : false},
			{"text":"Title bar ", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"User’s login into the SAP system using the credentials assigned to them. What do you mean by 'user context'? (Choose 2)",
		"options": [
			{"text":"Data that is commonly assigned for all SAP users who login", "correct" : false},
			{"text":"It is always required during the execution of an ABAP program in the work process", "correct" : true},
			{"text":"Contains the user data and authorization data", "correct" : true},
			{"text":"Each user can open up to 9 external sessions", "correct" : false},
			{"text":"Contains the data that is handled during program execution", "correct": false}
		]
	},	
	{
		"section": "ABAP",
		"question":"The ABAP AS has a component called the dispatcher. What are the functions of the dispatcher? (Choose 3)",
		"options": [
			{"text":"A connection between the presentation layer and application layer", "correct" : true},
			{"text":"Manages the buffer in the AS", "correct" : false},
			{"text":"Assigns the request to an available work process", "correct" : true},
			{"text":"Format conversion of data between the PS and the AS", "correct" : true},
			{"text":"Organizes communication between the dialog instance and central instance", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"What are components included in the structure of a work process? (Choose 3)",
		"options": [
			{"text":"Screen processor", "correct" : true},
			{"text":"ABAP processor", "correct" : true},
			{"text":"Database interface", "correct" : true},
			{"text":"Shared memory", "correct" : false},
			{"text":"Virtual handler", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"10. What do you mean by a dual stack in the SAP Netweaver AS?",
		"options": [
			{"text":"ABAP AS", "correct" : false},
			{"text":"ABAP AS + Java AS", "correct" : true},
			{"text":"ABAP AS + VB.NET", "correct" : false},
			{"text":"Java AS", "correct" : false},
			{"text":"VB.NET + Java AS", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Identify the key capabilities of SAP NetWeaver. (Choose 3)",
		"options": [
			{"text":"Service-oriented architecture (SOA) middleware", "correct" : true},
			{"text":"Security and Identity management", "correct" : true},
			{"text":"Business intelligence", "correct" : true},
			{"text":"Customer Relationship Management", "correct" : false},
			{"text":"Supply Chain Management", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Identify the different installation options for SAP NetWeaver Application Server (AS). (Choose 3)",
		"options": [
			{"text":"SAP NetWeaver AS ABAP", "correct" : true},
			{"text":"SAP NetWeaver AS Java", "correct" : true},
			{"text":"SAP NetWeaver AS ABAP + Java", "correct" : true},
			{"text":"SAP NetWeaver AS C++", "correct" : false},
			{"text":"SAP NetWeaver All-In-One ", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Which of these programming environments are supported on the Netweaver platform? (Choose 2)",
		"options": [
			{"text":"C++", "correct" : false},
			{"text":"Java", "correct" : true},
			{"text":"COBOL", "correct" : false},
			{"text":"ABAP", "correct" : true},
			{"text":"Pascal", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Which of the given architecture represents a three-tier configuration",
		"options": [
			{"text":"Client, Server and Database, all three configured on one computer", "correct" : false},
			{"text":"Client and Server, configured on one computer and Database configured on another computer", "correct" : false},
			{"text":"Client configured on one computer and the Server and Database both configured on another computer", "correct" : false},
			{"text":"Client, Server and Database, all three configured on separate computers", "correct" : true},
			{"text":"Client and Database configured one one computer and the database configured on another computer", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"What are the advantages of a three-tier client/server configuration as compared with a singletier or two-tier configuration? (Choose 2)",
		"options": [
			{"text":"Simpler scalability", "correct" : true},
			{"text":"Simpler administration", "correct" : false},
			{"text":"Load balancing", "correct" : true},
			{"text":"Low hardware cost", "correct" : false},
			{"text":"Faster deployment of applications", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"AN installed software system that provides a defined set of functions that are part of an SAP solution is referred to as:",
		"options": [
			{"text":"SAP Business Suite", "correct" : false},
			{"text":"SAP System", "correct" : false},
			{"text":"SAP Instance", "correct" : true},
			{"text":"SAP Server", "correct" : false},
			{"text":"SAP Product", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Which of these statements can be associated with a three-tier configuration? (Choose 3)",
		"options": [
			{"text":"is the configuration where the database may be hosted on multiple servers", "correct" : false},
			{"text":"the configuration allows distributing the application layer processes among several hosts", "correct" : true},
			{"text":"If the number of users exceeds a certain upper limit, the application layer can be extended to offset the negative system performance", "correct" : true},
			{"text":"If the number of users exceeds a certain upper limit, the presentation layer can be extended to offset the negative system performance", "correct" : false},
			{"text":"is the configuration where the application server may be hosted on multiple hosts SAP Cert", "correct" : true}
		]
	},	
	{
		"section": "ABAP",
		"question":"Mark the statements that are characteristic of an SAP Instance. (Choose 3)",
		"options": [
			{"text":"combines SAP system components together to provide one or more services", "correct" : true},
			{"text":"The services of an instance are started and stopped sequentially", "correct" : false},
			{"text":"The services of an instance are started and stopped together", "correct" : true},
			{"text":"Multiple instances may be configured on one physical computer", "correct" : true},
			{"text":"SAP instance and Presentation Server are often used synonymously", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"An instance that offers services that no other instance of the system offers is called the:",
		"options": [
			{"text":"Core Instance", "correct" : false},
			{"text":"SAP Instance", "correct" : false},
			{"text":"Dialog Instance", "correct" : false},
			{"text":"Central Instance", "correct" : true},
			{"text":"Primary Instance", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"Which of the following is NOT an application from the SAP Business Suite?",
		"options": [
			{"text":"SAP ERP (SAP Enterprise Resource Planning)", "correct" : false},
			{"text":"SAP CRM (SAP Customer Relationship Management)", "correct" : false},
			{"text":"SAP BI (Business Intelligence)", "correct" : true},
			{"text":"SAP SRM (SAP Supplier Relationship Management)", "correct" : false},
			{"text":"SAP PLM (SAP Product Lifecycle Management)", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following aspects of the database layer is/are TRUE in the SAP system? (Choose 3)",
		"options": [
			{"text":"Contains the installation files for the Java AS", "correct" : false},
			{"text":"Contains client-specific data", "correct" : true},
			{"text":"Contains cross-client data", "correct" : true},
			{"text":"Contains client-specific repository objects", "correct" : false},
			{"text":"Contains cross-client repository objects", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Select the most suitable breakdown of the repository in SAP ECC.",
		"options": [
			{"text":"Repository->Package->Application->Program->Text Symbols", "correct" : false},
			{"text":"Application->Package->Repository->Text Symbols-> Program", "correct" : false},
			{"text":"Repository->Application->Package->Program->Text Symbols", "correct" : true},
			{"text":"Package->Application->Repository->Program->Text Symbols", "correct" : false},
			{"text":"Application->Program->Package->Repository->Text Symbols", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The ABAP tool that integrates most of the development functionality is the:",
		"options": [
			{"text":"ABAP Editor", "correct" : false},
			{"text":"Package", "correct" : false},
			{"text":"Object Navigator", "correct" : true},
			{"text":"ABAP Dictionary", "correct" : false},
			{"text":"Class Builder", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are functions possible in the Object Navigator? (Choose 3)",
		"options": [
			{"text":"User can create, change or display business data", "correct" : false},
			{"text":"User can view the object and its sub objects if any", "correct" : true},
			{"text":"User can release/transport an object into the test or production system", "correct" : true},
			{"text":"User can easily switch between various ABAP development objects", "correct" : true},
			{"text":"User can manage the user master data of self and others in the system", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"You have created a program ZABCXX_01 which is of type executable. Which of the following statements is/are TRUE for your development? (Choose 3)",
		"options": [
			{"text":"The program should be saved under SAP packages at all times", "correct" : false},
			{"text":"The program may be executed only by creating a transaction for it", "correct" : false},
			{"text":"The program may have two versions during development: inactive version or the active version", "correct" : true},
			{"text":"The program typically would consist of a selection screen and a list", "correct" : true},
			{"text":"Activating the program also performs the syntax check on it", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT TRUE for the transport of a development object? (Choose 2)",
		"options": [
			{"text":"The object must be stored under a package to initiate a transport", "correct" : false},
			{"text":"The package $TMP may be used as default to initiate a transport", "correct" : true},
			{"text":"Team members within the project are assigned specific request numbers", "correct" : false},
			{"text":"The object may not be transported if it contains a syntax error", "correct" : false},
			{"text":"The object may not be transported if it is not active", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following declaration syntax is/are the right construct for a variable LV_CARR? (Choose 2)",
		"options": [
			{"text":"DATA: LV_CARR TYPE I LENGTH 10.", "correct" : false},
			{"text":"DATA: LV_CARR TYPE C(10).", "correct" : false},
			{"text":"DATA: LV_CARR(10) TYPE N VALUE '0123456789'.", "correct" : false},
			{"text":"DATA: LV_CARR1 TYPE C. DATA: LV_CARR2 LIKE LV_CARR1.", "correct" : true},
			{"text":"DATA: LY_CARR1 TYPE C. DATA: LV_CARR2 TYPE LV_CARR1.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the Incomplete data types? (Choose 2)",
		"options": [
			{"text":"Character", "correct" : true},
			{"text":"Float", "correct" : false},
			{"text":"Packed", "correct" : true},
			{"text":"String", "correct" : false},
			{"text":"Integer", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following entities supports multi-language display for a program output? (Choose 3)",
		"options": [
			{"text":"List Heading", "correct" : true},
			{"text":"Selection Screen", "correct" : false},
			{"text":"Selection Texts", "correct" : true},
			{"text":"Text Symbols", "correct" : true},
			{"text":"Text Literals", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"When using a DO...ENDDO loop in a program, which of these conditions may be incorporated to control the loop pass using: (Choose 3)",
		"options": [
			{"text":"SKIP", "correct" : false},
			{"text":"EXIT", "correct" : true},
			{"text":"CONTINUE", "correct" : true},
			{"text":"CHECK", "correct" : true},
			{"text":"RETURN", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are benefits of SAP Netweaver? (Choose 3)",
		"options": [
			{"text":"SAP Netweaver offers a monolithic software environment which limits business flexibility", "correct" : false},
			{"text":"SAP NetWeaver provides the flexibility to integrate applications that run across SAP, SAP-certified partners, and custom-built applications.", "correct" : true},
			{"text":"SAP Netweaver supports rapid deployment through pre-built integration content", "correct" : true},
			{"text":"SAP NetWeaver enables companies to entirely replace their current software and systems.", "correct" : false},
			{"text":"SAP NetWeaver is based on a technology that uses industry standards and can be enhanced using popular development tools.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is not a capability of SAP Netweaver?",
		"options": [
			{"text":"User Productivity", "correct" : false},
			{"text":"Custom Development", "correct" : false},
			{"text":"Business Intelligence", "correct" : false},
			{"text":"Customer Relationship Management", "correct" : true},
			{"text":"Security and Identity Management", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark some of the key products of SAP Netweaver? (Choose 3)",
		"options": [
			{"text":"Business Process Management", "correct" : true},
			{"text":"Composition Environment", "correct" : true},
			{"text":"Enterprise Resource Planning", "correct" : false},
			{"text":"Supply Chain Management", "correct" : false},
			{"text":"Process Integration", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is the platform for SAP Application development, runtime and/or intergration?",
		"options": [
			{"text":"SAP Business Suite", "correct" : false},
			{"text":"SAP ECC 6.07", "correct" : false},
			{"text":"SAP Netweaver", "correct" : true},
			{"text":"SAP Supplier Relationship Management", "correct" : false},
			{"text":"SAP Master Data Management", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following make up the Architecture of the SAP System? (Choose 3)",
		"options": [
			{"text":"Composite Layer", "correct" : false},
			{"text":"Database Layer", "correct" : true},
			{"text":"Presentation Layer", "correct" : true},
			{"text":"Hybrid Layer", "correct" : false},
			{"text":"Application Layer", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are functions possible in the Debugging tool? (Choose 2)",
		"options": [
			{"text":"Monitor a variable content using a Breakpoint", "correct" : false},
			{"text":"Monitor a variable content using a Watchpoint", "correct" : true},
			{"text":"View or change the contents of DATA, PARAMETERS, CONSTANTS and other data objects", "correct" : false},
			{"text":"Stop control at a required line by setting a breakpoint at it", "correct" : true},
			{"text":"Stop control at a required line by setting a watchpoint at it", "correct" : false}
		]
	},	
	{
		"section": "ABAP",
		"question":"The debugging tool can be started using when the application has a selection screen using:",
		"options": [
			{"text":"/D", "correct" : false},
			{"text":"/F", "correct" : false},
			{"text":"/T", "correct" : false},
			{"text":"/C", "correct" : false},
			{"text":"/H", "correct" : true}
		]
	},	
	{
		"section": "ABAP",
		"question":"Which of the following data objects supports reading data using the row position?",
		"options": [
			{"text":"Standard Table", "correct" : true},
			{"text":"Sorted Table", "correct" : true},
			{"text":"Hashed Table", "correct" : false},
			{"text":"Transparent Table", "correct" : false},
			{"text":"Indexed Table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the characteristics required to declare an internal table in your program. (Choose 3)",
		"options": [
			{"text":"The program must be an executable program", "correct" : false},
			{"text":"Declaration with ‹line type› is a mandatory property", "correct" : true},
			{"text":"Header line property is optional in the declaration", "correct" : true},
			{"text":"Initial size when not specified allocates 100 rows as default", "correct" : false},
			{"text":"Declaration may be done using ‹structure type›, ‹table type›, ‹data element›", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"DATA: it_spfli TYPE TABLE OF SPFLI. Where SPFLI is a database table used to declare the internal table in my program. Mark the correct statements. (Choose 3)",
		"options": [
			{"text":"The internal table it_spfli is a HASHED table by default", "correct" : false},
			{"text":"The internal table also requires an explicit structure to process the data", "correct" : true},
			{"text":"All the columns in the internal table form the keys of the table", "correct" : false},
			{"text":"The internal table may store duplicate entries", "correct" : true},
			{"text":"The internal table may be accessed using the row numbers", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The successful execution of an internal table INSERT command may be determined by checking the value of:",
		"options": [
			{"text":"SY-TABIX = 0", "correct" : false},
			{"text":"SY-SUBRC = 0", "correct" : true},
			{"text":"SY-INDEX = 0", "correct" : false},
			{"text":"SY-DBCNT = 0", "correct" : false},
			{"text":"SY-TFILL = 0", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Publishing information to the user informing the status of the program or an activity is done using messages. Which of the following statements are TRUE for messages? (Choose 3)",
		"options": [
			{"text":"A warning message stops control on screen and proceeds only if input is corrected", "correct" : false},
			{"text":"Information message displays a pop-up and then continues to the next screen in the navigation order", "correct" : true},
			{"text":"An Abort message terminates the program and issues a ROLLBACK", "correct" : true},
			{"text":"A detailed description of a message is maintained as long text in the message class", "correct" : true},
			{"text":"A message from the message class can handle up to 8 place holders", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is valid in the MESSAGE syntax? (Choose 3)",
		"options": [
			{"text":"“...DISPLAY LIKE mstype.” addition may be used to publish the message as another type other than the definition", "correct" : true},
			{"text":"“...DISPLAY LIKE mstype.” addition is NOT recommended for an “A” – Abort Message", "correct" : false},
			{"text":"“...RAISING exception.” addition will publish the message if the exception parameter was not defined in the function module or method", "correct" : true},
			{"text":"“...RAISING exception.” addition may be used in Includes or Subroutines to trigger messages", "correct" : false},
			{"text":"“...WITH dobj1 dobj2.” addition may be used to pass runtime values to be published along with the message", "correct" : true}
		]
	},
	{	
		"section": "ABAP",
		"question":"How many types of internal tables may be defined in an ABAP program?",
		"options": [
			{"text":"Only One", "correct" : false},
			{"text":"Two", "correct" : false},
			{"text":"Three", "correct" : false},
			{"text":"Four", "correct" : true},
			{"text":"Five", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are a suitable methods to declare an explicit work area for an internal table? SCARR is the name of a database table and lt_scarr is an internal table. (Choose 2)",
		"options": [
			{"text":"DATA: ls_scarr TYPE TABLE OF SCARR.", "correct" : false},
			{"text":"TYPES: ls_scarr TYPE TABLE OF SCARR.", "correct" : false},
			{"text":"DATA: ls_scarr TYPE LINE OF lt_scarr.", "correct" : false},
			{"text":"DATA: ls_scarr LIKE LINE OF lt_scarr.", "correct" : true},
			{"text":"DATA: ls_scarr TYPE SCARR.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The SAP product that is designed specifically for small businesses covering all business aspects from sales and customer relationships to financials and operations is the:",
		"options": [
			{"text":"SAP Business Suite", "correct" : false},
			{"text":"SAP Business One", "correct" : true},
			{"text":"SAP All-in-One", "correct" : false},
			{"text":"SAP Business ByDesign", "correct" : false},
			{"text":"SAP Netweaver", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the features offered by SAP Business ByDesign product. (Choose 2)",
		"options": [
			{"text":"Is suitable for mid-sized companies or subsidiaries of bigger firms", "correct" : true},
			{"text":"It offers a cloud based on-demand software-as-a-service (SaaS) solution", "correct" : true},
			{"text":"It covers business aspects from sales and customer relationships to financials and operations only.", "correct" : false},
			{"text":"It requires an in-house IT team to maintain, monitor and manage the solution", "correct" : false},
			{"text":"It offers numerous industry-specific functions", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Select the suitable SAP platform used by marketing, sales, and service professionals to manage customers and customer-related processes.",
		"options": [
			{"text":"SAP ERP", "correct" : false},
			{"text":"SAP CRM", "correct" : true},
			{"text":"SAP SRM", "correct" : false},
			{"text":"SAP PLM", "correct" : false},
			{"text":"SAP SCM", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of SAP’s offering enables companies to take advantage of ongoing innovations while keeping their core software stable?",
		"options": [
			{"text":"Industry Applications", "correct" : false},
			{"text":"Composition Environment", "correct" : false},
			{"text":"Supplementary Applications", "correct" : false},
			{"text":"Enhancement Packages", "correct" : true},
			{"text":"Core Applications", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which offering from SAP provides access to fresh data at any level of granularity, combined with the ability to perform predictive analysis?",
		"options": [
			{"text":"SAP Business One", "correct" : false},
			{"text":"SAP Business Warehouse", "correct" : false},
			{"text":"SAP Business Intelligence", "correct" : false},
			{"text":"SAP Business Objects", "correct" : false},
			{"text":"SAP HANA", "correct" : true}
		]
	},
		{
		"section": "ABAP",
		"question":"Buffering technique improves access on a database table. When can this option be enabled for the database table? (Choose 3)",
		"options": [
			{"text":"When table read access is relatively low versus write access", "correct" : false},
			{"text":"When table read access is relatively high versus write access", "correct" : true},
			{"text":"When the most recent data from the table is required", "correct" : false},
			{"text":"When the table is designed as a transparent table", "correct" : true},
			{"text":"When the table contains master or organization data", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The role of ABAP Dictionary when coding a program is to: (Choose 3)",
		"options": [
			{"text":"Provide access to definitions that can be used in program declarations", "correct" : true},
			{"text":"Provide documentation on SAP system, keyword glossary etc.", "correct" : false},
			{"text":"Provide access to global definitions at runtime", "correct" : true},
			{"text":"Provide create/change/display access to programs", "correct" : false},
			{"text":"Provide F1 and F4 help for input fields during design and runtime", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of the following may be TRUE for a table in the ABAP Dictionary? (Choose 3)",
		"options": [
			{"text":"The table and its data is always client specific", "correct" : true},
			{"text":"The table and its data is always cross client", "correct" : false},
			{"text":"The table is cross client whereas the data maybe client specific", "correct" : true},
			{"text":"The table is cross client whereas the data maybe cross client", "correct" : true},
			{"text":"The table is client specific whereas the data maybe cross client", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"A SELECT statement may use which of the following to optimize the access to the database? (Choose 3)",
		"options": [
			{"text":"A buffer if the table setting has buffer activated", "correct" : true},
			{"text":"The primary index if the WHERE clause uses the non-key fields of the table", "correct" : false},
			{"text":"The primary index if the WHERE clause uses the key fields of the table", "correct" : true},
			{"text":"The secondary index if the WHERE clause uses the non-key fields of the table", "correct" : true},
			{"text":"The secondary index if the WHERE clause uses the key fields of the table", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Mark the TRUE characteristics of the database interface: (Choose 3)",
		"options": [
			{"text":"Converts DB data into SAP internal format", "correct" : true},
			{"text":"Converts SAP internal format to Native DB data", "correct" : true},
			{"text":"Converts Native SQL statement into Open SQL", "correct" : false},
			{"text":"Converts Open SQL statement into Native SQL", "correct" : true},
			{"text":"Enforce buffer if explicit Native SQL was coded in the program", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"In the given list of statements for SELECT, mark the ones that do not require an ENDSELECT. (Choose 2)",
		"options": [
			{"text":"SELECT * FROM dbtable INTO ls_str. Where ls_str is a local structure.", "correct" : false},
			{"text":"SELECT SINGLE * FROM dbtable INTO ls_str. Where ls_str is a local structure.", "correct" : true},
			{"text":"SELECT * FROM dbtable INTO ls_str UP TO 1 ROWS. Where ls_str is a local structure.", "correct" : false},
			{"text":"SELECT * FROM dbtable INTO lt_itab. Where lt_itab is an internal table.", "correct" : false},
			{"text":"SELECT * FROM dbtable INTO TABLE lt_itab. Where lt_itab is an internal table.", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Your program states that the number of records normally fetched are 500 entries from the database table. Choose the most suitable syntax given below: (Choose 3)",
		"options": [
			{"text":"SELECT * FROM dbtab INTO ls_str WHERE condt...ENDSELECT", "correct" : false},
			{"text":"SELECT * FROM dbtab UP TO 500 ROWS INTO ls_str WHERE condt...ENDSELECT", "correct" : true},
			{"text":"SELECT * FROM dbtab UP TO TO 500 ROWS INTO CORRESPONDING FIELDS OF ls_str WHERE condt...ENDSELECT", "correct" : false},
			{"text":"SELECT * FROM dbtab UP TO 500 ROWS INTO TABLE lt_itab WHERE condt.", "correct" : false},
			{"text":"SELECT * FROM dbtab UP TO 500 ROWS INTO CORRESPONDING FIELDS OF TABLE lt_itab WHERE condt.", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"What does the CLIENT-SPECIFIED addition do in a SELECT command? (Choose 3)",
		"options": [
			{"text":"Get data from the login client: for example 800 being the login client", "correct" : false},
			{"text":"Get data from other than the login client: for example 800 being the login client", "correct" : true},
			{"text":"Must use the MANDT field in the WHERE clause of the statement", "correct" : true},
			{"text":"MANDT if not specified will fetch data from the default login client", "correct" : false},
			{"text":"MANDT if not specified will fetch data from all existing clients", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"A selection screen for an executable program may be defined using which of these keywords? (Choose 2)",
		"options": [
			{"text":"DATA keyword", "correct" : false},
			{"text":"PARAMETERS keyword", "correct" : true},
			{"text":"RANGES keyword", "correct" : false},
			{"text":"SELECT-OPTIONS keyword", "correct" : true},
			{"text":"STATICS keyword", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of the following are events associated with a selection screen? (Choose 2)",
		"options": [
			{"text":"LOAD OF PROGRAM", "correct" : false},
			{"text":"START OF SELECTION", "correct" : false},
			{"text":"END OF SELECTION", "correct" : false},
			{"text":"INITIALIZATION", "correct" : true},
			{"text":"AT SELECTION SCREEN", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"What are the characteristics of ‘Client’ in the SAP System? (Choose 3)",
		"options": [
			{"text":"Client corresponds to a business partner or customer within the company running the SAP system", "correct" : false},
			{"text":"Client correspond to independent business entities and represent a company in an SAP system", "correct" : true},
			{"text":"One SAP system can have only one client", "correct" : false},
			{"text":"One SAP system can have several clients", "correct" : true},
			{"text":"Client gives access to business data only from the same client.", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of the following is not an option to call functions in an SAP system?",
		"options": [
			{"text":"Entering transaction codes in the command field", "correct" : false},
			{"text":"Choosing items from the SAP menu", "correct" : false},
			{"text":"Choosing items from a user menu", "correct" : false},
			{"text":"Choosing items from buttons of the standard tool bar", "correct" : true},
			{"text":"Choosing items from the Favorites list", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Select the command that is not part of the list that may be used in the command box.",
		"options": [
			{"text":"use ⁄ N to cancel the current transaction", "correct" : false},
			{"text":"⁄ NXXXX to call transaction XXXX directly from another transaction.", "correct" : false},
			{"text":"⁄ NEND to end the log on session", "correct" : false},
			{"text":"⁄ NEXIT to end the log on session", "correct" : true},
			{"text":"⁄ NEX to end the log on session", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of these commands may be used to delete or close a transaction window that you may be using?",
		"options": [
			{"text":"⁄ N", "correct" : false},
			{"text":"⁄ O", "correct" : false},
			{"text":"⁄ H", "correct" : false},
			{"text":"⁄ NEX", "correct" : false},
			{"text":"⁄ I", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"What does the co􀅵􀅵a􀅶d ⁄ O do whe􀅶 you use it in the command box?",
		"options": [
			{"text":"It cancels the current transaction", "correct" : false},
			{"text":"It closes the window you are currently using", "correct" : false},
			{"text":"It ends the log on session", "correct" : false},
			{"text":"It displays the overview of the SAP GUI sessions", "correct" : true},
			{"text":"It calls a transaction in a new window", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of these special characters may be used in the SELECT statement to filter records based on a pattern? (Choose 2)",
		"options": [
			{"text":"*", "correct" : false},
			{"text":"+", "correct" : false},
			{"text":"_", "correct" : true},
			{"text":"!", "correct" : false},
			{"text":"%", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are NOT allowed for a field in the WHERE condition of a SELECT statement? (Choose 2)",
		"options": [
			{"text":"WHERE field = parameter_name...", "correct" : false},
			{"text":"WHERE field = structure_name...", "correct" : true},
			{"text":"WHERE field = table_name~field_name...", "correct" : false},
			{"text":"WHERE field = range_internal_table...", "correct" : true},
			{"text":"WHERE field IN range_internal_table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The SELECT...ENDSELECT may process data in a loop using a multiline target area (internal table) by using which of the given addition?",
		"options": [
			{"text":"UP TO N ROWS - where N is the number of lines processed", "correct" : false},
			{"text":"LIMIT N - where N is the number of lines processed", "correct" : false},
			{"text":"BLOCK SIZE N - where N number of lines processed", "correct" : false},
			{"text":"PACKAGE SIZE N - where N is the number of lines processes", "correct" : true},
			{"text":"ORDER SIZE N - where N is the number of lines processed", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the given CURSOR command executes the database access but does not pass any data to the application program?",
		"options": [
			{"text":"GET CURSOR...", "correct" : false},
			{"text":"FETCH CURSOR...", "correct" : false},
			{"text":"OPEN CURSOR...", "correct" : true},
			{"text":"SET CURSOR...", "correct" : false},
			{"text":"CLOSE CURSOR...", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the statements that determine the use of explicit cursor in the SELECT query. (Choose 3)",
		"options": [
			{"text":"The SET CURSOR positions the cursor variable at any line in the result set as needed from the application", "correct" : false},
			{"text":"The OPEN CURSOR sets the cursor variable to a position before the first line of the result set", "correct" : true},
			{"text":"The cursor variable stores the position in the result set of the database access up to which processing is already complete", "correct" : true},
			{"text":"The OPEN CURSOR executes the access and passes result data to the application program", "correct" : false},
			{"text":"each FETCH..CURSOR allows you to read different numbers of records into a different data object as the target", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are NOT TRUE with regard to the prerequisites when using ORDER BY clause for the SELECT statement? (Choose 2)",
		"options": [
			{"text":"The FROM clause if contains a view, the SELECT statement may use the addition ORDER BY PRIMARY KEY", "correct" : true},
			{"text":"You can sort pooled tables and cluster tables only by their key field", "correct" : true},
			{"text":"The field list after SELECT must contain all the key fields of the table including client, when ORDER BY PRIMARY KEY addition is used", "correct" : false},
			{"text":"The sort columns in ORDER BY COL1 COL2... must be part of the result set and therefore must appear after the SELECT statement", "correct" : false},
			{"text":"You cannot sort by fields with type LCHAR, LRAW, STRING, or RAWSTRING", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The result set of a SELECT statement is aggregated and duplicates entries are removed by using the addition:",
		"options": [
			{"text":"UNIQUE", "correct" : false},
			{"text":"PRIMARY", "correct" : false},
			{"text":"DISTINCT", "correct" : true},
			{"text":"DISJUNCT", "correct" : false},
			{"text":"INDIVIDUAL", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The aggregate functions that may not be used on a SELECT field list if the field is of text or character type are: (Choose 2)",
		"options": [
			{"text":"MIN( col )", "correct" : false},
			{"text":"MAX( col )", "correct" : false},
			{"text":"SUM( col )", "correct" : true},
			{"text":"AVG( col )", "correct" : true},
			{"text":"COUNT( * )", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A SELECT statement consists of field list and aggregate functions. Mark the TRUE statements. Example: SELECT CARRID CONNID SUM( SEATSOCC ).... (Choose 3)",
		"options": [
			{"text":"the result set is always multiline and may be loaded into an internal table", "correct" : true},
			{"text":"The SELECT statement must contain ORDER BY clause and all fields from the field list must be listed after ORDER BY", "correct" : false},
			{"text":"The SELECT statement must contain GROUP BY clause and all fields from the field list must be listed after GROUP BY", "correct" : true},
			{"text":"SELECT * may be used along with any of the aggregate functions in the statement", "correct" : false},
			{"text":"When using the GROUP BY clause, a logical expression may be specified after the HAVING expression", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"A company ABC Inc. with a small employee strength (less than 100) wishes to setup an IT department enabled with SAP in the shortest possible time. The most suitable SAP product is:",
		"options": [
			{"text":"SAP Business One", "correct" : true},
			{"text":"SAP All-in-One", "correct" : false},
			{"text":"SAP Business By Design", "correct" : false},
			{"text":"SAP Business Suite", "correct" : false},
			{"text":"SAP Netweaver", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Enabling SAP business solutions for a manufacturing giant [like Boeing, Samsung, Ferrari etc.] interested in the SAP Business Suite enables:",
		"options": [
			{"text":"Components that can be adapted to meet multiple business requirements", "correct" : true},
			{"text":"interfaces for integrating non-SAP systems of the company", "correct" : true},
			{"text":"a very short implementation cycle (less than 4 weeks)", "correct" : false},
			{"text":"an IT system that is mature and stable", "correct" : true},
			{"text":"limited scalability, and limited collaboration over the Internet", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"An SAP Application running on the SAP Netweaver ABAP AS platform:",
		"options": [
			{"text":"can be accessed using SAP GUI for Windows", "correct" : false},
			{"text":"can be accessed using SAP GUI for Java", "correct" : false},
			{"text":"can be accessed using SAP GUI for HTML", "correct" : false},
			{"text":"can be accessed using SAP GUI for Windows, SAP GUI for Java or SAP GUI for HTML", "correct" : true},
			{"text":"can be accessed using SAP Netweaver Business Client", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The company ABC Inc. needs a comprehensive solution to manage customers and related processes. Identify the possible SAP solution that may be used.",
		"options": [
			{"text":"SAP Sales and Distribution", "correct" : false},
			{"text":"SAP Supplier Relationship Management", "correct" : false},
			{"text":"SAP Customer Relationship Management", "correct" : true},
			{"text":"SAP Enterprise Resource Planning", "correct" : false},
			{"text":"SAP Supply Chain Management", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Mark the statements that describe an SAP Component:",
		"options": [
			{"text":"Can be separately installed or combined with other components to provide a business solution", "correct" : true},
			{"text":"Component is a collection of SAP Applications", "correct" : false},
			{"text":"Components can be separately developed and delivered by SAP", "correct" : true},
			{"text":"All SAP Applications contain the same set of components when delivered", "correct" : false},
			{"text":"An SAP Application is a collection of Components", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The Central Services Instance for the Java AS 7.1x and higher comprises which of the following processes?",
		"options": [
			{"text":"Dispatcher", "correct" : false},
			{"text":"Message Server", "correct" : true},
			{"text":"Gateway Server", "correct" : true},
			{"text":"Enqueue Server", "correct" : true},
			{"text":"ICM - Internet Communication Manager", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The company ABC Inc. wishes to integrate its employees, vendors and customers to increase its business efficiency. Choose the Netweaver components that can offer a suitable solution.",
		"options": [
			{"text":"Enhancement Packages", "correct" : false},
			{"text":"Enterprise Portal", "correct" : true},
			{"text":"Mobility", "correct" : true},
			{"text":"Composite Applications", "correct" : false},
			{"text":"Industry Applications", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The user may logoff from the SAP system without saving any data entered on the screen by using:",
		"options": [
			{"text":"/N in the command box", "correct" : false},
			{"text":"/I in the command box", "correct" : false},
			{"text":"/NEND in the command box", "correct" : false},
			{"text":"/NEX in the command box", "correct" : true},
			{"text":"/OFF in the command box", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"For a user logging into the SAP system, mark the statements that are TRUE:",
		"options": [
			{"text":"A new session can be opened using /O in the command field", "correct" : false},
			{"text":"The maximum number of sessions is 6 for the user logon", "correct" : true},
			{"text":"SAP licensing permits a user to logon multiple times on the SAP system", "correct" : false},
			{"text":"The user will be prompted to change password when logging in for the first time", "correct" : true},
			{"text":"The user is not allowed to personalize the GUI", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"For a user who is logged into the SAP system, mark the statements that are TRUE:",
		"options": [
			{"text":"The command field is also known as the OK CODE field", "correct" : true},
			{"text":"The command field is the only way to access transactions/applications", "correct" : false},
			{"text":"The command field displays the value list using the F4 key", "correct" : false},
			{"text":"The command field displays the value list using the F1 key", "correct" : false},
			{"text":"The command field does not have an explicit F4 value help", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"An SAP user is provided with a set of functions based on his role in the system. Which of the following denotes this list?",
		"options": [
			{"text":"Favourites Menu", "correct" : false},
			{"text":"Favourites List", "correct" : false},
			{"text":"SAP Menu", "correct" : false},
			{"text":"User Menu", "correct" : true},
			{"text":"Activity Menu", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"SAP user places the cursor on an input field of screen '100' in the application. Which of the following is available for this input field?",
		"options": [
			{"text":"View the documentation of the field using F1 key", "correct" : true},
			{"text":"View the documentation of the field using F4 key", "correct" : false},
			{"text":"View the technical-name of the field using F1 key", "correct" : true},
			{"text":"View the Value List of the field using F4 key", "correct" : true},
			{"text":"View the Value List of the field using F1 key", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The company ABC Inc. While setting up the SAP ERP solution has the Netweaver ABAP AS configured with the three-tier architecture. Mark the statement/s that are TRUE for the Presentation Layer (PS):",
		"options": [
			{"text":"The SAP users may log-on to this system using the SAP GUI for Java if the PS is on Mac/Linux", "correct" : true},
			{"text":"The PS can be extended horizontally to support any number of users by adding new client terminals", "correct" : true},
			{"text":"The SAP users may log-on to this system using the SAP GUI for Java if the Application platform is Java AS", "correct" : false},
			{"text":"The SAP users may log-on to this system using the SAP GUI for Java if theApplication Platform is ABAP AS", "correct" : true},
			{"text":"The SAP users may log-on to this system using the SAP GUI for HTML if the Application Platform is Java AS", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The company ABC Inc. has its SAP ERP System configured along with Netweaver AS dual stack. Mark the statement/s that are TRUE for the AS:",
		"options": [
			{"text":"A central instance offers services that no other instance of the system offers.", "correct" : true},
			{"text":"Multiple instances must be hosted on the same computer", "correct" : false},
			{"text":"Additional instances can be hosted on separate hardware.", "correct" : true},
			{"text":"Central System is one in which both the central instance and dialog instance are installed", "correct" : false},
			{"text":"Central System is one in which both the central instance and database are installed", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The Netweaver AS of ABC Inc. has one instance configured comprising of AS ABAP. Which of the following statements would be TRUE if ABC Inc. was to increase the no. of employees working on the SAP system?",
		"options": [
			{"text":"additional instances must/can be set up inorder to balance the load on the system", "correct" : true},
			{"text":"the dispatcher takes care of the log-on load balancing when additional instances are present", "correct" : false},
			{"text":"the SAP system would require more of Dialog Work Processes", "correct" : true},
			{"text":"additional Enqueue work process can be configured but should be done on the same instance where the first Enqueue wp exists", "correct" : true},
			{"text":"the Gateway takes care of the log-on load balancing when additional instances are present", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The central instance component of JAVA AS in Netweaver 7.0x and lower version is:",
		"options": [
			{"text":"SDM", "correct" : true},
			{"text":"Message Service", "correct" : false},
			{"text":"Server Processes", "correct" : false},
			{"text":"Enqueue Service", "correct" : false},
			{"text":"ICM", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"For an Insatance in the Netweaver AS. Mark the statements that are NOT TRUE",
		"options": [
			{"text":"the ICM occurs in the central instance only, either Java AS or ABAP AS", "correct" : true},
			{"text":"the Message server communicates between multiple server instances", "correct" : false},
			{"text":"the Dispatcher stores the user requests in the request queue and processes them in a last-in-first-out manner", "correct" : true},
			{"text":"the shared memory of one instance is not shared with the other instances", "correct" : false},
			{"text":"the Dispatcher stores the user requests in the request queue and processes them in a first-in-first-out manner", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"An SAP ERP system has a Netweaver platform with ABAP AS. The server has been configured with a number of work processes. Mark the statements that are TRUE.",
		"options": [
			{"text":"the Dialog WP processes the online requests and each instance requires a minimum of 4 Dialog work processes", "correct" : false},
			{"text":"the Spool WP raises the spool request and transfers the data to the OS printer", "correct" : false},
			{"text":"the Enqueue WP prevents users from simultaneously changing a record, thereby providing a lock mechanism", "correct" : true},
			{"text":"the Update WP is the only work process that is connected with the database for performing database operations (insert, update, modify..etc)", "correct" : false},
			{"text":"the Dialog WP raises the print request and Spool WP transfers the data to the OS printer", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"In a SAP Netweaver AS having a Central Services instance, mark the statement/s that are TRUE",
		"options": [
			{"text":"consists of the Message Service, Enqueue Service and Gateway", "correct" : true},
			{"text":"consists of the Message Service, Enqueue Service and Server Process", "correct" : false},
			{"text":"consists of the Message Service, Enqueue Service and ICM", "correct" : false},
			{"text":"Implies that the AS is a Netweaver ABAP AS", "correct" : false},
			{"text":"Implies that the AS is a Netweaver Java AS", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"In a SAP Netweaver ABAP AS. Mark the statement/s that are TRUE.",
		"options": [
			{"text":"the Dialog WP converts dialog(screen) data into SAP format internal data", "correct" : false},
			{"text":"each instance should contain atleast 2 Dialog WP", "correct" : true},
			{"text":"the Dialog WP executes programs in the background after scheduling", "correct" : false},
			{"text":"the database changes may be performed by Dialog WP or an Update WP upon reaching the COMMIT WORK.", "correct" : true},
			{"text":"the Dialog WP communicates between the Presentation layer and the Application Server", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Mark the true statements that define the characteristics of the database interface.",
		"options": [
			{"text":"Processes a database request from the ABAP Processor", "correct" : true},
			{"text":"Processes a database request from the Screen Processor", "correct" : false},
			{"text":"Translates Open SQL into Native SQL", "correct" : true},
			{"text":"Translates Native SQL into Open SQL", "correct" : false},
			{"text":"Converts Database format data into SAP format data", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The prerequisite for scaling parallel processing application servers is",
		"options": [
			{"text":"Dialog work process", "correct" : false},
			{"text":"Message server", "correct" : true},
			{"text":"Gateway server", "correct" : false},
			{"text":"Spool work process", "correct" : false},
			{"text":"Shared Memory", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"For a Dialog work process, mark the TRUE statements.",
		"options": [
			{"text":"the Dialog WP can perform DB changes through Open SQL statements.", "correct" : true},
			{"text":"the duration of a dialog step is represented by time taken to process all the screens in the application.", "correct" : false},
			{"text":"a single Dialog WP that can process dialog steps from different programs is called WP Multiplexing.", "correct" : true},
			{"text":"The Dialog WP ends its execution period by implicitly triggering a DB COMMIT", "correct" : true},
			{"text":"The Dialog WP ends its execution period by explicitly triggering a DB COMMIT", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The dialog step forms a physical and logical unit called:",
		"options": [
			{"text":"SAP Transaction", "correct" : false},
			{"text":"SAP LUW", "correct" : false},
			{"text":"Database transaction", "correct" : true},
			{"text":"ABAP LUW", "correct" : false},
			{"text":"ABAP Transaction", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Based on the SAP lock concept, mark the statements that are valid",
		"options": [
			{"text":"Locking application data is done at the database server level", "correct" : false},
			{"text":"Locking application data is done at the application server level", "correct" : true},
			{"text":"The lock is set and released by the Enqueue Work Process", "correct" : true},
			{"text":"The lock is set and released by the Message Server", "correct" : false},
			{"text":"Users can explicitly remove a lock set by other users", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of these work processes often perform database updates?",
		"options": [
			{"text":"Dialog", "correct" : true},
			{"text":"Spool", "correct" : false},
			{"text":"V1 Updates", "correct" : true},
			{"text":"Enqueue", "correct" : false},
			{"text":"V2 Updates", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The database update that makes the dialog WP wait till the data is either saved or rolled back in the update WP is called:",
		"options": [
			{"text":"Dialog Update", "correct" : false},
			{"text":"Synchronous Update", "correct" : true},
			{"text":"Asynchronous Update", "correct" : false},
			{"text":"Local Update", "correct" : false},
			{"text":"Remote Update", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Mark the attributes of V1 and V2 updates of the ABAP AS.",
		"options": [
			{"text":"V1 is the primary update and V2 is the secondary update", "correct" : true},
			{"text":"V2 updates critical data and V1 updates non-critical data", "correct" : false},
			{"text":"V1 updates are executed first and then the V2 updates", "correct" : true},
			{"text":"V1 updates critical data and V2 updates non-critical data", "correct" : true},
			{"text":"V2 updates lock data and release lock when starting V1 updates", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of these statements are true for a Spool request?",
		"options": [
			{"text":"The Spool WP creates the spool request", "correct" : false},
			{"text":"The Dialog WP creates the spool request", "correct" : true},
			{"text":"The printing data of Spool requests are stored as TemSe files", "correct" : true},
			{"text":"The fastest way to print is by connecting to the printer configured to the SAP server", "correct" : false},
			{"text":"The fastest way to print is by connecting to the printer configured to the OS (Operating System)", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"All SAP objects (Standard or Customer objects) are stored in a section of the database referred to as the:",
		"options": [
			{"text":"Standard Drive", "correct" : false},
			{"text":"Main Folder", "correct" : false},
			{"text":"Source Drive", "correct" : false},
			{"text":"Repository", "correct" : true},
			{"text":"Library", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Development objects within the SAP system are organised by saving them under:",
		"options": [
			{"text":"Repository", "correct" : false},
			{"text":"Database Table", "correct" : false},
			{"text":"Package", "correct" : true},
			{"text":"Transport Request", "correct" : false},
			{"text":"Activity Number", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The unique ID that identifies the objects that were created by a developer working in your project team is the:",
		"options": [
			{"text":"Request Number", "correct" : false},
			{"text":"Task Number", "correct" : true},
			{"text":"Serial Number", "correct" : false},
			{"text":"Object Number", "correct" : false},
			{"text":"Client Number", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Objects that may be created but not transported to the QA or PROD server can be stored under which of the given options?",
		"options": [
			{"text":"$TEMP", "correct" : false},
			{"text":"$TMP", "correct" : true},
			{"text":"TMP$", "correct" : false},
			{"text":"TEMP$", "correct" : false},
			{"text":"ZPACK", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The dialog WP during the execution of a DB transaction moves data between the shared memory and its internal memory. Which of the options signify this?",
		"options": [
			{"text":"The WP at the beginning of the dialog step will Roll-out data to the shared memory", "correct" : false},
			{"text":"The WP at the beginning of the dialog step will Roll-in data from the shared memory", "correct" : true},
			{"text":"The WP at the end of the dialog step will Roll-out data to the shared memory", "correct" : true},
			{"text":"The WP at the end of the dialog step will Roll-in data from the shared memory", "correct" : false},
			{"text":"The WP at the end of the dialog step will Roll-out data from the internal memory", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Transport of an development object created in the repository is done using:",
		"options": [
			{"text":"Package", "correct" : true},
			{"text":"Customizing Request", "correct" : false},
			{"text":"Activity or Task", "correct" : true},
			{"text":"Workbench Request", "correct" : true},
			{"text":"Local Object", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of the following is user specific?",
		"options": [
			{"text":"SAP Menu", "correct" : false},
			{"text":"Favorite Menu", "correct" : true},
			{"text":"Program", "correct" : false},
			{"text":"Task", "correct" : true},
			{"text":"Date Format", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"An ABAP program with database access may be executed on different SAP systems without any errors if:",
		"options": [
			{"text":"Native SQL is used in the code", "correct" : false},
			{"text":"Messages are used in the code", "correct" : false},
			{"text":"Open SQL is used in the code", "correct" : true},
			{"text":"Buffer Optimization is used in the code", "correct" : false},
			{"text":"Internal tables are used in the code", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"A developer activates an object in the ABAP Workbench because:",
		"options": [
			{"text":"Object must always be stored in the active status in the repository", "correct" : false},
			{"text":"Object may not be again revised or edited after activation", "correct" : false},
			{"text":"Object may not be edited by other developers", "correct" : false},
			{"text":"Object may be used within other development objects", "correct" : true},
			{"text":"Object may be transported to follow-on systems", "correct" : true}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Identify elementary data type that is incomplete",
		"options": [
			{"text":"Date", "correct" : false},
			{"text":"Packed", "correct" : true},
			{"text":"Float", "correct" : false},
			{"text":"Integer", "correct" : false},
			{"text":"STRING", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which addition is NOT applicable for the ABAP keyword TYPES?",
		"options": [
			{"text":"DECIMALS", "correct" : false},
			{"text":"LENGTH", "correct" : false},
			{"text":"DEFAULT", "correct" : true},
			{"text":"VALUE", "correct" : true},
			{"text":"TYPE", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The default data type in ABAP is",
		"options": [
			{"text":"Numeric Text", "correct" : false},
			{"text":"Character", "correct" : true},
			{"text":"String", "correct" : false},
			{"text":"Integer", "correct" : false},
			{"text":"Date", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"What is the default length of the packed data type (P) if the length specification is missing?",
		"options": [
			{"text":"2", "correct" : false},
			{"text":"4", "correct" : false},
			{"text":"6", "correct" : false},
			{"text":"8", "correct" : true},
			{"text":"22", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"A data object defined in the program contains a value that must stay the same during runtime. What are the characteristics of this data object?",
		"options": [
			{"text":"The data object has been declared using STATICS keyword", "correct" : false},
			{"text":"The data object has been declared using the CONSTANTS keyword", "correct" : true},
			{"text":"The data object if assigned a new value will cause a run-time error", "correct" : false},
			{"text":"The data object if assigned a new value will cause a syntax error", "correct" : true},
			{"text":"The data object has been declared using the DATA keyword", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"MOVE A1 to A2. What will the MOVE statement do if variable A1 (is type P decimals 2) and A2 (is type I) contain values 111.57 and 100 respectively:",
		"options": [
			{"text":"Will transfer the contents of A1 into A2", "correct" : false},
			{"text":"Will copy the contents of A1 into A2", "correct" : true},
			{"text":"Will cause a syntax error because the data types of A1 and A2 do not match", "correct" : false},
			{"text":"Will convert the contents of A1 as per the data type of A2", "correct" : true},
			{"text":"Will cause a runtime error because the data types of A1 and A2 do not match", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The system field that provides the loop count for the WHILE...ENDWHILE statement is:",
		"options": [
			{"text":"SY-TABIX", "correct" : false},
			{"text":"SY-COUNT", "correct" : false},
			{"text":"SY-INDEX", "correct" : true},
			{"text":"SY-DBCNT", "correct" : false},
			{"text":"SY-SUBRC", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which message type in an ABAP program creates a short dump?",
		"options": [
			{"text":"Type - A", "correct" : false},
			{"text":"Type - E", "correct" : false},
			{"text":"Type - X", "correct" : true},
			{"text":"Type - W", "correct" : false},
			{"text":"Type – I", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which message type in an ABAP program creates a pop-up dialog?",
		"options": [
			{"text":"Type - S", "correct" : false},
			{"text":"Type - I", "correct" : true},
			{"text":"Type - E", "correct" : false},
			{"text":"Type - W", "correct" : false},
			{"text":"Type – A", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Message types can have up to ______ place holders in the WITH addition.",
		"options": [
			{"text":"2", "correct" : false},
			{"text":"4", "correct" : true},
			{"text":"6", "correct" : false},
			{"text":"8", "correct" : false},
			{"text":"10", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The ABAP runtime system writes a return code of a statement into",
		"options": [
			{"text":"SY-LSIND", "correct" : false},
			{"text":"SY-DBCNT", "correct" : false},
			{"text":"SY-SUBRC", "correct" : true},
			{"text":"SY-TCODE", "correct" : false},
			{"text":"SY-CPROG", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"The developer calls a transaction which displays the initial screen, and the developer wants to debug the application. How can the debugger be started?",
		"options": [
			{"text":"Choose from the menu bar: System->Program->Debugging", "correct" : false},
			{"text":"Go to program source code and set break-point", "correct" : false},
			{"text":"In the command box type /I and then enter", "correct" : false},
			{"text":"In the command box type /H and then enter", "correct" : true},
			{"text":"In the command box type /DBUG and then enter", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"Which of the following are incomplete types?",
		"options": [
			{"text":"C", "correct" : true},
			{"text":"N", "correct" : true},
			{"text":"P", "correct" : true},
			{"text":"XString", "correct" : false},
			{"text":"String", "correct" : false}
		]
	},	
	{	
		"section": "ABAP",
		"question":"What are the ways to issues a rollback within a LUW?",
		"options": [
			{"text":"Message Type X", "correct" : false},
			{"text":"Message Type A", "correct" : true},
			{"text":"Message Type W", "correct" : false},
			{"text":"Message Type I", "correct" : false},
			{"text":"Rollback Work", "correct" : true}
		]
	},	{
		"section": "ABAP",
		"question":"Which of the following may be possible for data objects within the debugging mode?",
		"options": [
			{"text":"The value of a field may be altered", "correct" : true},
			{"text":"The data type of a field may be altered", "correct" : false},
			{"text":"The field may be monitored for a value condition", "correct" : true},
			{"text":"The structure components may be deleted or new components may be added", "correct" : false},
			{"text":"The internal table data may be deleted or new entries may be inserted", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"A feature of the debugger to monitor contents of data objects at runtime is the:",
		"options": [
			{"text":"Break Point - External", "correct" : false},
			{"text":"Break Point - Internal", "correct" : false},
			{"text":"Check Point", "correct" : false},
			{"text":"Value Point", "correct" : false},
			{"text":"Watch Point", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"A local copy of the actual parameter when passed to the subroutine without having to alter its value is referred as:",
		"options": [
			{"text":"Call by Value", "correct" : true},
			{"text":"Call by Reference", "correct" : false},
			{"text":"Call by Value and Result", "correct" : false},
			{"text":"Call by Process", "correct" : false},
			{"text":"Call by Request", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"In subroutines/function modules, to ensure that an actual parameter is the same type as its corresponding formal parameter, the developer must:",
		"options": [
			{"text":"Check return code SY-SUBRC of the subroutine/function call", "correct" : false},
			{"text":"Specify a type definition for each parameter", "correct" : true},
			{"text":"Verify their types when designing the subroutine or function module", "correct" : false},
			{"text":"Use the DESCRIBE FIELD statement", "correct" : false},
			{"text":"Use syntax check to confirm any conflict", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"When subroutine parameters are not specified a data type during definition it will cause it to:",
		"options": [
			{"text":"Use type C data type by default", "correct" : false},
			{"text":"Raise syntax error during program check", "correct" : false},
			{"text":"Lead to short dump or runtime error", "correct" : false},
			{"text":"Bypass the subroutine call in the program", "correct" : false},
			{"text":"Be a generic parameter and accept any datatype from the subroutine call", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"For a subroutine or a function module That do you meant by 'pass by value and result'?",
		"options": [
			{"text":"Actual parameters may be altered within the execution period of the subroutine", "correct" : false},
			{"text":"Actual parameter may not be altered during the execution period of the subroutine", "correct" : false},
			{"text":"Actual parameter may be altered after the execution period of the subroutine", "correct" : true},
			{"text":"Syntax used is - USING VALUE(P1) VALUE(P2)", "correct" : false},
			{"text":"Syntax used is - CHANGING VALUE(P1) VALUE(P2)", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"A program contains some data fetched from a database table and this information needs to be displayed using a subroutine. Which of these must be used for the definition of the subroutine?",
		"options": [
			{"text":"Internal tables may cannot be passed to subroutines", "correct" : false},
			{"text":"The formal parameter must use a TYPE table type definition", "correct" : true},
			{"text":"The formal parameter must use a TYPE structure type definition", "correct" : false},
			{"text":"Internal tables must be passed 'By Value'", "correct" : false},
			{"text":"Internal ta􀄏les 􀅵ust 􀄏e passed 'By Refererence'", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"PERFORM subroutine USING lv_var1. The lv_var1 field is known as what type of parameter?",
		"options": [
			{"text":"Formal", "correct" : false},
			{"text":"Actual", "correct" : true},
			{"text":"Static", "correct" : false},
			{"text":"Value", "correct" : false},
			{"text":"Data", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"With regards to the PERFORM keyword of a subroutine, which of the following is NOT a true statement?",
		"options": [
			{"text":"PERFORM may also be used inside the definition of a subroutine", "correct" : false},
			{"text":"PERFORM will raise a syntax error if it has lesser parameters than that of the subroutine definition", "correct" : false},
			{"text":"PERFORM will not raise a syntax error if it has lesser parameters than that of the subroutine definition", "correct" : true},
			{"text":"PERFORM can be used to call subroutines that exist within an include of the same program", "correct" : false},
			{"text":"PERFORM can be used to call subroutines that exist within an include of the another program", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Function modules can be created using:",
		"options": [
			{"text":"Object Navigator", "correct" : true},
			{"text":"ABAP Editor", "correct" : false},
			{"text":"ABAP Dictionary", "correct" : false},
			{"text":"Function Builder", "correct" : true},
			{"text":"Class Builder", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT a component of a functiol module's interface?",
		"options": [
			{"text":"Importing parameters", "correct" : false},
			{"text":"Exporting parameters", "correct" : false},
			{"text":"Returning parameters", "correct" : true},
			{"text":"Changing parameters", "correct" : false},
			{"text":"Exceptions", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are characteristics when designing the interface of a Function module?",
		"options": [
			{"text":"The IMPORT parameter is by default an optional parameter", "correct" : false},
			{"text":"The EXPORT parameter is by default an optional parameter", "correct" : true},
			{"text":"The internal table is preferably passed using CHANGING parameter", "correct" : true},
			{"text":"The internal table is preferably passed using TABLES parameter", "correct" : false},
			{"text":"The EXCEPTIONS parameters are assigned numeric values 0 and above to identifyerrors", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A BAPI in the ABAP workbench may be used for external communications. Mark their properties.",
		"options": [
			{"text":"Interface parameters must use generic or freely used definitions", "correct" : false},
			{"text":"Interface parameters must use specific BAPI definitions", "correct" : true},
			{"text":"EXCEPTIONS raised by the BAPI are handled by checking for SY-SUBRC values", "correct" : false},
			{"text":"BAPI must not call or use dialog screens during an external call", "correct" : true},
			{"text":"BAPI must be created as a function module of type Update", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Components of a structure are always addressed using:",
		"options": [
			{"text":"dot", "correct" : false},
			{"text":"hyphen", "correct" : true},
			{"text":"~", "correct" : false},
			{"text":"semicolon", "correct" : false},
			{"text":"plus", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"In a line of code, text-ABC, is an example of which type of text entity?",
		"options": [
			{"text":"Text title", "correct" : false},
			{"text":"Text table", "correct" : false},
			{"text":"Text symbol", "correct" : true},
			{"text":"Selection text", "correct" : false},
			{"text":"Text literal", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of these may NOT be specified when declaring a local structure using BEGIN OF...END OF?",
		"options": [
			{"text":"comp_name TYPE data type", "correct" : false},
			{"text":"comp_name TYPE structure type", "correct" : false},
			{"text":"comp_name LIKE data type", "correct" : true},
			{"text":"INCLUDE structure_type", "correct" : true},
			{"text":"INCLUDE STRUCTURE structure_type", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Integrating components of a dynamic type in a structure makes a structure:",
		"options": [
			{"text":"Deep structure", "correct" : true},
			{"text":"Nested structure", "correct" : false},
			{"text":"Flat structure", "correct" : false},
			{"text":"Complex structure", "correct" : false},
			{"text":"Generic Structure", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"There are two internal tables declared in your program, itab1 and itab2. The tables are compatible if:",
		"options": [
			{"text":"Both itab1 and itab2 use the same table type", "correct" : true},
			{"text":"Both itab1 and itab2 use the same structure type", "correct" : false},
			{"text":"Both itab1 and itab2 use the same key definitions", "correct" : false},
			{"text":"Both itab1 and itab2 use the same fields names", "correct" : false},
			{"text":"Both itab1 and itab2 use the same structure, key and table kind", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"We can specify the columns to be included in the definition of itab using",
		"options": [
			{"text":"Key", "correct" : false},
			{"text":"Line type", "correct" : true},
			{"text":"Table kind", "correct" : false},
			{"text":"Size", "correct" : false},
			{"text":"Header", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A program you develop uses a hashed internal table to handle data. Which of these are not applicable for a hashed table?",
		"options": [
			{"text":"You must not SORT the hashed table", "correct" : false},
			{"text":"You must not APPEND data to the hashed table", "correct" : false},
			{"text":"You must READ data only using the addition WITH TABLE KEY.", "correct" : false},
			{"text":"You must not MODIFY data using the addition INDEX", "correct" : true},
			{"text":"You must READ data only using the addition WITH KEY.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The system field that stores the total no of lines in an internal table is",
		"options": [
			{"text":"SY-TABIX", "correct" : false},
			{"text":"SY-INDEX", "correct" : true},
			{"text":"SY-TFILL", "correct" : false},
			{"text":"SY-LOOPC", "correct" : false},
			{"text":"SY-DBCNT", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The READ command for a sorted internal table uses the addition WITH TABLE KEY. Select the search technique that will be applied.",
		"options": [
			{"text":"Linear search", "correct" : false},
			{"text":"Internal search", "correct" : false},
			{"text":"Hash Function", "correct" : false},
			{"text":"Field search", "correct" : false},
			{"text":"Binary Search", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which key property does a Hashed internal table use?",
		"options": [
			{"text":"Unique", "correct" : true},
			{"text":"Non-Unique", "correct" : false},
			{"text":"Primary", "correct" : false},
			{"text":"Index", "correct" : false},
			{"text":"Secondary", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"When modifying an internal table using MODIFY keyword, which of these statements are valid?",
		"options": [
			{"text":"MODIFY TABLE itab FROM ls.", "correct" : true},
			{"text":"MODIFY TABLE itab1 FROM TABLE itab2.", "correct" : false},
			{"text":"MODIFY TABLE itab FROM ls INDEX 10.", "correct" : false},
			{"text":"MODIFY TABLE itab FROM ls INDEX SY-TABIX.", "correct" : false},
			{"text":"MODIFY itab FROM ls.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which table type would be most appropriate for accessing table rows using an index.",
		"options": [
			{"text":"Sorted table", "correct" : true},
			{"text":"Hashed table", "correct" : false},
			{"text":"Standard table", "correct" : true},
			{"text":"Transparent table", "correct" : false},
			{"text":"Cluster table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"DATA itab TYPE TABLE OF spfli. This syntax provides a:",
		"options": [
			{"text":"Sorted table", "correct" : false},
			{"text":"Standard table", "correct" : true},
			{"text":"Hashed table", "correct" : false},
			{"text":"Indexed table", "correct" : false},
			{"text":"Transparent table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following commands will work for an internal table?",
		"options": [
			{"text":"INSERT ls INTO TABLE itab. for the hashed table", "correct" : true},
			{"text":"APPEND ls TO itab. for the sorted table", "correct" : false},
			{"text":"INSERT ls INTO itab INDEX SY-INDEX for the sorted table", "correct" : false},
			{"text":"READ TABLE itab INTO ls INDEX lv_number. for a standard table", "correct" : true},
			{"text":"COLLECT ls INTO itab. for the standard table.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The following code indicates: The internal table it_scarr contains 50 records fetched from the database table SPFLI. At a later part in your program you fetch 30 records more. Which of the following commands will achieve this?",
		"options": [
			{"text":"SELECT...INTO TABLE it_spfli...", "correct" : false},
			{"text":"SELECT...INTO CORRESPONDING FIELDS OF TABLE it_spfli...", "correct" : false},
			{"text":"SELECT...APPENDING FIELDS OF TABLE it_spfli...", "correct" : false},
			{"text":"SELECT...APPENDING it_spfli...", "correct" : true},
			{"text":"SELECT...APPENDING CORRESPONDING FIELDS OF TABLE it_spfli...", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following syntax forms do not have an ENDSELECT?",
		"options": [
			{"text":"Select * from db_table...into itab...", "correct" : false},
			{"text":"Select * from db_table...into table itab...", "correct" : true},
			{"text":"Select Single * from db_table into ls...", "correct" : true},
			{"text":"Select * from db_table up to 1 rows...", "correct" : false},
			{"text":"Select * from db_table...into ls...", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"If a table contains many duplicate values for a field, minimize the number of records returned by using this SELECT statement addition.",
		"options": [
			{"text":"UP TO", "correct" : false},
			{"text":"ORDER BY", "correct" : false},
			{"text":"DISTINCT", "correct" : true},
			{"text":"APPEND", "correct" : false},
			{"text":"GROUP BY", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which system field provides the count of records fetched from the database table?",
		"options": [
			{"text":"SY-INDEX", "correct" : false},
			{"text":"SY-COUNT", "correct" : false},
			{"text":"SY-TABIX", "correct" : false},
			{"text":"SY-DBCNT", "correct" : true},
			{"text":"SY-DBROW", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which ABAP program attribute provides access protection?",
		"options": [
			{"text":"Role", "correct" : false},
			{"text":"User Menu", "correct" : false},
			{"text":"Package", "correct" : false},
			{"text":"Authorization", "correct" : true},
			{"text":"Request", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Authority check can be done in which of the following events:",
		"options": [
			{"text":"At Selection-Screen.", "correct" : true},
			{"text":"At Selection-Screen output.", "correct" : false},
			{"text":"At Selection-Screen on field.", "correct" : true},
			{"text":"Start-of-selection.", "correct" : false},
			{"text":"At Selection-Screen on radio_button_group.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Authorization checks are carried out using the syntax:",
		"options": [
			{"text":"Authorization Check...", "correct" : false},
			{"text":"Call fu􀅶􀄐tio􀅶 􀍚Authorizatio􀅶-Che􀄐k􀍛", "correct" : false},
			{"text":"Authority-Check...", "correct" : true},
			{"text":"Call fu􀅶􀄐tio􀅶 􀍚Authority-Che􀄐k􀍛...", "correct" : false},
			{"text":"Perform Authority-Check...", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The keyword that allows user to enter a range of values on a selection screen:",
		"options": [
			{"text":"Data", "correct" : false},
			{"text":"Ranges", "correct" : false},
			{"text":"Parameters", "correct" : false},
			{"text":"Select-options", "correct" : true},
			{"text":"Statics", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT a field of a selection screen range internal table?",
		"options": [
			{"text":"Sign", "correct" : false},
			{"text":"Value", "correct" : true},
			{"text":"Low", "correct" : false},
			{"text":"High", "correct" : false},
			{"text":"Option", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"This selection screen syntax forces the user to input a value",
		"options": [
			{"text":"REQUIRED", "correct" : false},
			{"text":"OBLIGATORY", "correct" : true},
			{"text":"DEFAULT", "correct" : false},
			{"text":"SUPPLY", "correct" : false},
			{"text":"MANDATORY", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which is a PBO event",
		"options": [
			{"text":"LOAD-OF-PROGRAM", "correct" : false},
			{"text":"AT-SELECTION SCREEN OUTPUT", "correct" : true},
			{"text":"INITIALIZATION", "correct" : false},
			{"text":"START-OF-SELECTION", "correct" : false},
			{"text":"AT SELECTION SCREEN.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The selection screen event at which the dynamic modification code may be placed is the:",
		"options": [
			{"text":"INITIALIZATION", "correct" : false},
			{"text":"START OF SELECTION.", "correct" : false},
			{"text":"LOAD OF PROGRAM", "correct" : false},
			{"text":"AT SELECTION SCREEN OUTPUT.", "correct" : true},
			{"text":"AT SELECTION SCREEN.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The INITIALIZATION event may be used for which of the following?",
		"options": [
			{"text":"Declaring parameters and select-options", "correct" : false},
			{"text":"Supplying value for a parameter field", "correct" : true},
			{"text":"Adding a new row into the range table", "correct" : true},
			{"text":"checking input value of a parameter field and publish error/warning message", "correct" : false},
			{"text":"checking input value of a select-option range and publish error/warning message", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"PARAMETERS keyword may be used to define which of the following:",
		"options": [
			{"text":"Radio-button", "correct" : true},
			{"text":"Field with Integer datatype", "correct" : true},
			{"text":"Structure", "correct" : false},
			{"text":"Checkbox", "correct" : true},
			{"text":"Field with Float datatype", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which keyword addition enables more than one field to be modified in selection screen runtime?",
		"options": [
			{"text":"OBLIGATORY", "correct" : false},
			{"text":"MODIFY GROUP ID", "correct" : false},
			{"text":"MODIF ID", "correct" : true},
			{"text":"CHANGE ID", "correct" : false},
			{"text":"MEMORY ID", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The multiple selection can be disabled in a select-options variable using:",
		"options": [
			{"text":"NO-SELECTION", "correct" : false},
			{"text":"NO-EXTENSION", "correct" : true},
			{"text":"NO-INTERVALS", "correct" : false},
			{"text":"NO-DISPLAY", "correct" : false},
			{"text":"NO-HIGH", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"An input field in the selection screen is to be disabled at runtime. Which property given is the suitable option?",
		"options": [
			{"text":"INPUT = 0.", "correct" : true},
			{"text":"INPUT = 1.", "correct" : false},
			{"text":"OUTPUT = 0.", "correct" : false},
			{"text":"OUTPUT = 1.", "correct" : true},
			{"text":"INPUT = 􀍚X􀍛.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"All selection screen elements can be displayed on the same line using",
		"options": [
			{"text":"Begin of Block", "correct" : false},
			{"text":"Begin of Line", "correct" : true},
			{"text":"Begin of Screen", "correct" : false},
			{"text":"Begin of Sub Screen", "correct" : false},
			{"text":"Begin of Uline.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Field attributes of selection screens can be dynamically modified using:",
		"options": [
			{"text":"SCREEN internal table", "correct" : true},
			{"text":"SCREEN Structure", "correct" : false},
			{"text":"Variants", "correct" : true},
			{"text":"Background Processing", "correct" : false},
			{"text":"Initialization Event.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the statements that are true:",
		"options": [
			{"text":"Submit program_name. Is synchronous and a new start.", "correct" : true},
			{"text":"Submit program_name. Is synchronous and insert.", "correct" : false},
			{"text":"􀍚Su􀄏􀅵it􀍛 􀄐a􀅶􀅶ot 􀄏e used if the 􀄐alled progra􀅵 has a􀅶 user i􀅶terfa􀄐e", "correct" : false},
			{"text":"􀍚Su􀄏􀅵it a􀅶d Retur􀅶..􀍛the 􀄏a􀄐k 􀄏utto􀅶 􀄏ri􀅶gs the 􀄐o􀅶trol to the 􀄐alli􀅶g progra􀅵 immediately after the call.", "correct" : true},
			{"text":"Submit program_name. Is Asynchronous and a new start.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the statements that are true:",
		"options": [
			{"text":"SUBMIT pgm AND RETURN. or CALL TRANSACTION tcode. have the same effect on the ABAP Me􀅵ory 􀇁he􀅶 the 􀍚Ba􀄐k􀍛 􀄏utto􀅶 is used.", "correct" : true},
			{"text":"SUBMIT pgm. or CALL TRANSACTION tcode. Both have the same effect on the ABAP Me􀅵ory 􀇁he􀅶 the 􀍚Ba􀄐k􀍛 􀄏utto􀅶 is used.", "correct" : false},
			{"text":"SUBMIT pgm. or LEAVE TO TRANSACTION tcode. Both will exit the program memory sta􀄐k 􀇁he􀅶 the 􀍚Ba􀄐k􀍛 􀄏utto􀅶 is used.", "correct" : true},
			{"text":"SUBMIT pgm. When used within an existing multilevel memory stack will delete memory allo􀄐atio􀅶 of just o􀅶e progra􀅵 if the 􀍚Ba􀄐k􀍛 􀄏utto􀅶 is pressed.", "correct" : true},
			{"text":"SUBMIT pgm. When used within an existing multilevel memory stack will delete 􀅵e􀅵ory allo􀄐atio􀅶 of all the progra􀅵s if the 􀍚Ba􀄐k􀍛 􀄏utto􀅶 is pressed.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Mark the statements that are true for SAP Memory Management:",
		"options": [
			{"text":"SAP memory is available for all internal sessions", "correct" : true},
			{"text":"SAP Memory can accommodate only character type data", "correct" : true},
			{"text":"SAP memory can import/export an internal table", "correct" : false},
			{"text":"SET PARAMETER can only transfer the value of a field to the memory", "correct" : true},
			{"text":"ABAP memory is available for all internal sessions", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The SUBMIT command may be used with which of the following program types?",
		"options": [
			{"text":"Include", "correct" : false},
			{"text":"Executable", "correct" : true},
			{"text":"Module Pool", "correct" : false},
			{"text":"Function Group", "correct" : false},
			{"text":"Class Pool", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The generated version of an ABAP program in the database is called:",
		"options": [
			{"text":"PACKAGE", "correct" : false},
			{"text":"BUNDLE", "correct" : false},
			{"text":"LOAD", "correct" : true},
			{"text":"INCLUDE", "correct" : false},
			{"text":"TRANSPORT ", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Under which situations does the system generate the LOAD of a program automatically?",
		"options": [
			{"text":"When the program is saved in the repository", "correct" : false},
			{"text":"When the program is called and no load exists yet", "correct" : true},
			{"text":"When an object that the program uses is changed in the ABAP Dictionary and later activated in the Dictionary", "correct" : true},
			{"text":"When using the menu path Program-Generate", "correct" : false},
			{"text":"When the program is imported into the target system after a transport ", "correct" : false}
		]
	},
		{
		"section": "ABAP",
		"question":"The functionality offered within an application depends on the design of the GUI of the application. Which of these are TRUE?",
		"options": [
			{"text":"The “Print” function is part of the standard tool bar", "correct" : true},
			{"text":"The “Activate” function is part of the standard tool ba", "correct" : false},
			{"text":"System and Help functions are available for all SAP screens", "correct" : true},
			{"text":"The application/program description is displayed in the first row of the GUI, abovethe menu bar", "correct" : false},
			{"text":"Messages informing the user about the control of the program is published in thestatus bar", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"When declaring or using an internal table within a program, the characteristics that are TRUE for the internal tables are?",
		"options": [
			{"text":"A Sorted or Standard internal table declared can store duplicate entries", "correct" : true},
			{"text":"A sorted or standard internal table are indexed tables", "correct" : true},
			{"text":"A hashed internal table cannot be sorted using the SORT command", "correct" : false},
			{"text":"A standard table may apply a faster search using READ TABLE...BINARY SEARCH", "correct" : true},
			{"text":"A standard table must have at least one UNIQUE KEY field defined in the declaration", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"An ‘Application table’ created in ABAP Dictionary stores which of the following form of data in the database?",
		"options": [
			{"text":"Transparent data", "correct" : false},
			{"text":"Transaction data", "correct" : true},
			{"text":"Master data", "correct" : true},
			{"text":"Customizing data", "correct" : false},
			{"text":"System data", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"DATA: lt_scarr TYPE HASHED TABLE OF SCARR. For the given declaration of the internal table, select the most suitable statement to read one record form the table:",
		"options": [
			{"text":"READ TABELE lt_scarr INTO ls_scarr INDEX N.", "correct" : false},
			{"text":"READ TABELE lt_scarr INTO ls_scarr INDEX SY-TABIX.", "correct" : false},
			{"text":"READ TABELE lt_scarr INTO ls_scarr WITH KEY F1 = V1 F2 = V2.", "correct" : false},
			{"text":"READ TABELE lt_scarr INTO ls_scarr WITH TABLE KEY F1 = V1 F2 = V2.", "correct" : true},
			{"text":"READ TABELE lt_scarr INTO ls_scarr WITH KEY F1 = V1 F2 = V2 BINARY SEARCH", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"When creating a data element in the ABAP Dictionary, the data type may be mentioned via which of the following?",
		"options": [
			{"text":"Using a Domain", "correct" : true},
			{"text":"Using a Structure Type", "correct" : false},
			{"text":"Using a Predefined type", "correct" : true},
			{"text":"Using a Reference Type", "correct" : true},
			{"text":"Using a Table Type", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Select the objects for which multi language support is available during program output.",
		"options": [
			{"text":"Program Name", "correct" : false},
			{"text":"Text-symbols", "correct" : true},
			{"text":"Field Name", "correct" : false},
			{"text":"Field Label", "correct" : true},
			{"text":"Field Documentation", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"DATA: lt_spfli TYPE SORTED TABLE OF SPFLI. Which of the following commands is NOT supported for the declaration provided?",
		"options": [
			{"text":"READ TABLE lt_spfli INTO ls_spfli WITH TABLE KEY...", "correct" : false},
			{"text":"INSERT TABLE lt_spfli FROM ls_spfli INDEX N.", "correct" : true},
			{"text":"LOOP AT lt_spfli FROM 5 TO 50.... ENDLOOP. Where 5 and 50 are index positions", "correct" : false},
			{"text":"SORT lt_spfli BY f1 ASCENDING f2 DESCENDING.", "correct" : true},
			{"text":"MODIFY TABLE lt_spfli FROM ls_spfli.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The F1 documentation required for an input parameter on the selection screen can be derived from which of the following?",
		"options": [
			{"text":"Table field", "correct" : false},
			{"text":"Domain", "correct" : false},
			{"text":"Structure fields", "correct" : false},
			{"text":"Data Element", "correct" : true},
			{"text":"Type Group", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following may not be used in the declaration of a program with the DATA keyword?",
		"options": [
			{"text":"Data Element", "correct" : false},
			{"text":"Domain", "correct" : true},
			{"text":"Table", "correct" : false},
			{"text":"Structure", "correct" : false},
			{"text":"Type Group", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A structure that has been defined in the ABAP dictionary may be reused within a number of transparent tables with the addition:",
		"options": [
			{"text":".INSERT structure_name", "correct" : false},
			{"text":".INCLUDE structure_name", "correct" : true},
			{"text":".ADD structure_name", "correct" : false},
			{"text":".APPEND structure_name", "correct" : false},
			{"text":".EXTEND structure_name", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Select the characteristics that are TRUE when creating a domain in the ABAP dictionary.",
		"options": [
			{"text":"Provide the length for a field", "correct" : true},
			{"text":"Provide the short description for a field", "correct" : false},
			{"text":"Provide the documentation for a field", "correct" : false},
			{"text":"Provide a possible set of values for a field", "correct" : true},
			{"text":"Provide an internal routine for formatting data in the field", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"A transparent table when activated does the which of following:",
		"options": [
			{"text":"Creates a definition of the table in the repository", "correct" : true},
			{"text":"Creates a non-unique index in the database", "correct" : false},
			{"text":"Creates a unique index in the database", "correct" : true},
			{"text":"Creates a physical table in the database", "correct" : true},
			{"text":"Creates a table buffer in the shared memory", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"While using SAP memory concept in a program, the Parameter ID is required for an SAP defined input field on screen. Which of the following ways would you suggest to identify the Parameter ID?",
		"options": [
			{"text":"Place the cursor on the input field and press F4 key", "correct" : false},
			{"text":"Place the cursor on the input field and press F1 key", "correct" : false},
			{"text":"Place the cursor on the input field and press F1 key and then Technical Information button", "correct" : true},
			{"text":"Place the cursor on the input field and press F4 key and then the Technical Information button", "correct" : false},
			{"text":"Place the cursor on the input field and press F8 key", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"How many windows (session) can a user open in an SAP system?",
		"options": [
			{"text":"4", "correct" : false},
			{"text":"6", "correct" : true},
			{"text":"8", "correct" : false},
			{"text":"9", "correct" : false},
			{"text":"10", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT a principal characteristic of a TRANSACTION in ABAP?",
		"options": [
			{"text":"Atomic", "correct" : false},
			{"text":"Durable", "correct" : false},
			{"text":"Isolated", "correct" : false},
			{"text":"Consistent", "correct" : false},
			{"text":"Temporary", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The lock mode for a transaction where the data may be edited only once even by the same transaction is referred to as:",
		"options": [
			{"text":"Write locks, Cumulative", "correct" : false},
			{"text":"Read locks, Shared", "correct" : false},
			{"text":"Write locks, Sequential", "correct" : false},
			{"text":"Write locks, non-Cumulative", "correct" : true},
			{"text":"Optimistic locks", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A lock that is currently set by an application by another user may be removed by which of the following ways?",
		"options": [
			{"text":"Closing the application in the current user session will release the lock", "correct" : false},
			{"text":"Closing the user session of the lock owner will release the lock", "correct" : true},
			{"text":"Writing a program to explicitly delete the lock from the lock table", "correct" : false},
			{"text":"Creating a function module DEQUEUE to release the lock entry", "correct" : false},
			{"text":"Manually deleting the lock entry from the lock table if the lock owner is no longer logged in", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The database update tables used to store calls to update function modules are called as:",
		"options": [
			{"text":"VX* tables", "correct" : false},
			{"text":"VD* tables", "correct" : false},
			{"text":"VB* tables", "correct" : true},
			{"text":"UP* tables", "correct" : false},
			{"text":"UD* tables", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A classic report ZABC_REP is required to be scheduled for background processing. What characteristics should the program have so that it qualifies for background processing?",
		"options": [
			{"text":"The program has a selection screen which requires user input every time the program is executed", "correct" : false},
			{"text":"The program has a selection screen which contains variants that are usually used during execution", "correct" : true},
			{"text":"The program at run time calls additional screens that further require input from the user", "correct" : false},
			{"text":"The program usually takes a long time to execute and is preferably executed during off-peak times", "correct" : true},
			{"text":"The program needs to be executed on a periodic basis like daily, weekly, monthly etc.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The processing of user requests may be sped up or be made faster by storing data in an instance. This may be achieved by using which of the following techniques?",
		"options": [
			{"text":"Work process multiplexing", "correct" : false},
			{"text":"Indexes", "correct" : false},
			{"text":"Buffering", "correct" : true},
			{"text":"Memory Optimization", "correct" : false},
			{"text":"Data substitution", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A developer creates a table ZTAB_00 in the ABAP Dictionary and provides ‘A’ as a value for the delivery class. What does the delivery class signify?",
		"options": [
			{"text":"The table is transported with its definition and data from DEV to PROD system", "correct" : false},
			{"text":"The table is transported with its definition from DEV to PROD system", "correct" : true},
			{"text":"The table is classified as managing business or application data", "correct" : true},
			{"text":"The table is classified as managing customizing or configuration data", "correct" : false},
			{"text":"The table is a client dependant table having the MANDT fields as the first key field", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"A dialog screen contains an input field P_CNTRY to accept a value for country. The field was declared using a table field TAB1-CNTRY having a foreign key link with master table ZCNTRY. The field P_CNTRY is termed as which of the following?",
		"options": [
			{"text":"Value table field", "correct" : false},
			{"text":"Check table field", "correct" : false},
			{"text":"Check Field", "correct" : true},
			{"text":"Foreign key field", "correct" : false},
			{"text":"Primary key field", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are database objects that may be created in the ABAP Dictionary?",
		"options": [
			{"text":"Internal Table", "correct" : false},
			{"text":"Table Type", "correct" : false},
			{"text":"Transparent Table", "correct" : true},
			{"text":"View", "correct" : true},
			{"text":"Index", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"An SAP database table SAPTAB1 has been enhanced with additional fields using an APPEND structure ZTAB1_APP. Mark the statement that is TRUE when the table SAPTAB1 is migrated into a newer version of SAP.",
		"options": [
			{"text":"When SAPTAB1 is activated, ZTAB1_APP is deleted by the system and must be created again in the new version", "correct" : false},
			{"text":"When SAPTAB1 is activated, ZTAB1_APP must then be activated in order to use the append structure in the new version", "correct" : false},
			{"text":"When SAPTAB1 is activated, ZTAB1_APP is converted into an include structure in the new version", "correct" : false},
			{"text":"When SAPTAB1 is activated, ZTAB1_APP components become fields within the table in the new version", "correct" : true},
			{"text":"When SAPTAB1 is activated, ZTAB1_APP components generates an activation error", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"DATA: IT_SCARR TYPE STANDARD TABLE OF SCARR WITH HEADER LINE. While coding the logic for the program you wish to remove all the records buffered within the internal table IT_SCARR. Which of the following options will work?",
		"options": [
			{"text":"CLEAR IT_SCARR. Will initialize the body of the internal table", "correct" : false},
			{"text":"CLEAR IT_SCARR[]. Will initialize the body of the internal table", "correct" : true},
			{"text":"DELETE TABLE IT_SCARR. Will initialize the body of the internal table", "correct" : false},
			{"text":"REFRESH IT_SCARR. Will initialize the body of the internal table", "correct" : true},
			{"text":"DELETE IT_SCARR. Will initialize the body of the internal table.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT a data type defined in the ABAP Dictionary?",
		"options": [
			{"text":"Domain", "correct" : true},
			{"text":"Data Element", "correct" : false},
			{"text":"Table Type", "correct" : false},
			{"text":"Type Group", "correct" : false},
			{"text":"Structure", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"An internal table declared with the standard key implies which of the following?",
		"options": [
			{"text":"The standard key is formed by the first column of the internal table", "correct" : false},
			{"text":"The standard key is formed by the character-type columns till the first encountered numeric column", "correct" : true},
			{"text":"The standard key using elementary line-type is the entire line itself", "correct" : false},
			{"text":"The standard key is formed by all the character-type columns in the internal table", "correct" : false},
			{"text":"The standard key is formed by all the numeric-type columns in the internal table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following may NOT be used as a line type for an internal table?",
		"options": [
			{"text":"Nested Structure", "correct" : false},
			{"text":"Data Element", "correct" : false},
			{"text":"Internal Table", "correct" : false},
			{"text":"Elementary Type", "correct" : false},
			{"text":"Domain", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The system field that holds the row number of a modified record in the standard or sorted internal table is:",
		"options": [
			{"text":"SY-INDEX", "correct" : false},
			{"text":"SY-TABIX", "correct" : true},
			{"text":"SY-DBCNT", "correct" : false},
			{"text":"SY-RWNO", "correct" : false},
			{"text":"SY-SUBRC", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The database table ZTAB_ORDER is using a field to store the amount of cash paid against an order. Which of the statements given below is a necessity when designing the table?",
		"options": [
			{"text":"The amount field must reference a field of data type CURR", "correct" : false},
			{"text":"The amount field must reference a field of data type CUKY", "correct" : true},
			{"text":"The amount field must reference a field of data type DEC", "correct" : false},
			{"text":"The amount field must reference a field of data type NUMC", "correct" : false},
			{"text":"The amount field must reference a field of data type CHAR", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"What is NOT true about a structure being used within a transparent table?",
		"options": [
			{"text":"A flat structure can be included within a transparent table", "correct" : false},
			{"text":"A transparent table can be included within a flat structure", "correct" : false},
			{"text":"A deep structure may be included within a transparent table.", "correct" : true},
			{"text":"A structure component can be marked as a key when included in a transparent table", "correct" : true},
			{"text":"A structure component can have a foreign key relationship with a field of a transparent table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The attribute size category for a transparent table implies:",
		"options": [
			{"text":"The memory size in bytes allocated for the table", "correct" : false},
			{"text":"The memory size in rows allocated for the table", "correct" : true},
			{"text":"The table space specification for the table", "correct" : false},
			{"text":"The table category specification namely master, transaction, or organization table", "correct" : false},
			{"text":"The memory size in bytes allocated for the buffer", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The physical area in the database where the table is created is addressed as the:",
		"options": [
			{"text":"Delivery Class", "correct" : false},
			{"text":"Data Class", "correct" : true},
			{"text":"Size Category", "correct" : false},
			{"text":"Global Class", "correct" : false},
			{"text":"Memory Class", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"What is NOT TRUE for an index of a transparent table?",
		"options": [
			{"text":"Exactly one secondary index is created when the table is activated.", "correct" : true},
			{"text":"The database interface identifies a suitable index to be used for a select query", "correct" : true},
			{"text":"Data in an index will be sorted every time the database table is updated", "correct" : false},
			{"text":"INSERT db_table. The insert command checks the primary index to validate if the inserted record already exists in the table.", "correct" : false},
			{"text":"The CLIENT field must be used within a secondary if the table is an application table.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The left-justified part of keys defined within a database table is referred to as the:",
		"options": [
			{"text":"Primary key", "correct" : false},
			{"text":"Combination key", "correct" : false},
			{"text":"Foreign key", "correct" : false},
			{"text":"Generic key", "correct" : true},
			{"text":"Initial key", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A structural change performed on a transparent table containing records will have to be run through a conversion process to overcome the ‘ALTER TABLE’ error. This is performed via the:",
		"options": [
			{"text":"Data Browser", "correct" : false},
			{"text":"Table Maintenance Generator", "correct" : false},
			{"text":"Database Utility", "correct" : true},
			{"text":"Database Object Display", "correct" : false},
			{"text":"ABAP Dictionary", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A Transparent table defined in the ABAP Dictionary get created physically in the database when:",
		"options": [
			{"text":"the table name is provided in the initial screen and the user clicks on the CREATE button", "correct" : false},
			{"text":"the table fields are provided and the user clicks on the SAVE button", "correct" : false},
			{"text":"the table technical settings are maintained and the user saves it", "correct" : false},
			{"text":"the table definition is checked for any syntax errors and if the check was a success", "correct" : false},
			{"text":"the table definition is maintained and the user activates it", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"While creating a transparent table in the ABAP Dictionary which of the following may be used to provide the characteristics of a field in the table?",
		"options": [
			{"text":"The table field can refer a Domain for its characteristics", "correct" : false},
			{"text":"The table field can refer a Data Element for its characteristics", "correct" : false},
			{"text":"The table field can refer a Predefined Type for its characteristics", "correct" : false},
			{"text":"The table field can refer a Structure for its characteristics", "correct" : false},
			{"text":"The table field can refer a Table Type for its characteristics", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following are characteristics that define a TYPE GROUP in the ABAP Dictionary?",
		"options": [
			{"text":"Contains data objects declared with predefined values using the DATA keyword", "correct" : false},
			{"text":"Contains data objects declared with predefined values using the CONSTANTS keyword", "correct" : true},
			{"text":"Contains definitions maintained using the naming convention typegroupname_", "correct" : true},
			{"text":"Contains list of all elementary datatypes used in the ABAP Dictionary", "correct" : false},
			{"text":"Contains data definitions maintained using TYPES keyword", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Application data when being locked by a transaction may be viewed by several users at the same time if:",
		"options": [
			{"text":"the lock mode is set as Write Lock", "correct" : false},
			{"text":"the lock mode is set as Write Lock Enhanced", "correct" : false},
			{"text":"the lock mode is set as Shared Lock", "correct" : true},
			{"text":"the lock mode is set as Optimistic Lock", "correct" : false},
			{"text":"the lock mode is set as Priority Lock", "correct" : false}
		]
	},
		{
		"section": "ABAP",
		"question":"An SAP system comprises two application servers AS1 and AS2. What is/are TRUE for the buffers available on AS1 and AS2?",
		"options": [
			{"text":"AS1 if changes data in the table, AS2 immediately modifies its buffer", "correct" : false},
			{"text":"AS1 if changes data in the table, it then triggers a synchronization program to update the AS2 buffer", "correct" : false},
			{"text":"AS1 if changes data in the table, AS2 might be accessing obsolete data", "correct" : true},
			{"text":"AS1 if changes data in the table, AS2 during synchronization invalidates its buffer", "correct" : true},
			{"text":"AS1 if changes data in the table, AS2 waits until its buffer is synchronized", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"To design a foreign key link between two tables, which condition must be established first?",
		"options": [
			{"text":"The common fields must have the same elementary type", "correct" : false},
			{"text":"The common fields must have the same name", "correct" : false},
			{"text":"The common fields must have the same domain", "correct" : true},
			{"text":"The common fields must have the same data element", "correct" : false},
			{"text":"The common fields must have the same key property", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"You adjust a customer table ZABC_TAB for a structural change using the Database Utility but the process goes into a short dump. What could be the reason for this error?",
		"options": [
			{"text":"You added more fields to the table therefore caused the short dump", "correct" : false},
			{"text":"You removed existing fields from the table leading to the short dump", "correct" : false},
			{"text":"You reduced the length of the field therefore caused the short dump", "correct" : false},
			{"text":"You altered the datatype of the field therefore causing the short dump", "correct" : true},
			{"text":"Your database does not sufficient memory to carry out the adjustment", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A user when makes changes to the application or customizing data, the information is logged for future reference. Which of these statements are TRUE for change logs?",
		"options": [
			{"text":"Requires a system profile parameter to be activated", "correct" : true},
			{"text":"The data will have to be modified using the ABAP Dictionary", "correct" : false},
			{"text":"Log changes must be activated in the technical settings", "correct" : true},
			{"text":"When SAPTAB1 is activated, ZTAB1_APP components become fields within the table in the new version", "correct" : false},
			{"text":"When SAPTAB1 is activated, ZTAB1_APP components generates an activation error", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following definitions in the ABAP Dictionary may be considered as ‘Deep’?",
		"options": [
			{"text":"If any component of a structure uses a data element", "correct" : false},
			{"text":"If any component of a structure uses a table type", "correct" : true},
			{"text":"If any component of a structure uses a structure", "correct" : false},
			{"text":"If any component of a structure uses type STRING", "correct" : true},
			{"text":"If any component of a structure uses type Hexadecimal", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT an option when creating a Data Element in the ABAP Dictionary?",
		"options": [
			{"text":"Attach a search help", "correct" : false},
			{"text":"Assign a parameter ID", "correct" : false},
			{"text":"Create Documentation", "correct" : false},
			{"text":"Assign a Foreign Key", "correct" : true},
			{"text":"Maintain Translation", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A structure ZADDR is defined in the ABAP Dictionary by a developer in your team. You MAY NOT use this structure in which of the following?",
		"options": [
			{"text":"used in the program using DATA keyword", "correct" : false},
			{"text":"used in the program using PARAMETERS keyword", "correct" : true},
			{"text":"used in the SCREEN Painter of a module pool", "correct" : false},
			{"text":"used in the Function Builder as an interface parameter type", "correct" : false},
			{"text":"used in the Structure component of another structure", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"When designing a search help in the ABAP Dictionary which of the following is assigned to a search help parameter?",
		"options": [
			{"text":"Domain", "correct" : false},
			{"text":"Elementary Type", "correct" : false},
			{"text":"Predefined Type", "correct" : false},
			{"text":"Data Element", "correct" : true},
			{"text":"Transparent Table", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The parameter that returns value from the search help to the screen is the:",
		"options": [
			{"text":"TABLES parameter", "correct" : false},
			{"text":"IMPORT parameter", "correct" : false},
			{"text":"EXPORT parameter", "correct" : true},
			{"text":"CHANGING parameter", "correct" : false},
			{"text":"SELECTION parameter", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A structure may be defined in a number of ways in the dictionary. Select the statement that is NOT TRUE.",
		"options": [
			{"text":"The structure referencing a data element", "correct" : false},
			{"text":"The structure referencing another structure", "correct" : false},
			{"text":"The structure referencing STRING data type", "correct" : false},
			{"text":"The structure referencing a TYPE GROUP definition", "correct" : true},
			{"text":"The structure referencing a VIEW definition", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of these options are NOT database objects?",
		"options": [
			{"text":"Structure", "correct" : true},
			{"text":"Transparent Table", "correct" : false},
			{"text":"Views", "correct" : false},
			{"text":"Standard Table", "correct" : true},
			{"text":"Search Help", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of the following is NOT true for an append structure in the ABAP Dictionary?",
		"options": [
			{"text":"Is used to centrally define fields for a number of transparent tables", "correct" : true},
			{"text":"Is maintained at the end of the table fields", "correct" : false},
			{"text":"Uses ZZ or YY as a prefix to the field names", "correct" : false},
			{"text":"Is used to enhance SAP standard tables with character type, numeric type or deep definition", "correct" : true},
			{"text":"Is used to enhance SAP standard structure with character type, numeric type or deep definition", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The definition that may contain only one table in is design is the:",
		"options": [
			{"text":"Maintenance View", "correct" : true},
			{"text":"Help View", "correct" : true},
			{"text":"Projection View", "correct" : false},
			{"text":"Database View", "correct" : false},
			{"text":"Index View", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"You are asked to explain the use of views within a program to your team members. Which one the following is/are the characteristics of Views?",
		"options": [
			{"text":"A view is created in the database consisting of data from multiple tables", "correct" : false},
			{"text":"A view can contain fields filtered for specific use from one or more tables", "correct" : true},
			{"text":"A view is created using a minimum of two tables", "correct" : false},
			{"text":"A view may be buffered in the shared memory to improve access time", "correct" : true},
			{"text":"A view may be for read, change, insert or delete activity", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"The Outer join is used by which of the following list of views?",
		"options": [
			{"text":"Maintenance View", "correct" : true},
			{"text":"Help View", "correct" : true},
			{"text":"Projection View", "correct" : false},
			{"text":"Database View", "correct" : false},
			{"text":"Index View", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"While designing a search help, you are required to design the hit list showing fields from tables ZTABA, ZTABB and ZTABE. The most suitable selection method will be the:",
		"options": [
			{"text":"Maintenance View", "correct" : false},
			{"text":"Help View", "correct" : true},
			{"text":"Projection View", "correct" : false},
			{"text":"Database View", "correct" : false},
			{"text":"Table ZTABC", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"A program ZABC_01 calls another program ZABC_02 during its run time using the syntax: SUBMIT program_name AND RETURN. Which of the following options describes this technique?",
		"options": [
			{"text":"The program call is Synchronous and an Insert", "correct" : true},
			{"text":"The program call is Asynchronous and an Insert", "correct" : false},
			{"text":"The program call is Synchronous and a New Start", "correct" : false},
			{"text":"Within the external session, program ZABC_01 replaces its internal session with the internal session of program ZABC_02.", "correct" : false},
			{"text":"Within the external session, program ZABC_01 generates an additional internal session for program ZABC_02 when the call is made.", "correct" : true}
		]
	},
	{
		"section": "ABAP",
		"question":"Which of these calling commands when used will pass the control to the called program and also come back to the calling program if the user presses the BACK button?",
		"options": [
			{"text":"CALL TRANSACTION tcode AND RETURN.", "correct" : false},
			{"text":"CALL TRANSACTION tcode AND SKIP FIRST SCREEN.", "correct" : true},
			{"text":"LEAVE TO TRANSACTION tcode.", "correct" : false},
			{"text":"SUBMIT program_name AND RETURN.", "correct" : true},
			{"text":"SUBMIT program_name VIA SELECTION SCREEN.", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"The SUBMIT command may use which of the given program type in its syntax?",
		"options": [
			{"text":"Include program", "correct" : false},
			{"text":"Executable program", "correct" : true},
			{"text":"Module pool program", "correct" : false},
			{"text":"Function Group", "correct" : false},
			{"text":"Class Pool", "correct" : false}
		]
	},
	{
		"section": "ABAP",
		"question":"Writing ABAP keywords and their additions in uppercase letters or lowercase within the ABAP Editor tool may be automatically generated using the:",
		"options": [
			{"text":"Activate button", "correct" : false},
			{"text":"Syntax Check button", "correct" : false},
			{"text":"Execute button", "correct" : false},
			{"text":"Pattern button", "correct" : false},
			{"text":"Pretty Print button", "correct" : true}
		]
	}
]
