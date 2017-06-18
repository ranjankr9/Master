Purpose : BAIDU Map Integration source file
============================================

Source Files :
********************************************
1. js/storeLocator.js  
	1.1	What it does : 
		A.	It contains implementation for showing stores, outlets, show rooms and current location on the map. 
		B.	It provides the user with the search capability based on the city, state and postal code.
		C. 	It prompts the user to provide the acceptance towards "Allow/Share Location" on browser.
	1.2 Configuration Required :
		A. Set variable "ak" with the app key obtained after register at baidu.com
		B. If "html/index.html" is converted to dynamic page like jsp, then update the relative location for icons in this file.
		C. Set the Store data information in this file if the store info data is static in nature. Set the data with variable <baiduStoreMapData> present in loadMap method.	
		D. Get the Store data information in this file if the store info data is dynamic in nature and needs to be fetched from server.
		   Uncomment <//storeMapData = getStoreData();> in <loadMap> method and remove hardcoded value stored  with variable <baiduStoreMapData> as of now present in loadMap method.
		   If the response format with Store information retrieved from the server with method <storeMapData = getStoreData();> does not matches with the suggested store info data format,
		   then it would impact a change in businees logic to traverse and populate store information data and populate thenm on the map. 

2. js/converter.js  
	2.1 What it does :
		A. It does the coordinate transformation at the run time while dealing with the current location of the user.
    2.2 Configuration Required : NA
 
3. js/mapIconImages 
	3.1 What it does :
		A.	It contains the images/icons being shown the map.
	    
4. html/Index.html 
	4.1	What it does :
		A.	Provides the UX design for the page containing the map to be shown to the useer on the site.
	4.2 Configuration Required :
		A.	Set "ak" with the app key obtained after register at baidu.com at the place of script src injection for baidu map.
		B. If this "html/index.html" is converted to dynamic page like jsp, then update the relative location for css, js reference location in this file.	
5. css/*.css & css/fonts/* 
	5.1	What it does :
		A.	It contains stylesheet information for the page "html/index.html" page.
		
		