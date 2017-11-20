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
	}
]
