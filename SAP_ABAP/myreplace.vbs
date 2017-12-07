Set objFS = CreateObject("Scripting.FileSystemObject")
strFile = "file.txt"
Set objFile = objFS.OpenTextFile(strFile)

Do Until objFile.AtEndOfStream
    strLine = objFile.ReadLine

    If InStr(strLine,"a.") = 1  or InStr(strLine,"b.") = 1  or InStr(strLine,"c.") = 1  or InStr(strLine,"d.") = 1  Then
        WScript.Echo "			{""text"":""" + Mid(strLine,4) + """, ""correct"" : false},"
    ElseIf   InStr(strLine,"e.") = 1 Then
    	WScript.Echo "			{""text"":""" + Mid(strLine,4) + """, ""correct"" : false}"
    	WScript.Echo "		]"
    	WScript.Echo "	},"

    ElseIf  InStr(strLine,"1.") = 1  or InStr(strLine,"2.") = 1  or InStr(strLine,"3.") = 1  or InStr(strLine,"4.") = 1  or InStr(strLine,"5.") = 1  or InStr(strLine,"6.") = 1  or InStr(strLine,"7.") = 1  or InStr(strLine,"8.") = 1  or InStr(strLine,"9.") = 1 Then

    	WScript.Echo "	{"
    	WScript.Echo "		""section"": ""ABAP"","
    	WScript.Echo "		""question"":""" + Mid(strLine,4) + ""","
    	WScript.Echo "		""options"": ["

    ElseIf  InStr(strLine,"10.") = 1  or InStr(strLine,"11.") = 1  or InStr(strLine,"12.") = 1  or InStr(strLine,"13.") = 1  or InStr(strLine,"14.") = 1  or InStr(strLine,"15.") = 1  or InStr(strLine,"16.") = 1  or InStr(strLine,"17.") = 1  or InStr(strLine,"18.") = 1  or InStr(strLine,"19.") = 1  or InStr(strLine,"20.") = 1  or InStr(strLine,"21.") = 1  or InStr(strLine,"22.") = 1  or InStr(strLine,"23.") = 1  or InStr(strLine,"24.") = 1  or InStr(strLine,"25.") = 1  or InStr(strLine,"26.") = 1  or InStr(strLine,"27.") = 1  or InStr(strLine,"28.") = 1  or InStr(strLine,"29.") = 1  or InStr(strLine,"30.") = 1  or InStr(strLine,"31.") = 1  or InStr(strLine,"32.") = 1  or InStr(strLine,"33.") = 1  or InStr(strLine,"34.") = 1  or InStr(strLine,"35.") = 1  or InStr(strLine,"36.") = 1  or InStr(strLine,"37.") = 1  or InStr(strLine,"38.") = 1  or InStr(strLine,"39.") = 1  or InStr(strLine,"40.") = 1  or InStr(strLine,"41.") = 1  or InStr(strLine,"42.") = 1  or InStr(strLine,"43.") = 1  or InStr(strLine,"44.") = 1  or InStr(strLine,"45.") = 1  or InStr(strLine,"46.") = 1  or InStr(strLine,"47.") = 1  or InStr(strLine,"48.") = 1  or InStr(strLine,"49.") = 1  or InStr(strLine,"50.") = 1  or InStr(strLine,"51.") = 1  or InStr(strLine,"52.") = 1  or InStr(strLine,"53.") = 1  or InStr(strLine,"54.") = 1  or InStr(strLine,"55.") = 1  or InStr(strLine,"56.") = 1  or InStr(strLine,"57.") = 1  or InStr(strLine,"58.") = 1  or InStr(strLine,"59.") = 1  or InStr(strLine,"60.") = 1 Then

    	WScript.Echo "	{"
    	WScript.Echo "		""section"": ""ABAP"","
    	WScript.Echo "		""question"":""" + Mid(strLine,5) + ""","
    	WScript.Echo "		""options"": ["
    Else 
    	WScript.Echo strLine
    End If 
    
Loop    
