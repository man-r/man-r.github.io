var quizlist = [
	{
		"section": "OM",
		"question":"Standard SAP ERP Organizational Management integrates with which of the follwoing areas? (choose 2)",
		"correctAns": 3,
		"options": [
			{"text":"Workflow", "correct" : true},
			{"text":"Plant Maintenance", "correct" : false},
			{"text":"Sales and Distibution", "correct" : false},
			{"text":"Controlling", "correct" : true}
		]
	},
	{
		"section": "OM",
		"question":"You are running a hiring action. Integration is active between Personnel Administration (PA) and Organizational Management (OM). \n As a result fo this integration, which fields on IT0001 Organizational Assignment cannot be maintaned directly",
		"correctAns": 3,
		"options": [
			{"text":"Position", "correct" : false},
			{"text":"Personnel Area", "correct" : false},
			{"text":"Cost Center", "correct" : true},
			{"text":"Job Key", "correct" : true},
			{"text":"Organizational Unit", "correct": true}
		]
	},
	{
		"section": "OM",
		"question":"You want a report that shows the relationship between a legal entity and a person and includes their Organizational unit and position. which evaluation path would return appropriat date using standard relationship",
		"correctAns": 3,
		"options": [
			{"text":"S->P P->OR O->S O->O OR->OR", "correct":false},
			{"text":"P->OR O->S OR->OR O->P O->P", "correct":false},
			{"text":"OR->O O->S S->P O->O OR->OR", "correct" : true},
			{"text":"OR->P P->O O->S O->O OR->OR", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"you need to create a basic Organizational structure for testing purposes \n which interfaces would allow you to create one quickly while displaying it graphically (choose 2)",
		"correctAns": 3,
		"options": [
			{"text":"PO10 (Maintain Organizational Unit", "correct" : false},
			{"text":"PPOM_OLD (Simple Maintenance)", "correct" : true},
			{"text":"PP01 (General - Maintenance object)", "correct" : false},
			{"text":"PPME (Change Matrix Organization)", "correct" : false},
			{"text":"PPSC (Create General structure", "correct" : true}
		]
	},
	{
		"section": "OM",
		"question":"you transferred objects created in Organizational Management into Personnel actions tables using report RHINTE10\n\n which of the follwoing object tables are relevent for integration? (choose 3)",
		"correctAns": 3,
		"options": [
			{"text":"T527X (Organizational Unit", "correct" : true},
			{"text":"T513 (Jobs)", "correct" : true},
			{"text":"CSKS (Cost Center)", "correct" : false},
			{"text":"T528B (Position)", "correct" : true},
			{"text":"T777I (infotypes per object types)", "correct": false}
		]
	},
	{
		"section": "OM",
		"question":"which of the follwoing are standard prerequisites for an employee to use the Manages Self Service (choose 3)",
		"correctAns": 3,
		"options": [
			{"text":"The Organizational structure has been developed for the company", "correct" : true},
			{"text":"the employee is designated as a manager using the Organizational key on IT0001", "correct" : false},
			{"text":"the employee holds the chief position of an Organizational unit", "correct" : true},
			{"text":"the employee has an active user ID assigned in IT0105", "correct" : true},
			{"text":"the employee has authorization to use PA20 to display their employee data", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"which report identifies and creates missing objects relevent for consistent integration between Personnel Administration and Organizational Management?",
		"correctAns": 3,
		"options": [
			{"text":"RHINTECHECK", "correct" : false},
			{"text":"RPUDEL20", "correct" : false},
			{"text":"RHINTE20", "correct" : true},
			{"text":"RPUDELPN", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"you want to structurally display Organizational unit and persons along the Organizational structure\n\nwhich ebaluation path allow you to do this?",
		"correctAns": 3,
		"options": [
			{"text":"O A003 S O B002 P", "correct" : false},
			{"text":"O B003 S S A008 P O B002 O", "correct" : true},
			{"text":"O A008 P", "correct" : false},
			{"text":"O A003 C C A008 P O B002 O", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"which of the follwoing will ensure that position can have only one vacancy infotypes record valid for any given period?",
		"correctAns": 3,
		"options": [
			{"text":"infotypes Maintenance", "correct" : false},
			{"text":"Time Constraint", "correct" : true},
			{"text":"Validdity period", "correct" : false},
			{"text":"object characteristics", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"a customer needs to make significant adjustments to their existing Organizational structure. How would you proceed?",
		"correctAns": 3,
		"options": [
			{"text":"copy the current Organizational plan into a new plan version and make the adjustments", "correct" : true},
			{"text":"create an evaluation path with a new plan version", "correct" : false},
			{"text":"copy the enterprise structure into a new plan version and make the adjustments", "correct" : false},
			{"text":"copy the current active objects into the rejected status and create new objects", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"an employee works on an internal project for one month. For this period, his personal costs must be changed to a diffrent cost center but he must remain assigned to the same position in Organizational Management. what is the recommended approch?",
		"correctAns": 3,
		"options": [
			{"text":"assign a new cost center to the position through IT1001 (relationship)", "correct" : false},
			{"text":"change the cost center in IT0001 (Organizational Assignment", "correct" : false},
			{"text":"Maintain the cost center in IT0027 (cost Distibution)", "correct" : true},
			{"text":"change the cost center in IT1018 (cost Distibution)", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"in which area of the Organization and staffing user interface (transaction PPOME) do you update account features?",
		"correctAns": 3,
		"options": [
			{"text":"in the selection area", "correct" : false},
			{"text":"in the detail area", "correct" : true},
			{"text":"in the overview area", "correct" : false},
			{"text":"in the search area", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"what must you define to create and edit a customer object into the Organization and staffing interface (PPOME)",
		"correctAns": 3,
		"options": [
			{"text":"search node for new object", "correct" : true},
			{"text":"interaction tools", "correct" : true},
			{"text":"Service request(s) with evaluation path", "correct" : false},
			{"text":"column groups with header types", "correct" : false},
			{"text":"Tab page definition", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"you want to repeat the process of finding additional object along the subordinate Organizational structure what would you add to the follwoing evaluation path? O B003 S , S B003 A",
		"correctAns": 3,
		"options": [
			{"text":"O B012 S", "correct" : false},
			{"text":"A A002 O", "correct" : false},
			{"text":"O B002 O", "correct" : true},
			{"text":"O B002 A", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"a customer wants to use relationship to accurately depict their Organizational structure which of the follwoing standard relationship and time Constraint exists between Organizational objects",
		"correctAns": 3,
		"options": [
			{"text":"a position can belong to multiple Organizational units", "correct" : false},
			{"text":"a position can be desciped by multiple Jobs", "correct" : false},
			{"text":"an Organizational units can incorporate multiple Jobs", "correct" : true},
			{"text":"a job can descibe multiple position", "correct" : true}
		]
	},
	{
		"section": "OM",
		"question":"which two switches are mandatory to activate the integration between Personnel Administration and Organizational Management? (choose 2)",
		"correctAns": 3,
		"options": [
			{"text":"PLOGI ORGA", "correct" : true},
			{"text":"PLOGI PLOGI", "correct" : true},
			{"text":"PLOGI EVENB", "correct" : false},
			{"text":"PLOGI EVPAC", "correct" : false},
			{"text":"PLOGI PRELI", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"A customer wants to inprove data accuracy by assigning values in Organizational Management that default into personal Administration. which of the follwoing values can be imported from OM into PA? (choose 3)",
		"correctAns": 3,
		"options": [
			{"text":"weekly working hours on IT0007", "correct" : false},
			{"text":"work schedule rule on IT0007", "correct" : false},
			{"text":"planned compensation on IT0008", "correct" : true},
			{"text":"Cost center on IT0001", "correct" : true},
			{"text":"Employee subgroup on IT0001", "correct" : true}
		]
	},
	{
		"section": "OM",
		"question":"what infotmation does the relationship specification (A/B) provide?",
		"correctAns": 3,
		"options": [
			{"text":"sequance of related object", "correct" : false},
			{"text":"diction of relationship", "correct" : true},
			{"text":"planning status of relationship", "correct" : false},
			{"text":"priority of related object", "correct" : false}
		]
	},
	{
		"section": "OM",
		"question":"you need to evaluate your entire company structure including position and person . however you want to exclude position from output. what evaluation path would you use to do this?",
		"correctAns": 3,
		"options": [
			{"text":"O-S-P SKIP P", "correct" : false},
			{"text":"O-S-P SKIP S", "correct" : true},
			{"text":"O-S-P SKIP O", "correct" : false},
			{"text":"O-P-C SKIP C", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"The SAP ERP Human Capital Management system stores all employee master data in infotype records. What can you use to process infotype records?",
		"correctAns": 3,
		"options": [
			{"text":"Initial entry maintenance", "correct" : false},
			{"text":"Fast entry", "correct" : true},
			{"text":"Overview entry", "correct" : false},
			{"text":"Personnel actions", "correct" : true},
			{"text":"Single screen maintenance", "correct" : true}
		]
	},
	{
		"section": "MD",
		"question":"Which criteria can you use to define limit values to perform a pay scale reclassification in the standard report (RPIPSR00).",
		"correctAns": 3,
		"options": [
			{"text":"Employee’s compa-ratio", "correct" : false},
			{"text":"Time that the employee worked (in hours)", "correct" : true},
			{"text":"Employee’s performance rating", "correct" : false},
			{"text":"Time that the employee spent in a pay scale group or level", "correct" : true},
			{"text":"Employee’s age", "correct" : true}
		]
	},
	{
		"section": "MD",
		"question":"You want to include an employee to a company code in the Enterprise Structure. To which of the following elements would you assign this employee?",
		"correctAns": 3,
		"options": [
			{"text":"Personnel Area", "correct" : true},
			{"text":"Employee Subgroup grouping", "correct" : false},
			{"text":"Employee Group", "correct" : false},
			{"text":"Personnel Subarea grouping", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"Which of the following is a wage type characteristics? ",
		"correctAns": 3,
		"options": [
			{"text":"Evaluation path", "correct" : false},
			{"text":"Counting rule", "correct" : false},
			{"text":"Time constraint", "correct" : false},
			{"text":"Operation indicator", "correct" : true}
		]
	},
	{
		"section": "MD",
		"question":"How can you update the employment status of an employee?",
		"correctAns": 3,
		"options": [
			{"text":"By using the Change Entry/Leaving Date utility in transaction PA30", "correct" : false},
			{"text":"By setting the employee's position to obsolete in PP01", "correct" : false},
			{"text":"By running a personnel action using transaction PA40", "correct" : true},
			{"text":"By using the Change Payroll Status utility in transaction PA30", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"How can you classify employees with different pay and leave policies?",
		"correctAns": 3,
		"options": [
			{"text":"By infotype groups", "correct" : false},
			{"text":"By personnel subareas", "correct" : false},
			{"text":"By employee groups", "correct" : true},
			{"text":"By payroll areas", "correct" : true}
		]
	},
	{
		"section": "MD",
		"question":"During the payroll run, you discover that some employees are missing from the run but no warning or error messages are displayed. Which items would you check to find out why?",
		"correctAns": 3,
		"options": [
			{"text":"Payroll control record for incorrect personnel numbers", "correct" : false},
			{"text":"IT0008 (Basic Pay) for incorrect pay scale type/area assignment", "correct" : false},
			{"text":"IT0001 (Organizational Assignment) for incorrect payroll area assignment", "correct" : true},
			{"text":"IT0000 (Personnel Actions) for incorrect employment status", "correct" : true}
		]
	},
	{
		"section": "MD",
		"question":"What default values can be defined using the TARIF feature?",
		"correctAns": 3,
		"options": [
			{"text":"Pay scale area", "correct" : true},
			{"text":"Pay scale group", "correct" : false},
			{"text":"Pay scale type", "correct" : true},
			{"text":"Pay scale level ", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"What information can you maintain in IT0007 (Planned working time)?",
		"correctAns": 3,
		"options": [
			{"text":"Assignment of public holiday calendar ", "correct" : false},
			{"text":"Dynamic assignment based on clock-in entries", "correct" : false},
			{"text":"Status of employee participation in time evaluation", "correct" : true},
			{"text":"Work schedule rule", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"Which feature should be used to default wage types on IT0008 (Basic Pay)?",
		"correctAns": 3,
		"options": [
			{"text":"TARIF", "correct" : false},
			{"text":"LGMST", "correct" : true},
			{"text":"PINCH", "correct" : false},
			{"text":"ARPBL", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"What information is required to define a screen view for an infotype?",
		"correctAns": 3,
		"options": [
			{"text":"Alternative infotype screen", "correct" : false},
			{"text":"Screen number", "correct" : true},
			{"text":"Variable key", "correct" : false},
			{"text":"Infotype module pool", "correct" : true}
		]
	},
	{
		"section": "MD",
		"question":"Which element of the enterprise structure controls the direct assignment of an employee to a country grouping?",
		"correctAns": 3,
		"options": [
			{"text":"Client", "correct" : false},
			{"text":"Personnel subarea", "correct" : false},
			{"text":"Personnel area", "correct" : true},
			{"text":"Company code", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"The customer does not need all of the infotypes shown in PA30. How do you set up PA30 to only show the infotypes required by the user?",
		"correctAns": 3,
		"options": [
			{"text":"Remove the infotypes from the infotype menu", "correct" : true},
			{"text":"Remove the infotypes by changing the screen header", "correct" : false},
			{"text":"Remove the infotypes from P_ORGIN from the authorization roles of the users", "correct" : false},
			{"text":"Remove the infotypes from the infogroup", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"Your customer has a group of HR administration that do not have access to the Actions infotype (IT0000) but are required to update specific information such as address, e-mail, bank account, and family members How can the administration update this information?",
		"correctAns": 3,
		"options": [
			{"text":"Use Maintain HR Master Data (PA30) to update each infotype", "correct" : true},
			{"text":"Run report RHINTE00 to update the master data records", "correct" : false},
			{"text":"Use Personnel Action (PA40) to display all the infotypes to be updated", "correct" : false},
			{"text":"Use the ad-hoc query report to mass update to the master data records", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"What information is controlled by the user group parameter (UGP)?",
		"correctAns": 3,
		"options": [
			{"text":"nfotype screen layouts", "correct" : true},
			{"text":"Infotype menus", "correct" : false},
			{"text":"Wage types", "correct" : false},
			{"text":"Infogroups", "correct" : false},
			{"text":"Actions menus", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"When a master data record is maintained, which options result in a historical record?",
		"correctAns": 3,
		"options": [
			{"text":"Copy", "correct" : true},
			{"text":"Delimit", "correct" : true},
			{"text":"Delete", "correct" : false},
			{"text":"Changes", "correct" : false}
		]
	},
	{
		"section": "MD",
		"question":"Which processing option results in a historical infotype record being maintained in Personnel Administration?",
		"correctAns": 3,
		"options": [
			{"text":"Delete an existing record", "correct" : false},
			{"text":"Change an existing record", "correct" : false},
			{"text":"Delimit with a new end date", "correct" : true},
			{"text":"Copy with date change", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":".Which items do you define when setting up a default Cross-Application Time sheet(CATS) profile?",
		"correctAns": 3,
		"options": [
			{"text":"Layout of the screen", "correct" : false},
			{"text":"Manager responsible for approving the timesheet", "correct" : true},
			{"text":"Default language for the display of the timesheet", "correct" : false},
			{"text":"Data entry process for the time data", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"Which infotypes must be included in a CATS mini master personnel action?",
		"correctAns": 3,
		"options": [
			{"text":"Basic Pay (IT0008)", "correct" : false},
			{"text":"Organizational Assignment (IT0001)", "correct" : true},
			{"text":"Personal Data (IT0002)", "correct" : true},
			{"text":"Time Recording (IT0050)", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"Which of the following definitions is associated with both employee subgroup and personnel subarea groupings in Time Management?",
		"correctAns": 3,
		"options": [
			{"text":"Public holiday calendar", "correct" : false},
			{"text":"Attendance and absence types", "correct" : false},
			{"text":"Leave type", "correct" : false},
			{"text":"Work schedule", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"When would you use an existing work schedule rule as the basis for a part-time work schedule without additional configuration?",
		"correctAns": 3,
		"options": [
			{"text":"Current schedule.Monday-Thursday (8 hours) and Friday (4 hours) New schedule.Monday - Friday (7.2 hours)", "correct" : false},
			{"text":"Current schedule.Monday-Thursday (10 hours) New schedule.Monday - Thursday (6 hours)", "correct" : true},
			{"text":"Current schedule.Monday-Thursday (9 hours) and Friday (4 hours) New schedule.Monday - Friday (4 hours)", "correct" : false},
			{"text":"Current schedule.Monday - Friday (8 hours) New schedule.Monday, Wednesday, and Friday (8 hours)", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"You have two time administrators. Both use the Time Manager's Workplace. One maintains time entries and runs time evaluation while the other should only maintain time entries. How can you ensure that each time administrator only has access to the functions they require?",
		"correctAns": 3,
		"options": [
			{"text":"Assign the correct profile to each administrator", "correct" : true},
			{"text":"Create different profiles for each one of the time administrators", "correct" : true},
			{"text":"Assign administrators to different administrator groups in table T526", "correct" : false},
			{"text":"Assign different profiles in feature PINCH", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"You need to record an exception to an employee’s planned working time for a one-week period? What is the most efficient way to achieve this?",
		"correctAns": 3,
		"options": [
			{"text":"Create a Substitutions infotype (IT2003)", "correct" : true},
			{"text":"Create an Absences infotype (IT2001)", "correct" : false},
			{"text":"Create a Time Recording information infotype (IT0050)", "correct" : false},
			{"text":"Create a Planned Working Time infotype (IT0007)", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"When an employee enters absence hours in Cross Application Time Sheet (CATS), you need to generate an error message in case of insufficient quota balance. Which of the following steps must be included in the configuration to accomplish this?",
		"correctAns": 3,
		"options": [
			{"text":"CATS data entry profile", "correct" : true},
			{"text":"CATS field validation", "correct" : false},
			{"text":"Absence counting rule", "correct" : true},
			{"text":"Absence Infotype", "correct" : false},
			{"text":"Absence valuation rule", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"A customer needs to assign different public holiday calendars in their work schedule configuration. Where is the public holiday calendar assigned? ",
		"correctAns": 3,
		"options": [
			{"text":"Employee subgroup", "correct" : false},
			{"text":"Public holiday class", "correct" : false},
			{"text":"Organizational unit", "correct" : false},
			{"text":"Personnel subarea", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"Which elements are required in a quota selection rule?",
		"correctAns": 3,
		"options": [
			{"text":"Rounding rule", "correct" : true},
			{"text":"Base entitlement rule", "correct" : true},
			{"text":"Deduction interval", "correct" : false},
			{"text":"Validity interval", "correct" : false},
			{"text":"Reduction rule", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"Where is a counting rule assigned?",
		"correctAns": 3,
		"options": [
			{"text":"In the rounding rule", "correct" : false},
			{"text":"In the conditions for the current day", "correct" : false},
			{"text":"In the quota deduction rule", "correct" : false},
			{"text":"In the attendance/absence type", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"What characteristics are defined for a daily work schedule variant rule?",
		"correctAns": 3,
		"options": [
			{"text":"Day of the week", "correct" : true},
			{"text":"Public holiday class – next day", "correct" : true},
			{"text":"Day type selection", "correct" : false},
			{"text":"Rule number", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"Which of the following definitions are part of the counting rule configuration?",
		"correctAns": 3,
		"options": [
			{"text":"Variants", "correct" : false},
			{"text":"Deduction Rules", "correct" : false},
			{"text":"Base Entitlement", "correct" : true},
			{"text":"Rounding Rules", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"Some of your employees work fewer hours prior to public holidays. What is the most efficient way to ensure that employee time is handed correctly?",
		"correctAns": 3,
		"options": [
			{"text":"Create a daily work schedule variant and assign the work schedule to the employees", "correct" : true},
			{"text":"Create an attendance type to be mass uploaded to the employees records", "correct" : false},
			{"text":"Create a rule in the time evaluation schema", "correct" : false},
			{"text":"Create a substitution infotype to be uploaded to the employees records", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"In a standard system, which infotypes are available to distribute costs in SAP Time Management?",
		"correctAns": 3,
		"options": [
			{"text":"Time Events (IT2011)", "correct" : false},
			{"text":"Timesheet defaults (IT0315)", "correct" : true},
			{"text":"Employee Remuneration (IT2010)", "correct" : true},
			{"text":"Substitutions (IT2003)", "correct" : false},
			{"text":"Cost Assignments (IT0027)", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"Some employees leave early on Fridays and are required to enter their absence time. How can you ensure that quotas are not reduced for these types of absences? ",
		"correctAns": 3,
		"options": [
			{"text":"Set the counting rule conditions to query the period work schedule variant", "correct" : false},
			{"text":"Set the counting rule conditions to full day absences", "correct" : false},
			{"text":"Set the counting rule conditions to query certain days", "correct" : true},
			{"text":"Set the counting rule conditions for partial day absences", "correct" : true}
		]
	},
	{
		"section": "TM",
		"question":"What transactions are available to maintain time infotypes?",
		"correctAns": 3,
		"options": [
			{"text":"List entry", "correct" : true},
			{"text":"Time leveling", "correct" : false},
			{"text":"Single screen", "correct" : true},
			{"text":"Time transfer", "correct" : false},
			{"text":"Fast entry", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"Which element is mandatory in daily work schedule configuration?",
		"correctAns": 3,
		"options": [
			{"text":"Daily work schedule class", "correct" : true},
			{"text":"Daily work schedule selection rule", "correct" : false},
			{"text":"Minimum working time", "correct" : false},
			{"text":"Core times", "correct" : false}
		]
	},
	{
		"section": "TM",
		"question":"How do you designate a worker as part-time?",
		"correctAns": 3,
		"options": [
			{"text":"Modify the existing work schedule rule for full-time employees", "correct" : false},
			{"text":"Update Cap.util.M (capacity utilization level) on infotype IT0008", "correct" : true},
			{"text":"Configure absences to use clock time", "correct" : false},
			{"text":"Configure attendances to use clock time", "correct" : false}
		]
	}
]