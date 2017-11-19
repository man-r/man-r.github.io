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
	}
]
